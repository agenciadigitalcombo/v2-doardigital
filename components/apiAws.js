import http from './http.js'

export default class {

    async registrar(institution_fk, email) {
        return await http.post('/aws/register-email', {
            institution_fk,
            email
        })
    }

    async apagar(institution_fk, email) {
        return await http.post('/aws/remove-email', {
            institution_fk,
            email,
        })
    }

}