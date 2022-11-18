SELECT external_fk FROM doador WHERE registro = '2022-11-15' AND external_fk not in(SELECT doador_fk FROM fatura );

DELETE FROM doador WHERE registro = '2022-11-15' AND external_fk not in( SELECT doador_fk FROM fatura );

