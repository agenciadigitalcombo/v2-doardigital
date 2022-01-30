import get_template from '../../components/get_template.js'

export default {
    data: function () {
        return {
            title: "Instituições"
        }
    },
    template: await get_template('./assets/js/view/instituicoes/home')
}