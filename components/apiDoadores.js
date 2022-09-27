import http from './http.js'

export default class {
    async lista(instituicao_fk) {
        return await http.get('/doador/list', {
            instituicao_fk
        })
    }

    async info(instituicao_fk, cpf) {
        return await http.get('/doador/info', {
            instituicao_fk,
            cpf
        })
    }

    async detalhe(fk) {
        return await http.get('/doador/detalhe', { fk })
    }

    async new_note(doador_fk, author_fk, author_name, message) {
        return await http.post('/doador/note', {
            doador_fk,
            author_fk,
            author_name,
            message,
        })
    }

    async update_info(
        instituicao_fk,
        doador_fk,
        customer_id,
        nome,
        cpf,
        telefone,
        email,
        cep,
        logadouro,
        numero,
        complemento,
        bairro,
        cidade,
        estado
    ) {
        return await http.post('/doador/update-info', {
            instituicao_fk,
            external_fk: doador_fk,
            customer_id,
            nome,
            cpf,
            telefone,
            email,
            cep,
            logadouro,
            numero,
            complemento,
            bairro,
            cidade,
            estado,
        })
    }
}