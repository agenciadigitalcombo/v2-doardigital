import getTemplate from "./getTemplate.js"
import Jwt from "./jwt.js"
import MyInstitution from "./myInstitution.js"
import ApiInstitution from "./apiInstitution.js"
import ApiAwsWhats from "../components/apiAwsWhats.js"


export default {
    data: function() {
        return {
            Inst: "",
            editInst: "",
            statusSubMenu: false,
            statusSubMenu1: false,
            institution: '',
            corWhats: '',
            list: []
        }
    },
    methods: {
        toggleSubMenu() {
            this.statusSubMenu = !this.statusSubMenu
        },
        toggleSubMenu1() {
            this.statusSubMenu1 = !this.statusSubMenu1
        },
        sair() {
            let jwt = new Jwt()
            jwt.logout()
            localStorage.removeItem('institution')
            window.location.href = `//${window.location.host}/login`
        },
        setInstitution() {
            let institution = new MyInstitution()
            institution.save(this.institution)
            window.location.reload()
        },
        async statusWhats() {
            let apiWhats = new ApiAwsWhats()
            let lbWhats = {
                CONNECTED: '#25d366',
                CLOSED: '#CC0000',
            }    
            let res = await apiWhats.status()
            let status =  res.payload.status
            this.corWhats = lbWhats[status]
        }
    },
    watch: { 
        '$route.params.search': {
          handler: function(search) {
            this.statusWhats()
          },
          deep: true,
          immediate: true
        }
      },
    async mounted() {
        let jwt = new Jwt()
        let Inst = new ApiInstitution()
        let MyInst = new MyInstitution()        

        this.Inst = MyInst.get()
        
        let ID = jwt.get().code
        let request = await Inst.list(ID)
        this.editInst = Inst.get()

        if(request.next) {
            this.list = request.payload
        }
        this.institution = this.Inst

        this.statusWhats()        
       
    },
    template : await getTemplate( './../components/Header' )
}