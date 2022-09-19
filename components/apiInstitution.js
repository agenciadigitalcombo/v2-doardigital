import http from './http.js'

export default class myInstitution {
    async get( fk_domain ) {
        return await http.get('/api/instituicao/info', {
            domain: fk_domain
        })
    }
}