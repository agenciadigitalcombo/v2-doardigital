import getTemplate from "./getTemplate.js"
import Jwt from "./jwt.js"
import MyInstitution from "./myInstitution.js"

export default {
    data: function() {
        return {
            statusSubMenu: false,
            institution: null,
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
        },
        setInstitution() {
            let institution = new MyInstitution()
            institution.save(this.institution)
        }
    },
    template : await getTemplate( './../components/Header' )
}