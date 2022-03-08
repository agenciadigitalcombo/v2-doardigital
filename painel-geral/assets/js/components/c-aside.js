import get_template from './get_template.js'
import menus from '../vendor/lista-menu.js'

export default {
    data: function () {
        return {
            title: "aside",
            menus,
            lista: [],
        }
    },

    async mounted() {
        this.lista = this.menus
    },

    methods: { 

        async logout() {
            localStorage.removeItem('token')
            localStorage.removeItem('instituicao_nome')
            localStorage.removeItem('instituicao_id')

            window.location.href = "#/login";
        },

    },

    template: await get_template('./assets/js/components/c-aside')
}