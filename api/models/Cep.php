<?php
class Cep implements ICep{
    
    public function get_cep(string $cep): array
    {
        $banco = new Banco();
        $sql = "SELECT * FROM endereco WHERE cep='$cep'";
        $guard = $banco->query($sql);
        return $guard;
    }


}