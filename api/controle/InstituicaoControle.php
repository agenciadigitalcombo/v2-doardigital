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
        $instituicao = new Instituicao();
        $banco_cont = new ContaBanc();
        $endereco = new Endereco();
        $adm = new Adm();
        $assas_instituicao = new PagarmeInstituicao();
        $assas_instituicao->set_api_key("18e834381bb3da3f16589539a13076a8ef475d159b2b5131d692d1ca2992efbb");

        $token_parce = token();

        campo_obrigatorios([
            'nome_fantasia' => 'Informe um Nome Fantasia',
            'razao_social' => 'Qual a RazaoSocial',
            'subdomaim' => 'Informe o Sub Domain',
            'email' => 'Qual o Email',
            'telefone' => 'Digite o numero de Telefone',
            'cnpj' => 'Informe o Cnpj',
            'cep' => 'Informe um CEP',
            'logradouro' => 'Digite um endereço',
            'bairro' => 'digite o Bairro',
            'cidade' => 'Informe a Cidade',
            'estado' => 'Informe o estado',
            'numero' => 'Digite o numero'
        ]);

        $nome_fantasia = $_REQUEST['nome_fantasia'] ?? '';
        $razao_social = $_REQUEST['razao_social'] ?? '';
        $sub_domain = $_REQUEST['subdomaim'] ?? '';

        $email = $_REQUEST['email'];

        $cor = $_REQUEST['cor'] ?? '';
        $logo = $_REQUEST['logo'] ?? '';

        $cnpj = $_REQUEST['cnpj'] ?? '';
        $transform_cnpj = withdraw_caracter($cnpj);

        $telefone = $_REQUEST['telefone'] ?? '';
        $transform_tel = withdraw_caracter($telefone);

        $companyType = $_REQUEST['tipo_empresa'];


        $logradouro = $_REQUEST['logradouro'] ?? '';
        $complemento = $_REQUEST['complemento'] ?? null;
        $bairro = $_REQUEST['bairro'] ?? '';
        $cidade = $_REQUEST['cidade'] ?? '';
        $estado = $_REQUEST['estado'] ?? '';

        $numero = $_REQUEST['numero'] ?? '';
        $cep = $_REQUEST['cep'] ?? '';

        $transform_numero = withdraw_caracter($numero);
        $transform_cep = withdraw_caracter($cep);



        valid_subdomain($sub_domain);


        $secret = $token_parce['secret'];
        $guard_adm = $adm->list_profile($secret);
        $adm_id = $guard_adm['id'];

        // $get_instituicao = $instituicao->list_all_by_adm_id($adm_id);
        // $instituicao_id = $get_instituicao['id'];



        // $get_banc_id = $banco_cont->get_by_adm_id($adm_id);
        // $banc_id = $get_banc_id['id'];


        if ($instituicao->exist_subdomain($sub_domain)) {
            echo json_encode([
                "next" => false,
                "message" => "Subdomínio já em uso"
            ]);
            return null;
        }

        if (strlen($transform_cnpj) != 14) {
            $companyType = "";
        }

        if ($instituicao->exist_email($email)) {
            echo json_encode([
                'next' => false,
                'message' => 'Email Já cadastrado!'
            ]);
            return null;
        }

        $res_assas = $assas_instituicao->create_instituicao(
            $nome_fantasia,
            $email,
            $transform_cnpj,
            $companyType,
            $transform_tel,
            $transform_tel,
            $logradouro,
            $numero,
            $complemento,
            $bairro,
            $transform_cep
        );


        $instituicao->create($adm_id, $nome_fantasia, $razao_social, $sub_domain, $email, $transform_cnpj, $transform_tel, $res_assas['walletId'], $res_assas['apiKey'], "#FFF", "");

        $list_instituicao = $instituicao->get_by_subdomaim($sub_domain);



        $endereco->create($list_instituicao['id'], "", $transform_cep, $logradouro, $transform_numero, $complemento, $bairro, $cidade, $estado);




        echo json_encode([
            'next' => true,
            'message' => 'Instituicao criada',
            'params' => [
                'nome_fantasia',
                'razao_social',
                'subdomaim',
                'email',
                'telefone',
                'cnpj',
                'cep',
                'logradouro',
                'bairro',
                'cidade',
                'estado',
                'numero',
                'tipo_empresa'
            ],
            'links' => [['rel' => 'GET', 'href' => 'http://doardigital.com.br/api/instituicao']]
        ]);
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
