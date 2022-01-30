import get_template from '../../components/get_template.js'

export default {
    data: function () {
        return {
            title: "Meu Perfil"
        }
    },
    template: await get_template('./assets/js/view/perfil/home')
}