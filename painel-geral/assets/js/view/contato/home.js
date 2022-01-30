import get_template from '../../components/get_template.js'

export default {
    data: function () {
        return {
            title: "Contato"
        }
    },
    template: await get_template('./assets/js/view/contato/home')
}