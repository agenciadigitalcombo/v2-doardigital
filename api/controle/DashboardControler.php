<?php

class DashboardControler{

    static function total_doacoes($instituicao_id): int
    {
        
        $doacoes = new Doacao();

        $list_doacoes = $doacoes->list_all_by_instituicao($instituicao_id);

        $lista_valor = array_map(function ($lista) {
            return $lista['valor'];
        }, $list_doacoes);
        
        $total_valor = count(array_keys($lista_valor));
       
        $total_plano_valor = 0;
        for($i = 0; $i < $total_valor; $i++){
            $total_plano_valor += $lista_valor[$i] ;
        }

        return $total_plano_valor;

    }


    static function media_doacao($instituicao_id): int
    {
        
        $doacoes = new Doacao();

        $list_doacoes = $doacoes->list_all_by_instituicao($instituicao_id);

        $lista_valor = array_map(function ($lista) {
            return $lista['valor'];
        }, $list_doacoes);
        
        $total_valor = count(array_keys($lista_valor));
       
        $total_plano_valor = 0;
        for($i = 0; $i < $total_valor; $i++){
            $total_plano_valor += $lista_valor[$i] ;
        }

        return $total_plano_valor / $total_valor;
    }

    static function total_doacoes_pix($instituicao_id): int
    {
        $doacoes = new Doacao();

        $list_doacoes = $doacoes->list_all_by_instituicao_tipo($instituicao_id, "pix");
        
        $lista_valor = array_map(function ($lista) {
            return $lista['valor'];
        }, $list_doacoes);
        
        $total_valor = count(array_keys($lista_valor));
        
        $total_plano_valor = 0;
        for($i = 0; $i < $total_valor; $i++){
            $total_plano_valor += $lista_valor[$i] ;
        }
        

        return $total_plano_valor;
    }

    static function total_doacoes_boleto($instituicao_id): int
    {
        $doacoes = new Doacao();



        $list_doacoes = $doacoes->list_all_by_instituicao_tipo($instituicao_id, "boleto");
        
        $lista_valor = array_map(function ($lista) {
            return $lista['valor'];
        }, $list_doacoes);
        
        $total_valor = count(array_keys($lista_valor));
        
        $total_plano_valor = 0;
        for($i = 0; $i < $total_valor; $i++){
            $total_plano_valor += $lista_valor[$i] ;
        }
        

        return $total_plano_valor;
    }
    
    static function total_doacoes_cartao($instituicao_id): int
    {
        $doacoes = new Doacao();
        
        
        
        $list_doacoes = $doacoes->list_all_by_instituicao_tipo($instituicao_id, "credit_card");
        
        $lista_valor = array_map(function ($lista) {
            return $lista['valor'];
        }, $list_doacoes);
        
        $total_valor = count(array_keys($lista_valor));
        
        $total_plano_valor = 0;
        for($i = 0; $i < $total_valor; $i++){
            $total_plano_valor += $lista_valor[$i] ;
        }
        
        
        return $total_plano_valor;
    }
    
    static function total_doacoes_concluidas($instituicao_id): int
    {
        $doacoes = new Doacao();
        
        
        $list_doacoes = $doacoes->list_all_by_instituicao_status_pagamento($instituicao_id, "paid");
        

        $lista_valor = array_map(function ($lista) {
            return $lista['valor'];
        }, $list_doacoes);
        
        $total_valor = count(array_keys($lista_valor));
        
        $total_plano_valor = 0;
        for($i = 0; $i < $total_valor; $i++){
            $total_plano_valor += $lista_valor[$i] ;
        }
        
        
        return $total_plano_valor;
    }

    static function total_doacoes_concluidas_cartao($instituicao_id): int
    {
        $doacoes = new Doacao();
        
        
        
        $list_doacoes = $doacoes->list_all_by_instituicao_status_tipo_pagamento($instituicao_id, "credit_card", 'paid');
        
        $lista_valor = array_map(function ($lista) {
            return $lista['valor'];
        }, $list_doacoes);
        
        $total_valor = count(array_keys($lista_valor));
        
        $total_plano_valor = 0;
        for($i = 0; $i < $total_valor; $i++){
            $total_plano_valor += $lista_valor[$i] ;
        }
        
        
        return $total_plano_valor;
    }

    static function total_doacoes_concluidas_boleto($instituicao_id): int
    {
        $doacoes = new Doacao();
        
        
        
        $list_doacoes = $doacoes->list_all_by_instituicao_status_tipo_pagamento($instituicao_id, "boleto", 'paid');
        
        $lista_valor = array_map(function ($lista) {
            return $lista['valor'];
        }, $list_doacoes);
        
        $total_valor = count(array_keys($lista_valor));
        
        $total_plano_valor = 0;
        for($i = 0; $i < $total_valor; $i++){
            $total_plano_valor += $lista_valor[$i] ;
        }
        
        
        return $total_plano_valor;
    }

