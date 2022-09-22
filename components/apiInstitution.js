import http from './http.js'

export default class myInstitution {

    async get(fk_domain) {
        return await http.get('/api/instituicao/info', {
            domain: fk_domain
        })
    }

    async list(adm_fk) {
        return await http.get('/instituicao/list', {
            adm_fk
        })
    }

    async add_admin(institution_fk, adm_fk, action) {
        return await http.post('/instituicao/set-adm', {
            institution_fk,
            adm_fk,
            action,
        })
    }

    async update(
        institution_fk,
        nome,
        email,
        telefone,
        domain,
        logo,
        icon,
        cor,
        titulo,
        tags,
        descricao,
        cep,
        logradouro,
        numero,
        complemento,
        bairro,
        cidade
    ) {
        return await http.post('/instituicao/update-info', {
            institution_fk,
            nome,
            email,
            telefone,
            domain,
            logo,
            icon,
            cor,
            titulo,
            tags,
            descricao,
            cep,
            logradouro,
            numero,
            complemento,
            bairro,
            cidade,
            estado,
        })
    }

}