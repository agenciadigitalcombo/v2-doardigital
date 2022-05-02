import get_template from '../../componentes/get_template.js'
import adm from "../../../../../static/js/api/adm.js" 

export default {
     
	data: function () {

		return {
			foto: '../painel/assets/image/gravatar.png',

			instituicao_fk: null,
			id: null,
			token: null,
			nome: null,
			tipo: null,
			cpf: "",
			telefone: null,
			email: null,
			gravatar: null,
			data: null,
			doacoes: [],
			assinaturas: [],
			end: {
				cep: null,
				logadouro: null,
				numero: null,
				complemento: null,
				bairro: null,
				cidade: null,
				estado: null,
			},
			assina: {
				data: null,
				valor: null,
				status: null,
				identificador: null,
			},
			show: '1',
			visao: true,
			assinatura: false,
			historico: false,
			dataFinal: null,
		}

	},

	filters: {
		is_price(price) {
			let valor = (price / 100).toLocaleString('pt-br', { minimumFractionDigits: 2 })
			return `R$ ${valor}`
		},


		is_data(datas) {
			let data = datas.split('-').reverse().join('/');
			return `${data}`
		},



		este_status(status) {
            let apresentar = {
                PENDING: 'Aguardando Pagamento',
                refused: 'Cancelado',
                CONFIRMED: 'Pago',
                OVERDUE: 'Vencida',
                REFUNDED: 'Reembolsado',
                processing: 'Em processamento',
                authorized: 'Autorizado ',
                pending_refund: 'Reembolso pendente ',
                chargedback: 'Estorno',
            }
            return apresentar[status]
        },


        este_tipo(status) {
            let apresentar = {
                BOLETO: 'Boleto',
                CREDIT_CARD: 'Crédito',
                PIX: 'PIX',
            }
            return apresentar[status]
        },

	},


	computed: {

		filtraDoacao() {

			let valores

			valores = this.doacoes.filter((filtrar) => {
				return filtrar.data.split('-').join('') <= this.dataFinal;
			})

			return valores

		},

	},

	methods: {

		visaoV() {
			this.show = '1',
				this.visao = true,
				this.assinatura = false,
				this.historico = false
		},

		assinaturaV() {
			this.show = '2',
				this.visao = false,
				this.assinatura = true,
				this.historico = false
		},

		historicoV() {
			this.show = '3',
				this.visao = false,
				this.assinatura = false,
				this.historico = true
		},

		async listar() {
			let res = await adm.visualizarDoador(
				this.token,
				this.instituicao_fk, 
				this.cpf
			)
			return res
		},

		async editar(instituicao_id) {
			globalThis._doacoes = this.doacoes.find(doad => doad.instituicao_id == instituicao_id)
			window.location.href = "#/doador/detalhe"
		},

	},

	async mounted() {

		let dateObj = new Date()
		 this.dataFinal = dateObj.toLocaleString('en-GB', {
			year: 'numeric',
			month: '2-digit',
			day: '2-digit',
		}).split('/').reverse().join('');
 
		this.instituicao_fk = window.localStorage.getItem("instituicao_id")
		this.cpf = globalThis._doador.cpf
		//this.tipo = globalThis._doador.tipo

		let dados = (await this.listar()).payload
	//this.doacoes = (await this.listar()).dados.doacoes

	////	var assinaturas = (await this.listar()).dados.doacoes[0]
	//	this.assina.data = assinaturas.data,
	//	this.assina.valor = assinaturas.valor,
	//	this.assina.identificador = assinaturas.plano_id,
                      
		this.nome = dados.nome
		//this.cpf = dados.cpf
		this.telefone = dados.telefone
		this.email = dados.email
		this.gravatar = dados.gravatar
		
		this.end.cep = dados.endereco.cep
		this.end.logadouro = dados.endereco.logadouro
		this.end.numero = dados.endereco.numero
		this.end.complemento = dados.endereco.complemento
		this.end.bairro = dados.endereco.bairro
		this.end.cidade = dados.endereco.cidade
		this.end.estado = dados.endereco.estado

	},

    template: await get_template('./assets/js/views/instituicao/doador-hitorico')
}