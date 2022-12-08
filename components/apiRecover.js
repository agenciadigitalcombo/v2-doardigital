import http from './http.js'

export default class {

    async save(
        institution_fk,
        email,
        valor,
        recorrente,
        protocolo = null,
        nome = null,
        telefone = null,
        cpf = null,
        tipo_pagamento = null
    ) {
        return await http.get('/recover/save', {
            institution_fk,
            email,
            valor,
            recorrente,
            protocolo,
            nome,
            telefone,
            cpf,
            tipo_pagamento,
        })
    }

    async info(protocolo) {
        return await http.post('/recover/info', {
            protocolo
        })
    }

    async finalizar(protocolo) {
        return await http.post('/recover/finalizar', {
            protocolo
        })
    }

    setProtocolo(protocolo) {
        localStorage.setItem('protocolo_de_recover', protocolo)
    }

    getProtocolo() {
        return localStorage.getItem('protocolo_de_recover')
    }

    clearProtocolo() {
        localStorage.removeItem('protocolo_de_recover')
    }

    existProtocolo() {
        const url = new URL(window.location.href.replace('#/'))
        return url.searchParams.get('protocolo')
    }

}