<?php

class InstituicaoControle extends Controle
{

    static function plansDefault(): array
    {
        return [25, 50, 100, 200, 500, 1000];
    }

    static function tagEmail(): array
    {
        return [
            "{LINK}",
            "{NOME}",
        ];
    }

    static function start()
    {
        self::printError(
            "Você não tem permissão",
            []
        );
    }

    static function statusPayment(): array
    {
        return [
            "PENDING",
            "RECEIVED",
            "CONFIRMED",
            "OVERDUE",
            "REFUNDED",
            "RECEIVED_IN_CASH",
            "REFUND_REQUESTED",
            "CHARGEBACK_REQUESTED",
            "CHARGEBACK_DISPUTE",
            "AWAITING_CHARGEBACK_REVERSAL",
            "DUNNING_REQUESTED",
            "DUNNING_RECEIVED",
            "AWAITING_RISK_ANALYSIS",
        ];
    }

    static function register()
    {
        self::requireInputs([
            "token" => "informe um token",
            "nome" => "Informe nome",
            "cpfCnpj" => "Informe um CPF ou CNPJ",
            "email" => "Informe um email",
            "telefone" => "Informe um telefone",
            "subdomain" => "Informe um subdomain",
            "tipoEmpresa" => "Informe tipo de empresa",
            "cep" => "Informe o CEP",
            "logradouro" => "Informe o endereço",
            "numero" => "Informe o numero",
            "bairro" => "Informe o bairro",
            "cidade" => "Informe a cidade",
            "estado" => "Informe o estado",
            "adm_fk" => "Informe quem é o adm",
            "account" => "Informe o numero conta",
            "accountDigit" => "Informe o digito da conta",
            "accountName" => "Informe o nome do banco",
            "agency" => "Informe o numero da agencia",
            "bank" => "Informe numero do banco",
            "bankAccountType" => "Informe o tipo da conta",

        ]);

        self::privateRouter();

        $nome = $_REQUEST['nome'];
        $cpfCnpj = $_REQUEST['cpfCnpj'];
        $email = $_REQUEST['email'];
        $telefone = $_REQUEST['telefone'];
        $subdomain = $_REQUEST['subdomain'];
        $logo = "logo.png";
        $icon = "logo.png";
        $cor = "#777";
        $titulo = $_REQUEST['nome'];
        $tags = "site, doação, igreja";
        $descricao = "Um site sem fim lucrativos";
        $tipoEmpresa = $_REQUEST['tipoEmpresa'];
        $cep = $_REQUEST['cep'];
        $logradouro = $_REQUEST['logradouro'];
        $numero = $_REQUEST['numero'];
        $complemento = $_REQUEST['complemento'] ?? '';
        $bairro = $_REQUEST['bairro'];
        $cidade = $_REQUEST['cidade'];
        $estado = $_REQUEST['estado'];
        $adm_fk = $_REQUEST['adm_fk'];

        $account = $_REQUEST["account"];
        $accountDigit = $_REQUEST["accountDigit"];
        $accountName = $_REQUEST["accountName"];
        $agency = $_REQUEST["agency"];
        $bank = $_REQUEST["bank"];
        $bankAccountType = $_REQUEST["bankAccountType"];

        $company = new Instituicao();
        $conta = new AsaasConta();
        $address = new Endereco();
        $env = require __DIR__ . "/../config.php";

        $conta->set_api_key($env["api_key"]);
        $existSubdomain = $company->existSubdomain($subdomain);

        if ($existSubdomain) {
            self::printError(
                "Subdomain esta indisponível",
                []
            );
        }

        $resConta = $conta->registerCarteira(
            $nome,
            $email,
            $cpfCnpj,
            $tipoEmpresa,
            $telefone,
            $telefone,
            $logradouro,
            $numero,
            $complemento,
            $bairro,
            $cep,
            $account,
            $accountDigit,
            $accountName,
            $agency,
            $bank,
            $bankAccountType
        );

        if (!empty($resConta['errors'])) {
            self::printError(
                $resConta['errors'][0]["description"],
                $resConta['errors']
            );
        }

        $ID = $resConta['id'];
        $walletId = $resConta['walletId'];
        $apiKey = $resConta['apiKey'];
        $institution_fk = $company->maker_fk();

        $company->register(
            $adm_fk,
            $ID,
            $institution_fk,
            $apiKey,
            $nome,
            $cpfCnpj,
            $email,
            $telefone,
            $subdomain,
            $logo,
            $cor,
            $account,
            $accountDigit,
            $accountName,
            $agency,
            $bank,
            $bankAccountType
        );

        $address->save(
            $institution_fk,
            'INSTITUTION',
            $cep,
            $logradouro,
            $numero,
            $complemento,
            $bairro,
            $cidade,
            $estado
        );

        $plan = new Plano();

        foreach (self::plansDefault() as $valor) {
            $plan->register(
                $institution_fk,
                $valor,
                "",
                0,
                0,
                0,
                0
            );
        }

        $split = new Split();
        $split->register(
            $institution_fk,
            $env['split'],
            $env['split_porcentagem']
        );

        $meta = new Metas();
        $meta->save(
            $institution_fk,
            date('Y'),
            100,
            100,
            100,
            100,
            100,
            100,
            100,
            100,
            100,
            100,
            100,
            100
        );

        $smtp =  new Smtp();
        $smtp->save(
            $institution_fk,
            $env["email_host"],
            $env["email_protocolo"],
            $env["email_port"],
            $env["email_user"],
            $env["email_pass"]
        );

        $inter =  new Integration();
        $inter->save(
            $institution_fk,
            "EVENDAS",
            $env["evendas"]
        );

        $conta->set_api_key($apiKey);
        $conta->chavePix();
        $conta->registerWebHook();
        EmailTemplate::maker($institution_fk);
        self::printSuccess(
            "Instituição Cadastrada com sucesso",
            $resConta
        );
    }

