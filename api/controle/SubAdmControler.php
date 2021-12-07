<?php
class SubAdmControler
{
    static function start()
    {
        echo json_encode([
            "next" => false,
            "message" => "Você não tem permissão"
        ]);
    }

    static function criar_subadm()
    {
        $adm = new Adm();
        $subadm = new SubAdm();
        $jwt = new Jwt();
        $token = $_REQUEST['token'];
        $nome = $_REQUEST['nome'];
        $email = $_REQUEST['email'];
        $senha = $_REQUEST['senha'];
        $secret = $_REQUEST['secret'];
        $telefone = $_REQUEST['telefone'];
        $credencial_id = null;
        $campos_obrigatorios = [
            'token',
            'cep',
            'logradouro',
            'bairro',
            'cidade',
            'estado',
            'numero'
        ];
        $lb = [
            'token' => 'Informe o Token',
            'cep' => 'Informe um CEP',
            'logadouro' => 'Digite um endereço',
            'bairro' => 'digite o Bairro',
            'cidade' => 'Informe a Cidade',
            'estado' => 'Informe o estado',
            'numero' => 'Digite o numero'
        ];
        foreach ($campos_obrigatorios as $campo) {
            if (empty($_REQUEST[$campo])) {
                echo json_encode([
                    'next' => false,
                    'message' => $lb[$campo]
                ]);
                return null;
            }
        }
    }

}
