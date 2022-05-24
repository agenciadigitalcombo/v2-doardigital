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

        foreach( self::plansDefault() as $valor ) {
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
        self::printSuccess(
            "Instituição Cadastrada com sucesso",
            $resConta
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
            "fk" => $company["institution_fk"],
            "tipo" => "INSTITUTION",
        ]);
        $company['endereco'] = Endereco::porter( $banco->select() );
        $banco->table("plano");
        $banco->where([
            "fk" => $company["institution_fk"]
        ]);
        $company['planos'] = Plano::porter($banco->select());
        self::printSuccess(
            "Informações da Instituição",
            $company
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
        $institution = $company->info($institution_fk);
        $carteira_fk = $institution['carteira_fk'];
        $asa->set_api_key($carteira_fk);
        $statistic = $asa->statistic();
        self::printSuccess(
            "Saldo da Conta",
            [
                "balance" => $asa->balance(),
                "statistic" => $statistic
            ]
        );
    }
}
