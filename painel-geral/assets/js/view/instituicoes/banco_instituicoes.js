import get_template from '../../components/get_template.js'
import adm from "../../../../../static/js/api/adm.js"
const { required, maxLength, minLength, between } = window.validators

export default { 
	
	data: function () {
		return { 
			token: null,
			instituicao_id: null,
			codigo_banco: null,
			agencia: null, 
			conta: null,
			conta_digito: null,
			tipo_conta: "",
			nome_completo: null,
			documento_numero: null,
			recebedor_nome: null,
			email_recebedor: null,
			cnpj: null,
			site_url: null,
			telefone_recebedor: null,
			  
			msg: "",
			items: [],
			data: null,

		}
	},

	validations: {
		codigo_banco: {
			required,
			maxLength: maxLength(3)
		},
		agencia: {
			required,
			maxLength: maxLength(4)
		},
		conta: {
			required,
			maxLength: maxLength(13)
		},
		conta_digito: {
			required,
			maxLength: maxLength(2)
		},
		nome_completo: {
			required,
			maxLength: maxLength(30)
		}
	},

	methods: {
		async contaBancario() {
			this.error = null
			this.$v.$touch()
			if (this.$v.$invalid) {
				this.submitStatus = 'ERROR'
			} else {
				let res = await adm.cotaInstituicao(
					this.token,
					this.instituicao_id,
					this.codigo_banco,
					this.agencia,
					this.agencia_digito,
					this.conta,
					this.conta_digito,
					this.tipo_conta,
					this.nome_completo,
					this.documento_numero,
					this.recebedor_nome,
					this.email_recebedor, 
					this.cnpj,
					this.site_url,
					this.telefone_recebedor,
				)
				if (!res.next) {
					// this.error = res.message
					this.msg = res.message
					return null
				} 
				this.submitStatus = 'PENDING'
				setTimeout(() => {
				  this.submitStatus = 'OK'
				  this.msg = res.message 
				}, 500)
				window.location.href = "#/instituicoes"
			}
		},
 

	},

	async mounted() {
		this.instituicao_id = localStorage.getItem("instituicao_id"); 
	 },

    template: await get_template('./assets/js/view/instituicoes/banco_instituicoes')
}