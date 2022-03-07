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

    template: await get_template('./assets/js/components/c-aside')
}