import get_template from '../../components/get_template.js'

export default {
    data: function () {
        return {
            title: "Contato",
            cpf_cnpj: null,
			data_nascimento: null,
			token: null,
        }
    },
    methods: {
		async finalizarAdm() {
			this.error = null

			let res = await adm.atualizarFinaliza(
				this.cpf_cnpj,
				this.data_nascimento,
				this.token
				
			)
			if (!res.next) {
				console.log(res)
				this.error = res.message
				return null
			}
			window.location.href = `#/checkout_endereco`
		},
	 

    },
	

	async mounted() {
		this.token = localStorage.getItem('token') 
	
	},
    template: await get_template('./assets/js/view/contato/home')
}