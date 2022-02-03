<?php

class ApiMailBoss {
    static function subscribe( string $email, string $token ) {
      
        $payload = [
            "email" => $email,
            "list_uid" => intval( (time() / 50) + rand(1, 99) ),
            "taginternals" => "doar-digital"
        ];
        return self::curl($payload, $token );
    }

    static function curl( array $payload, string $token)
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
}