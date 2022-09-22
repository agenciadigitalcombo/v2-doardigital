import http from './http.js'

export default class {

    async lista(institution_fk) {
        return await http.get('/instituicao/donation', {
            institution_fk
        })
    }

}