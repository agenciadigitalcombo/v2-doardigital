import http from './http.js'
 
export default {
    async cadastrar(nome, email, senha, telefone) {
        return await http.post('/criar-adm', {
            nome, email, senha, telefone
        })
    },
    async login(email, senha) {
        return await http.post('/login', {
            email, senha
        })
    },

    async recuperar_senha(email) {
        return await http.post('/recuperar-senha', {
            email
        })
    },

    async alterar_senha(senha, token) {
        return await http.post('/alterar-senha', {
            senha,
            token
        })
    },

    async atualizar(token, nome, cpf, telefone, data_nascimento) {
        return await http.post('/atualizar-adm', {
            token, nome, cpf, telefone, data_nascimento
        })
    },

    async atualizarFinaliza(cpf_cnpj, data_nascimento, tipo, token) {
        return await http.post('/completar-profile', {
            cpf_cnpj, data_nascimento, tipo, token
        })
    },

    async ListarPerfil(token) {
        return await http.get('/profile', {
            token
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
        nome_identificacao,
        cep,
        logradouro,
        numero,
        complemento,
        bairro,
        cidade,
        estado,
    ) {
        return await http.post('/update-endereco', {
            token,
            nome_identificacao,
            cep,
            logradouro,
            numero,
            complemento,
            bairro,
            cidade,
            estado,
        })
    },

    async listarEndereco(token) {
        return await http.get('/endereco', {
            token
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

    async listarCredencial() {
        return await http.get('/list-credencial', {

        })
    },

    async credencial(id) {
        return await http.get('/credencial', {
            id
        })
    },

    async cadastrarCredencia(
        nome_identificacao, recursos) {
        return await http.post('/create-credencial', {
            nome_identificacao,
            recursos,

        })
    },

    async atualizarCredencia(
        id, nome_identificacao, recursos) {
        return await http.post('/update-credencial', {
            id,
            nome_identificacao,
            recursos,
        })
    },

    async deleterCredencia(id) {
        return await http.post('/delete-credencial', {
            id,
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
        credencial_id,
        token,
    ) {
        return await http.post('/criate-subadm', {
            nome,
            email,
            senha,
            telefone,
            credencial_id,
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



    async listarSubadm() {
        return await http.get('/list-subadm', {

        })
    },


    async cadastrarPlanos(
        id,
        instituicao_id,
        nome,
        amount,
        token,
    ) {
        return await http.post('/create-plano', {
            id,
            instituicao_id,
            nome,
            amount,
            token,
        })
    },

    async editarPlanos(
        plano_id,
        nome,
        amount,
        token,
    ) {
        return await http.post('/update-plano', {
            plano_id,
            nome,
            amount,
            token,
        })
    },

    async listarPlanos(instituicao_id) {
        return await http.get('/plano', {
            instituicao_id
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

    async listarPlanoDigital(token) {
        return await http.get('/plano-digital-list', {
            token
        })
    },

    async cadastrarPlanosDigital(
        nome,
        whatsapp,
        instituicao_max,
        quant_disparos,
        codigo_cupom,
        amount,
        token,
    ) {
        return await http.post('/plano-digital-new', {
            nome,
            whatsapp,
            instituicao_max,
            quant_disparos,
            codigo_cupom,
            amount,
            token,
        })
    },


    async editarPlanosDigital(
        plano_id,
        nome,
        token,
    ) {
        return await http.post('/plano-digital-update', {
            plano_id,
            nome,
            token,
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
        instituicao_id,
        recebedor_id,
        responsavel_estorno,
        porcentagem,
        token,
    ) {
        return await http.post('/split-new', {
            instituicao_id,
            recebedor_id,
            responsavel_estorno,
            porcentagem,
            token,
        })
    },

    async splitUpdate(
        id,
        instituicao_id,
        recebedor_id,
        responsavel_estorno,
        porcentagem,
        token,
    ) {
        return await http.post('/split-update', {
            id,
            instituicao_id,
            recebedor_id,
            responsavel_estorno,
            porcentagem,
            token,
        })
    },




    async listarSplit(instituicao_id) {
        return await http.get('/split-list', {
            instituicao_id
        })
    },

    async deleterSplit(id, token) {
        return await http.post('/split-delete', {
            id, token
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

    async listarDoadores(instituicao_id) {
        return await http.get('/list-doadores', {
            instituicao_id
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



    async savarEmail(
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

    async savarEvenda(
        instituicao_id,
        canal,
    ) {
        return await http.post('/save-evendas', {
            instituicao_id,
            canal,
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
        token,
        instituicao_id,) {
        return await http.get('/carteira', {
            token,
            instituicao_id,
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