    static function update()
    {
        self::requireInputs([
            "token" => "informe um token",
            "institution_fk" => "informe o identificador da instituição",
            "nome" => "Informe nome",
            "email" => "Informe um email",
            "telefone" => "Informe um telefone",
            "cep" => "Informe o CEP",
            "logradouro" => "Informe o endereço",
            "numero" => "Informe o numero",
            "bairro" => "Informe o bairro",
            "cidade" => "Informe a cidade",
            "estado" => "Informe o estado",
            "logo" => "Informe logo",
            "icon" => "Informe ícone",
            "cor" => "Informe a cor",
            "titulo" => "Informe o titulo",
            "tags" => "Informe a tag",
            "descricao" => "Informe uma descrição",
        ]);

        self::privateRouter();
        $institution_fk = $_REQUEST['institution_fk'];
        $nome = $_REQUEST['nome'];
        $email = $_REQUEST['email'];
        $telefone = $_REQUEST['telefone'];
        $domain = $_REQUEST['domain'] ?? '';
        $logo = $_REQUEST['logo'];
        $icon = $_REQUEST['icon'];
        $cor = $_REQUEST['cor'];
        $titulo = $_REQUEST['titulo'];
        $tags = $_REQUEST['tags'];
        $descricao = $_REQUEST['descricao'];
        $cep = $_REQUEST['cep'];
        $logradouro = $_REQUEST['logradouro'];
        $numero = $_REQUEST['numero'];
        $complemento = $_REQUEST['complemento'] ?? '';
        $bairro = $_REQUEST['bairro'];
        $cidade = $_REQUEST['cidade'];
        $estado = $_REQUEST['estado'];

        $company = new Instituicao();
        $address = new Endereco();

        $inst = $company->info($institution_fk);
        if (!$inst['institution_fk']) {
            self::printError(
                "Instituição não existe",
                []
            );
        }

        $company->update(
            $institution_fk,
            $nome,
            $email,
            $telefone,
            $domain,
            $logo,
            $icon,
            $cor,
            $titulo,
            $tags,
            $descricao
        );

        $address->save(
            $institution_fk,
            'INSTITUTION',
            $cep,
            $logradouro,
            $numero,
            $complemento,
            $bairro,
            $cidade,
            $estado
        );

        self::printSuccess(
            "Instituição atualizada com sucesso",
            []
        );
    }

    static function info()
    {
        self::requireInputs([
            "domain" => "Informe um domain"
        ]);
        $banco = new Banco();
        $domain = $_REQUEST["domain"];
        
        $company = $banco->query(
            "SELECT * FROM institution WHERE domain='{$domain}' OR subdomain='{$domain}'"
        )[0] ?? [];
        $company = Instituicao::porter($company);
        $banco->table("endereco");
        $banco->where([
            "fk" => $company["institution_fk"]
        ]);
        $company['endereco'] = Endereco::porter($banco->select()[0] ?? []);
        $banco->table("plano");
        $banco->where([
            "fk" => $company["institution_fk"]
        ]);
        $company['planos'] = array_map(['Plano', 'porter'], $banco->select());
        self::printSuccess(
            "Informações da Instituição",
            $company
        );
    }

    static function list()
    {
        self::requireInputs([
            "token" => "informe um token",
            "adm_fk" => "informe um identificador de adm"
        ]);
        self::privateRouter();
        $con = new Banco();
        $adm_fk = $_REQUEST['adm_fk'];
        $con->table("institution_adm");
        $con->where([
            "adm_fk" => $adm_fk
        ]);
        $list = [];
        foreach ($con->select() as $inst) {
            $instituition_fk = $inst['instituition_fk'];
            $con->table("institution");
            $con->where([
                "institution_fk" => $instituition_fk,
            ]);
            $list[] = Instituicao::porter($con->select()[0] ?? []);
        }
        self::printSuccess(
            "lista de instituição",
            $list
        );
    }

    static function balance()
    {
        self::requireInputs([
            "token" => "informe um token",
            "institution_fk" => "informe um identificador de Instituição"
        ]);
        self::privateRouter();
        $institution_fk = $_REQUEST['institution_fk'];
        $company = new Instituicao();
        $asa = new AsaasConta();
        $carteira_fk  = $company->get_key($institution_fk);        
        $asa->set_api_key($carteira_fk);
        $statistic = $asa->statistic();
        self::printSuccess(
            "Saldo da Conta",
            [
                "balance" => $asa->balance(),
                "statistic" => $statistic,
                "extrato" => $asa->extrato()
            ]
        );
    }

    static function donation() {
        self::requireInputs([
            "token" => "informe um token",
            "institution_fk" => "informe o identificador da instituição",
        ]);
        self::privateRouter();
        $assinatura = new Banco();
        $assinatura->table("assinatura");
        $assinantes = $assinatura->select();
        $assinantes = array_map( fn($doador) => $doador["doador_fk"], $assinantes );
        $institution_fk =  $_REQUEST["institution_fk"];
        $fatura = new Fatura();
        $faturas = $fatura->listAll($institution_fk);
        $faturas = array_map(function($charge) use ($assinantes) {
            $charge["recorrente"] = in_array($charge["doador_fk"], $assinantes);
            return $charge;
        }, $faturas);
        self::printSuccess(
            "Lista de doações",
            $faturas
        );
    }
}
