import http from './http.js'

export default class {
    async listar(
        instituicao_fk
    ) {
        return await http.get('/whats-template/list', {
            instituicao_fk
        })
    }
    async salvar(
        tipo,
        instituicao_fk,
        status_pagamento,
        content
    ) {
        return await http.post('/whats-template/save', {
            tipo,
            instituicao_fk,
            status_pagamento,
            content,
        })
    }
    async recupera(
        tipo,
        instituicao_fk,
        status_pagamento
    ) {
        return await http.post('/whats-template/recover', {
            tipo,
            instituicao_fk,
            status_pagamento
        })
    }
    async install(
        instituicao_fk
    ) {
        return await http.post('/whats-template/install', {
            instituicao_fk,
        })
    }
    async info(
        tipo,
        instituicao_fk,
        status_pagamento
    ) {
        return await http.post('/whats-template/info', {
            tipo,
            instituicao_fk,
            status_pagamento
        })
    }
}