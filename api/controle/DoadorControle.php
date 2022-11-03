<?php

class DoadorControle extends Controle
{
    static function start()
    {
        self::printError(
            "Você não tem permissão",
            []
        );
    }

    static function list()
    {
        self::requireInputs([
            "token" => "informe um token",
            "instituicao_fk" => "informe uma identificação de instituição",
        ]);
        self::privateRouter();
        $instituicao_fk = $_REQUEST['instituicao_fk'];
        $assinatura = new Banco();
        $assinatura->table("assinatura");
        $assinatura->where(["instituicao_fk" => $instituicao_fk]);
        $todasAssinaturas = $assinatura->select();
        $fkAssinantes = array_map(fn ($d) => $d["doador_fk"], $todasAssinaturas);
        $doador = new Doador();
        $todosDoadores = $doador->listAll($instituicao_fk);
        $todosDoadores = array_map(function ($d) use ($fkAssinantes) {
            if (in_array($d["external_fk"], $fkAssinantes)) {
                $d["recorrente"] = true;
            }
            return $d;
        }, $todosDoadores);
        self::printSuccess(
            "Lista de doadores",
            array_reverse($todosDoadores)
        );
    }

    static function info()
    {
        self::requireInputs([
            "token" => "informe um token",
            "instituicao_fk" => "Informe uma identificação de instituição",
            "cpf" => "Informe o CPF"
        ]);
        self::privateRouter();
        $instituicao_fk = $_REQUEST['instituicao_fk'];
        $cpf = $_REQUEST['cpf'];
        $doador = new Doador();
        self::printSuccess(
            "Informação doador",
            $doador->info($cpf, $instituicao_fk)
        );
    }

    static function detalhe()
    {
        self::requireInputs([
            // "token" => "informe um token",
            "fk" => "Informe o identificador"
        ]);
        // self::privateRouter();
        $fk = $_REQUEST['fk'];
        $doador = new Doador();
        $address = new Endereco();
        $asa = new AsaasCliente();
        $company = new Instituicao();
        $payload = $doador->detalhe($fk);
        $instituicao_fk = $payload["instituicao_fk"];
        $api_key = $company->get_key($instituicao_fk);
        $asa->set_api_key($api_key);
        $payload["address"] = $address->get($fk, "ADDRESS_COSTUMER");
        $payload["fk"] = $fk;
        $db = new Banco();
        $db->table("fatura");
        $db->where([
            "doador_fk" => $fk
        ]);
        $db->orderByDesc("data");
        $payload["history"] = array_map(["Fatura", "porter"], $db->select() );
        $resAsa = $asa->getCliente($payload["cpf"]);
        $payload["asa"] = $resAsa["data"][0];
        $payload["subs"] = $asa->subsByCustomer($payload["pagamento_fk"])["data"];
        // $payload["subs"] = array_values( array_filter( $payload["subs"], function($s) use ($payload) { return $s['customer'] == $payload["pagamento_fk"];} ) );
        $payload["payload"] = json_decode( $payload["payload"] ) ?? [];

        $subs_active = array_filter( $payload["subs"], function($s) {
            return $s['status'] == "ACTIVE";
        } );
        $subs_active = array_values($subs_active);
        $payload["recorrente"] = count( $subs_active ) > 0;
        self::printSuccess(
            "Informação doador",
            $payload
        );
    }

    static function note() {
        self::requireInputs([
            "token" => "informe um token",
            "doador_fk" => "Informe um identificador de doador",
            "author_fk" => "Informe um identificador de author",
            "author_name" => "Informe um nome do author",
            "message" => "Informe a mensagem",
        ]);
        self::privateRouter();        
        $doador_fk = $_REQUEST['doador_fk'];
        $author_fk = $_REQUEST['author_fk'];
        $author_name = $_REQUEST['author_name'];
        $message = $_REQUEST['message'];
        $db = new Banco();
        $db->table('doador');
        $db->where([
            "external_fk" => $doador_fk
        ]);
        $doador = $db->select()[0] ?? [];
        $notes = $doador["payload"] ?? "{}";
        $notes = json_decode( $notes, true );
        $notes["notes"] = $notes["notes"] ?? [];        
        $notes["notes"][] = [
            "author_fk" => $author_fk,
            "author_name" => $author_name,
            "message" => $message,
            "date" => date('d/m/Y'),
        ];
        $db->where([
            "external_fk" => $doador_fk
        ]);
        $db->update([
            "payload" => json_encode($notes),
        ]);
        self::printSuccess(
            "Anotação adicionada",
            []
        );        
    }

    static function update() {
        self::requireInputs([
            "token" => "informe um token",
            "instituicao_fk" => "Informe uma instituição",
            "external_fk" => "Informe o identificado do doador",
            "nome" => "Informe o nome",
            "cpf" => "Informe o cpf",
            "telefone" => "Informe um telefone",
            "email" => "Informe o email",
            "cep" => "Informe o cep",
            "logadouro" => "Informe o endereço ",
            "numero" => "Informe o número ",
            "bairro" => "Informe o bairro ",
            "cidade" => "Informe a cidade ",
            "estado" => "Informe o estado ",
            "customer_id" => "Informe o identificador do costumer",
        ]);
        self::privateRouter();

        $instituicao_fk = $_REQUEST['instituicao_fk'];
        $external_fk = $_REQUEST['external_fk'];
        $nome = $_REQUEST['nome'];
        $cpf = $_REQUEST['cpf'];
        $telefone = $_REQUEST['telefone'];
        $email = $_REQUEST['email'];
        $cep = $_REQUEST['cep'];
        $logadouro = $_REQUEST['logadouro'];
        $numero = $_REQUEST['numero'];
        $complemento = $_REQUEST['complemento'] ?? "";
        $bairro = $_REQUEST['bairro'];
        $cidade = $_REQUEST['cidade'];
        $estado = $_REQUEST['estado'];
        $customer_id = $_REQUEST['customer_id'];

        $inst = new Instituicao();
        $asa_cliente = new AsaasCliente();
        $doador = new Banco();
        $doador->table("doador");
        $address = new Banco();
        $address->table("endereco");

        $key_asa = $inst->get_key($instituicao_fk);
        $asa_cliente->set_api_key($key_asa);
        $rest = $asa_cliente->updateCostumer(
            $customer_id,
            $nome,
            $email,
            $telefone,
            $cpf,
            $cep,
            $logadouro,
            $numero,
            $complemento,
            $cidade,
            $external_fk           
        );

        $doador->where([
            "external_fk" => $external_fk
        ]);
        $doador->update([
            "nome" => $nome,
            "cpf" => $cpf,
            "telefone" => $telefone,
            "email" => $email,
        ]);
        
        $address->where([
            "fk" => $external_fk
        ]);
        $address->update([
            "cep" => $cep,
            "logadouro" => $logadouro,
            "numero" => $numero,
            "complemento" => $complemento,
            "bairro" => $bairro,
            "cidade" => $cidade,
            "estado" => $estado,
        ]);
        
        self::printSuccess(
            "Atualizado com sucesso",
            $rest
        );      
    }


}
