import http from './http.js'

export default class {

    async listarPlanoDigital(fk) {
        return await http.get('/plano/list', {
            fk
        })
    }

    async info(id) {
        return await http.get('/plano/info', {
            id
        })
    }

    async criar(institution_fk, price, coupon = "", numero_mensagens = 0, max_institution = 0, days_trial = 0, quantidade_sub_admin = 1) {
        return await http.post('/plano/register', {
            fk: institution_fk,
            price,
            coupon,
            send_message: numero_mensagens,
            institution: max_institution,
            trial: days_trial,
            subadm: quantidade_sub_admin,
        })
    }

    async update(id, institution_fk, price, coupon = "", numero_mensagens = 0, max_institution = 0, days_trial = 0, quantidade_sub_admin = 1) {
        return await http.post('/plano/update-info', {
            fk: institution_fk,
            id,
            price,
            coupon,
            send_message: numero_mensagens,
            institution: max_institution,
            trial: days_trial,
            subadm: quantidade_sub_admin,
        })
    }
    
    async delete(id) {
        return await http.post('/plano/del', {
            id,
        })
    }

}