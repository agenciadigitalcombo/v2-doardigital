import get_template from '../../components/get_template.js'
import adm from "../../../../../static/js/api/adm.js"
const { required, sameAs, minLength } = window.validators

export default {
    

	data: function () {
		return {
			token: null,
			code: null,
			senha: null,
			repetirsenha: null,
			mostrarsenha: false,
			msg: "",
		   error: null
		}
	},

	validations: {
		senha: {
			required,
			minLength: minLength(8)
		},
		repetirsenha: {
			sameAsPassword: sameAs('senha')
		}
	},

	methods: {
		async alterarSenha() {
			this.error = null

			this.$v.$touch()
			if (this.$v.$invalid) {
				this.submitStatus = 'ERROR'
			} else {
				let res = await adm.alterar_senha(
					this.token,
					this.code,
					this.senha,
				)
				if (!res.next) {
					console.log(res)
					this.error = res.message
					return null
				}
				this.submitStatus = 'PENDING'
				setTimeout(() => {
					this.submitStatus = 'OK'
					this.msg = res.message
				}, 500)
			}
		},

		togleMostraSenha(){
			var show = document.getElementById('senha')
			if(this.mostrarsenha == false){
				this.mostrarsenha =true
				show.type = "text"
			}else {
				this.mostrarsenha = false
				show.type = "password"
			}
		}

	},

	async mounted() {
		this.token = localStorage.getItem('token')
		 let str = this.token.split('.')[0]
		 let encodedStr = atob(str); 
		 var res =  JSON.parse(encodedStr);
		 this.code = res.code

		 
	},


    template: await get_template('./assets/js/view/perfil/seguranca')
}