import get_template from '../../components/get_template.js'

export default {
    data: function () {
        return {
            title: "Minha Assinatura"
        }
    },
    template: await get_template('./assets/js/view/minha_assinatura/home')
}