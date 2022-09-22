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
}