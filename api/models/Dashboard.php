<?php 

class Dashboard{

    public static function create(
        int $instituicao_id,
        int $total_doacoes,
        int $doacoes_concluidas,
        int $doacoes_em_aberto,
        int $doacoes_vencidas,
        int $boletos_em_aberto,
        int $boletos_pagos,
        int $creditos_em_aberto,
        int $creditos_pagos,
        int $pix_em_aberto,
        int $pix_pago,
        int $doacoes_previstas,
        int $novos_doadores,
        int $doadores_recorrentes,
        int $doadores_unicos,
        int $doacao_media,
        int $doadores_adimplentes,
        int $doadores_inadimplentes,
        int $metas,
        int $total_cartao,
        int $total_boleto,
        int $total_pix): void
    {
        $banco = new Banco();

        $sql = "INSERT INTO dashboard (
            instituicao_id,
            total_doacoes,
            doacoes_concluidas,
            doacoes_em_aberto,
            doacoes_vencidas,
            boletos_em_aberto,
            boletos_pagos,
            creditos_em_aberto,
            creditos_pagos,
            pix_em_aberto,
            pix_pago,
            doacoes_previstas,
            novos_doadores,
            doadores_recorrentes,
            doadores_unicos,
            doacao_media,
            doadores_adimplentes,
            doadores_inadimplentes,
            metas,
            total_cartao,
            total_boleto,
            total_pix)"
        ;

        $sql .= "VALUES";

        $sql .= "(
            '$instituicao_id'
            '$total_doacoes'
            '$doacoes_concluidas'
            '$doacoes_em_aberto'
            '$doacoes_vencidas'
            '$boletos_em_aberto'
            '$boletos_pagos'
            '$creditos_em_aberto'
            '$creditos_pagos'
            '$pix_em_aberto'
            '$pix_pago'
            '$doacoes_previstas'
            '$novos_doadores'
            '$doadores_recorrentes'
            '$doadores_unicos'
            '$doacao_media'
            '$doadores_adimplentes'
            '$doadores_inadimplentes'
            '$metas'
            '$total_cartao'
            '$total_boleto'
            '$total_pix')"
        ;

        $banco->exec($sql);
    }

    public static function list_by_instituicao_id(
        int $instituicao_id,
        int $total_doacoes,
        int $doacoes_concluidas,
        int $doacoes_em_aberto,
        int $doacoes_vencidas,
        int $boletos_em_aberto,
        int $boletos_pagos,
        int $creditos_em_aberto,
        int $creditos_pagos,
        int $pix_em_aberto,
        int $pix_pago,
        int $doacoes_previstas,
        int $novos_doadores,
        int $doadores_recorrentes,
        int $doadores_unicos,
        int $doacao_media,
        int $doadores_adimplentes,
        int $doadores_inadimplentes,
        int $metas,
        int $total_cartao,
        int $total_boleto,
        int $total_pix):array
    {
        $banco = new Banco();

        $sql = "UPDATE dashboard SET ";
        
        $sql .= "
        total_doacoes=$total_doacoes,
        doacoes_concluidas=$doacoes_concluidas,
        doacoes_em_aberto=$doacoes_em_aberto,
        doacoes_vencidas=$doacoes_vencidas,
        boletos_em_aberto=$boletos_em_aberto,
        boletos_pagos=$boletos_pagos,
        creditos_em_aberto=$creditos_em_aberto,
        creditos_pagos=$creditos_pagos,
        pix_em_aberto=$pix_em_aberto,
        pix_pago=$pix_pago,
        doacoes_previstas=$doacoes_previstas,
        novos_doadores=$novos_doadores,
        doadores_recorrentes=$doadores_recorrentes,
        doadores_unicos=$doadores_unicos,
        doacao_media=$doacao_media,
        doadores_adimplentes=$doadores_adimplentes,
        doadores_inadimplentes=$doadores_inadimplentes,
        metas=$metas,
        total_cartao=$total_cartao,
        total_boleto=$total_boleto,
        total_pix=$total_pix ";

        $sql .= "WHERE instituicao_id=$instituicao_id";

        $guard = $banco->query($sql);
        return $guard[0];
    }
}