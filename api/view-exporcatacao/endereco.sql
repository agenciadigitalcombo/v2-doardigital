CREATE VIEW enderecos AS
SELECT
fk_id as fk,
cep,
logadouro,
numero,
complemento,
bairro,
cidade,
estado
FROM endereco