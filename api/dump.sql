CREATE TABLE administrador (
    id int not null auto_increment primary key,
    code VARCHAR(255),
    nome VARCHAR(75),
    cpf VARCHAR(25),
    nascimento VARCHAR(10),
    telefone VARCHAR(25),
    email VARCHAR(75),
    senha VARCHAR(255),
    registro VARCHAR(18),
    etapa int,
    ativo int,
    sass int,
    credencial int not null,
    adm VARCHAR(255)
);

CREATE TABLE endereco (
    id int not null auto_increment primary key,
    fk VARCHAR(255),
    tipo VARCHAR(75),
    nome VARCHAR(75),
    cep VARCHAR(8),
    logadouro VARCHAR(75),
    numero VARCHAR(10),
    complemento VARCHAR(75),
    bairro VARCHAR(75),
    cidade VARCHAR(75),
    estado VARCHAR(2)
);

CREATE TABLE credencial (
    id int not null auto_increment primary key,
    nome_identificacao VARCHAR(75),
    recursos VARCHAR(255)
);

CREATE TABLE plano (
    id int not null auto_increment primary key,
    fk VARCHAR(255),
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
    pagamento_fk VARCHAR(255),
    external_fk VARCHAR(255),
    nome VARCHAR(75),
    cpf VARCHAR(11),
    sexo VARCHAR(255),
    telefone VARCHAR(11),
    email VARCHAR(75),
    senha VARCHAR(255),
    nascimento VARCHAR(10),
    registro VARCHAR(19),
    hora VARCHAR(8),
    ip VARCHAR(255),
    payload JSON
);

CREATE TABLE contador_ip (
    id int not null auto_increment primary key,
    ip VARCHAR(255),
    total int
);

CREATE TABLE fatura (
    id int not null auto_increment primary key,
    instituicao_fk VARCHAR(255),
    fatura_id VARCHAR(255),
    tipo_pagamento VARCHAR(255),
    recorrente int,
    external_fk VARCHAR(255),
    status_pagamento VARCHAR(255),
    valor FLOAT,
    codigo VARCHAR(255),
    url VARCHAR(255),
    data VARCHAR(10),
    hora VARCHAR(8),
    doador_fk VARCHAR(255),
    doador_nome VARCHAR(255),
    doador_email VARCHAR(255),
    ip VARCHAR(255)
);

CREATE TABLE assinatura (
    id int not null auto_increment primary key,
    instituicao_fk VARCHAR(255),
    external_fk VARCHAR(255),
    doador_fk VARCHAR(255),
    subscription_fk VARCHAR(255),
    tipo_pagamento VARCHAR(255),
    status_pagamento VARCHAR(255),
    valor FLOAT
);

CREATE TABLE institution_adm (
    id int not null auto_increment primary key,
    adm_fk VARCHAR(255),
    instituition_fk VARCHAR(255)
);

CREATE TABLE institution (
    id int not null auto_increment primary key,
    institution_fk VARCHAR(255),
    carteira_fk VARCHAR(255),
    id_fk VARCHAR(255),
    nome VARCHAR(255),
    cpfCnpj VARCHAR(14),
    email VARCHAR(75),
    mailSender VARCHAR(75),
    mailActive int,
    telefone VARCHAR(11),
    registro VARCHAR(19),
    visible int,
    domain VARCHAR(255),
    subdomain VARCHAR(75),
    logo VARCHAR(255),
    icon VARCHAR(255),
    cor VARCHAR(9),
    titulo VARCHAR(75),
    tags VARCHAR(75),
    descricao VARCHAR(145),
    account VARCHAR(75),
    accountDigit VARCHAR(75),
    accountName VARCHAR(75),
    agency VARCHAR(75),
    bank VARCHAR(75),
    state_machine VARCHAR(255),
    bankAccountType VARCHAR(75),
    showCep int not null
);

CREATE TABLE meta (
    id int not null auto_increment primary key,
    instituicao_fk VARCHAR(255),
    ano VARCHAR(4), 
    janeiro FLOAT,
    fevereiro FLOAT, 
    marco FLOAT,
    abril FLOAT,
    maio FLOAT,
    junho FLOAT,
    julho FLOAT,
    agosto FLOAT,
    setembro FLOAT,
    outubro FLOAT,
    novembro FLOAT,
    dezembro FLOAT
);

CREATE TABLE email (
    id int not null auto_increment primary key,
    instituicao_fk VARCHAR(255),
    host VARCHAR(75),
    protocolo VARCHAR(25),
    porta int,
    email VARCHAR(255),
    senha VARCHAR(255)
);

CREATE TABLE integration (
    id int not null auto_increment primary key,
    instituicao_fk VARCHAR(255),
    tipo VARCHAR(255),
    key_1 VARCHAR(255),
    key_2 VARCHAR(255),
    key_3 VARCHAR(255),
    key_4 VARCHAR(255),
    key_5 VARCHAR(255)
);

CREATE TABLE template_email (
    id int not null auto_increment primary key,
    instituicao_fk VARCHAR(255),
    tipo VARCHAR(255),
    status_pagamento VARCHAR(255),
    name VARCHAR(255),
    assunto VARCHAR(255),
    content LONGTEXT
);

CREATE TABLE template_whats (
    id int not null auto_increment primary key,
    instituicao_fk VARCHAR(255),
    tipo VARCHAR(255),
    name VARCHAR(255),
    status_pagamento VARCHAR(255),
    content LONGTEXT
);

CREATE TABLE message (
    id int not null auto_increment primary key,
    tipo VARCHAR(255),
    data VARCHAR(255),
    data_view VARCHAR(255), -- YYY-MM-DD
    inst_fk VARCHAR(255), -- inst_FUJHGUYFGUYG
    user_email VARCHAR(255), -- inst_FUJHGUYFGUYG
    user_name VARCHAR(255), -- inst_FUJHGUYFGUYG
    user_tel VARCHAR(255), -- inst_FUJHGUYFGUYG
    send_message int, -- 1 ja foi, 0 não
    response LONGTEXT, -- resposta do evendas e do send blue
    payload JSON
);

CREATE TABLE message_aws (
    id int not null auto_increment primary key,
    label VARCHAR(255),
    tipo VARCHAR(255),
    status VARCHAR(255),
    data VARCHAR(255),
    doador_fk VARCHAR(255),
    fatura_fk VARCHAR(255),
    ref_fk VARCHAR(255),
    execution_arn VARCHAR(255),
    institution_fk VARCHAR(255)
);

CREATE TABLE recover (
    id int not null auto_increment primary key,
    protocolo VARCHAR(255),
    finalizado int not null,
    recuperado int not null,
    nome VARCHAR(255),
    email VARCHAR(255),
    telefone VARCHAR(255),
    cpf VARCHAR(255),
    tipo_pagamento VARCHAR(255),
    valor VARCHAR(255),
    recorrente int not null,
    dataHoraRegistro VARCHAR(255),
    dataHoraUpdate VARCHAR(255),
    institution_fk VARCHAR(255)
);