import adm from "../../../../../static/js/api/adm.js"

export default {
	template: `
		<div>
	<div class="d-flex flex-column flex-root"> 
			<div class="mb-0" id="home"> 
				<div class="bgi-no-repeat bgi-size-contain bgi-position-x-center bgi-position-y-bottom landing-dark-bg"
			  :style="{ backgroundColor: inst.backgroundColor }">
 
					<div class="d-flex flex-column flex-center w-100 min-h-40px min-h-lg-40px px-9">
					 
						<div class="text-center mb-5 mb-lg-0 py-10 py-lg-10">
						 
							<div class="text-center">
							<img class="rounded" style="width: 150px;" v-bind:src="inst.logo">
							</div> 
						</div> 
					</div> 
				</div>  
			</div> 
			<div class="flex-stack flex-wrap flex-md-nowrap card-rounded shadow p-8 p-lg-12 mb-n5 mb-lg-n13"
				style="background: linear-gradient(90deg, #20AA3E 0%, #03A588 100%);">
			 
				<div class="my-2 me-5">
					<div class="text-center"> 
							<img class="rounded" style="width: 50px;" v-bind:src="inst.icon">
						<h3 class="fs-2hx text-white">Obrigado por sua generosidade!</h3>
					 
					</div>
				</div> 
			</div> 
			<div class="py-10 py-lg-20"> 
				<div class="container"> 
					<div class="text-center mb-12">
						
						<div id="block2" v-if="type=='cartao'"> 
						<h3 class="fs-2hx text-dark mb-15">Sua doação foi recebida com sucesso, Deus te abençoe!.</h3>
					 
					</div>


						<div id="block2" v-if="type=='boleto'"> 
						<h3 class="fs-2hx text-dark mb-15">
							Sua doação esta em aberto!.</h3> 
							<h3 class="fs-1 text-dark mb-5">
								<span>Clique abaixo para acessar o seu boleto.</span>
							</h3>

							<a href="#" class="btn btn-primary er fs-6 px-8 my-14" data-bs-toggle="modal"
								data-bs-target="#kt_modal_share_earn">
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
										<input id="kt_share_earn_link_input" type="text"
											class="form-control form-control-solid me-3 flex-grow-1" name="search"
											value="https://keenthemes.com/?ref=skitechnology">
										<button id="kt_share_earn_link_copy_button"
											class="btn btn-light fw-bolder flex-shrink-0"
											data-clipboard-target="#kt_share_earn_link_input">Copiar</button>
									</div> 
								</div>

							</div>
							<h3> Importante: Este boleto é uma contribuição espontânea e não gera protesto. </h3>
							</div>
						
							<div ref="print_qr"></div> 
						<div id="block2" v-if="type=='pix'">
						
						<h3 class="fs-2hx text-dark mb-15">
							Sua doação está sendo processada, após o pagamento você receberá uma confirmação.</h3>
					 
						<div class="text-center m-5">
							
							<img style="width: 20%;" src="../../doacao/assets/image/qr.png" class="rounded"
								alt="...">
								
						</div>
 						QRCODE
						 
						
					
							<div class="mw-lg-600px mx-auto"> 
								<div class="mb-13 text-center"> 
									<div class="text-muted fw-bold fs-5 ">
										<h2 class="text-gray-600">
										Seu codigo pix..
										</h2>
									</div> 
								</div> 
								<div class="mb-10">
									<div class="d-flex">
										<input id="kt_share_earn_link_input" type="text" v-model="qrCode"  ref="codigo" 
											class="form-control form-control-solid me-3 flex-grow-1" name="search" >
										<button id="kt_share_earn_link_copy_button" @click="copiar('codigo')"
											class="btn btn-light fw-bolder flex-shrink-0" >Copiar</button>
									</div> 
								</div>
							</div>
						</div>

					</div> 
				</div> 
			</div> 
			<div class="mt-sm-n20" > 
					<svg viewBox="15 -1 1470 48" fill="none" xmlns="http://www.w3.org/2000/svg" >
						<path  
							d="M1 48C4.93573 47.6644 8.85984 47.3311 12.7725 47H1489.16C1493.1 47.3311 1497.04 47.6644 1501 48V47H1489.16C914.668 -1.34764 587.282 -1.61174 12.7725 47H1V48Z"
							:fill="inst.backgroundColor" ></path>
					</svg>
				</div> 
				<div class="py-2 landing-dark-bg" :style="{ backgroundColor: inst.backgroundColor }" > 
					<div class="container"> 
						<div class="d-flex flex-column container"> 
							<div class="mb-13 mt-10 text-center">
								<h1 class="fs-2hx fw-bolder text-white mb-5">Obrigado</h1>
								<div class="text-gray-600 fw-bold fs-5 mb-5">Ajude-nos na missão de
									<br />Restaurar Vidas! Compartilhe esta causa!
								</div>


								<div class="text-center mb-5 mb-lg-10 py-10 py-lg-2">
									<a target="_blank" :href="'https://www.facebook.com/sharer/sharer.php?u=https://'+inst.urlsite+'%2F&amp;src=sdkpreparse'"
									class="btn btn-light w-15 mx-6 text-white text-hover-dark"
										style="background-color: #085a97;">
										<img alt="Logo" src="../../doacao/assets/image/facebook.svg"
											class="h-20px me-3"> Facebook </a>

									<a target="_blank" :href="'https://web.whatsapp.com/send?text=https://'+inst.urlsite" class="btn btn-light w-15 text-white text-hover-dark"
										style="background-color: #429813;">
										<img alt="Logo" src="../../doacao/assets/image/whatsap.svg"
											class="h-20px me-3">Whatsapp</a>

								</div>

								<a href=""
									class="btn btn-lg btn-outline border-2 btn-outline-white flex-shrink-0 ">Fazer nova
									Doação</a>
							</div> 
						</div> 
					</div> 
				</div> 
				<div class="landing-curve landing-dark-color">
					<svg viewBox="15 12 1470 48" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path
							d="M0 11C3.93573 11.3356 7.85984 11.6689 11.7725 12H1488.16C1492.1 11.6689 1496.04 11.3356 1500 11V12H1488.16C913.668 60.3476 586.282 60.6117 11.7725 12H0V11Z"
							:fill="inst.backgroundColor"></path>
					</svg>
				</div> 
			</div> 
			<div class="mt-20 position-relative z-index-2 mb-20">
				<div class="container"> 
					<div class="text-center mb-17"> 
						<div class="fs-5 text-muted fw-bold  flex-center ">
							<p class="m-10">
								{{inst.nome_fantasia}} - CNPJ: {{inst.cnpj}} |
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
		</div> 
	</div>
	`,


	data: function () {
		return {
			inst: {
				bairro: null,
				cep: null,
				cidade: null,
				cnpj: null,
				complemento: null,
				email: null,
				estado: null,
				nome_fantasia: null,
				razao_social: null,
				endereco: null,
				telefone: null,
				logo: '',
				icon: '',
				backgroundColor: '',
				urlsite: 'natal.doacoesbethania.com.br.doardigital.com.br/',
				qrCode: '',
			},

			type: '',
			jms: false,
		}
	},
	methods: {
		async infoSubdomain() {
			let res = await adm.todoSubdomain(this.subdomaim = "34edqwe21")
			// let res = await adm.todoSubdomain(this.subdomaim = window.localStorage.getItem("instituicao_subdomaim"))
			return res
		},

		copiar(ref) {
            this.$refs[ref].select(); document.execCommand('copy');
        }

	},

	async mounted() {
		let dados = (await this.infoSubdomain()).dados_instituicao
		this.inst.cep = dados.endereco.cep
		this.inst.endereco = dados.endereco.logadouro
		this.inst.numero = dados.endereco.numero
		this.inst.bairro = dados.endereco.bairro
		this.inst.cidade = dados.endereco.cidade
		this.inst.estado = dados.endereco.estado
		this.inst.complemento = dados.endereco.complemento
		this.inst.logo = dados.logo
		this.inst.icon = dados.icon
		this.inst.backgroundColor = dados.cor

		this.inst.nome_fantasia = localStorage.getItem('instituicao_nome')
		this.type = localStorage.getItem('type_pagamento')
		this.qrCode = localStorage.getItem("qrCode")

		let code_pix =  `${this.qrCode}`		
		var qrcode = new QRCode(this.$refs.print_qr, {
			text: code_pix,
			width: 230,
			height: 230,
			colorDark: "#000000",
			colorLight: "#ffffff",
			correctLevel: QRCode.CorrectLevel.L
		});
	},

}

