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
        subdomaim, 
        dominio,
         email, 
         cnpj,
          telefone, 
          recebedor_id,
           cor, 
           logo, 
         

    ) {
        return await http.post('/create-instituicao', {
            nome_fantasia, razao_social, subdomaim, dominio, email, cnpj, telefone, recebedor_id, cor, logo
      })
    },


}

