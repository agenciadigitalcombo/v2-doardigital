CREATE TABLE administrador (
    id int not null auto_increment primary key,
    code varchar(255),
    nome varchar(75),
    cpf varchar(25),
    nascimento varchar(10),
    telefone varchar(25),
    email varchar(75),
    senha varchar(255),
    registro varchar(18),
    etapa int,
    ativo int,
    sass int,
    credencial int,
    adm varchar(255)
);

CREATE TABLE endereco (
    id int not null auto_increment primary key,
    fk varchar(255),
    tipo varchar(75),
    nome varchar(75),
    cep varchar(8),
    logadouro varchar(75),
    numero varchar(10),
    complemento varchar(75),
    bairro varchar(75),
    cidade varchar(75),
    estado varchar(2)
);

CREATE TABLE credencial (
    id int not null auto_increment primary key,
    nome_identificacao varchar(75),
    recursos varchar(255)
);

CREATE TABLE plano (
    id int not null auto_increment primary key,
    fk varchar(255),
    price FLOAT,
    coupon VARCHAR(255),
    send_message INT,
    institution INT,
    trial INT,
    subadm INT
);

CREATE TABLE split (
    id int not null auto_increment primary key,
    fk VARCHAR(255),
    code VARCHAR(255),
    porcentagem int
);

CREATE TABLE doador (
    id int not null auto_increment primary key,
    instituicao_fk VARCHAR(255),
    pagamento_fk varchar(255),
    external_fk varchar(255),
    nome varchar(75),
    cpf varchar(11),
    sexo varchar(255),
    telefone varchar(11),
    email varchar(75),
    senha varchar(255),
    nascimento varchar(10),
    registro varchar(19)
);

CREATE TABLE fatura (
    id int not null auto_increment primary key,
    instituicao_fk VARCHAR(255),
    fatura_id varchar(255),
    tipo_pagamento varchar(255),
    recorrente int,
    external_fk varchar(255),
    status_pagamento varchar(255),
    valor FLOAT,
    codigo varchar(255),
    url varchar(255),
    data varchar(9),
    hora varchar(8),
    doador_fk VARCHAR(255),
    doador_nome VARCHAR(255),
    doador_email VARCHAR(255)
);

CREATE TABLE assinatura (
    id int not null auto_increment primary key,
    instituicao_fk VARCHAR(255),
    external_fk VARCHAR(255),
    doador_fk VARCHAR(255),
    fatura_id VARCHAR(255),
    tipo_pagamento varchar(255),
    status_pagamento VARCHAR(255),
    valor FLOAT
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
    status int,
    titulo_site varchar(55),
    tags varchar(75),
    descricao_site varchar(255),
    icon varchar(75),
    plano_id int
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

