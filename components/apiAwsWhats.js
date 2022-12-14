import http from './http.js'

export default class {

    async create() {
        return await http.post('/aws-whats/create', {})
    }

    async connect() {
        return await http.post('/aws-whats/connect', {})
    }

    async status() {
        return await http.post('/aws-whats/status', {})
    }

    async close() {
        return await http.post('/aws-whats/close', {})
    }

}