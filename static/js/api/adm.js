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

    async atualizar(nome, telefone, cpf) {
        return await http.post('/atualizar-adm', {
            nome, telefone, cpf
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
        nome_identificacao,
        cep, logradouro, numero,
        complemento, bairro, cidade, estado, token
    ) {
        return await http.post('/update-endereco', {
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
        sub_domain,
        email,
        cor,
        logo,
        cnpj,
        telefone,
        token,

    ) {
        return await http.post('/create-instituicao', {
            nome_fantasia,
            razao_social,
            sub_domain,
            email,
            cor,
            logo,
            cnpj,
            telefone,
            token,
        })
    },

    async alterarInstituicao(
        id,
        nome_fantasia,
        razao_social,
        sub_domain,
        email,
        cor,
        logo,
        cnpj,
        telefone,
        token,

    ) {
        return await http.post('/update-instituicao', {
            id,
            nome_fantasia,
            razao_social,
            sub_domain,
            email,
            cor,
            logo,
            cnpj,
            telefone,
            token,
        })
    },
 

    async listarInstutuicao(token) {
        return await http.get('/list-instituicao', {
            token
        })
    },

    async enderecoInstituicao(
        id, nome_identificacao, cep, logradouro, numero, complemento, bairro, cidade, estado, token) {
        return await http.post('/endereco-instituicao', {
            id,
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
        id,
        nome,
        amount,
        token,
    ) {
        return await http.post('/update-plano', {
            id,
            nome,
            amount,
            token,
        })
    },

    async listarPlanos(token) {
        return await http.get('/list-plano', {
            token
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

}


// editarSubadm