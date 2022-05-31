CREATE VIEW doadores_255 AS
SELECT 
token as pagamento_fk,
id as external_fk,
nome,
cpf,
telefone,
email
FROM doador
WHERE instituicao_id = 255 AND token != ""
