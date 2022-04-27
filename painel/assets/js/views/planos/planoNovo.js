import get_template from '../../componentes/get_template.js'
import adm from "../../../../../static/js/api/adm.js"
const { required, minLength, between } = window.validators

export default {

	data: function () {
		return {

			token: null,
			fk: null,
			price: null,

			submitStatus: null,
			msg: null,

		}
	},

	validations: {
		price: {
			required,
			minLength: minLength(2)
		},

	},

	methods: {
		money() {
			let val = this.price
			val = val.replace('.', '')
			val = val.replace(/\D/gi, '')
			val = val ? val : 0
			val = `${parseInt(val)}` ?? '0'
			switch (val.length) {
				case 0:
					val = '00,00'
					break;
				case 1:
					val = val.replace(/(\d{1})/gi, '00,0$1')
					break;
				case 2:
					val = val.replace(/(\d{2})/gi, '00,$1')
					break;
				case 3:
					val = val.replace(/(\d{1})(\d{2})/gi, '0$1,$2')
					break;
				case 4:
					val = val.replace(/(\d{2})(\d{2})/gi, '$1,$2')
					break;
				case 5:
					val = val.replace(/(\d{3})(\d{2})/gi, '$1,$2')
					break;
				case 6:
					val = val.replace(/(\d{1})(\d{3})(\d{2})/gi, '$1.$2,$3')
					break;
				default:
					val = val.replace(/(\d{1})(\d{3})(\d{2})(.*)/gi, '$1.$2,$3')
					break;
			}
			this.price = val
		},
		 
		async addPlanos() {
			this.error = null

			this.$v.$touch()
			if (this.$v.$invalid) {
				this.submitStatus = 'ERROR'
			} else {

				let res = await adm.cadastrarPlanosDigital(
					this.token,
					this.fk,
					this.price.replace(/[^\d]+/g,''),
					this.coupon,
					this.send_message,
					this.institution,
					this.trial,
					this.subadm,
				)
				if (!res.next) {
					this.msg = res.message,
						setTimeout(() => this.msg = "", 3000);

					this.error = res.message
					return null
				}

				this.submitStatus = 'PENDING'
				setTimeout(() => {
					this.submitStatus = 'OK'
					window.location.href = `#/planos`
				}, 500)
			}
		},
	},
	async mounted() {
		this.fk = window.localStorage.getItem('instituicao_id');
	},
	template: await get_template('./assets/js/views/planos/planoNovo')
}