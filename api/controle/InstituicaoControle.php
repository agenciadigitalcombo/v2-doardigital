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
        $subdomain = $_REQUEST['subdomain'] . '.doardigital.com.br';
        $logo = "logo.png";
        $icon = "logo.png";
        $cor = "#777";
        $titulo = $_REQUEST['nome'];
        $tags = "site, doação, igreja";
        $descricao = "Um site sem fim lucrativos";
        $tipoEmpresa = $_REQUEST['tipoEmpresa'] ?? "";
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
        $tags = $_REQUEST['tags'] ?? '';
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
            "SELECT * FROM institution WHERE domain='{$domain}' OR subdomain='{$domain}' OR institution_fk='{$domain}'"
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

        $banco->table("split");
        $banco->where([
            "fk" => $company["institution_fk"]
        ]);
        $company["split"] = Split::porter($banco->select()[0] ?? []);

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
        foreach ($con->select() ?? [] as $inst) {
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

    static function donation()
    {
        self::requireInputs([
            "token" => "informe um token",
            "institution_fk" => "informe o identificador da instituição",
        ]);
        self::privateRouter();
        $assinatura = new Banco();
        $assinatura->table("assinatura");
        $assinantes = $assinatura->select();
        $assinantes = array_map(fn ($doador) => $doador["doador_fk"], $assinantes);
        $institution_fk =  $_REQUEST["institution_fk"];
        $fatura = new Fatura();
        $faturas = $fatura->listAll($institution_fk);
           
        $group = array_reduce( $faturas, function($acc, $t) {
            @$acc[$t['doador_fk']][] = $t['fatura_id'];
            return $acc;
        }, [] );

        $primeiraDonation = array_map(function($list) {
            return array_reverse($list)[0];
        }, $group );

        $ass = new Banco();
        $ass->table('assinatura');
        $assAll = $ass->select();
      
        $assByRef = array_reduce($assAll, function ($acc, $a) {
            $acc[$a['external_fk']] = $a['subscription_fk'];
            return $acc;
        }, []);

        $doador = new Banco();
        $doador->table('doador');
        $allDoador = $doador->select();
        $allCpf = array_reduce($allDoador, function ($acc, $d) {
            $acc[$d['external_fk']] = $d['cpf'];
            return $acc;
        }, []);

        $allFk = array_reduce($allDoador, function ($acc, $d) {
            $acc[$d['external_fk']] = $d['pagamento_fk'];
            return $acc;
        }, []);

        $faturas = array_map(function ($charge) use ($assinantes, $allCpf, $allFk, $assByRef, $primeiraDonation) {
            $charge["isRecorrente"] = $charge["recorrente"];
            $charge["recorrente"] = in_array($charge["doador_fk"], $assinantes);
            $charge["cpf"] = $allCpf[$charge["doador_fk"]];
            @$charge["assinatura_fk"] = $assByRef[$charge["external_fk"]] ?? null;
            $charge["pagamento_fk"] = $allFk[$charge["doador_fk"]];
            $charge['primeiraDonation'] = $primeiraDonation[$charge["doador_fk"]] == $charge["fatura_id"] ? 1 : 0;
            return $charge;
        }, $faturas);

        self::printSuccess(
            "Lista de doações",
            $faturas
        );
    }

    static function setAdm()
    {
        self::requireInputs([
            "token" => "informe um token",
            "institution_fk" => "informe uma Instituição",
            "adm_fk" => "informe uma identificador de adm",
        ]);
        self::privateRouter();
        $institution_fk = $_REQUEST['institution_fk'];
        $adm_fk = $_REQUEST['adm_fk'];
        $action = $_REQUEST['action'] ?? 0;
        $action = !!$action;
        $inst = new Instituicao();
        if ($action) {
            $inst->setAdm($institution_fk, $adm_fk);
        } else {
            $inst->delAdm($institution_fk, $adm_fk);
        }
        self::printSuccess(
            "Atualizado com sucesso",
            [
                "action" => $action
            ]
        );
    }

    static function saque()
    {
        self::requireInputs([
            "token" => "informe um token",
            "institution_fk" => "informe uma Instituição",
            "valor" => "informe um valor",
        ]);
        self::privateRouter();
        $institution_fk = $_REQUEST['institution_fk'];
        $taxa_transference = 5;
        $valor = $_REQUEST["valor"];
        $valor = str_replace([".", ","], ["", "."], $valor);
        $valor = +$valor - $taxa_transference;
        $env = require __DIR__ . "/../config.php";
        $walletId = $env["split"];

        $company = new Instituicao();
        $conta = new AsaasConta();
        $institution = $company->info($institution_fk);
        $apiKey = $company->get_key($institution_fk);
        $conta->set_api_key($apiKey);

        $accountName = $institution["accountName"];
        $thirdPartyAccount = true;
        $bank = $institution["bank"];
        $agency = $institution["agency"];
        $account = $institution["account"];
        $accountDigit = $institution["accountDigit"];
        $bankAccountType = $institution["bankAccountType"];
        $name = $institution["nome"];
        $cpfCnpj = $institution["cpfCnpj"];
        $responsiblePhone = $institution["telefone"];
        $responsibleEmail = $institution["email"];

        // $resSaque = $conta->saque(
        //     $accountName,
        //     $thirdPartyAccount,
        //     $bank,
        //     $agency,
        //     $account,
        //     $accountDigit,
        //     $bankAccountType,
        //     $name,
        //     $cpfCnpj,
        //     $responsiblePhone,
        //     $responsibleEmail
        // );


        $banks = $conta->getBank();
        $bankAccountInfoId = $banks["data"][0]["bankAccountInfoId"] ?? null;
        if (!$bankAccountInfoId) {
            self::printError(
                "Instituição não possuem conta",
                []
            );
        }

        $resSaque = $conta->saqueByBankId(
            $bankAccountInfoId,
            $valor
        );

        $resTaxa = $conta->transferir(
            $taxa_transference,
            $walletId
        );

        self::printSuccess(
            "Solicitação feita com sucesso",
            [
                "bankAccountInfoId" => $bankAccountInfoId,
                "institution_fk" => $institution_fk,
                "valor" => $valor,
                "apiKey" => $apiKey,
                "walletId" => $walletId,
                "institution" => $institution,
                "resSaque" => $resSaque,
                "resTaxa" => $resTaxa,
                "banks" => $banks,
            ]
        );
    }

    static function cancel()
    {

        self::requireInputs([
            "token" => "informe um token",
            "institution_fk" => "informe uma Instituição",
            "sub_fk" => "Informe a subscrição",
        ]);
        self::privateRouter();
        include __DIR__ . "/../webHookTemplateEmail.php";
        $institution_fk = $_REQUEST["institution_fk"];
        $sub_fk = $_REQUEST["sub_fk"];
        $inst = new Instituicao();
        $asa_cliente = new AsaasCliente();
        $doador = new Doador();
        $integrate = new Integration();

        $sub = new Banco();
        $sub->table('assinatura');
        $sub->where([
            "subscription_fk" => $sub_fk
        ]);
        $subscription = $sub->select()[0];
        $external_fk = $subscription["external_fk"];

        $invoice = new Banco();
        $invoice->table('fatura');
        $invoice->where([
            "external_fk" => $external_fk,
            "status_pagamento" => "PENDING"
        ]);
        $listInvoice = $invoice->select();
        $defaultInvoice = $listInvoice[0];
        unset($listInvoice[0]);
        $listInvoice = array_values($listInvoice);
        foreach ($listInvoice as $i) {
            $invoice->where([
                "id" => $i["id"],
            ]);
            $invoice->delete();
        }

        $key_asa = $inst->get_key($institution_fk);
        $asa_cliente->set_api_key($key_asa);
        $res_asa = $asa_cliente->cancel($sub_fk);

        $Fila = new FilaAws();
        $texto = "
            Olá {NOME} paz e bem! 
            <br> <br>
            Estamos passando para avisar que sua doação mensal acabou de ser cancelada definitivamente.
            <br> <br>
            Caso queira voltar a nos ajudar, agora precisa fazer uma nova doação.
            <br> <br>
            Pedimos perdão pelas falhas que tivemos nesse meio tempo pois estamos buscando melhorar a cada dia.
            <br> <br>
            Gratidão pelo tempo que você esteve conosco.
            <br> <br>
            Deus te abençoe poderosamente!
        ";

        $template = get_template('default');
        $template = str_replace("{my_content}", $texto, $template);

        $fatura = $defaultInvoice;
        $company = $inst->info($institution_fk);
        $contribuidor = $doador->detalhe($fatura['doador_fk']);
        $evendas = $integrate->info($institution_fk, 'EVENDAS');
        

        $payload = [
            "instituicao" => $company,
            "nome" => $contribuidor["nome"] ?? "",
            "email" => $contribuidor["email"] ?? "",
            "telefone" => substr($contribuidor["telefone"], 2, 20),
            "valor" => $fatura["valor"] ?? "",
            "status_payment" => 'CANCEL_ASSINATURA',
            "type_payment" => $fatura["status_pagamento"],
            "url" => $fatura["url"],
            "code" => $fatura["codigo"],
            "ddd" => substr($contribuidor["telefone"], 0, 2),
            "boleto_url" => $fatura["url"],
            "url_pix" => $fatura["codigo"],
            "code_boleto" => $fatura["codigo"],
            "logradouro" => $company["nome"] ??  "",
            "token" => $evendas['key_1'],
            "external_id" => $fatura["external_fk"],
        ];

        $content = (array)$payload;

        foreach ($content as $index => $cont) {
            if (is_array($cont)) {
                foreach ($cont as $k => $v) {
                    $content["{$index}_{$k}"] = $v;
                }
            }
        }

        $blade = blade($content, $template);

        $sender = $company["mailActive"] == "1" ? $company["mailSender"] : "contato@doardigital.com.br";

        $Fila->send([
            "email" => $defaultInvoice['doador_email'],
            "sender" => $sender,
            "dataDeEnvio" => date('Y-m-d') . "T" . date('H:i:s') . '.600-03:00',
            "htmlContent" => base64_encode($blade),
            "subject" => 'Seu cancelamento foi realizado com sucesso'
        ], 'EMAIL');

   
        $payload["email"] = $defaultInvoice['doador_email'];
        $payload["sender"] = $sender;
        $payload["dataDeEnvio"] = date('Y-m-d') . "T" . date('H:i:s') . '.600-03:00';
        $payload["htmlContent"] = base64_encode($blade);
        $payload["subject"] = 'Seu cancelamento foi realizado com sucesso';
        $payload["transacao"] = intval((time() / 50) + rand(1, 99));
        $payload["data"] = date('Y-m-d H:i:s');
        $Fila->send($payload , 'WHATS');

        self::printSuccess(
            "Cancelado com sucesso",
            $res_asa
        );
    }

    static function subUpdate()
    {

        self::requireInputs([
            "token" => "informe um token",
            "institution_fk" => "informe uma Instituição",
            "sub_fk" => "Informe a subscrição",
            "value" => "Informe o valor",
            "billingType" => "Informe um tipo",
            "nextDueDate" => "Informe uma data",
        ]);
        self::privateRouter();

        $institution_fk = $_REQUEST["institution_fk"];
        $sub_fk = $_REQUEST["sub_fk"];
        $value = $_REQUEST["value"];
        $nextDueDate = $_REQUEST["nextDueDate"];
        $tipo = $_REQUEST["billingType"];

        $inst = new Instituicao();
        $asa_cliente = new AsaasCliente();

        $key_asa = $inst->get_key($institution_fk);
        $asa_cliente->set_api_key($key_asa);
        $res_asa = $asa_cliente->updateSubscription(
            $sub_fk,
            $tipo,
            $value,
            $nextDueDate
        );

        self::printSuccess(
            "Atualizado com sucesso",
            $res_asa
        );
    }

    static function faturaUpdate()
    {

        self::requireInputs([
            "token" => "informe um token",
            "institution_fk" => "informe uma Instituição",
            "fatura_fk" => "Informe a subscrição",
            "value" => "Informe o valor",
            "billingType" => "Informe um tipo",
            "dueDate" => "Informe uma data",
            "customer" => "Informe o identificador de doador",
        ]);
        self::privateRouter();

        $institution_fk = $_REQUEST["institution_fk"];
        $fatura_fk = $_REQUEST["fatura_fk"];
        $value = $_REQUEST["value"];
        $dueDate = $_REQUEST["dueDate"];
        $tipo = $_REQUEST["billingType"];
        $customer = $_REQUEST["customer"];

        $inst = new Instituicao();
        $asa_cliente = new AsaasCliente();

        $key_asa = $inst->get_key($institution_fk);
        $asa_cliente->set_api_key($key_asa);
        $res_asa = $asa_cliente->updateFatura(
            $fatura_fk,
            $tipo,
            $value,
            $dueDate,
            $customer
        );

        self::printSuccess(
            "Atualizado com sucesso",
            $res_asa
        );
    }
}
