import http from './http.js'

export default class {
    async listarPlanoDigital(fk) {
        return await http.get('/plano/list', {
            fk
        })
    }

}