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

    async atualizar_adm(nome, telefone, cpf) {
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
         nome_identificacao,cep, logradouro, numero, complemento, bairro, cidade, estado, token) {
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
   nome_identificacao,cep, logradouro, numero, complemento, bairro, cidade, estado, token) {
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

    async listarEndereco(  nome_identificacao,cep, logradouro, numero, complemento, bairro, cidade, estado, token) {
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

    async listarEn(token) {
        return await http.get('/list-endereco', {
      token
        })
    },
}

