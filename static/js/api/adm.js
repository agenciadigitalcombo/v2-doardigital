import http from './http.js'

export default {
    async cadastrar(nome, email, senha, telefone) {
        return await http.post('/adm/register', {
            nome, email, senha, telefone
        })
    },
    async login(email, senha) {
        return await http.post('/adm/login', {
            email, senha
        })
    },

    async recuperar_senha(email) {
        return await http.post('/adm/recover-pass', {
            email
        })
    },

    async alterar_senha(token, code, senha) {
        return await http.post('/adm/alter-pass', {
            token,
            code,
            senha
        })
    },


    async atualizarFinaliza(
        token,
        code,
        nome,
        cpf,
        nascimento,
        telefone,
        credencial) {
        return await http.post('/adm/update-info', {
            token,
            code,
            nome,
            cpf,
            nascimento,
            telefone,
            credencial
        })
    },

    async ListarPerfil(token, code) {
        return await http.get('/adm/info', {
            token, code
        })
    },

    async cadastrarEndereco(
        nome_identificacao, cep, logradouro, numero, complemento, bairro, cidade, estado, token) {
        return await http.post('/create-endereco', {
            nome_identificacao,
            cep,
            logradouro,
            numero,
            complemento,
            bairro,
            cidade,
            estado,
            token

        })
    },

    async atualizarEndereco(
        token,
        code,
        cep,
        logradouro,
        numero,
        complemento,
        bairro,
        cidade,
        estado,
    ) {
        return await http.post('/adm/address', {
            token,
            code,
            cep,
            logradouro,
            numero,
            complemento,
            bairro,
            cidade,
            estado,
        })
    },

    async listarEndereco(token, code,) {
        return await http.get('/adm/address-info', {
            token, code,
        })
    },

    async listarEn(nome_identificacao, cep, logradouro, numero, complemento, bairro, cidade, estado, token) {
        return await http.get('/list-endereco', {
            nome_identificacao,
            cep,
            logradouro,
            numero,
            complemento,
            bairro,
            cidade,
            estado,
            token
        })
    },

    async listarCredencial(token,) {
        return await http.get('/credencial/list', {
            token,
        })
    },

    async credencial(token, id) {
        return await http.get('/credencial/info', {
            token, id
        })
    },

    async cadastrarCredencia(
        token, nome, recursos) {
        return await http.post('/credencial/register', {
            token,
            nome,
            recursos,
        })
    },

    async atualizarCredencia(
        token, nome, recursos, id) {
        return await http.post('/credencial/update-info', {
            token,
            nome,
            recursos,
            id,
        })
    },

    async deleterCredencia(token, id) {
        return await http.post('/credencial/del', {
            token, id
        })
    },


    async cadastrarInstituicao(
        token,
        nome_fantasia,
        razao_social,
        subdomaim,
        email,
        telefone,
        cnpj,
        cep,
        logradouro,
        bairro,
        cidade,
        estado,
        numero,
        tipo_empresa,
        complemento,

    ) {
        return await http.post('/create-instituicao', {
            token,
            nome_fantasia,
            razao_social,
            subdomaim,
            email,
            telefone,
            cnpj,
            cep,
            logradouro,
            bairro,
            cidade,
            estado,
            numero,
            tipo_empresa,
            complemento,
        })
    },
    async validarDomain(subdomain) {
        return await http.get('/subdominio-disponivel', {
            subdomain
        })
    },


    async domainPerson(
        token,
        instituicao_id,
        dominio

    ) {
        return await http.post('/update-domain-person', {
            token,
            instituicao_id,
            dominio
        })
    },

    async alterarInstituicao(
        token,
        instituicao_id,
        nome_fantasia,
        razao_social,
        email,
        cnpj,
        telefone,

    ) {
        return await http.post('/update-instituicao', {
            token,
            instituicao_id,
            nome_fantasia,
            razao_social,
            email,
            cnpj,
            telefone,
        })
    },


    async listarInstutuicao(token) {
        return await http.get('/instituicao', {
            token
        })
    },

    async listarInstutuicaoTodas(token) {
        return await http.get('/list-instituicao', {
            token
        })
    },



    async listarEnderecoInst(
        token,
        instituicao_id,) {
        return await http.get('/list-endereco-instituicao', {
            token,
            instituicao_id,
        })
    },

    async listarBancoInst(
        instituicao_id,) {
        return await http.get('/list-conta-instituicao', {
            instituicao_id,
        })
    },

    async onoffIntituicao(
        instituicao_id,
        token,
    ) {
        return await http.post('/on-off-instituicao', {
            instituicao_id,
            token,
        })
    },



    async enderecoInstituicao(
        token,
        id,
        nome_identificacao,
        logradouro,
        complemento,
        bairro,
        cidade,
        estado,
        numero,
        cep,
    ) {
        return await http.post('/endereco-instituicao', {
            token,
            id,
            nome_identificacao,
            logradouro,
            complemento,
            bairro,
            cidade,
            estado,
            numero,
            cep,

        })
    },

    async configuracaoInstituicao(
        token,
        instituicao_id,
        titulo_site,
        tags,
        descricao_site,
        cor,
        logo
    ) {
        return await http.post('/configuracao-instituicao', {
            token,
            instituicao_id,
            titulo_site,
            tags,
            descricao_site,
            cor,
            logo
        })
    },

    async listConf(instituicao_id) {
        return await http.get('/instituicao-id', {
            instituicao_id
        })
    },

    async uploadImg(
        form
    ) {
        console.log(form)
        let res = await fetch(`https://doardigital.tk/api/upload-img`, {

            method: 'POST',
            mode: 'cors',
            cache: 'default',
            body: form,

        })
        return await res.json()

    },


    async todoSubdomain(subdomaim) {
        return await http.get('/info-subdomaim', {
            subdomaim
        })
    },


    async cadastrarSubadm(
        nome,
        email,
        senha,
        telefone,
        credencial,
        code,
        token,
    ) {
        return await http.post('/adm/sub/register', {
            nome,
            email,
            senha,
            telefone,
            credencial,
            code,
            token,
        })
    },

    async editarSubadm(
        nome,
        telefone,
        credencial_id,
        email,
        secret,
        token,
    ) {
        return await http.post('/atualizar-subadm', {
            nome,
            telefone,
            credencial_id,
            email,
            secret,
            token,
        })
    },



    async listarSubadm(
        token,
        code,
    ) {
        return await http.get('/adm/list/sub', {
            token,
            code,
        })
    },


    async onoffPlano(
        plano_id,
        token,
    ) {
        return await http.post('/on-off-plano', {
            plano_id,
            token,
        })
    },

    async transacaoPlano(
        instituicao_id,
        mensal,
        planos_valor,
        planos_nome,
        email,
        nome,
        genero,
        cpf,
        telefone,
        cep,
        numero,
        estado,
        endereco,
        bairro,
        cidade,
        type_pagamento,
        cart_numero,
        cart_cvv,
        cart_validade,
        cart_nome,
    ) {
        return await http.post('/transacao', {
            instituicao_id,
            mensal,
            planos_valor,
            planos_nome,
            email,
            nome,
            genero,
            cpf,
            telefone,
            cep,
            numero,
            estado,
            endereco,
            bairro,
            cidade,
            type_pagamento,
            cart_numero,
            cart_cvv,
            cart_validade,
            cart_nome,
        })
    },


    async transacao(
        instituicao_id,
        mensal,
        planos_valor,
        planos_nome,
        email,
        nome,
        genero,
        cpf,
        telefone,
        cep,
        numero,
        estado,
        endereco,
        bairro,
        cidade,
        type_pagamento,

    ) {
        return await http.post('/transacao', {
            instituicao_id,
            mensal,
            planos_valor,
            planos_nome,
            email,
            nome,
            genero,
            cpf,
            telefone,
            cep,
            numero,
            estado,
            endereco,
            bairro,
            cidade,
            type_pagamento,

        })
    },


    async obrigado(
        doacao_id
    ) {
        return await http.post('/list-doacao', {
            doacao_id
        })
    },

    async listarPlanoDigital(fk) {
        return await http.get('/plano/list', {
            fk
        })
    },

    async cadastrarPlanosDigital(
        token,
        fk,
        price,
        coupon,
        send_message,
        institution,
        trial,
        subadm,
    ) {
        return await http.post('/plano/register', {
            token,
            fk,
            price,
            coupon,
            send_message,
            institution,
            trial,
            subadm,
        })
    },


    async editarPlanosDigital(
        token,
        id,
        price,
        coupon,
        send_message,
        institution,
        trial,
        subadm,
    ) {
        return await http.post('/plano/update-info', {
            token,
            id,
            price,
            coupon,
            send_message,
            institution,
            trial,
            subadm,
        })
    },

    async eliminaPlanosDigital(
        token,
        id,

    ) {
        return await http.post('/plano/del', {
            token,
            id,

        })
    },


    async onOff(
        plano_id,
        token,
    ) {
        return await http.post('/plano-digital-on-off', {
            plano_id,
            token,
        })
    },



    async split(
        token,
        fk,
        code,
        porcentagem,
    ) {
        return await http.post('/split/register', {
            token,
            fk,
            code,
            porcentagem,
        })
    },

    async splitUpdate(
        token,
        id,
        fk,
        code,
        porcentagem,
    ) {
        return await http.post('/split/update-info', {
            token,
            id,
            fk,
            code,
            porcentagem,
        })
    },




    async listarSplit(token, fk) {
        return await http.get('/split/list', {
            token, fk
        })
    },

    async deleterSplit(token, id) {
        return await http.post('/split/del', {
            token, id
        })
    },


    async addMetas(
        token,
        instituicao_id,
        ano,
        janeiro,
        fevereiro,
        marco,
        abril,
        maio,
        junho,
        julho,
        agosto,
        setembro,
        outubro,
        novembro,
        dezembro
    ) {
        return await http.post('/save-metas', {
            token,
            instituicao_id,
            ano,
            janeiro,
            fevereiro,
            marco,
            abril,
            maio,
            junho,
            julho,
            agosto,
            setembro,
            outubro,
            novembro,
            dezembro
        })
    },



    async listarMetas(
        token,
        instituicao_id,
        ano,
    ) {
        return await http.get('/list-metas', {
            token,
            instituicao_id,
            ano,

        })
    },

    async cotaInstituicao(
        token,
        instituicao_id,
        codigo_banco,
        agencia,
        agencia_digito,
        conta,
        conta_digito,
        tipo_conta,
        nome_completo,
        documento_numero,
        recebedor_nome,
        email_recebedor,
        site_url,
        telefone_recebedor,

    ) {
        return await http.post('/create-conta-instituicao', {
            token,
            instituicao_id,
            codigo_banco,
            agencia,
            agencia_digito,
            conta,
            conta_digito,
            tipo_conta,
            nome_completo,
            documento_numero,
            recebedor_nome,
            email_recebedor,
            site_url,
            telefone_recebedor,
        })
    },


    async cotaEditarInstituicao(
        token,
        instituicao_id,
        codigo_banco,
        agencia,
        agencia_digito,
        conta,
        conta_digito,
        tipo_conta,
        nome_completo,
        documento_numero,

    ) {
        return await http.post('/update-conta-instituicao', {
            token,
            instituicao_id,
            codigo_banco,
            agencia,
            agencia_digito,
            conta,
            conta_digito,
            tipo_conta,
            nome_completo,
            documento_numero,
        })
    },

    async listarDoacoes(instituicao_id) {
        return await http.get('/list-doacoes', {
            instituicao_id
        })
    },

    async listarDoadores(
        token,
        instituicao_fk) {
        return await http.get('/doador/list', {
            token,
            instituicao_fk
        })
    },

    async visualizarDoador(
        token, cpf) {
        return await http.post('/list-doador', {
            token,
            cpf,

        })
    },

    async listarEmail(instituicao_id) {
        return await http.get('/list-email', {
            instituicao_id
        })
    },

    async alterarEmail(
        instituicao_id,
        assunto,
        corpo,
        status,
        cron
    ) {
        return await http.post('/atualiza-email', {
            instituicao_id,
            assunto,
            corpo,
            status,
            cron
        })
    },


    async recorrenciaDigital(
        token,
        plano_token,
        amount,
        cart_nome,
        cart_numero,
        cart_cvv,
        cart_validade,
    ) {
        return await http.post('/recorrencia-digital', {
            token,
            plano_token,
            amount,
            cart_nome,
            cart_numero,
            cart_cvv,
            cart_validade,
        })
    },



    async savarSmtp(
        token,
        instituicao_id,
        host,
        protocolo,
        porta,
        email,
        senha,
    ) {
        return await http.post('/smtp-save', {
            token,
            instituicao_id,
            host,
            protocolo,
            porta,
            email,
            senha,
        })
    },

    async listarSmtp(
        instituicao_id
    ) {
        return await http.get('/list-smtp', {
            instituicao_id
        })
    },

    async savarEvenda(
        instituicao_id,
        canal,
    ) {
        return await http.post('/save-evendas', {
            instituicao_id,
            canal,
        })
    },

    async listarEvenda(
        instituicao_id
    ) {
        return await http.get('/list-evendas', {
            instituicao_id
        })
    },

    async savarMailBoss(
        instituicao_id,
        token,
        token_uid
    ) {
        return await http.post('/save-mailBoss', {
            instituicao_id,
            token,
            token_uid
        })
    },

    async listarMailBoss(
        instituicao_id
    ) {
        return await http.get('/list-mailBoss', {
            instituicao_id
        })
    },

    async antecipacao(
        token,
        instituicao_id,
        amount,
    ) {
        return await http.post('/antecipacao', {
            token,
            instituicao_id,
            amount,
        })
    },

    async listarCarteira(
        id,
    ) {
        return await http.get('/instituicao/balance', {
            id,
        })
    },

    // DASHBOARD

    async dashboardInstituicao(
        token,
        instituicao_id,
    ) {
        return await http.get('/dashboard-instituicao', {
            token,
            instituicao_id,
        })
    },

    async dashboardAdm(
        token,
    ) {
        return await http.post('/dashboard-adm', {
            token,
        })
    },

    async dashboard(
        token,
    ) {
        return await http.post('/dashboard', {
            token,
        })
    },

}

// editarSubadm