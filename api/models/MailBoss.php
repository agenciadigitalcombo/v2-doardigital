<?php

class MailBoss
{
    static function subscribe(string $email, string $token)
    {

        $payload = [
            "email" => $email,
            "list_uid" => intval((time() / 50) + rand(1, 99)),
            "taginternals" => "doar-digital"
        ];
        return self::curl($payload, $token);
    }

    static function curl(array $payload, string $token)
    {
        $full_path = "https://member.mailingboss.com/";
        $full_path .= "/integration/index.php/lists/subscribers/create/{$token}";
        $defaults = [
            CURLOPT_POST           => true,
            CURLOPT_HEADER         => 0,
            CURLOPT_RETURNTRANSFER => 1,
            CURLOPT_URL            => $full_path,
            CURLOPT_POSTFIELDS     => http_build_query($payload),

        ];
        $con = curl_init();
        curl_setopt_array($con, $defaults);
        $ex = curl_exec($con);
        curl_close($con);
        return $ex;
    }

    public function register(int $instituicao_id, string $token, string $token_uid): void
    {
        $banco = new Banco();

        $exist_id = "SELECT * FROM mailing_boss WHERE instituicao_id=$instituicao_id";
        $res_exist = $banco->query($exist_id);

        $set_smtp = "INSERT INTO mailing_boss";
        $set_smtp .= "(instituicao_id, token, token_uid)";
        $set_smtp .= "VALUES";
        $set_smtp .= "($instituicao_id, '$token', '$token_uid')";

        $save_smtp = "UPDATE mailing_boss SET token='$token', token_uid='$token_uid'";

        if (empty($res_exist[0])) {
            $banco->exec($set_smtp);
        } else {
            $banco->exec($save_smtp);
        }
    }

    public function get(int $fk): array
    {
        $banco = new Banco();

        $sql = "SELECT * FROM mailing_boss WHERE instituicao_fk=$fk";
        $guard = $banco->query($sql);
        return $guard[0] ?? [];
    }
}
