import http from './http.js'
import ApiViaCep from './ApiViaCep.js'

export default class {
    async finalizar(
        instituicao_fk,
        valor,
        recorrente,
        email,
        nome,
        cpf,
        telefone,
        cep,
        numero,
        tipo_pagamento,
        card_nome,
        card_numero,
        card_cvv,
        card_validade,
        nextDueDate = 0
    ) {
        cep = cep.replace(/\D/gi, '')
        let address = {}
        
        if (cep.length == 8) {
            let requestViaCep = await ApiViaCep(cep)
            address = {
                estado: requestViaCep?.uf,
                logadouro: requestViaCep?.logradouro,
                complemento: '',
                bairro: requestViaCep?.bairro,
                cidade: requestViaCep?.bairro,
            }
        }
        let payload = {
            instituicao_fk,
            valor,
            recorrente,
            email,
            nome,
            cpf,
            telefone,
            cep,
            numero,
            tipo_pagamento,
            card_nome,
            card_numero,
            card_cvv,
            card_validade,
            sexo: '',
            nextDueDate
        }
        return await http.post('/fatura/create', { ...payload, ...address })
    }
    async status( id ) {
        return await http.post('/instituicao/fatura-status', { id })
    }
}