    static function total_doacoes_concluidas_pix($instituicao_id): int
    {
        $doacoes = new Doacao();
        
        
        
        $list_doacoes = $doacoes->list_all_by_instituicao_status_tipo_pagamento($instituicao_id, "pix", 'paid');
        
        $lista_valor = array_map(function ($lista) {
            return $lista['valor'];
        }, $list_doacoes);
        
        $total_valor = count(array_keys($lista_valor));
        
        $total_plano_valor = 0;
        for($i = 0; $i < $total_valor; $i++){
            $total_plano_valor += $lista_valor[$i] ;
        }
        
        
        return $total_plano_valor;
    }


    static function total_doacoes_pendente_cartao($instituicao_id): int
    {
        $doacoes = new Doacao();
        
        
        
        $list_doacoes = $doacoes->list_all_by_instituicao_status_tipo_pagamento($instituicao_id, "credit_card", 'waiting_payment');
        
        $lista_valor = array_map(function ($lista) {
            return $lista['valor'];
        }, $list_doacoes);
        
        $total_valor = count(array_keys($lista_valor));
        
        $total_plano_valor = 0;
        for($i = 0; $i < $total_valor; $i++){
            $total_plano_valor += $lista_valor[$i] ;
        }
        
        
        return $total_plano_valor;
    }

    static function total_doacoes_pendente_boleto($instituicao_id): int
    {
        $doacoes = new Doacao();
        
        
        
        $list_doacoes = $doacoes->list_all_by_instituicao_status_tipo_pagamento($instituicao_id, "boleto", 'waiting_payment');
        
        $lista_valor = array_map(function ($lista) {
            return $lista['valor'];
        }, $list_doacoes);
        
        $total_valor = count(array_keys($lista_valor));
        
        $total_plano_valor = 0;
        for($i = 0; $i < $total_valor; $i++){
            $total_plano_valor += $lista_valor[$i] ;
        }
        
        
        return $total_plano_valor;
    }

    static function total_doacoes_pendente_pix($instituicao_id): int
    {
        $doacoes = new Doacao();
        
        
        
        $list_doacoes = $doacoes->list_all_by_instituicao_status_tipo_pagamento($instituicao_id, "pix", 'waiting_payment');
        
        $lista_valor = array_map(function ($lista) {
            return $lista['valor'];
        }, $list_doacoes);
        
        $total_valor = count(array_keys($lista_valor));
        
        $total_plano_valor = 0;
        for($i = 0; $i < $total_valor; $i++){
            $total_plano_valor += $lista_valor[$i] ;
        }
        
        
        return $total_plano_valor;
    }

    static function total_doacoes_vencidas_cartao($instituicao_id): int
    {
        $doacoes = new Doacao();
        
        
        
        $list_doacoes = $doacoes->list_all_by_instituicao_status_tipo_pagamento($instituicao_id, "credit_card", 'refused');
        
        $lista_valor = array_map(function ($lista) {
            return $lista['valor'];
        }, $list_doacoes);
        
        $total_valor = count(array_keys($lista_valor));
        
        $total_plano_valor = 0;
        for($i = 0; $i < $total_valor; $i++){
            $total_plano_valor += $lista_valor[$i] ;
        }
        
        
        return $total_plano_valor;
    }

    static function total_doacoes_vencidas_boleto($instituicao_id): int
    {
        $doacoes = new Doacao();
        
        
        
        $list_doacoes = $doacoes->list_all_by_instituicao_status_tipo_pagamento($instituicao_id, "boleto", 'refused');
        
        $lista_valor = array_map(function ($lista) {
            return $lista['valor'];
        }, $list_doacoes);
        
        $total_valor = count(array_keys($lista_valor));
        
        $total_plano_valor = 0;
        for($i = 0; $i < $total_valor; $i++){
            $total_plano_valor += $lista_valor[$i] ;
        }
        
        
        return $total_plano_valor;
    }

    static function total_doacoes_vencidas_pix($instituicao_id): int
    {
        $doacoes = new Doacao();
        
        
        
        $list_doacoes = $doacoes->list_all_by_instituicao_status_tipo_pagamento($instituicao_id, "pix", 'refused');
        
        $lista_valor = array_map(function ($lista) {
            return $lista['valor'];
        }, $list_doacoes);
        
        $total_valor = count(array_keys($lista_valor));
        
        $total_plano_valor = 0;
        for($i = 0; $i < $total_valor; $i++){
            $total_plano_valor += $lista_valor[$i] ;
        }
        
        
        return $total_plano_valor;
    }

