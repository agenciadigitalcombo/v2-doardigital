import http from './http.js'

export default class {

    async cadastrar(nome, email, senha, telefone) {
        return await http.post('/adm/register', {
            nome, email, senha, telefone
        })
    }

    async login(email, senha) {
        return await http.post('/adm/login', {
            email, senha
        })
    }

    async recuperarSenha(email) {
        return await http.post('/adm/recover-pass', {
            email
        })
    }

    async alterarSenha(token, code, senha) {
        return await http.post('/adm/alter-pass', {
            token,
            code,
            senha
        })
    }
    
    async update(
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
    }

    async getPerfil(token, code) {
        return await http.get('/adm/info', {
            token, code
        })
    }

    async addAddress(
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
    }

    async updateAddress(
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
    }

    async getAddress(token, code,) {
        return await http.get('/adm/address-info', {
            token, code,
        })
    }
}