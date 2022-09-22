import http from './http.js'

export default class {

    async save( instituicao_fk, canal ) {
        return await http.post('/evendas/save', {
            instituicao_fk,
            canal,
        })
    }
    
    async info( instituicao_fk ) {
        return await http.get('/evendas/info', {
            instituicao_fk,
        })
    }

}