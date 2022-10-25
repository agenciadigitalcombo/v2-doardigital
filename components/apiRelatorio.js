import http from './http.js'

export default class {
    async info(institution_fk) {
        return await http.get('/relatorio', {
            institution_fk,
        })
    }    
}