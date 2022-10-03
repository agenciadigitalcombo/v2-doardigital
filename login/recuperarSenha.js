const { createApp, h } = Vue
import apiAdmin from "../components/apiAdmin.js"
import Jwt from "../components/jwt.js"

createApp({
    data() {
        return { 
            email: 'super@digitalcombo.com.br',
            pass: 'Seraph@121',
            onerror: null,
            statusBtn: true
        }
    },   
    methods: {
        redirect() {
            window.location.href = `//${window.location.host}/painel-new`
        },
        async login() {
            this.onerror = null
            this.statusBtn = false
            let api = new apiAdmin()
            let jwt = new Jwt()
            let request = await api.login(this.email,this.pass)
            this.statusBtn = true
            if( !request.next ) {
                this.onerror = request.message
                return null
            }
            jwt.save( request.payload.token )
            this.redirect()            
        }
    },
    mounted() {
        let jwt = new Jwt()
        if(jwt.logged()) {
            this.redirect()
        }
    }
}).mount('#app')