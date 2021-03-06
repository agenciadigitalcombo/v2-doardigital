import adm from "../../../../../static/js/api/adm.js"

export default {
	template: `
<div>
	<div class="d-flex flex-column flex-root">
		<div class="mb-0" id="home">
			<div class="bgi-no-repeat bgi-size-contain bgi-position-x-center bgi-position-y-bottom landing-dark-bg"
				style="background-color: white">

				<div class="d-flex flex-column flex-center w-100 min-h-40px min-h-lg-40px px-9">

					<div class="text-center mb-5 mb-lg-0 py-10 py-lg-10">

						<div class="text-center">
							<img class="rounded" style="width: 150px;" v-bind:src="inst.logo">
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="flex-stack flex-wrap flex-md-nowrap card-rounded shadow p-8 p-lg-12 mb-n5 "
			style="background: linear-gradient(90deg, #20AA3E 0%, #03A588 100%);">

			<div class="my-2 me-5">
				<div class="text-center">
					<img style="width: 50px;" src="../../doacao/assets/icons/verificado.png" class="rounded">
					<!-- <img class="rounded" style="width: 50px;" v-bind:src="inst.icon"> -->
					<h3 class="fs-2hx text-white">Obrigado por sua generosidade!</h3>

				</div>
			</div>
		</div>
		<div class="py-10 py-lg-20">
			<div class="container">
				<div class="text-center mb-12">

					<div id="block2" v-if="type=='CREDIT_CARD'">
						<h3 class="fs-2hx text-dark mb-15">Sua doação foi recebida com sucesso, Deus te abençoe!.</h3>

					</div>

					<div v-if="loader =='sim'">
						<div class="lds-hourglass"></div>
						<div class="lds-text">
							Seu código está sendo gerado, por favor aguarde ...
						</div>
					</div>

					<div v-else>
						<div id="block2" v-if="type=='BOLETO'">

							<h3 class="fs-2hx text-dark mb-15">
								Sua doação esta em aberto!.</h3>
							<h3 class="fs-1 text-dark mb-5">
								<span>Clique abaixo para acessar o seu boleto.</span>
							</h3>

							<a target="_blank" :href="inst.url_geral" class="btn btn-primary er fs-6 px-8 my-14"
								data-bs-toggle="modal" data-bs-target="#kt_modal_share_earn">
								<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor"
									class="bi bi-upc" viewBox="0 0 16 16">
									<path
										d="M3 4.5a.5.5 0 0 1 1 0v7a.5.5 0 0 1-1 0v-7zm2 0a.5.5 0 0 1 1 0v7a.5.5 0 0 1-1 0v-7zm2 0a.5.5 0 0 1 1 0v7a.5.5 0 0 1-1 0v-7zm2 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-7zm3 0a.5.5 0 0 1 1 0v7a.5.5 0 0 1-1 0v-7z" />
								</svg>
								VER MEU BOLETO
							</a>
							<div class="mw-lg-600px mx-auto">
								<div class="mb-13 text-center">
									<div class="text-muted fw-bold fs-5">ou copie o
										<a href="#" class="link-primary fw-bolder"> código de barras:</a>.
									</div>
								</div>
								<div class="mb-10">
									<div class="d-flex">
										<input type="text" v-model="inst.codigo_geral" ref="codigo"
											class="form-control  me-3 flex-grow-1" name="search">
										<button @click="copiar('codigo')"
											class="btn btn-light btn-primary fw-bolder flex-shrink-0">Copiar</button>
									</div>
								</div>

							</div>
							<h3> Importante: Este boleto é uma contribuição espontânea e não gera protesto. </h3>
						</div>


						<div id="block2" v-if="type=='PIX'">

							<h3 class="fs-2hx text-dark mb-15">
								Sua doação está sendo processada, após o pagamento você receberá uma confirmação.</h3>

							<div class="mw-lg-600px mx-auto">
								<div class="mb-13 text-center">
									<div class="text-muted fw-bold fs-5 ">
										<h2 class="text-gray-600">
											Seu codigo PIX..
										</h2>
									</div>
								</div>
							</div>
						</div>

						<center>
							<div ref="print_qr"></div>
						</center>
					


						<div id="block12" v-if="type=='PIX'">

							<div class="mw-lg-600px mx-auto  mt-10">

								<div class="mb-10">
									<div class="d-flex">
										<input type="text" v-model="inst.codigo_geral" ref="codigo"
											class="form-control  me-3 flex-grow-1" name="search">
										<button @click="copiar('codigo')"
											class="btn btn-light btn-primary fw-bolder flex-shrink-0">Copiar</button>
									</div>
								</div>
							</div>
						</div>
					</div>
					</div>
				</div>
			</div>
			<div class="mt-sm-n20">
				<svg viewBox="15 -1 1470 48" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path
						d="M1 48C4.93573 47.6644 8.85984 47.3311 12.7725 47H1489.16C1493.1 47.3311 1497.04 47.6644 1501 48V47H1489.16C914.668 -1.34764 587.282 -1.61174 12.7725 47H1V48Z"
						fill="rgba(19,38,60,255)"></path>
				</svg>
			</div>
			<div class="py-2 landing-dark-bg">
				<div class="container">
					<div class="d-flex flex-column container">
						<div class="mb-13 mt-10 text-center">
							<h1 class="fs-2hx fw-bolder text-white mb-5">Obrigado</h1>
							<div class="text-gray-600 fw-bold fs-5 mb-5">Ajude-nos na missão de
								<br />Restaurar Vidas! Compartilhe esta causa!
							</div>


							<div class="text-center mb-5 mb-lg-10 py-10 py-lg-2">
								<a target="_blank"
									:href="'https://www.facebook.com/sharer/sharer.php?u=https://'+inst.urlsite+'%2F&amp;src=sdkpreparse'"
									class="btn btn-light w-15 mx-6 text-white text-hover-dark"
									style="background-color: #085a97;">
									<img alt="Logo" src="../../doacao/assets/image/facebook.svg" class="h-20px me-3">
									Facebook </a>

								<a target="_blank" :href="'https://web.whatsapp.com/send?text=https://'+inst.urlsite"
									class="btn btn-light w-15 text-white text-hover-dark"
									style="background-color: #429813;">
									<img alt="Logo" src="../../doacao/assets/image/whatsap.svg"
										class="h-20px me-3">Whatsapp</a>

							</div>

							<a href="#/" class="btn btn-lg btn-outline border-2 btn-outline-white flex-shrink-0 ">Fazer
								nova
								Doação</a>
						</div>
					</div>
				</div>
			</div>
			<div class="landing-curve landing-dark-color">
				<svg viewBox="15 12 1470 48" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path
						d="M0 11C3.93573 11.3356 7.85984 11.6689 11.7725 12H1488.16C1492.1 11.6689 1496.04 11.3356 1500 11V12H1488.16C913.668 60.3476 586.282 60.6117 11.7725 12H0V11Z"
						fill="rgba(19,38,60,255)"></path>
				</svg>
			</div>
		</div>


		<div class="mt-20 position-relative z-index-2 mb-20">
			<div class="container">
				<div class="text-center mb-17">
					<div class="fs-5 text-muted fw-bold  flex-center ">
						<p class="m-10">
							{{inst.nome}} - CPF/CNPJ: {{inst.cpfCnpj}} |
							Endereço: {{inst.endereco}} , {{inst.complemento}} - {{inst.bairro}}, <br>
							{{inst.cidade}} - {{inst.estado}} - CEP: {{inst.cep}} |
							Para dúvidas e cancelamentos entre em contato com nossa <br>
							central de relacionamento no telefone {{inst.telefone}}
							ou pelo e-mail: {{inst.email}} |
							Em até 30 dias após o processamento da transação, <br>
							realizaremos o ressarcimento integral dos valores doados.
						</p>
					</div>

				</div>
			</div>
		</div>
		<div class="rotaObscura">
			<input v-mask="'##.###.###/####-##'" v-model="inst.cpfCnpj" class="invisivel" />
			<input v-mask="'#####-###'" v-model="inst.cep" class="invisivel" />
			<input  v-mask="tell" v-model="inst.telefone" class="invisivel" />
		</div>
	</div>
</div>
`,



	data: function () {
		return {
			inst: {
				bairro: null,
				cep: null,
				cidade: null,
				cpfCnpj: null,
				complemento: null,
				email: null,
				estado: null,
				nome: null,
				razao_social: null,
				endereco: null,
				telefone: null,
				logo: '',
				icon: '',
				backgroundColor: '',
				urlsite: '',
				codigo_geral: '',
				url_geral: '',
				recorrente: '',
			},
 
			type: '',
			jms: false, 
			loader: '',
			tell: '',
		}
	},


	filters: {
		is_data(datas) {
			let cep = datas.split('').join('/');

			return `${cep}`
		},

	},

	methods: {

		async lisConfiguracao() {
			let res = await adm.listConf(
				this.token,
				this.domain,
			)
			return res
		},


		copiar(ref) {
			this.$refs[ref].select(); document.execCommand('copy');
		},

		validaTell(event) {
			var phone = this.inst.telefone.replace(/\D/g, "");

			if (phone.length < 11) {

				this.tell = '(##) ####-####'
			} else {

				this.tell = '(##) #####-####'
			}

		},

		isQr() {
			this.error = null
			 
				setTimeout(async () => {
					let verificaQrExist = this.inst.codigo_geral
					if (!verificaQrExist) {
						this.isQr()
					} else {
						this.loader = 'nao' 
					}

				}, 1500)

		}

	},

	async mounted() {


		this.token = localStorage.getItem('token')
		//this.domain = globalThis._instituicao.subdomain || globalThis._instituicao.domain
		// this.domain = "jms21122xxcr"
		this.domain = window.location.host
		// this.this.domain  = window.location.hostname

		let config = (await this.lisConfiguracao()).payload


		this.inst.cpfCnpj = config.cpfCnpj,
			this.inst.nome = config.nome,
			this.inst.email = config.email,
			this.inst.telefone = config.telefone,


			this.inst.logo = "https://doardigital.tk/api/upload/" + config.logo,
			
			//this.inst.icon = config.icon,
			this.inst.icon = "icon.png",
			//this.inst.titulo = config.titulo,
			this.inst.titulo = "titulo 0",
			//this.inst.tags = config.tags,
			this.inst.tags = "tags",
			//this.inst.descricao = config.descricao,
			this.inst.descricao = "tags mista cs",
			this.inst.backgroundColor = config.cor,

			this.inst.domain = config.domain,
			this.inst.urlsite = config.domain || config.subdomain + '.doardigital.com.br/',
			this.inst.cep = config.endereco.cep,
			this.inst.endereco = config.endereco.logadouro,
			this.inst.numero = config.endereco.numero,
			this.inst.complemento = config.endereco.complemento,
			this.inst.bairro = config.endereco.bairro,
			this.inst.cidade = config.endereco.cidade,
			this.inst.estado = config.endereco.estado


		this.type = localStorage.getItem('type_pagamento')
		this.inst.codigo_geral = localStorage.getItem("codigo")
		this.inst.url_geral = localStorage.getItem("url")
		this.inst.recorrente = localStorage.getItem("recorrente")

  
		if (this.type !== 'CREDIT_CARD') {

			this.isQr()
			this.validaTell(event)
		}

		if (this.type == 'PIX') {
			let code_pix = `${this.inst.codigo_geral}`
			var qrcode = new QRCode(this.$refs.print_qr, {
				text: code_pix,
				width: 230,
				height: 230,
				height: 230,
				colorDark: "#000000",
				colorLight: "#ffffff",
				correctLevel: QRCode.CorrectLevel.L
			});
		}

		// setTimeout(() => {

		// }, 90000)



	},

}
