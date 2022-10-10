import http from './http.js'

export default class {

    async listar() {
        return await http.get('/credencial/list', {})
    }

    async info(id) {
        return await http.get('/credencial/info', {
            id
        })
    }

    async cadastrar(nome, recursos) {
        return await http.post('/credencial/register', {
            nome,
            recursos,
        })
    }

    async update(nome, recursos, id) {
        return await http.post('/credencial/update-info', {
            nome,
            recursos,
            id,
        })
    }

    async delete(id) {
        return await http.post('/credencial/del', {
            id
        })
    }

}