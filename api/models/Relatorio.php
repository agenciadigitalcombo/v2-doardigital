<?php

class Relatorio
{
    public $adm_id;
    public $instituicao_id;
    public $instituicaos_ids;
    public $doacao_tipo;
    public $doacao_data;
    public $doacao_status;

    public function total(array $doacoes): int
    {
        return array_reduce($doacoes, function ($acc, $doacao) {
            $valor = intval($doacao['valor']);
            $acc = $valor + $acc;
            return $acc;
        }, 0);
    }

    public function filter_tipo(array $doacoes, string $tipo): array
    {
        return array_filter($doacoes, function ($doacao) use ($tipo) {
            $isTipo = $doacao['tipo_pagamento'];
            return $isTipo == $tipo;
        });
    }

    public function filter_status(array $doacoes, string $status_pagamento, $frequencia = ''): array
    {
        return array_filter($doacoes, function ($doacao) use ($status_pagamento, $frequencia) {
            $isStatus = $doacao['status_pagamento'];
            if (!empty($frequencia)) {
                $frequencia = $frequencia == "unico" ? 0 : 1;
                return $isStatus == $status_pagamento && $doacao['recorrente'] == $frequencia;
            }
            return $isStatus == $status_pagamento;
        });
    }

    public function filter_instituicao(array $doacoes, string $instituicao_id): array
    {
        return array_filter($doacoes, function ($doacao) use ($instituicao_id) {
            $isInstituicao = $doacao['instituicao_id'];
            return $isInstituicao == $instituicao_id;
        });
    }

    public function filter_doador_recorrente( array $doacoes ) {
        $all = array_filter($doacoes, function($d) {
            return $d['recorrente'] == 1;
        });
        $all = array_map( function( $d ) { return $d['doador_fk']; }, $all );
        return array_values(array_unique($all , SORT_REGULAR));
    }
    
    public function filter_doador_novos( array $doacoes ) {
        $all = array_filter($doacoes, function($d) {
            return strtotime($d['data']) >=  strtotime('-30 days', strtotime(date('Y-m-d')));
        });
        $all = array_map( function( $d ) { return $d['doador_fk']; }, $all );
        return array_values(array_unique($all , SORT_REGULAR));
    }

    public function instituicoes_ids(array $doacoes): array
    {
        $filter = array_map(function ($data) {
            return ($data['instituicao_fk']);
        }, $doacoes);
        return array_values(array_unique($filter, SORT_REGULAR));
    }

    public function doadores_ids(array $doacoes): array
    {
        $filter = array_map(function ($data) {
            return intval($data['doador_fk']);
        }, $doacoes);
        return array_values(array_unique($filter, SORT_REGULAR));
    }

    public function by_data(array $doacoes): array
    {
        return array_reduce($doacoes, function ($acc, $d) {
            $day = $d['data'];
            if (empty($acc[$day])) {
                $acc[$day] = [
                    "quantidade" => 0,
                    "total" => 0,
                    "media" => 0,
                ];
            }
            $acc[$day]['quantidade'] += 1;
            $acc[$day]['total'] += intval($d['valor']);
            $media = $acc[$day]['total'] ? $acc[$day]['total'] / $acc[$day]['quantidade'] : 0;
            $acc[$day]['media'] += $media;
            return $acc;
        }, []);
    }

    public function by_mes(array $doacoes): array
    {
        return array_reduce($doacoes, function ($acc, $d) {
            $mes = substr($d['data'], 5, 2);
            if (empty($acc[$mes])) {
                $acc[$mes] = [
                    "quantidade" => 0,
                    "total" => 0,
                    "media" => 0,
                ];
            }
            $acc[$mes]['quantidade'] += 1;
            $acc[$mes]['total'] += intval($d['valor']);
            $media = $acc[$mes]['total'] ? $acc[$mes]['total'] / $acc[$mes]['quantidade'] : 0;
            $acc[$mes]['media'] += $media;
            return $acc;
        }, []);
    }

