<?php

class AwsControle extends Controle
{
    static function start()
    {
        self::printError(
            "Você não tem permissão",
            []
        );
    }

    static function cadastroEmail()
    {
        self::requireInputs([
            "token" => "informe um token",
            "institution_fk" => "informe uma identificação de instituição",
            "email" => "informe uma email",
        ]);
        self::privateRouter();

        $EMAIL = $_REQUEST["email"];
        $institution_fk = $_REQUEST['institution_fk'];

        $db = new Banco();
        $db->table('institution');
        $db->where([
            "institution_fk" => $institution_fk
        ]);
        $db->update([
            "mailSender" => $EMAIL,
            "mailActive" => 1,
        ]);
        
        $aws = new Aws();
        $path = "https://r3nmn03mmk.execute-api.us-east-1.amazonaws.com/default/VerificarIdentidadeEmail";
        $aws->post($path, [
            "EMAIL" => $EMAIL
        ]);

        self::printSuccess(
            "Email Registrado com sucesso, favor clicar no link de confirmação enviado por email",
            []
        );
    }

    static function removerEmail()
    {
        self::requireInputs([
            "token" => "informe um token",
            "institution_fk" => "informe uma identificação de instituição",
            "email" => "informe uma email",
        ]);
        self::privateRouter();

        $EMAIL = $_REQUEST["email"];
        $institution_fk = $_REQUEST['institution_fk'];

        $db = new Banco();
        $db->table('institution');
        $db->where([
            "institution_fk" => $institution_fk
        ]);
        $db->update([
            "mailSender" => "",
            "mailActive" => 0,
        ]);
        
        $aws = new Aws();
        $path = "https://cjylc0fag4.execute-api.us-east-1.amazonaws.com/default/ApagarIdentidadeEmail";
        $aws->post($path, [
            "EMAIL" => $EMAIL
        ]);

        self::printSuccess(
            "Email removido com sucesso",
            []
        );
    }
    
    static function statusEmail()
    {
        self::requireInputs([
            "token" => "informe um token",
            "email" => "informe uma email",
        ]);
        self::privateRouter();

        $EMAIL = $_REQUEST["email"];
        
        $aws = new Aws();
        $path = "https://znz4okv2u2.execute-api.us-east-1.amazonaws.com/default/ListarIdentidadesSES";
        $response = $aws->post($path, [
            "EMAIL" => $EMAIL
        ]);

        self::printSuccess(
            "Status Email",
            $response
        );
    }
}
