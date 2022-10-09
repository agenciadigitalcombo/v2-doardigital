import getTemplate from "./getTemplate.js"
import Jwt from "./jwt.js"
import MyInstitution from "./myInstitution.js"
import ApiInstitution from "./apiInstitution.js"


export default {
    data: function() {
        return {
            statusSubMenu: false,
            institution: null,
            list: []
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
            window.location.reload()
        }
    },
    async mounted() {
        let jwt = new Jwt()
        let Inst = new ApiInstitution()
        
        let ID = jwt.get().code
        let request = await Inst.list(ID)

        if(request.next) {
            this.list = request.payload
        }
    },
    template : await getTemplate( './../components/Header' )
}