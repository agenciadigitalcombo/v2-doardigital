import get_template from '../components/get_template.js'
import adm from "../../../../../static/js/api/adm.js"
const { required, minLength, maxLength } = window.validators

export default {
  
	data: function () {
		return {
			
			id: null,
			nome_identificacao: 'admin',
			cep: null,
			logadouro: null,
			numero: null,
			complemento: null,
			bairro: null,
			cidade: null,
			estado: null,
			secret: null,
			token: null,
			cepErro: null,
			disabled: false

        }
    },

	validations: {
		cep: {
			required,
			minLength: minLength(8)
		},

	},

	methods: {
	
		async editarEndereco() {
			this.error = null

			let res = await adm.atualizarEndereco(
				this.token,
				this.nome_identificacao,
				this.cep,
				this.logadouro,
				this.numero,
				this.complemento,
				this.bairro,
				this.cidade,
				this.estado,

			)
			if (!res.next) {
				// this.error = res.message
				this.msg = res.message
				return null
			}

			globalThis._identificacao = this.nome_identificacao
			globalThis._cep = this.cep
			globalThis._logadouro = this.logadouro
			globalThis._numero = this.numero
			globalThis._complemento = this.complemento
			globalThis._bairro = this.bairro 
			globalThis._cidade= this.cidade
			globalThis._estado = this.estado 

			window.location.href = `#/checkout_plano`
		},

		searchCep() {
            let cep = this.cep
            cep = cep.replace(/\D/gi, '')
            if (cep.length == 8) {
                axios.get(`https://viacep.com.br/ws/${cep}/json/`)
                    .then(response => {
                        this.error = ""
                        this.logadouro = response.data.logradouro,
                            this.bairro = response.data.bairro,
                            this.cidade = response.data.localidade,
                            this.estado = response.data.uf

                        if (response.data.erro) {
                            this.cepErro = "Número do CEP inválido...!"
							this.disabled = true
                        } else {
							this.cepErro = ""
							this.disabled = false
						}
                    }
                    )
                    .catch(error =>
                        error
                    )
            }
        },

		mask_cep() {
            let mascara = this.cep
            mascara = mascara.replace(/\D/gi, '')
            mascara = mascara.replace(/(\d{5})(.*)/gi, '$1-$2')
            mascara = mascara.replace(/(\d{4}\s)(\d{1,3})(.*)/gi, '$1-$2')
            this.cep = mascara
        },
 

    },
	
	created() {

		      this.token = localStorage.getItem('token')

 				this.nome_identificacao = globalThis._identificacao 
 				this.cep = globalThis._cep
 				this.logadouro= globalThis._logadouro 
 				this.numero= globalThis._numero
 				this.complemento= globalThis._complemento
 				this.bairro = globalThis._bairro 
 				this.cidade= globalThis._cidade
 				this.estado = globalThis._estado 
	},
	

    template: await get_template('./assets/js/view/checkout_endereco')
}