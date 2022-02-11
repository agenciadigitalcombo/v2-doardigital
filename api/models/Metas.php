<?php 
class Metas implements IMetas{

    public function create_update(int $instituicao_id, string $ano, int $janeiro, int $fevereiro, int $marco, int $abril, int $maio, int $junho, int $julho, int $agosto, int $setembro, int $outubro, int $novembro, int $dezembro): void
    {
        $banco = new Banco();
        
        $exist_id = "SELECT * FROM meta_mes WHERE instituicao_id=$instituicao_id AND ano='$ano'";
        $res_exist = $banco->query($exist_id);
        
        $set_metas = "INSERT INTO meta_mes";
        $set_metas .= "(instituicao_id, ano, janeiro, fevereiro, marco, abril, maio, junho, julho, agosto, setembro, outubro, novembro, dezembro)";
        $set_metas .= "VALUES";
        $set_metas .= "($instituicao_id, '$ano', $janeiro, $fevereiro, $marco, $abril, $maio, $junho, $julho, $agosto, $setembro, $outubro, $novembro, $dezembro)";
        
        $save_metas = "UPDATE meta_mes SET janeiro=$janeiro, fevereiro=$fevereiro, marco=$marco, abril=$abril, maio=$maio, junho=$junho, julho=$julho, 
        agosto=$agosto, setembro=$setembro, outubro=$outubro, novembro=$novembro, dezembro=$dezembro";
        $save_metas .= " WHERE instituicao_id=$instituicao_id AND ano='$ano'";
        
        
        if(empty($res_exist)) {
            $banco->exec($set_metas);
        }else {
            $banco->exec($save_metas);
        }
    }

    public function get_by_instituicao_id(int $instituicao_id, string $ano): array
    {
        $banco = new Banco();
        
        $sql = "SELECT * FROM meta_mes WHERE instituicao_id=$instituicao_id AND ano='$ano'";
        $guard = $banco->query($sql);
        return $guard;
    }

    public function list_ids_metas(array $ids): array
    {

       
        $banco = new Banco();
        $plus = [];
        foreach( $ids as $ID ) {
            $plus[] = "instituicao_id={$ID}";
        }
        $plus = implode(' OR ', $plus);
        $where = count($ids) > 0 ? 'WHERE' : '';
        $sql = "SELECT * FROM meta_mes {$where} {$plus}";
        $guard = $banco->query($sql);
        return array_map(function($m) {
            return  [
                "ano" => intval($m['ano']),
                "janeiro" => intval($m['janeiro']),
                "fevereiro" => intval($m['fevereiro']),
                "marco" => intval($m['marco']),
                "abril" => intval($m['abril']),
                "maio" => intval($m['maio']),
                "junho" => intval($m['junho']),
                "julho" => intval($m['julho']),
                "agosto" => intval($m['agosto']),
                "setembro" => intval($m['setembro']),
                "outubro" => intval($m['outubro']),
                "novembro" => intval($m['novembro']),
                "dezembro" => intval($m['dezembro'])
            ];
        }, $guard );
    }


}