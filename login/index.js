const { createApp, h } = Vue
import apiAdmin from "../components/apiAdmin.js"
import Jwt from "../components/jwt.js"

createApp({
    data() {
        return {
            email: 'super@digitalcombo.com.br',
            pass: '123456789',
            onerror: null,
            statusBtn: true
        }
    },
    methods: {
        redirect(level) {
            let lb = {
                sub: 'painel-sub',
                adm: 'painel-new',
                super: 'painel-super',
            }
            window.location.href = `//${window.location.host}/${lb[level]}`
        },
        async login() {
            this.onerror = null
            this.statusBtn = false
            let api = new apiAdmin()
            let jwt = new Jwt()
            let request = await api.login(this.email, this.pass)
            this.statusBtn = true
            if (!request.next) {
                this.onerror = request.message
                return null
            }
            jwt.save(request.payload.token)
            let code = jwt.get().code
            let requestInfo = await api.info(code)
            console.log(requestInfo)
            let level = 'sub'
            if (requestInfo.payload.adm.length == 0) {
                level = 'adm'
            }
            if (requestInfo.payload.sass == '1') {
                level = 'super'
            }
            this.redirect(level)
        }
    },
    async mounted() {
        let api = new apiAdmin()
        let jwt = new Jwt() 
        let code = jwt.get()?.code
        let requestInfo = await api.info(code)      
        let level = 'sub'
        if (requestInfo?.payload?.adm?.length == 0) {
            level = 'adm'
        }
        if (requestInfo?.payload?.sass == '1') {
            level = 'super'
        }
        if (jwt.logged()) {
            this.redirect(level)
        }
    }
}).mount('#app')