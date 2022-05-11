import get_template from '../../componentes/get_template.js'
import adm from "../../../../../static/js/api/adm.js"
const { required, minLength, between } = window.validators

export default {

	data: function () {

		return {
			token: null,
			instituicao_id: null,
			ano: '2022',
			ano_aray: [2021, 2022],
			janeiro: null,
			fevereiro: null,
			marco: null,
			abril: null,
			maio: null,
			junho: null,
			julho: null,
			agosto: null,
			setembro: null,
			outubro: null,
			novembro: null,
			dezembro: null,

			msg: null,
			submitStatus: null
		}
	},


	validations: {
		janeiro: {
			required,
			minLength: minLength(2)
		},
		fevereiro: {
			required,
			minLength: minLength(2)
		},
		marco: {
			required,
			minLength: minLength(2)
		},
		abril: {
			required,
			minLength: minLength(2)
		},
	
		maio: {
			required,
			minLength: minLength(2)
		},
		junho: {
			required,
			minLength: minLength(2)
		},
		julho: {
			required,
			minLength: minLength(2)
		},
		agosto: {
			required,
			minLength: minLength(2)
		},
		setembro: {
			required,
			minLength: minLength(2)
		},
		outubro: {
			required,
			minLength: minLength(4)
		},

		novembro: {
			required,
			minLength: minLength(4)
		},
		dezembro: {
			required,
			minLength: minLength(2)
		},
	},

	methods: {
	
		masc_money1() {
			let valor
           valor = this.janeiro.replace(/\D/gi, '')
            valor = (valor/100).toLocaleString('pt-br', { minimumFractionDigits: 2 })
            this.janeiro = valor
        },


		masc_money2() {
			let valor
			valor = this.fevereiro.replace(/\D/gi, '')
            valor = (valor/100).toLocaleString('pt-br', { minimumFractionDigits: 2 })
            this.fevereiro = valor
        },

		masc_money3() {
			let valor
			valor = this.marco.replace(/\D/gi, '')
            valor = (valor/100).toLocaleString('pt-br', { minimumFractionDigits: 2 })
            this.marco = valor
        },

		masc_money4() {
			let valor
			valor = this.abril.replace(/\D/gi, '')
            valor = (valor/100).toLocaleString('pt-br', { minimumFractionDigits: 2 })
            this.abril = valor
        },

		masc_money5() {
			let valor
			valor = this.maio.replace(/\D/gi, '')
            valor = (valor/100).toLocaleString('pt-br', { minimumFractionDigits: 2 })
            this.maio = valor
        },

		masc_money6() {
			let valor
			valor = this.junho.replace(/\D/gi, '')
            valor = (valor/100).toLocaleString('pt-br', { minimumFractionDigits: 2 })
            this.junho = valor
			
        },

		masc_money7() {
			let valor
			valor = this.julho.replace(/\D/gi, '')
            valor = (valor/100).toLocaleString('pt-br', { minimumFractionDigits: 2 })
            this.julho = valor
		
        },

		masc_money8() {
			let valor
			valor = this.agosto.replace(/\D/gi, '')
            valor = (valor/100).toLocaleString('pt-br', { minimumFractionDigits: 2 })
            this.agosto = valor
		
        },

		masc_money9() {
			let valor
			valor = this.setembro.replace(/\D/gi, '')
            valor = (valor/100).toLocaleString('pt-br', { minimumFractionDigits: 2 })
            this.setembro = valor

		
        },
		masc_money10() {
			let valor
			valor = this.outubro.replace(/\D/gi, '')
            valor = (valor/100).toLocaleString('pt-br', { minimumFractionDigits: 2 })
            this.outubro = valor

		
        },
		masc_money11() {
			let valor
			valor = this.novembro.replace(/\D/gi, '')
            valor = (valor/100).toLocaleString('pt-br', { minimumFractionDigits: 2 })
            this.novembro = valor

		
        },
		masc_money12() {
			let valor
			valor = this.dezembro.replace(/\D/gi, '')
            valor = (valor/100).toLocaleString('pt-br', { minimumFractionDigits: 2 })
            this.dezembro = valor
		
        },


		async setar_ano() {
			let dados = (await this.listar()).dados[0] || {}
			this.janeiro = dados.janeiro
			this.fevereiro = dados.fevereiro
			this.marco = dados.marco
			this.abril = dados.abril
			this.maio = dados.maio
			this.junho = dados.junho
			this.julho = dados.julho
			this.agosto = dados.agosto
			this.setembro = dados.setembro
			this.outubro = dados.outubro
			this.novembro = dados.novembro
			this.dezembro = dados.dezembro
			this.masc()
		},

		async masc() {
			this.masc_money1()
			this.masc_money2()
			this.masc_money3()
			this.masc_money4()
			this.masc_money5()
			this.masc_money6()
			this.masc_money7()
			this.masc_money8()
			this.masc_money9()
			this.masc_money10()
			this.masc_money11()
			this.masc_money12()
		},
		
		async adicionaMetas() {
			this.error = null
			this.$v.$touch()
			if (this.$v.$invalid) {
				this.submitStatus = 'ERROR'
			} else {
			

				let res = await adm.addMetas(
					this.token,
					this.instituicao_id,
					this.ano,
					this.janeiro,
					this.fevereiro,
					this.marco,
					this.abril,
					this.maio,
					this.junho,
					this.julho,
					this.agosto,
					this.setembro,
					this.outubro,
					this.novembro,
					this.dezembro
				)
				if (!res.next) {
					this.msg = res.message,
						setTimeout(() => this.msg = "", 5000);
					this.error = res.message
					return null
				}

				this.submitStatus = 'PENDING'
				setTimeout(() => {
					this.submitStatus = 'OK'
					this.msg = res.message
					
				}, 500)
			}

		},

		

		async listar() {
			let res = await adm.listarMetas(
				this.token,
				this.instituicao_id,
				this.ano = this.ano
			)
			return res
		},
	},


	async mounted() {
	

		var options = {
			series: [{
				name: 'Total Arrecadado',
			   type: 'column',
			   data: [1.4, 2, 2.5, 1.5, 2.5, 2.8, 3.8, 4.6, 5, 8, 8, 6]
			 }, {
			   name: 'Total Pago',
			   type: 'column',
			   data: [1.1, 3, 3.1, 4, 4.1, 4.9, 6.5, 8.5, 5, 8, 8, 4]
			 }, {
			   name: 'Total Aberto',
			   type: 'column',
			   data: [2, 3, 3.1, 8, 4.1, 9, 6.5, 8.5, 2.5, 2.8, 3.8, 4.6]
			 },{
			   name: 'Meta',
			   type: 'line',
			   data: [5, 9, 7, 9, 10, 14, 17, 18, 14, 18, 19, 8]
			 }],
			chart: {
				height: 350,
			type: 'line',
			stacked: false
			},
			stroke: {
				width: [1, 1, 4]
			},
			title: {
				text: 'Faturamentos', 
			},
			 
			colors: ['#4792fc', '#13b385', '#fbd866', '#bc275f'],
			//labels: ['jan','fev','mar','abr', 'maio', 'jun','jul','ago','set','out','nov','dez'],
			xaxis: {
				categories: ['jan', 'fev', 'mar', 'abr', 'maio', 'jun', 'jul', 'ago', 'set', 'out', 'nov', 'dez'],

			},

		};
 
		var chart = new ApexCharts(document.querySelector("#faturamentos"), options);
		chart.render();
	},

	async created() {
		this.instituicao_id = window.localStorage.getItem('instituicao_id');
		this.token = window.localStorage.getItem('token');

		let dados = (await this.listar()).dados[0] || {}
		this.janeiro = dados.janeiro
		this.fevereiro = dados.fevereiro
		this.marco = dados.marco
		this.abril = dados.abril
		this.maio = dados.maio
		this.junho = dados.junho
		this.julho = dados.julho
		this.agosto = dados.agosto
		this.setembro = dados.setembro
		this.outubro = dados.outubro
		this.novembro = dados.novembro
		this.dezembro = dados.dezembro
		this.masc()
	},

	template: await get_template('./assets/js/views/graficos/metas')
}