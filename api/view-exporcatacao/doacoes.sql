CREATE VIEW doacoes_255 AS
SELECT 
doacoes.token fatura_id,
doacoes.tipo as tipo_pagamento,
doacoes.recorrente,
doacoes.reference_key as external_fk,
doacoes.status_pagamento,
doacoes.valor as valor,
doacoes.codigo as codigo,
doacoes.url as url,
doacoes.data as data,
doacoes.hora as hora,
doacoes.doador_id as doador_fk,
doador.nome as doador_nome,
doador.email as doador_email

FROM doacoes
INNER JOIN doador ON doador.id=doacoes.doador_id
WHERE doacoes.instituicao_id = 255