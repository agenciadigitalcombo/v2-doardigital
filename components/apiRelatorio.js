import http from './http.js'

export default class {
    async info(institution_fk, ano = null) {
        return await http.get('/relatorio', {
            institution_fk,
            ano
        })
    }    
}