import get_template from '../../componentes/get_template.js'
import adm from "../../../../../static/js/api/adm.js"
import translateStatus from "../../../../../components/adapiterStatus.js"

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
			history: [],
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
			return translateStatus(status)
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
			
			globalThis._doacoes = this.history.find(doad => doad.instituicao_id == instituicao_id)
			console.log(globalThis._doacoes)
			window.location.href = "#/doador/detalhe"
		},

		getParams(name) {
			const queryString = window.location.search;
			const urlParams = new URLSearchParams(queryString);
			return urlParams.get(name)
		}

	},

	async mounted() {

		
		const FK = this.getParams('fk')

		let dateObj = new Date()
		this.dataFinal = dateObj.toLocaleString('en-GB', {
			year: 'numeric',
			month: '2-digit',
			day: '2-digit',
		}).split('/').reverse().join('');

		// this.instituicao_fk = window.localStorage.getItem("instituicao_id")
		// this.cpf = globalThis._doador.cpf


		//this.tipo = globalThis._doador.tipo

		let dados = (await adm.detalheDoador(FK)).payload
		console.log(dados)
		this.history = dados.history
		//this.doacoes = (await this.listar()).dados.doacoes

		////	var assinaturas = (await this.listar()).dados.doacoes[0]
		//	this.assina.data = assinaturas.data,
		//	this.assina.valor = assinaturas.valor,
		//	this.assina.identificador = assinaturas.plano_id,

		this.nome = dados.nome
		this.cpf = dados.cpf
		this.telefone = dados.telefone
		this.email = dados.email
		this.gravatar = dados.gravatar

		this.end.cep = dados.address.cep
		this.end.logadouro = dados.address.logadouro
		this.end.numero = dados.address.numero
		this.end.complemento = dados.address.complemento
		this.end.bairro = dados.address.bairro
		this.end.cidade = dados.address.cidade
		this.end.estado = dados.address.estado

	},

	template: await get_template('./assets/js/views/instituicao/doador-hitorico')
}