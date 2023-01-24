<?php

class RecoverInvoiceControle extends Controle
{
    static function start()
    {
        self::printError(
            "Você não tem permissão",
            []
        );
    }
    static function save()
    {
        self::requireInputs([
            "institution_fk" => "Informe a instituição",
            "email" => "Informe seu email",
            "valor" => "Informe um valor",
        ]);
        $protocolo = $_REQUEST['protocolo'] ?? '';
        if (empty($protocolo)) {
            $protocolo = self::registerNewProtocolo();
            self::registerExecArn($protocolo);
        } else {
            $protocoloSelect = self::getRecover();
            if ($protocoloSelect) {
                if ($protocoloSelect['finalizado'] != 1) {
                    self::updateNewProtocolo();
                } else {
                    $protocolo = self::registerNewProtocolo();
                }
            } else {
                $protocolo = self::registerNewProtocolo();
            }
        }
        self::printSuccess(
            "Capturado com sucesso",
            [
                "protocolo" => $protocolo
            ]
        );
    }
    static function finalizar()
    {
        self::requireInputs([
            "protocolo" => "Informe a instituição",
        ]);
        $protocoloId = $_REQUEST['protocolo'] ?? '';
        $protocolo = self::getRecover();
        if ($protocolo) {
            $dbNew = new Banco();
            $dbNew->table('recover');
            $dbNew->where([
                "protocolo" => $protocoloId,
            ]);
            $dataHoraUpdate =  date('Y-m-d H:i:s');
            $recuperado = 0;
            $intervaloMaxEmMinutos = 15;
            $dataHoraRegistroTime = strtotime($protocolo['dataHoraRegistro']);
            $dataHoraUpdateTime = strtotime(date('Y-m-d H:i:s'));
            $calc = date('H:i', $dataHoraRegistroTime - $dataHoraUpdateTime);
            $calc = explode(':', $calc);
            $calc = (intval($calc[0]) * 60) + intval($calc[1]);
            if ($calc > $intervaloMaxEmMinutos) {
                $recuperado = 1;
            }
            $dbNew->update([
                "finalizado" => 1,
                "recuperado" => $recuperado,
                "dataHoraUpdate" =>  $dataHoraUpdate,
            ]);
        }
        self::printSuccess(
            "Finalizado com sucesso",
            []
        );
    }

    static function tplEmailLead($tipo, $instData)
    {
        $path = __DIR__ . "/../email/LEAD/{$tipo}.txt";
        $path_template = __DIR__ . "/../template/DEFAULT.html";
        $html = file_get_contents($path_template);
        $file = file($path);
        $subject = $file[1];
        unset($file[0]);
        unset($file[1]);
        $body = implode('', $file);
        $body = str_replace("\n", "<br><br>", $body);
        $html = str_replace('{my_content}', $body, $html);
        foreach ($instData as $k => $v) {
            $html = str_replace($k, $v, $html);
            $subject = str_replace($k, $v, $subject);
        }
        return [
            "subject" => $subject,
            "body" => base64_encode($html)
        ];
    }

    static function getInfoInst($inst_fk)
    {
        $db = new Banco();
        $db->table('institution');
        $db->where([
            "institution_fk" => $inst_fk
        ]);
        $inst = $db->select()[0];
        $payload = Instituicao::porter($inst);

        $admins = new Banco();
        $admins->table('institution_adm');
        $admins->where([
            "instituition_fk" => $inst_fk,
        ]);
        @$adminFk = $admins->select()[0]['adm_fk'] ?? 'ADM_FAIL';

        $integrate = new Banco();
        $integrate->table('integration');
        $integrate->where([
            "tipo" => "CANAL_WHATS",
            "instituicao_fk" => $adminFk,
        ]);
        @$integrateWhatsBearer = $integrate->select()[0]['key_1'] ?? 'BEARER_NOT';
        $payload["section"] = $adminFk;
        $payload["bearer"] = $integrateWhatsBearer;
        return $payload;
    }

    static function getInfoInstTpl($inst_fk)
    {
        $inst = self::getInfoInst($inst_fk);
        return [
            "{instituicao_logo}" => $inst["logo"],
            "@@body@@" => '',
            "{instituicao_cor}" => $inst["cor"],
            "{INSTITUICAO}" => $inst["nome"],
            "{STYLE_BTN}" => 'style="border-radius: 20px; background-color: green; color: #FFF; display:block; width: 200px; margin: 0 auto; padding: 10px 20px; text-align: center; text-decoration: none;"',
            "{LINK}" => 'https://' . $inst['domain'] . "/doacao-copy/#/?protocolo=" . $_REQUEST['protocolo'],
        ];
    }

    static function tplWhats($tipo)
    {
        $path = __DIR__ . "/../whatsapp/LEAD/{$tipo}.txt";
        $file = file($path);
        unset($file[0]);
        return implode('', $file);
    }

