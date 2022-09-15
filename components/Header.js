import getTemplate from "./getTemplate.js"
import Jwt from "./jwt.js"

export default {
    data: function() {
        return {
            statusSubMenu: false
        }
    },
    methods: {
        toggleSubMenu() {
            this.statusSubMenu = !this.statusSubMenu
        },
        sair() {
            let jwt = new Jwt()
            jwt.logout()
            window.location.href = `//${window.location.host}/login`
        }
    },
    template : await getTemplate( './../components/Header' )
}