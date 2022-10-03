import http from './http.js'

export default class {

    async listarCredencial() {
        return await http.get('/credencial/list', {
        })
    }

    async credencial(token, id) {
        return await http.get('/credencial/info', {
            token, id
        })
    }

    async cadastrarCredencia(
        token, nome, recursos) {
        return await http.post('/credencial/register', {
            token,
            nome,
            recursos,
        })
    }

    async atualizarCredencia(
        token, nome, recursos, id) {
        return await http.post('/credencial/update-info', {
            token,
            nome,
            recursos,
            id,
        })
    }

    async deleterCredencia(token, id) {
        return await http.post('/credencial/del', {
            token, id
        })
    }

}