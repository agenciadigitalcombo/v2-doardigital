import get_template from '../../components/get_template.js'
import adm from "../../../../../static/js/api/adm.js" 

export default {
    data: function () {
		return {
            email: null, 
            error: null,
			msg: null
        }
    },
	methods: {
        async recuperarSenha() {
			this.error = null
			
            let res = await adm.recuperar_senha(
                this.email, 
            )
            if (!res.next) { 
                this.error = res.message
                return null
            }
			this.msg = res.message
           //  window.location.href = `#/`
        },
        
    }, 

    template: await get_template('./assets/js/view/admin/recuperar_senha')
}