import get_template from './get_template.js'
import adm from "../../../../static/js/api/adm.js"

export default {
    data: function () {
        return {
            gravatar: '',
			token: null,
			nome: null,
			email: null,
 
			logadouro: null,
			bairro: null,
			cidade: null,
			estado: null,
			secret: null,
			token: null,
        }
    },
	
    async mounted() {
		let dados = (await this.listar()).dados
		this.nome = dados.nome
		this.email = dados.email
		this.gravatar = dados.gravatar
    
		let enderecoDados = (await this.listarEndereco()).dados || {}
        this.logadouro = enderecoDados.logadouro
		this.bairro = enderecoDados.bairro
		this.cidade = enderecoDados.cidade
		this.estado = enderecoDados.estado 
 
    }, 

	methods: {
		async listar() {
            let res = await adm.ListarPerfil( localStorage.getItem('token') )
			return res
        },
		async listarEndereco() {
			let res = await adm.listarEndereco(
				(this.token)
			)
			return res
		},
 
    },
    template: await get_template('./assets/js/components/c-detalhe')
}