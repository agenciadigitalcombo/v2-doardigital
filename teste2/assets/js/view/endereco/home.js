import get_template from '../../components/get_template.js'

export default {
    data: function () {
        return {
            title: "Endereco",
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
        }
    },

    /*FALTA COLOCAR VALIDATIONS ... TIREI PORQUE PAROU DE FUNCIONAR
    validations: {
		cep: {
			required,
			minLength: minLength(8)
		},

	},
    */

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
	},
    
    template: await get_template('./assets/js/view/endereco/home')
}