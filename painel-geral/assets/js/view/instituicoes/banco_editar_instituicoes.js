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

		async contaBancarioEditar() {
			this.error = null
			this.$v.$touch()
			if (this.$v.$invalid) {
				this.submitStatus = 'ERROR'
			} else {
				let res = await adm.cotaEditarInstituicao(
					this.token,
					this.instituicao_id,
					this.codigo_banco,
					this.agencia,
					this.agencia_digito,
					this.conta,
					this.conta_digito,
					this.tipo_conta,
					this.nome_completo,
					this.documento_numero
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
 
		async listarBanco() {
			let res = await adm.listarBancoInst( 
				this.instituicao_id
			)
			return res
		},

	},

	async mounted() {
		let banco = (await this.listarBanco()).dados || {}   
		this.cep = banco.cep
		this.token = banco.token
		this.codigo_banco = banco.codigo_banco
		this.agencia = banco.agencia
		this.conta_digito = banco.conta_digito
		this.conta = banco.conta
		this.tipo_conta = banco.tipo_conta
		this.nome_completo = banco.nome_completo
		this.documento_numero = banco.documento_numero
	 },

	 created() {
		this.instituicao_id = globalThis._instituicao.id
		this.id = globalThis._instituicao.id
	},

    template: await get_template('./assets/js/view/instituicoes/banco_editar_instituicoes')
}