    public function by_ano(array $doacoes): array
    {
        return array_reduce($doacoes, function ($acc, $d) {
            $ano = substr($d['data'], 0, 4);
            if (empty($acc[$ano])) {
                $acc[$ano] = [
                    "quantidade" => 0,
                    "total" => 0,
                    "media" => 0,
                ];
            }
            $acc[$ano]['quantidade'] += 1;
            $acc[$ano]['total'] += intval($d['valor']);
            $media = $acc[$ano]['total'] ? $acc[$ano]['total'] / $acc[$ano]['quantidade'] : 0;
            $acc[$ano]['media'] += $media;
            return $acc;
        }, []);
    }


    static function teste($doacoes, $all_metas)
    {
        $rel = new Relatorio();

        $total = $rel->total($doacoes);
        $total_doacoes_cartao = $rel->filter_tipo($doacoes, 'credit_card');
        $total_doacoes_boleto = $rel->filter_tipo($doacoes, 'boleto');
        $total_doacoes_pix = $rel->filter_tipo($doacoes, 'PIX');

        $total_paid = $rel->filter_status($doacoes, 'paid');
        $total_doacoes_cartao_paid = $rel->filter_status($total_doacoes_cartao, 'paid');
        $total_doacoes_boleto_paid = $rel->filter_status($total_doacoes_boleto, 'paid');
        $total_doacoes_pix_paid = $rel->filter_status($total_doacoes_pix, 'paid');

        $total_waiting_payment = $rel->filter_status($doacoes, 'waiting_payment');
        $total_doacoes_cartao_waiting_payment = $rel->filter_status($total_doacoes_cartao, 'waiting_payment');
        $total_doacoes_boleto_waiting_payment = $rel->filter_status($total_doacoes_boleto, 'waiting_payment');
        $total_doacoes_pix_waiting_payment = $rel->filter_status($total_doacoes_pix, 'waiting_payment');

        $payload = [];

        $payload['next'] = true;
        $payload['message'] = "Relatório";
        $payload['dados']['metas'] = $all_metas;
        $payload['dados']['ids'] = [
            "instituicao" => $rel->instituicoes_ids($doacoes),
            "doador" => $rel->doadores_ids($doacoes)
        ];

        $total_doadores = count($rel->doadores_ids($doacoes));
        $total_doadores_recorrente = count( $rel->filter_doador_recorrente($doacoes));
        $novos_doadores = count($rel->filter_doador_novos($doacoes));

        $payload['dados']["doadores"] = [
            "quantidade" => [
                "total" => $total_doadores,
                "recorrente" => $total_doadores_recorrente,
                "unicos" => $total_doadores - $total_doadores_recorrente
            ],
            "ticket_medio" => $total / (count($rel->doadores_ids($doacoes))),
            "cadastrado_nos_ultimos_30_dias" => $novos_doadores

        ];

        $tipos = ['CREDIT_CARD', 'PIX', 'BOLETO'];
        foreach ($tipos as $key) {
            $all_by_type = $rel->filter_tipo($doacoes, $key);
            $payload['dados'][$key]["quantidade"] = count($all_by_type);
            $payload['dados'][$key]["total"] = $rel->total($all_by_type);

            $status_pagar_me = [
                "processing",
                "authorized",
                "paid",
                "refunded",
                "waiting_payment",
                "pending_refund",
                "refused",
                "chargedback"
            ];

            foreach ($status_pagar_me as $status_pagamento) {
                foreach (["unico", "recorrente"] as $frequencia) {
                    $quantidade = count($rel->filter_status($all_by_type, $status_pagamento, $frequencia));
                    $total = $rel->total($rel->filter_status($all_by_type, $status_pagamento, $frequencia));
                    $media = $total ? $total / $quantidade : 0;
                    $payload['dados'][$key][$frequencia][$status_pagamento] = [
                        "quantidade" => $quantidade,
                        "total" => $total,
                        "media" => $media,
                        "por_data" => $rel->by_data($all_by_type),
                        "por_mes" => $rel->by_mes($all_by_type),
                        "por_ano" => $rel->by_ano($all_by_type)
                    ];
                }
            }
        }

        return $payload;
    }
}
