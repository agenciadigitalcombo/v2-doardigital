<?php

class BlackList
{
    static function valid(string $subdomain): bool
    {
        return !in_array($subdomain, self::list());
    }
    static function list(): array
    {
        return file(__DIR__ . "/../black-list.txt");
    }
}
