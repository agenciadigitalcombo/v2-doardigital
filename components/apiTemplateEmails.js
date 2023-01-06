import http from './http.js'

export default class {

    async listarEmail(
        instituicao_fk
    ) {
        return await http.get('/email-template/list', {
            instituicao_fk
        })
    }

    async salvarEmail(
        tipo,
        instituicao_fk,
        status_pagamento,
        assunto,
        content,
    ) {
        return await http.post('/email-template/save', {
            tipo,
            instituicao_fk,
            status_pagamento,
            assunto,
            content,
        })
    }

    async recuperaEmail(
        tipo,
        instituicao_fk,
        status_pagamento
    ) {
        return await http.post('/email-template/recover', {
            tipo,
            instituicao_fk,
            status_pagamento
        })
    }

    async info(
        tipo,
        instituicao_fk,
        status_pagamento
    ) {
        return await http.post('/email-template/info', {
            tipo,
            instituicao_fk,
            status_pagamento
        })
    }

    async reset(
        instituicao_fk,
    ) {
        return await http.post('/email-template/reset', {
            instituicao_fk
        })
    }

}