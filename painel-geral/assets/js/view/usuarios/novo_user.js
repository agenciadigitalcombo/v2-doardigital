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
			credencial: "",
			token: null,
			code: null,
			lista_credencial: [],
			lista_instituicao: [],
			instituicao_id:  [],
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
				this.credencial,
				this.code,
				this.token,
 
			)
			if (!res.next) {
				this.error = res.message
				return null
			}
			
			window.location.href = `#/usuarios`
		}
	},

		async listar() {
			let res = await adm.listarCredencial(localStorage.getItem('token'))
			return res
		},

		async listarInstit() {
			let res = await adm.listarInstutuicao(localStorage.getItem('token'))
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
       this.lista_credencial = (await this.listar()).payload 

	   this.token = localStorage.getItem('token')
	   let str = this.token.split('.')[0]
	   let encodedStr = atob(str); 
	   var res =  JSON.parse(encodedStr);
	   this.code = res.code
	   
	   this.lista_instituicao = (await this.listarInstit()).dados || {}
	   this.nome_fantasia = this.lista_instituicao.nome_fantasia,
	   this.subdomaim = this.lista_instituicao.subdomaim,
	   this.id = this.lista_instituicao.id

	},


	created() {


	},

    template: await get_template('./assets/js/view/usuarios/novo_user')
}
 