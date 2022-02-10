<?php

class DashboardAdmControler{

    static function total_doacoes($adm_id): int
        {
            
            $doacoes = new Doacao();
    

            $instituicao = new Instituicao();
            $list_instituicoes = $instituicao->list_all_by_adm_id($adm_id['id']);
            $intitutions_ids = array_map(function($inst) { return (int) $inst['id']; }, $list_instituicoes);

            

            $list_doacoes = $doacoes->list_ids($intitutions_ids);
            
    
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
    
        static function media_doacao($adm_id): int
        {
            
            $doacoes = new Doacao();
    
            $instituicao = new Instituicao();
            
            $list_instituicoes = $instituicao->list_all_by_adm_id(  $adm_id['id']);
            
            $intitutions_ids = array_map(function($inst) { return (int) $inst['id']; }, $list_instituicoes);



            $list_doacoes = $doacoes->list_ids($intitutions_ids);
            
    
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
    
        static function total_doacoes_pix($adm_id): int
        {
            $doacoes = new Doacao();
    
            $instituicao = new Instituicao();
            $list_instituicoes = $instituicao->list_all_by_adm_id($adm_id['id']);

            $intitutions_ids = array_map(function($inst) { return (int) $inst['id']; }, $list_instituicoes);



            $list_doacoes = $doacoes->list_ids_tipo($intitutions_ids, "pix");
            
            var_dump($list_doacoes);
            die;

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
    
        static function total_doacoes_boleto($adm_id): int
        {
            $doacoes = new Doacao();
    
    
    
            $instituicao = new Instituicao();
            $list_instituicoes = $instituicao->list_all_by_adm_id($adm_id['id']);

            $intitutions_ids = array_map(function($inst) { return (int) $inst['id']; }, $list_instituicoes);



            $list_doacoes = $doacoes->list_ids_tipo($intitutions_ids, "boleto");
            
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
        
        static function total_doacoes_cartao($adm_id): int
        {
            $doacoes = new Doacao();
            
            
            
            $instituicao = new Instituicao();
            $list_instituicoes = $instituicao->list_all_by_adm_id($adm_id['id']);

            $intitutions_ids = array_map(function($inst) { return (int) $inst['id']; }, $list_instituicoes);



            $list_doacoes = $doacoes->list_ids_tipo($intitutions_ids, "credit_card");
            
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
        
        static function total_doacoes_concluidas($adm_id): int
        {
            $doacoes = new Doacao();
            
            
            $instituicao = new Instituicao();
            $list_instituicoes = $instituicao->list_all_by_adm_id($adm_id['id']);

            $intitutions_ids = array_map(function($inst) { return (int) $inst['id']; }, $list_instituicoes);



            $list_doacoes = $doacoes->list_ids_status_pagamento($intitutions_ids, "paid");
            
    
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
    
        static function total_doacoes_concluidas_cartao($adm_id): int
        {
            $doacoes = new Doacao();
            
            $instituicao = new Instituicao();
            $list_instituicoes = $instituicao->list_all_by_adm_id($adm_id['id']);

            $intitutions_ids = array_map(function($inst) { return (int) $inst['id']; }, $list_instituicoes);



            $list_doacoes = $doacoes->list_ids_tipo_status($intitutions_ids, "credit_card", 'paid');
            
            
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
    
        static function total_doacoes_concluidas_boleto($adm_id): int
        {
            $doacoes = new Doacao();
            
            
            
            $instituicao = new Instituicao();
            $list_instituicoes = $instituicao->list_all_by_adm_id($adm_id['id']);

            $intitutions_ids = array_map(function($inst) { return (int) $inst['id']; }, $list_instituicoes);



            $list_doacoes = $doacoes->list_ids_tipo_status($intitutions_ids, "credit_card", 'boleto');
            
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
    
        static function total_doacoes_concluidas_pix($adm_id): int
        {
            $doacoes = new Doacao();
            
            
            
            $instituicao = new Instituicao();
            $list_instituicoes = $instituicao->list_all_by_adm_id($adm_id['id']);

            $intitutions_ids = array_map(function($inst) { return (int) $inst['id']; }, $list_instituicoes);



            $list_doacoes = $doacoes->list_ids_tipo_status($intitutions_ids, "pix", 'paid');
            
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
    
        static function total_valores_doacao($adm_id): array 
        {
    
    
            
            $total_plano_valor = self::total_doacoes($adm_id);
    
            $total_doacoes_pix = self::total_doacoes_pix($adm_id);
            
            $total_doacoes_boleto = self::total_doacoes_boleto($adm_id);
            
            $total_doacoes_cartao = self::total_doacoes_cartao($adm_id);
    
            $total_doacoes_concluidas = self::total_doacoes_concluidas($adm_id);
    
            $total_doacoes_concluidas_cartao = self::total_doacoes_concluidas_cartao($adm_id);
    
            $total_doacoes_concluidas_boleto = self::total_doacoes_concluidas_boleto($adm_id);
    
            $total_doacoes_concluidas_pix = self::total_doacoes_concluidas_pix($adm_id);
            
            // $total_doacoes_pendente_cartao = self::total_doacoes_pendente_cartao($instituicao_id);
    
            // $total_doacoes_pendente_boleto = self::total_doacoes_pendente_boleto($instituicao_id);
    
            // $total_doacoes_pendente_pix = self::total_doacoes_pendente_pix($instituicao_id);
    
            // $total_doacoes_vencidas_cartao = self::total_doacoes_vencidas_cartao($instituicao_id);
    
            // $total_doacoes_vencidas_boleto = self::total_doacoes_vencidas_boleto($instituicao_id);
    
            // $total_doacoes_vencidas_pix = self::total_doacoes_vencidas_pix($instituicao_id);
            
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
                // 'doacoes_pendente' => [
                //     'total_doacoes_pendente_cartao' => $total_doacoes_pendente_cartao,
                //     'total_doacoes_pendente_boleto' => $total_doacoes_pendente_boleto,
                //     'total_doacoes_pendente_pix' => $total_doacoes_pendente_pix,
                // ],
                // 'doacoes_vencidas' => [
                //     'total_doacoes_vencidas_cartao' => $total_doacoes_vencidas_cartao,
                //     'total_doacoes_vencidas_boleto' => $total_doacoes_vencidas_boleto,
                //     'total_doacoes_vencidas_pix' => $total_doacoes_vencidas_pix
                //     ]
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
    
    
        static function dashboard_admin(){
    

            $adm = new Adm();


            $token_parce = token();

            $scret = $token_parce['secret'];
            $adm_id = $adm->list_profile($scret);

            // $get_adm_nome = $token_parce['nome'];


            
            // $number_instituicoes = count(array_keys($list_all_instituicao));

            // echo json_encode([
            //     'next' => true,
            //     'message' => 'Dashboard do Adm ' . $get_adm_nome,
            //     'dados' => [
            //         'instituicoes' => $number_instituicoes
            //     ]
            // ]);
        

            $instituicao_id = $_REQUEST['instituicao_id'];
            $data_resgistro = $_REQUEST['data_registro'] ?? null;
    
            campo_obrigatorios([
                'data_registro' => 'Campo data_resgistro obrigatorio' 
            ]);
    
    
            $total_doacoes = self::total_valores_doacao($adm_id);
    
            $total_doadores = self::doadores($instituicao_id, $data_resgistro);
    
            $doacoes_media = self::media_doacao($adm_id);
    
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

