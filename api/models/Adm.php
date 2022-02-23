<?php

class Adm implements IAdm
{

    public function exist(string $email): bool
    {
        $banco = new Banco();
        $sql = "SELECT * FROM adm WHERE email='$email'";
        $guard = $banco->query($sql);

        return !empty($guard);
    }

    public function nova_senha(string $email, string $senha): void 
    {
        $banco = new Banco();      

        $sql = "UPDATE adm SET pass='$senha' WHERE email='$email'";
        $banco->exec($sql);
        
        $sql = "UPDATE sub_adm SET pass='$senha' WHERE email='$email'";
        $banco->exec($sql);
    }

    public function complet_profile(string $secret, string $data_nascimento, string $cpf_cnpj, string $tipo): void
    {
        $banco = new Banco();
        $sql = "UPDATE adm SET cpf='$cpf_cnpj', data_nascimento='$data_nascimento', tipo='$tipo' WHERE secret='$secret'";
        $banco->exec($sql);
    }

    public function get_by_id(int $id): array
    {
        $banco = new Banco();
        $sql = "SELECT * FROM adm WHERE id='$id'";
        $guard = $banco->query($sql);
        return $guard;
    }

    public function get_by_email_adm(string $email): array
    {
        $banco = new Banco();
        $sql = "SELECT * FROM adm WHERE email='$email'";
        $guard = $banco->query($sql);
        return $guard[0] ?? [];
    }

    public function get_by_email_user(string $email): array
    {
        $banco = new Banco();
        $sql = "SELECT * FROM sub_adm WHERE email='$email'";
        $guard = $banco->query($sql);
        return $guard[0] ?? [];
    }

    public function get_by_email(string $email): array
    {
        
        if( !empty( $this->get_by_email_adm($email) ) ) return $this->get_by_email_adm($email);
        
        // die('sos');
        return $this->get_by_email_user($email);
        // $banco = new Banco();
        // $sql = "SELECT * FROM adm WHERE email='$email'";
        // $guard = $banco->query($sql);
        // return $guard[0] ?? [];
    }

    public function set_step(int $id, int $step): void
    {
        $banco = new Banco();
        $sql = "UPDATE adm SET step='$step' WHERE id='$id'";
        $banco->exec($sql);
    }

    public function create(string $nome, string $email, string $senha, string $telefone): void
    {
        $secret = uniqid();

        $data_regis = date("Y-m-d H:i:s");
        $banco = new Banco();
        $sql = "INSERT INTO adm";
        $sql .= "(nome, email, pass, telefone, secret, step, status, super_adm, data_registro)";
        $sql .= "VALUES";
        $sql .= "('$nome', '$email', '$senha', '$telefone', '$secret', 1, 1, 0, '$data_regis')";
        $banco->exec($sql);
    }

    public function update(string $nome, string $telefone, string $cpf, string $secret, string $data_nascimento): void
    {
        $banco = new Banco();
        $sql_adm = "SELECT * FROM adm WHERE secret='$secret'";
        $guard = $banco->query($sql_adm);
        if(!empty($guard)){
            $sql = "UPDATE adm SET nome='$nome', telefone='$telefone', cpf='$cpf', data_nascimento='$data_nascimento' WHERE secret='$secret'";
            $banco->exec($sql);
        }

        $sql_sub_adm = "SELECT * FROM sub_adm WHERE secret='$secret'";
        $guard = $banco->query($sql_sub_adm);
        if(!empty($guard)){
            $sql = "UPDATE sub_adm SET nome='$nome', telefone='$telefone' WHERE secret='$secret'";
            $banco->exec($sql);
        }
        
    }

    public function alterar_senha(string $secret, string $senha): void
    {
        $banco = new Banco();
        $sql = "UPDATE adm SET pass='$senha' WHERE secret='$secret'";
        $banco->exec($sql);
    }


    public function set_plano(string $secret, int $plano_id): void
    {
        $banco = new Banco();
        $sql = "UPDATE adm SET plano_id=$plano_id WHERE secret='$secret'";
        $banco->exec($sql);
    }


    public function list_profile($secret)
    {
        $banco = new Banco();
        $sql_adm = "SELECT * FROM adm WHERE secret='$secret'";
        $guard = $banco->query($sql_adm);
        if(!empty($guard)){
            return $guard[0] ?? [];
        }
        $sql_sub_adm = "SELECT * FROM sub_adm WHERE secret='$secret'";
        $guard = $banco->query($sql_sub_adm);
        if(!empty($guard)){
            return $guard[0] ?? [];
        }
        return [];
        
    }

    
    public function list_all(): array
    {
        $banco = new Banco();
        $sql = "SELECT * FROM adm";
        $guard = $banco->query($sql);
        return $guard;
    }

    public function login_adm(string $email, string $senha): bool
    {
        $banco = new Banco();
        $sql = "SELECT * FROM adm WHERE email='$email' and pass='$senha'";
        $guard = $banco->query($sql);
        return empty($guard);
    }

    public function login_user(string $email, string $senha): bool
    {
        $banco = new Banco();
        $sql = "SELECT * FROM sub_adm WHERE email='$email' and senha='$senha'";
        $guard = $banco->query($sql);
        return empty($guard);
    }    

    public function login(string $email, string $senha): bool
    {
        
        if( !empty($this->login_adm($email, $senha)) ) {
            return $this->login_user($email, $senha );
        }
        // die('sos');
        return false;
        // $banco = new Banco();
        // $sql = "SELECT * FROM adm WHERE email='$email' and pass='$senha'";
        // $guard = $banco->query($sql);
        // return empty($guard);
    }

    public function update_step(string $token, int $step): void
    {
        $banco = new Banco();
        $sql = "UPDATE adm SET step='$step' WHERE secret='$token'";
        $banco->exec($sql);
    }

    static function teste()
    {
        $instacia = new Adm();
        $instacia->list_all();
    }
}

?>