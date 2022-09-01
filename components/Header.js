import getTemplate from "./getTemplate.js"

export default {
    data: function() {
        return {
            statusSubMenu: false
        }
    },
    methods: {
        toggleSubMenu() {
            this.statusSubMenu = !this.statusSubMenu
        }
    },
    template : await getTemplate( './../components/Header' )
}