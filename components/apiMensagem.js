import http from './http.js'

export default class {
    async info(institution_fk) {
        return await http.post('/message-aws/list', {
            institution_fk
        })
    }
}