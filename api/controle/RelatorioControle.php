<?php

class RelatorioControle extends Controle
{
    static function start()
    {
        self::requireInputs([
            // "token" => "informe um token",
            "institution_fk" => "informe o identificador da instituição",
        ]);

        // self::privateRouter();

        $fk = $_REQUEST["institution_fk"];
        @$ano = $_REQUEST["ano"] ?? date('Y');

        $relatorio = new Relatorio();

        $inst = self::inst($fk);
        $donations = self::allDonation($fk);
        $metas = self::allMetas($fk, $ano);

        $donations = array_map(['Fatura', 'porter'], $donations);
        $metas = array_map(['Metas', 'porter'], $metas);
        $inst = Instituicao::porter($inst);
        $previsto = self::previsto($donations);
        $donations = array_filter($donations, function ($d) use ($ano) {
            $data = strtotime($d["dataCreated"]);
            $hoje = strtotime(date('Y-m-d'));
            $ano_ = substr($d["dataCreated"], 0, 4 );
            return $data <= $hoje and $ano == $ano_ ;
        });
        $donations = array_values($donations);
        $invoicesByDoador = self::groupDoador($donations);

        self::printSuccess(
            "Relatório",
            [
                "faturamento" => self::faturamento($donations, $metas),
                "formaPagamento" => self::formaPagamento($donations),
                "quantPlanos" => self::quantPlanos($donations, $fk),
                "status" => self::status($donations),
                "adimplente" => self::adimplente($invoicesByDoador),
                "inadimplente" => self::inadimplente($invoicesByDoador),
                "normal" => count($invoicesByDoador) - (self::inadimplente($invoicesByDoador) + self::adimplente($invoicesByDoador)),
                "previsto" =>  $previsto,
                "totalDoadores" => count($invoicesByDoador),
                "donationByDay" => self::donationByDay($donations),
                "totalGeral" => self::totalGeral($donations),
                "totalPagos" => self::totalStatus($donations, ['RECEIVED','CONFIRMED'] ),
                "totalAberto" => self::totalStatus($donations, ['PENDING'] ),
                "totalACancelado" => self::totalStatus($donations, ['OVERDUE'] ),
                "allDoador" => self::all_doadores($fk, $donations),

            ]
        );
    }

    static function totalStatus($donations, $status = [])
    {
        $list = array_filter($donations, function ($d) use ($status) {
            return in_array($d['status_pagamento'], $status);
        });
        return self::totalGeral($list);
    }

    static function totalGeral($donations)
    {
        $boleto = array_filter($donations, function ($d) {
            return $d['tipo_pagamento'] == 'BOLETO';
        });
        $pix = array_filter($donations, function ($d) {
            return $d['tipo_pagamento'] == 'PIX';
        });
        $card = array_filter($donations, function ($d) {
            return $d['tipo_pagamento'] == 'CREDIT_CARD';
        });
        return [
            "total" => self::somaAll($donations),
            "PIX" => self::somaAll($pix),
            "BOLETO" => self::somaAll($boleto),
            "CREDIT_CARD" => self::somaAll($card),
        ];
    }

    static function somaAll($donations)
    {
        return array_reduce($donations, function ($acc, $d) {
            $acc = $acc + $d["valor"];
            return $acc;
        }, 0);
    }

    static function donationByDay($donations)
    {
        $mes = [
            "01" => 31,
            "02" => 28,
            "03" => 31,
            "04" => 30,
            "05" => 31,
            "06" => 30,
            "07" => 31,
            "08" => 31,
            "09" => 30,
            "10" => 31,
            "11" => 30,
            "12" => 31,
        ];
        $mes = array_map(function ($num) {
            $data = [];
            for ($d = 1; $d <= $num; $d++) {
                $data[$d] = 0;
            }
            return $data;
        }, $mes);
        foreach ($donations as $do) {
            $date = explode("-", $do["dataCreated"]);
            $m = $date[1];
            $d = $date[2] + 0;
            @$mes[$m][$d] += 1;
        }
        return [
            "label" => array_keys($mes[date('m')]),
            "value" => array_values($mes[date('m')]),
        ];
    }

    static function previsto($donations)
    {
        $donations = array_filter($donations, function ($d) {
            $data = strtotime($d["dataCreated"]);
            $hoje = strtotime(date('Y-m-d'));
            return $data > $hoje;
        });
        $donations = array_filter($donations, function ($d) {
            return $d["status_pagamento"] == "PENDING";
        });
        $donations = array_values($donations);
        $donations = array_reduce($donations, function ($acc, $d) {
            $acc = $acc + $d["valor"];
            return $acc;
        }, 0);
        return $donations;
    }

    static function inadimplente($invoices)
    {
        $statusCount = array_map(function ($status) {
            return array_count_values($status);
        }, $invoices);
        $statusCount = array_map(function ($status) {
            return array_keys($status);
        }, $statusCount);
        $statusCount = array_filter($statusCount, function ($status) {
            return in_array('OVERDUE', $status);
        });
        $statusCount = array_filter($statusCount, function ($status) {
            return count($status) == 1;
        });
        return count($statusCount);
    }

    static function adimplente($invoices)
    {
        $doadores = array_filter($invoices, function ($status) {
            return !in_array('OVERDUE', $status);
        });
        return count($doadores);
    }

    static function groupDoador($donations)
    {
        $doadores = [];

        foreach ($donations as $d) {
            @$doadores[$d["doador_fk"]][] = $d["status_pagamento"];
        }

        return $doadores;
    }

