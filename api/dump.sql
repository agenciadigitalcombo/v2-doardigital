CREATE TABLE adm (
    id int not null auto_increment primary key,
    email varchar(75),
    status
    nome varchar(75),
    telefone varchar(25),
    pass
    foto varchar(255),
    step
    cpf varchar(25),
    data_registro
    secret
    super_adm int
);


CREATE TABLE sub_adm (
    id int not null auto_increment primary key,
    email varchar(75),
    status
    nome varchar(75),
    telefone varchar(25),
    senha varchar(255),
    foto varchar(255),
    secret
    credencial varchar(55),
);


CREATE TABLE CREDENCIAL (
    id int not null auto_increment primary key,
    nome  varchar(55),
);


CREATE TABLE recursos_painel (
    id int not null auto_increment primary key,
    nome  varchar(55),
);


CREATE TABLE  TAXONOMIA (
    from_id int,
    to_id int,
    tipo_relacao 
)


CREATE TABLE INSTITUIÇÃO (
    id int not null auto_increment primary key,
    status
    email varchar(75),
    cnpj varchar(25),
    razao_social varchar(55),
    nome_fantasia varchar(75),
    telefone varchar(25),
    sub_dominio ,
    dominio varchar(55),
    recebedor_id int,
);


recebedor (
    id
    recebedor_id
    nome_referencia
    nome
    anticipatable_volume_percentage
    automatic_anticipation_enabled
    bank_account_id
    transfer_day
    transfer_enabled
    transfer_interval
    type
    document_number
    name
    email
    ddd
    number
)



CREATE TABLE MEU PLANO (
    id int not null auto_increment primary key,
    plan_id int,
    status varchar(175),
    customer_id int,
    usuario_id int
);

CREATE TABLE TABELA TAXONOMIA PLANOS (
    id int not null auto_increment primary key,
    id_instituicao int,
    meu_plano_id int
);



CREATE TABLE RECEBEDORES (
    id int not null auto_increment primary key,
    id_recebedor int,
    endereco varchar(75),
    banco varchar(55),
    agencia  varchar(25)
);

CREATE TABLE MODULOS (
    id int not null auto_increment primary key,
    tipo varchar(25),
    token varchar(175),
    chave varchar(175),
    secret varchar(55),
    criado_em varchar(25),
    atualizado_em varchar(25)
);

CREATE TABLE INSCRITOS (
    id int not null auto_increment primary key,
    nome varchar(75),
    email varchar(75),
    telefone varchar(25),
    id_instituicao int
);



CREATE TABLE SPLIT (
    id int not null auto_increment primary key,
    instituicao_id int,
    recebedor_id int,
    resto_taxas int,
    responsavel varchar(55),
    porcentagem int,
    criado_em varchar(25),
    atualizado_em varchar(25)
);

CREATE TABLE EMAILS (
    id int not null auto_increment primary key,
    instituicao_id int,
    tipo varchar(25),
    titulo varchar(25),
    assunto varchar(55),
    corpo varchar(255),
    cron varchar(25)
);

CREATE TABLE DOAÇÃO (
    id int not null auto_increment primary key,
    instituicao_id int,
    doador_id int,
    transacao_id int,
    status varchar(25),
    tipo varchar(25),
    plano_id int,
    valor int,
    codigo_barras varchar(155),
    url_boleto varchar(155),
    codigo_pix varchar(255),
    url_qrcode varchar(155),
    criado_em  varchar(25),
    atualizado_em varchar(25)
);

CREATE TABLE DOADOR (
    id int not null auto_increment primary key,
    email varchar(55),
    senha varchar(155),
    nome varchar(55),
    telefone varchar(25),
    cpf varchar(25),
    customer_id int,
    criado_em varchar(25),
    atualizado_em varchar(25)
);

CREATE TABLE ENDERECOS (
    id int not null auto_increment primary key,
    referencia_id int,
    cep varchar(25),
    pais varchar(25),
    estado varchar(25),
    cidade varchar(25),
    bairro varchar(55),
    rua varchar(55),
    complemento varchar(25),
    numero int
);

CREATE TABLE SMTP (
    id int not null auto_increment primary key,
    instituicao_id int,
    host varchar(25),
    protocolo varchar(25),
    porta int,
    email varchar(55),
    senha varchar(155),
    logo varchar(255),
    cor varchar(25),
    nome varchar(55)
)

CREATE TABLE PLANOS (
    id int not null auto_increment primary key,
    ativo varchar(25),
    nome varchar(55),
    prazo varchar(25),
    quantia int,
    instituicao_id int
);

CREATE TABLE ASSINATURA (
    id int not null auto_increment primary key,
    doador_id int,
    subscription_id int,
    plan_id int,
    status  varchar(25),
    ativo varchar(25),
    criado_em varchar(25)
);

CREATE TABLE TRANSAÇÕES (
    id int not null auto_increment primary key,
    instituicao_id int,
    metodo varchar(25),
    plan_id int,
    valor int,
    id_doador int,
    token varchar(155),
    reference_key
    status varchar(25),
    id_transacao int,
    url_boleto varchar(55),
    cod_boleto varchar(255),
    cod_pix varchar(255),
    url_pix varchar(55),
    data_criado varchar(25),
    id_cartao int,
    id_endereco int
);

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

CREATE TABLE CARTÕES (
    id int not null auto_increment primary key,
    token varchar(55),
    doador_id int,
    n_cartao varchar(25),
    data_expiracao varchar(25)
);

CREATE TABLE METAS (
    id int not null auto_increment primary key,
    ano int, 
    instituicao_id int,
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


CREATE TABLE log_emails (
    id int not null auto_increment primary key, 
);

CREATE TABLE log_webhooks (
    id int not null auto_increment primary key,    
);

CREATE TABLE log_evendas (
    id int not null auto_increment primary key,
);

CREATE TABLE log_rdstation (
    id int not null auto_increment primary key,
);
