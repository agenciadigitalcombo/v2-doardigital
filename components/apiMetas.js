import http from './http.js'

export default class {

    async save(
        instituicao_fk,
        ano,
        janeiro,
        fevereiro,
        marco,
        abril,
        maio,
        junho,
        julho,
        agosto,
        setembro,
        outubro,
        novembro,
        dezembro
    ) {
        return await http.post('/metas/save', {
            instituicao_fk,
            ano,
            janeiro,
            fevereiro,
            marco,
            abril,
            maio,
            junho,
            julho,
            agosto,
            setembro,
            outubro,
            novembro,
            dezembro
        })
    }

    async get(
        instituicao_fk,
        ano,
    ) {
        return await http.get('/metas/info', {
            instituicao_fk,
            ano
        })
    }
}