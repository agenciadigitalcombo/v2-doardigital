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

        $relatorio = new Relatorio();

        $inst = self::inst($fk);
        $donations = self::allDonation($fk);
        $metas = self::allMetas($fk);

        $donations = array_map([ 'Fatura', 'porter' ], $donations);
        $metas = array_map(['Metas','porter'], $metas);
        $inst = Instituicao::porter($inst);
        $previsto = self::previsto($donations);
        $donations = array_filter($donations, function($d) {
            $data = strtotime( $d["dataCreated"] );
            $hoje = strtotime( date('Y-m-d') );
            return $data <= $hoje;
        });
        $donations = array_values($donations);
        $invoicesByDoador = self::groupDoador($donations);

        self::printSuccess(
            "Relatório",
            [                
                "faturamento" => self::faturamento($donations, $metas),
                "formaPagamento" => self::formaPagamento($donations),
                "quantPlanos" => self::quantPlanos($donations),
                "status" => self::status($donations),
                "adimplente" => self::adimplente($invoicesByDoador),
                "inadimplente" => self::inadimplente($invoicesByDoador),
                "normal" => count($invoicesByDoador) - (self::inadimplente($invoicesByDoador) + self::adimplente($invoicesByDoador)),
                "previsto" =>  $previsto,
                "totalDoadores" => count($invoicesByDoador),
            ]
        );
    }

    static function previsto($donations) {
        $donations = array_filter($donations, function($d) {
            $data = strtotime( $d["dataCreated"] );
            $hoje = strtotime( date('Y-m-d') );
            return $data > $hoje;
        });
        $donations = array_filter($donations, function($d) {
            return $d["status_pagamento"] == "PENDING";
        });
        $donations = array_values($donations);
        $donations = array_reduce($donations, function($acc, $d) {
            $acc = $acc + $d["valor"];
            return $acc;
        }, 0);
        return $donations;
    }

    static function inadimplente($invoices) {       
        $statusCount = array_map(function($status) {
            return array_count_values($status);
        }, $invoices);
        $statusCount = array_map(function($status) {
            return array_keys($status);
        }, $statusCount);
        $statusCount = array_filter($statusCount, function($status) {
            return in_array('OVERDUE', $status );
        });
        $statusCount = array_filter($statusCount, function($status) {
            return count($status) == 1;
        });        
        return count( $statusCount );
    }
    
    static function adimplente($invoices) {
        $doadores = array_filter($invoices, function($status) {
            return !in_array('OVERDUE', $status );
        });
        return count($doadores);
    }

    static function groupDoador($donations) {
        $doadores = [];

        foreach($donations as $d) {
            @$doadores[$d["doador_fk"]][] = $d["status_pagamento"];
        }

        return $doadores;
    }

    static function quantPlanos($donations) {
        
        $data = [];
        foreach($donations as $d) {
            @$data[$d['valor']] += 1;
        }
        ksort($data);
        return [
            "quant" => array_values($data),
            "valor" => array_keys($data),
        ];
    }     
    
    static function status($donations) {
        
        $data = [
            "pago" => 0,
            "vencido" => 0,
            "aberto" => 0,
        ];
        
        foreach($donations as $d) {
            if($d['status_pagamento']=='RECEIVED' || $d['status_pagamento']=='CONFIRMED' ){           
                $data['pago'] += 1;
            }
            if($d['status_pagamento']=='OVERDUE' ){           
                $data['vencido'] += 1;
            }
            if($d['status_pagamento']=='PENDING' ){           
                $data['aberto'] += 1;
            }
        }
        
        return $data;
    }    
    
    static function formaPagamento($donations) {
        $data = [
            "PIX" => 0,
            "BOLETO" => 0,
            "CREDIT_CARD" => 0,
        ];
        foreach($donations as $d) {
            $data[$d['tipo_pagamento']] += 1;
        }
        return $data;
    }

    static function faturamento($donations, $metas) {
        $data = [];        
        $metas = array_values($metas[0]);
        unset($metas[0]);
        $metas = array_values($metas);
        $data["metas"] = $metas;
        $data["total"] = [];
        $data["total_pago"] = [];
        $data["total_aberto"] = [];
        for( $ic = 1; $ic < 13; $ic++ ) {
            $pad = str_pad($ic, 2, 0, STR_PAD_LEFT);
            $data["total"][$pad] = 0;
            $data["total_pago"][$pad] = 0;
            $data["total_aberto"][$pad] = 0;            
        }
        
        foreach( $donations as $d ) {            
            $mes = substr($d["dataCreated"],5,2);
            $data["total"][$mes] += $d["valor"];
            if($d['status_pagamento']=='RECEIVED' || $d['status_pagamento']=='CONFIRMED' ){
                $data["total_pago"][$mes] += $d["valor"];                
            }else{
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

    static function allMetas($fk)
    {
        $db_inst = new Banco();
        $db_inst->table('meta');
        $db_inst->where([
            "instituicao_fk" => $fk,
            "ano" => "2022"
        ]);
        return $db_inst->select();
    }
}
