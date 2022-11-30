import http from './http.js'

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
    ) {
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
        }
        return await http.post('/fatura/create', payload)
    }
}