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

    async recuperar_email(email) {
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

    async atualizarFinaliza(cpf_cnpj, data_nascimento, token) {
        return await http.post('/completar-profile', {
            cpf_cnpj, data_nascimento, token
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
        nome_fantasia,
        razao_social,
        subdomaim,
        email,
        cnpj,
        telefone,
        token,

    ) {
        return await http.post('/create-instituicao', {
            nome_fantasia,
            razao_social,
            subdomaim,
            email,
            cnpj,
            telefone,
            token,
        })
    },
    async validarDomain(subdomaim) {
        return await http.get('/subdominio-disponivel', {
            subdomaim
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
        return await http.post('/create-endereco', {
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

    
    async EditarEnderecoInstituicao(
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
        secret,
        email,
        token,
    ) {
        return await http.post('/atualizar-subadm', {
            nome,
            telefone,
            credencial_id,
            secret,
            email,
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
        instituicao_id,
        nome,
        amount,
        token,
    ) {
        return await http.post('/update-plano', {
            instituicao_id,
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
        token,
        instituicao_id,
        mensal,
        planos_id,
        planos_valor,
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
            token,
            instituicao_id,
            mensal,
            planos_id,
            planos_valor,
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

    async listarPlanoDigital(token) {
        return await http.get('/plano-digital-list', {
            token
        })
    },

    async cadastrarPlanosDigital(
        nome,
        whatsapp,
        instituicao_max,
        amount,
        token,
    ) {
        return await http.post('/plano-digital-new', {
            nome,
            whatsapp,
            instituicao_max,
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

}

// editarSubadm