    static function quantPlanos($donations, $fk)
    {
        $db = new Banco();
        $db->table('plano');
        $db->where([
            "fk" => $fk,
        ]);
        $allPlanos = $db->select();
        $planos = array_map(function ($p) {
            return $p['price'];
        }, $allPlanos);
        $data = [];
        foreach ($planos as $planoDefault) {
            $data[$planoDefault] = 0;
        }
        $outros = 0;
        foreach ($donations as $d) {
            $valor = $d['valor'];
            if (in_array($valor, $planos)) {
                @$data[$d['valor']] += 1;
            } else {
                @$outros += 1;
            }
        }
        ksort($data);
        $data['Outros'] = $outros;
        return [
            "quant" => array_values($data),
            "valor" => array_keys($data),
        ];
    }

    static function status($donations)
    {

        $data = [
            "pago" => 0,
            "vencido" => 0,
            "aberto" => 0,
        ];

        foreach ($donations as $d) {
            if ($d['status_pagamento'] == 'RECEIVED' || $d['status_pagamento'] == 'CONFIRMED') {
                $data['pago'] += 1;
            }
            if ($d['status_pagamento'] == 'OVERDUE') {
                $data['vencido'] += 1;
            }
            if ($d['status_pagamento'] == 'PENDING') {
                $data['aberto'] += 1;
            }
        }

        return $data;
    }

    static function formaPagamento($donations)
    {
        $data = [
            "PIX" => 0,
            "BOLETO" => 0,
            "CREDIT_CARD" => 0,
        ];
        foreach ($donations as $d) {
            $data[$d['tipo_pagamento']] += 1;
        }
        return $data;
    }

    static function faturamento($donations, $metas)
    {
        $data = [];
        $metas = array_values($metas[0]);
        unset($metas[0]);
        $metas = array_values($metas);
        $data["metas"] = $metas;
        $data["total"] = [];
        $data["total_pago"] = [];
        $data["total_aberto"] = [];
        for ($ic = 1; $ic < 13; $ic++) {
            $pad = str_pad($ic, 2, 0, STR_PAD_LEFT);
            $data["total"][$pad] = 0;
            $data["total_pago"][$pad] = 0;
            $data["total_aberto"][$pad] = 0;
        }

        foreach ($donations as $d) {
            $mes = substr($d["dataCreated"], 5, 2);
            $data["total"][$mes] += $d["valor"];
            if ($d['status_pagamento'] == 'RECEIVED' || $d['status_pagamento'] == 'CONFIRMED') {
                $data["total_pago"][$mes] += $d["valor"];
            } else {
                $data["total_aberto"][$mes] += $d["valor"];
            }
        }

        $data["total"] = array_values($data["total"]);
        $data["total_pago"] = array_values($data["total_pago"]);
        $data["total_aberto"] = array_values($data["total_aberto"]);

        return $data;
    }

    static function inst($fk)
    {
        $db_inst = new Banco();
        $db_inst->table('institution');
        $db_inst->where([
            "institution_fk" => $fk
        ]);
        return $db_inst->select()[0] ?? [];
    }

    static function allDonation($fk)
    {
        $db_inst = new Banco();
        $db_inst->table('fatura');
        $db_inst->where([
            "instituicao_fk" => $fk
        ]);
        return $db_inst->select();
    }

    static function allMetas($fk, $ano)
    {
        $db_inst = new Banco();
        $db_inst->table('meta');
        $db_inst->where([
            "instituicao_fk" => $fk,
            "ano" => $ano
        ]);
        return $db_inst->select();
    }

    static function all_doadores($fk, $donations)
    {
        $do = new Banco();
        $do->table('doador');
        $do->where([
            "instituicao_fk" => $fk
        ]);
        $do->orderByAsc('registro');
        $porter = array_map(['Doador', 'porter'], $do->select());

        $listHash = array_reduce($donations, function ($acc, $d) {
            $acc[$d["doador_fk"] . ":" . $d["dataCreated"]] = $d;
            return $acc;
        }, []);

        $listHashAlter = array_reduce($donations, function ($acc, $d) {
            $acc[$d["doador_fk"]] = $d;
            return $acc;
        }, []);

        $porter = array_map(function ($e) use ($listHash, $listHashAlter) {
            @$donation = $listHash[$e["external_fk"] . ':' . $e['registro']] ?? [];
            @$donationAlter = $listHashAlter[$e["external_fk"]] ?? [];

            @$tipo_pagamento = $donation["tipo_pagamento"] ?? $donationAlter["tipo_pagamento"] ?? null;
            @$recorrente = $donation["recorrente"] ?? $donationAlter["recorrente"] ?? null;
            @$status_pagamento = $donation["status_pagamento"] ?? $donationAlter["status_pagamento"] ?? null;
            @$valor = $donation["valor"] ?? $donationAlter["valor"] ?? null;

            return [
                "external_fk" => $e["external_fk"],
                "nome" => $e["nome"],
                "email" => $e["email"],
                "cpf" => $e["cpf"],
                "telefone" => $e["telefone"],
                "dataPrimeiraDoacao" => $e["registro"],
                "tipo" => $tipo_pagamento,
                "price" => $valor,
                "status" => $status_pagamento,
                "recorrente" => $recorrente,
            ];
        }, $porter);

        return $porter;
    }
}
