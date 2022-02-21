import get_template from '../../components/get_template.js'
import adm from "../../../../../static/js/api/adm.js" 

export default {
    data: function () {
		return {
            user: null,
            senha: null,
            error: null
        }
    },
	methods: {
        async logar() {
			this.error = null
			
			// localStorage.removeItem('token')
            let res = await adm.login(
                this.user,
                this.senha
            )
            if (!res.next) {
				console.log(res)
                this.error = res.message
                return null
            }
            localStorage.setItem('token', res.token)
            window.location.href = `#/`
        },
        updateForm(event) {
            this[event.name] = event.value
        }
    },
	mounted() {
        this.user = localStorage.getItem('user')
		
    },

    template: await get_template('./assets/js/view/admin/home')
}