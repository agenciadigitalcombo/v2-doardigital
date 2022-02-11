import get_template from '../../components/get_template.js'
import adm from "../../../../../static/js/api/adm.js"
const { required, sameAs, minLength, between, email } = window.validators

export default {
 


	data: function () {
		return {

			id: null,
			nome: null,
			email: null,
			senha: null,
			repetirsenha: null,
			mostrarsenha: false,
			telefone: null,
			credencial_id: "",
			token: null,
			sicret: null,
			lista_credencial: [],
			id: null,
			nome_identificacao: null,
			recursos: null,
			msg: null,
			error: null,
			jms: true,

		}
	},

	validations: {
		senha: {
			required,
			minLength: minLength(8)
		},
		repetirsenha: {
			sameAsPassword: sameAs('senha')
		},
	
	},

	methods: {
		async addUsuario() {
			this.error = null
			this.$v.$touch() 
			if (this.$v.$invalid) {
				this.submitStatus = 'ERROR'
			} else {

			let res = await adm.cadastrarSubadm(
				this.nome,
				this.email,
				this.senha,
				this.telefone,
				this.credencial_id,
				this.token,
			)
			if (!res.next) {
				this.error = res.message
				return null
			}
			this.submitStatus = 'PENDING'
			setTimeout(() => {
				this.submitStatus = 'OK'
				window.location.href = `#/usuarios`
				
			}, 500)
		}
	},

		async listar() {
			let res = await adm.listarCredencial(localStorage.getItem('token'))
			return res
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
       this.lista_credencial = (await this.listar()).dados 
	},


	created() {


	},

    template: await get_template('./assets/js/view/usuarios/novo_user')
}
 