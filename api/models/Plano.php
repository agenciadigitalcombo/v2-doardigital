<?php

class Plano
{
    private $fk;
    private $price;
    private $coupon;
    private $send_message;
    private $institution;
    private $trial;
    private $subadm;

    private $con;

    function __construct()
    {
        $this->con = new Banco();
        $this->con->table('plano');
    }

    public function listAll($fk): array
    {
        $this->con->orderByAsc('price');
        $this->con->where(['fk' => $fk]);
        return array_map(['Plano','porter'], $this->con->select());
    }

    public function register(
        string $fk,
        float $price,
        string $coupon,
        int $send_message,
        int $institution,
        int $trial,
        int $subadm
    ): void {
        $this->con->insert([
            "fk" => $fk,
            "price" => $price,
            "coupon" => $coupon,
            "send_message" => $send_message,
            "institution" => $institution,
            "trial" => $trial,
            "subadm" => $subadm,
        ]);
    }

    public function update(
        int $id,
        float $price,
        string $coupon,
        int $send_message,
        int $institution,
        int $trial,
        int $subadm
    ): void {
        $this->con->where(["id" => $id]);
        $this->con->update([
            "price" => $price,
            "coupon" => $coupon,
            "send_message" => $send_message,
            "institution" => $institution,
            "trial" => $trial,
            "subadm" => $subadm,
        ]);
    }

    function info(int $id): array
    {
        $this->con->where(["id" => $id]);
        return self::porter( $this->con->select()[0]??[] );
    }

    function del(int $id): void
    {
        $this->con->where(["id" => $id]);
        $this->con->delete();
    }

    static function porter(array $payload)
    {
        return [
            "id" => $payload['id'] ?? 0,
            "fk" => $payload['fk'] ?? "fk_0007",
            "price" => $payload['price'] ?? 0,
            "coupon" => $payload['coupon'] ?? null,
            "send_message" => $payload['send_message'] ?? 0,
            "institution" => $payload['institution'] ?? 0,
            "trial" => $payload['trial'] ?? 0,
            "subadm" => $payload['subadm'] ?? 0
        ];
    }
}