    static function total_valores_doacao($instituicao_id): array 
    {


        
        $total_plano_valor = self::total_doacoes($instituicao_id);

        $total_doacoes_pix = self::total_doacoes_pix($instituicao_id);
        
        $total_doacoes_boleto = self::total_doacoes_boleto($instituicao_id);
        
        $total_doacoes_cartao = self::total_doacoes_cartao($instituicao_id);

        $total_doacoes_concluidas = self::total_doacoes_concluidas($instituicao_id);

        $total_doacoes_concluidas_cartao = self::total_doacoes_concluidas_cartao($instituicao_id);

        $total_doacoes_concluidas_boleto = self::total_doacoes_concluidas_boleto($instituicao_id);

        $total_doacoes_concluidas_pix = self::total_doacoes_concluidas_pix($instituicao_id);
        
        $total_doacoes_pendente_cartao = self::total_doacoes_pendente_cartao($instituicao_id);

        $total_doacoes_pendente_boleto = self::total_doacoes_pendente_boleto($instituicao_id);

        $total_doacoes_pendente_pix = self::total_doacoes_pendente_pix($instituicao_id);

        $total_doacoes_vencidas_cartao = self::total_doacoes_vencidas_cartao($instituicao_id);

        $total_doacoes_vencidas_boleto = self::total_doacoes_vencidas_boleto($instituicao_id);

        $total_doacoes_vencidas_pix = self::total_doacoes_vencidas_pix($instituicao_id);
        
        return [
            'total_doados' => [
                'total_doacoes' => $total_plano_valor,
                'total_doacoes_cartao' => $total_doacoes_cartao,
                'total_doacoes_boleto' => $total_doacoes_boleto,
                'total_doacoes_pix' => $total_doacoes_pix
            ],
            'doacoes_concluidas' => [
                'total_doacoes_concluidas' => $total_doacoes_concluidas,
                'total_doacoes_concluidas_cartao' => $total_doacoes_concluidas_cartao,
                'total_doacoes_concluidas_boleto' => $total_doacoes_concluidas_boleto,
                'total_doacoes_concluidas_pix' => $total_doacoes_concluidas_pix,
            ],
            'doacoes_pendente' => [
                'total_doacoes_pendente_cartao' => $total_doacoes_pendente_cartao,
                'total_doacoes_pendente_boleto' => $total_doacoes_pendente_boleto,
                'total_doacoes_pendente_pix' => $total_doacoes_pendente_pix,
            ],
            'doacoes_vencidas' => [
                'total_doacoes_vencidas_cartao' => $total_doacoes_vencidas_cartao,
                'total_doacoes_vencidas_boleto' => $total_doacoes_vencidas_boleto,
                'total_doacoes_vencidas_pix' => $total_doacoes_vencidas_pix
                ]
            ];
            
            
        } 
        
        
    static function total_doadores($instituicao_id): int
    {
        $doacoes = new Doacao();
        
        $list_doacoes = $doacoes->list_all_by_instituicao($instituicao_id);
        
        $total_valor = count(array_keys($list_doacoes));
        
        return $total_valor;
        
    }
    
    static function total_doadores_novos($data_registro): int
    {
        $doador = new Doador();

        $list_doador = $doador->list_all_data_registro($data_registro);

        $total_valor = count(array_keys($list_doador));
        
        return $total_valor;

    }

    static function total_doadores_recorrentes($instituicao_id): int
    {
        $doacoes = new Doacao();

        $list_doacoes = $doacoes->list_all_by_instituicao_recorrencia($instituicao_id, 1);
        
        $total_valor = count(array_keys($list_doacoes));
        
        return $total_valor;

    }

    static function total_doadores_unicos($instituicao_id): int
    {
        $doacoes = new Doacao();

        $list_doacoes = $doacoes->list_all_by_instituicao_recorrencia($instituicao_id, 0);
        
        $total_valor = count(array_keys($list_doacoes));
        
        return $total_valor;

    }


    static function doadores($instituicao_id, $data_resgistro):array
    {   

        return [
            'total_doador' => [
                'total_doadores' => self::total_doadores($instituicao_id),
                'doadores_novos' => self::total_doadores_novos($data_resgistro),
                'doadores_recorrente' => self::total_doadores_recorrentes($instituicao_id),
                'doadores_unicos' => self::total_doadores_unicos($instituicao_id),
            ],
        ];
    }


    static function dashboard(){

        $instituicao_id = $_REQUEST['instituicao_id'];
        $data_resgistro = $_REQUEST['data_resgistro'] ?? null;

        campo_obrigatorios([
            'data_resgistro' => 'Campo data_resgistro obrigatorio' 
        ]);


        $total_doacoes = self::total_valores_doacao($instituicao_id);

        $total_doadores = self::doadores($instituicao_id, $data_resgistro);

        $doacoes_media = self::media_doacao($instituicao_id);

        echo json_encode([
            'next' => true,
            'message' => 'Dados DashBoard',
            'dados' => [
                'doacao' => $total_doacoes,
                'doadores' => $total_doadores,
                'doacoes_media' => $doacoes_media

            ]
        ]);

    }
}