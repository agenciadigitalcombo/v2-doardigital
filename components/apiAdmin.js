import http from './http.js'

export default class {

    async cadastrar(nome, email, senha, telefone) {
        return await http.post('/adm/register', {
            nome, email, senha, telefone
        })
    }

    async cadastrar_sub(nome, fk_admin, email, senha, telefone, credencial) {
        return await http.post('/adm/sub/register', {
            nome,
            code: fk_admin,
            email,
            senha,
            telefone,
            credencial,
        })
    }

    async login(email, senha) {
        return await http.post('/adm/login', {
            email, senha
        })
    }

    async recuperar_senha(email) {
        return await http.post('/adm/recover-pass', {
            email
        })
    }

    async alterar_senha(fk_admin, new_senha) {
        return await http.post('/adm/alter-pass', {
            code: fk_admin,
            senha: new_senha
        })
    }

    async update(
        code,
        nome,
        cpf,
        nascimento,
        telefone,
        credencial
    ) {
        return await http.post('/adm/update-info', {
            code,
            nome,
            cpf,
            nascimento,
            telefone,
            credencial
        })
    }

    async info(token, code) {
        return await http.get('/adm/info', {
            token, code
        })
    }

    async save_address(fk_admin, cep, logradouro, numero, complemento, bairro, cidade, estado) {
        return await http.post('/adm/address', {
            code: fk_admin,
            cep,
            logradouro,
            numero,
            complemento,
            bairro,
            cidade,
            estado,
        })
    }

    async info_address(fk_admin) {
        return await http.get('/adm/address-info', {
            code: fk_admin,
        })
    }

    async step(fk_admin, number) {
        return await http.post('/adm/step', {
            number,
            code: fk_admin,
        })
    }

    async list_all() {
        return await http.get('/adm/list', {})
    }

    async list_all_subs(fk_admin) {
        return await http.get('/adm/list/sub', {
            code: fk_admin,
        })
    }

    async is_logged() {
        return await http.get('/adm/logged', {})
    }
}