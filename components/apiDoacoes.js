import http from './http.js'

export default class {
    async lista(instituicao_fk) {
        return await http.get('/instituicao/donation', {
            instituicao_fk
        })
    }

}