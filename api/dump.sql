CREATE TABLE adm (
    id int not null auto_increment primary key,
    nome varchar(75),
    cpf varchar(25),
    email varchar(75),
    pass varchar(255),
    telefone varchar(25),
    foto varchar(255),
    secret varchar(255),
    data_registro varchar(18),
    data_nascimento varchar(10),
    plano_id varchar(255),
    step int,
    status int,
    super_adm int
);

CREATE TABLE sub_adm (
    id int not null auto_increment primary key,
    adm_id int,
    nome varchar(75),
    email varchar(75),
    senha varchar(255),
    secret varchar(255),
    foto varchar(255),
    telefone varchar(11),
    credencial_id int,
    status int
);

CREATE TABLE taxonomia (
    from_id int,
    to_id int,
    tipo_relacao varchar(255)
);

CREATE TABLE meta (
    fk_id int,
    tipo_relacao varchar(255),
    payload varchar(255)
);

CREATE TABLE credencial (
    id int not null auto_increment primary key,
    nome_identificacao varchar(75),
    recursos varchar(255),
);

CREATE TABLE plano (
    id int not null auto_increment primary key,
    instituicao_id int,
    token varchar(255),
    nome varchar(75),
    amount int,
    status int
);

CREATE TABLE plano_digital (
    id int not null auto_increment primary key,
    token varchar(255),
    nome varchar(75),
    whatsapp int,
    instituicao_max int, 
    amount int,
    status int
);

CREATE TABLE split (
    id int not null auto_increment primary key,
    instituicao_id int,
    recebedor_id int,
    responsavel_estorno int,
    porcentagem int
);

CREATE TABLE split_digital (
    id int not null auto_increment primary key,
    recebedor_id int,
    responsavel_estorno int,
    porcentagem int
);

CREATE TABLE inscrito (
    id int not null auto_increment primary key,
    instituicao_id int,
    nome varchar(75),
    email varchar(75),
    telefone varchar(11)
);

CREATE TABLE doador (
    id int not null auto_increment primary key,
    token varchar(255),
    nome varchar(75),
    email varchar(75),
    senha varchar(255),
    telefone varchar(11),
    cpf varchar(11),
    data_nascimento varchar(10),
    foto varchar(255),
    data_registro varchar(19)
);

CREATE TABLE conta_bancaria (
    id int not null auto_increment primary key,
    adm_id int,
    token varchar(255), 
    nome_identificacao varchar(75),
    codigo_banco varchar(3),
    agencia varchar(4),
    agencia_digito varchar(1),
    conta varchar(13),
    conta_digito varchar(2),
    tipo_conta varchar(75),
    nome_completo varchar(100),
    documento_numero varchar(14)
);

CREATE TABLE  (
    id int not null auto_increment primary key,
    adm_id int,
    token varchar(255), 
    nome_identificacao varchar(75),
    conta_bancaria_token varchar(255),
    email varchar(75),
    ddd varchar(25),
    telefone varchar(9)
);

CREATE TABLE instituicao (
    id int not null auto_increment primary key,
    adm_id int,
    recebedor_token varchar(255),
    nome_fantasia varchar(75),
    razao_social varchar(75),
    subdomaim varchar(75),
    dominio varchar(75),
    email varchar(75),
    cnpj varchar(14),
    telefone varchar(11),
    recebedor_id int,
    cor varchar(9),
    logo varchar(255),
    data_registro varchar(19),
    status int
);

CREATE TABLE meta_mes (
    id int not null auto_increment primary key,
    instituicao_id int,
    ano varchar(4), 
    janeiro int,
    fevereiro int, 
    marco int,
    abril int,
    maio int,
    junho int,
    julho int,
    agosto int,
    setembro int,
    outubro int,
    novembro int,
    dezembro int
);

CREATE TABLE doacoes (
    id int not null auto_increment primary key,
    instituicao_id int,
    doador_id int,
    token varchar(255),
    tipo varchar(25),
    status_pagamento varchar(75),
    plano_id int,
    valor int,
    codigo varchar(255),
    url varchar(255),
    data varchar(9),
    hora varchar(8)
);

CREATE TABLE doacoes_digital (
    id int not null auto_increment primary key,
    doador_id int,
    token varchar(255),
    tipo varchar(25),
    status_pagamento varchar(75),
    plano_id int,
    valor int,
    codigo varchar(255),
    url varchar(255),
    data varchar(9),
    hora varchar(8)
);

CREATE TABLE endereco (
    id int not null auto_increment primary key,
    fk_id int,
    nome_identificacao varchar(75),
    cep varchar(8),
    logadouro varchar(75),
    numero varchar(10),
    complemento varchar(75),
    bairro varchar(75),
    cidade varchar(75),
    estado varchar(2)
);

CREATE TABLE conta_email_smtp (
    id int not null auto_increment primary key,
    instituicao_id int,
    host varchar(75),
    protocolo varchar(25),
    porta int,
    email varchar(75),
    senha varchar(155)
);

CREATE TABLE tag_manager (
    id int not null auto_increment primary key,
    instituicao_id int,
    token varchar(255)
);

CREATE TABLE rd_stations (
    id int not null auto_increment primary key,
    instituicao_id int,
    token varchar(255)
);

CREATE TABLE evendas (
    id int not null auto_increment primary key,
    instituicao_id int,
    canal varchar(255)
);

CREATE TABLE mailing_boss (
    id int not null auto_increment primary key,
    instituicao_id int,
    token varchar(255),
    token_uid varchar(255)
);

CREATE TABLE atlassian_correio (
    id int not null auto_increment primary key,
    instituicao_id int,
    token varchar(255),
    chave varchar(255)
);

CREATE TABLE email_notificao (
    id int not null auto_increment primary key,
    instituicao_id int,
    assunto varchar(55),
    corpo varchar(255),
    acao varchar(75),
    cron varchar(25)
);

CREATE TABLE no_replay (
    id int not null auto_increment primary key,
    instituicao_id int,
    doacao_id varchar(55),
    doacao_token varchar(255),
    status_pagamento varchar(75),
    data varchar(9)
);

-- acima ja foi implementado


CREATE TABLE DASHBOARD (
    id int not null auto_increment primary key,
    instituicao_id int,
    total_doacoes int,
    doacoes_concluidas int,
    doacoes_em_aberto int,
    doacoes_vencidas int,
    boletos_em_aberto int,
    boletos_pagos int,
    creditos_em_aberto int,
    creditos_pagos int,
    pix_em_aberto int,
    pix_pago int,
    doacoes_previstas int,
    novos_doadores int,
    doadores_recorrentes int,
    doadores_unicos int,
    doacao_media int,
    doadores_adimplentes int,
    doadores_inadimplentes int,
    metas int,
    total_cartao int,
    total_boleto int,
    total_pix int
);
