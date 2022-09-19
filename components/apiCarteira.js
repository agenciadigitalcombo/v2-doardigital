import http from './http.js'

export default class {
    async listarCarteira(institution_fk) {
        return await http.get('/instituicao/balance', {
            institution_fk
        })
    }

}