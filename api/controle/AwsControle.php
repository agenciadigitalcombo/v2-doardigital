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

    static function createStateMachine()
    {
        self::requireInputs([
            "token" => "informe um token",
            "institution_fk" => "informe uma identificação de instituição",
        ]);
        self::privateRouter();
        $INST = $_REQUEST["institution_fk"];        
        $response = self::createArn($INST);        
        self::printSuccess(
            "Status Email",
            $response
        );
    }

    static function createArn($inst_fk)
    {
        $INST = $inst_fk;
        $aws = new Aws();
        $path = "https://5fdmf9sck5.execute-api.us-east-1.amazonaws.com/dev";
        $body = json_decode(file_get_contents(__DIR__ . "/../stateMachine.json"));
        $body = json_encode($body);        
        $response = $aws->post($path,  [
            "name" => "name-" . $INST,
            "definition" => $body,
            "roleArn" => "arn:aws:iam::348265973939:role/step_functions_basic_execution"
        ]);
        $db = new Banco();
        $db->table('institution');
        $db->where([
            "institution_fk" => $INST
        ]);
        $db->update([
            "state_machine" => $response["stateMachineArn"]
        ]);
        return $response;
    }
    
    static function createArnLead($inst_fk)
    {
        $INST = $inst_fk;
        $aws = new Aws();
        $path = "https://5fdmf9sck5.execute-api.us-east-1.amazonaws.com/dev";
        $body = json_decode(file_get_contents(__DIR__ . "/../stateMachine_lead.json"));
        $body = json_encode($body);        
        $response = $aws->post($path,  [
            "name" => "name-" . $INST . "-lead",
            "definition" => $body,
            "roleArn" => "arn:aws:iam::348265973939:role/step_functions_basic_execution"
        ]);
        $db = new Banco();
        $db->table('institution');
        $db->where([
            "institution_fk" => $INST
        ]);
        $db->update([
            "state_machine_lead" => $response["stateMachineArn"]
        ]);
        return $response;
    } 
    
    static function createArnOverdue($inst_fk)
    {
        $INST = $inst_fk;
        $aws = new Aws();
        $path = "https://5fdmf9sck5.execute-api.us-east-1.amazonaws.com/dev";
        $body = json_decode(file_get_contents(__DIR__ . "/../stateMachine_overdue.json"));
        $body = json_encode($body);        
        $response = $aws->post($path,  [
            "name" => "name-" . $INST . "-overdue",
            "definition" => $body,
            "roleArn" => "arn:aws:iam::348265973939:role/StepFunction-demo-test"
        ]);
        $db = new Banco();
        $db->table('institution');
        $db->where([
            "institution_fk" => $INST
        ]);
        $db->update([
            "state_machine_overdue" => $response["stateMachineArn"]
        ]);
        return $response;
    }

    static function saveMessage()
    {
        self::requireInputs([
            "institution_fk" => "informe uma identificação de instituição",
            "label" => "Informe uma legenda",
            "tipo" => "Informe um tipo de envio",
            "status" => "Informe o status code",
            "doador_fk" => "Informe a identificação de doador",
            "fatura_fk" => "Informe a identificação da fatura",
            "ref_fk" => "Informe a referencia",
            "execution_arn" => "Informe o código de execução ARN",
        ]);

        $label = $_REQUEST['label'];
        $tipo = $_REQUEST['tipo'];
        $status = $_REQUEST['status'];
        $data = date('Y-m-d H:i:s');
        $doador_fk = $_REQUEST['doador_fk'];
        $fatura_fk = $_REQUEST['fatura_fk'];
        $ref_fk = $_REQUEST['ref_fk'];
        $execution_arn = $_REQUEST['execution_arn'];
        $institution_fk = $_REQUEST['institution_fk'];
        @$teste = $_REQUEST['teste'] ?? 0;

        if($status == 400 && $tipo == "WHATS") {
            $db = new Banco();
            $db->table('institution_adm');
            $db->where([
                "instituition_fk" => $institution_fk
            ]);
            $select = $db->select();
            $code_name_session = $select[0]['adm_fk'];
            $db->table('administrador');
            $db->where([
                'code' => $code_name_session
            ]);
            $phone = $select[0]['telefone'];
            $path = "https://zap.digitalcombo.com.br/api/{$code_name_session}/check-connection-session";
            $aws = new Aws();
            $inter =  new Integration();
            $getIntegration = $inter->info($code_name_session, "CANAL_WHATS");
            $tokenWhats = $getIntegration['key_1'];    
            $resStatus = (array) $aws->get(
                $path,
                [],
                ["Authorization: Bearer {$tokenWhats}"]
            );
            $isConnected = (bool) $resStatus['status'];
            $isSend = false;


            if(!$isConnected) {
                if($teste == 1) {
                    if( $getIntegration['key_4'] == 0 ){
                        $intervaloHoras = 4;
                        $getLastUpdate = date( 'H',  strtotime( $getIntegration['key_4'] ));
                        $hourNow = date('H', time());
                        $resultado = $hourNow - $getLastUpdate;
                        if( $resultado > $intervaloHoras) {
                            $isSend = true;
                        }
                    }else {
                        $isSend = true;
                    }
                    if($isSend) {
                        $inter->update(
                            $code_name_session,
                            "CANAL_WHATS_teste",
                            $getIntegration['key_1'],
                            $getIntegration['key_2'],
                            $getIntegration['key_3'],
                            '0',
                            date('Y-m-d H:i:s')
                        );
                        $aws->post(
                            "https://ohfzr5l0i3.execute-api.us-east-1.amazonaws.com/default/Notifica-Zap-Desconectado-DOARDIGITAL",
                            [
                                "phone" => $phone,
                                "message" => "Sua conta WhatsApp esta desconectada da plataforma"
                            ],
                            []
                        );
                    }
                }
            }
            if($isConnected) {
                $status = 403;
            }
        }

        $menAws = new Banco();
        $menAws->table('message_aws');
        $menAws->insert([
            "tipo" => $tipo,
            "status" => $status,
            "data" => $data,
            "doador_fk" => $doador_fk,
            "fatura_fk" => $fatura_fk,
            "ref_fk" => $ref_fk,
            "execution_arn" => $execution_arn,
            "institution_fk" => $institution_fk,
            "label" => $label,
        ]);

        self::printSuccess(
            "Salvo com sucesso",
            []
        );
    }

}