    static function info()
    {
        self::requireInputs([
            "protocolo" => "Informe a instituição",
        ]);
        $protocoloSelect = self::getRecover();
        $payload = self::porter((array) $protocoloSelect);
        $inst_fk = $payload['institution_fk'];
        $instData = self::getInfoInstTpl($inst_fk);
        $payload["institution"] = self::getInfoInst($inst_fk);
        $payload["tpl"] = $instData;
        $payload["messages"] = [
            "email" => [
                "1_DAY" => self::tplEmailLead('1_DAY', $instData),
                "5_DAY" => self::tplEmailLead('5_DAY', $instData),
                "15_MIN" => self::tplEmailLead('15_MIN', $instData),
            ],
            "whats" => [
                "1_DAY" => self::tplWhats('1_DAY'),
                "5_DAY" => self::tplWhats('5_DAY'),
                "15_MIN" => self::tplWhats('15_MIN'),
            ],
        ];
        self::printSuccess(
            "Informações",
            $payload
        );
    }

    static function getRecover()
    {
        $protocolo = $_REQUEST['protocolo'] ?? '';
        $dbNew = new Banco();
        $dbNew->table('recover');
        $dbNew->where([
            "protocolo" => $protocolo,
        ]);
        return  $dbNew->select()[0] ?? [];
    }

    static function registerNewProtocolo()
    {
        $protocolo = $_REQUEST['protocolo'] ?? '';
        $institution_fk = $_REQUEST['institution_fk'] ?? '';
        $email = $_REQUEST['email'] ?? '';
        $valor = $_REQUEST['valor'] ?? '';
        $recorrente = $_REQUEST['recorrente'] ?? 0;
        $protocolo = 'rec_' . sha1(uniqid());
        $dbNew = new Banco();
        $dbNew->table('recover');
        $dbNew->insert([
            "institution_fk" => $institution_fk,
            "protocolo" => $protocolo,
            "email" => $email,
            "valor" => $valor,
            "recorrente" => $recorrente,
            "finalizado" => 0,
            "recuperado" => 0,
            "dataHoraRegistro" => date('Y-m-d H:i:s'),
            "dataHoraUpdate" =>  date('Y-m-d H:i:s'),
        ]);
        return $protocolo;
    }

    static function updateNewProtocolo()
    {
        $protocolo = $_REQUEST['protocolo'] ?? '';
        $nome = $_REQUEST['nome'] ?? '';
        $email = $_REQUEST['email'] ?? '';
        $telefone = $_REQUEST['telefone'] ?? '';
        $cpf = $_REQUEST['cpf'] ?? '';
        $tipo_pagamento = $_REQUEST['tipo_pagamento'] ?? '';
        $valor = $_REQUEST['valor'] ?? '';
        $recorrente = $_REQUEST['recorrente'] ?? 0;
        $dbNew = new Banco();
        $dbNew->table('recover');
        $dbNew->where([
            "protocolo" => $protocolo,
        ]);
        $dbNew->update([
            "email" => $email,
            "valor" => $valor,
            "recorrente" => $recorrente,
            "nome" => $nome,
            "telefone" => $telefone,
            "cpf" => $cpf,
            "tipo_pagamento" => $tipo_pagamento,
            "dataHoraUpdate" =>  date('Y-m-d H:i:s'),
        ]);
        return $protocolo;
    }

    static function registerExecArn($protocolo)
    {
        $institution_fk = $_REQUEST['institution_fk'] ?? '';
        $inst = new Banco();
        $inst->table("institution");
        $inst->where([
            "institution_fk" => $institution_fk,
        ]);
        $company = $inst->select()[0] ?? [];
        $state_machine_lead = $company['state_machine_lead'];
        $data = [
            "protocolo" => $protocolo,
        ];
        $Fila = new FilaAws();
        $Fila->send($data, $state_machine_lead);
    }
    static function porter(array $payload)
    {
        return [
            "protocolo" => $payload["protocolo"] ?? null,
            "finalizado" => $payload["finalizado"] ?? 0,
            "recuperado" => $payload["recuperado"] ?? 0,
            "nome" => $payload["nome"] ?? null,
            "email" => $payload["email"] ?? null,
            "telefone" => $payload["telefone"] ?? null,
            "cpf" => $payload["cpf"] ?? null,
            "tipo_pagamento" => $payload["tipo_pagamento"] ?? null,
            "valor" => $payload["valor"] ?? 0,
            "recorrente" => $payload["recorrente"] ?? 0,
            "dataHoraRegistro" => $payload["dataHoraRegistro"] ?? null,
            "dataHoraUpdate" => $payload["dataHoraUpdate"] ?? null,
            "institution_fk" => $payload["institution_fk"] ?? null,
        ];
    }
}
