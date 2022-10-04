import http from './http.js'

export default class {

    async lista(institution_fk) {
        return await http.get('/instituicao/donation', {
            institution_fk
        })
    }

    async sub_cancel(institution_fk, sub_fk) {
        return await http.post('/instituicao/subscription-cancel', {
            institution_fk,
            sub_fk,
        })
    }

    async sub_update(institution_fk, sub_fk, type, value, data) {
        return await http.post('/instituicao/subscription-update', {
            institution_fk,
            sub_fk,
            billingType: type,
            value,
            nextDueDate: data,
        })
    }
    async fatura_update(
        institution_fk,
        fatura_fk,
        value,
        billingType,
        dueDate,
        customer
    ) {
        return await http.post('/instituicao/fatura-update', {
            institution_fk,
            fatura_fk,
            value,
            billingType,
            dueDate,
            customer,
        })
    }

}