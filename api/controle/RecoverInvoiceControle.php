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
            $intervaloMaxEmMinutos = 120;
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

    static function info()
    {
        self::requireInputs([
            "protocolo" => "Informe a instituição",
        ]);
        $protocoloSelect = self::getRecover();
        if ($protocoloSelect['finalizado'] == 1) {
            $protocoloSelect = self::registerNewProtocolo();
        }
        self::printSuccess(
            "Informações",
            $protocoloSelect
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
        return  $dbNew->select()[0] ?? null;
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
}
