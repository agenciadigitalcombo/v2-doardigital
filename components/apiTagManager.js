import http from './http.js'

export default class {

    async save(instituicao_fk, key) {
        return await http.post('/tag-manager/save', {
            instituicao_fk,
            key,
        })
    }

    async info(instituicao_fk) {
        return await http.get('/tag-manager/info', {
            instituicao_fk,
        })
    }

}