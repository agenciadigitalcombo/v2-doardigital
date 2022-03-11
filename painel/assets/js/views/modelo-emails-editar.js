import tags from '../domain/tag-email.js'
import adm from "../../../../../static/js/api/adm.js"

export default {
	template: `
		<div>

			<c-header></c-header>
			<c-aside></c-aside>

			<div class="d-flex flex-column flex-root">
			<div class="page d-flex flex-row flex-column-fluid">
				<div class="wrapper d-flex flex-column flex-row-fluid" id="kt_wrapper">
					<div class="content d-flex flex-column flex-column-fluid" id="kt_content">
						<div class="post d-flex flex-column-fluid" id="kt_post">
							<div id="kt_content_container" class="container-xxl">

							<div class="d-flex flex-column flex-lg-row"> 
							<div class="flex-lg-row-fluid "> 
								<div class="card">
									<div class="card-header align-items-center">
										<div class="card-title">
											<h2>Modelo de E-mails</h2>
										</div>
									</div>
									<div class="card-body p-0"> 
										
													<form class="form" @submit.prevent="atualizarEmail" novalidate="novalidate">
											<div class="d-block"> 
												<div class="d-flex align-items-center border-bottom px-8 min-h-50px">
												 
													<div class="text-dark fw-bolder w-75px">Assunto:</div>
													 <input v-model="assunto" type="text" class="form-control border-0"
														name="compose_to" value="" > 
												
												</div> 

		
												<div class=" align-items-center border-bottom px-8 min-h-50px">
												<div class="text-dark fw-bolder">status de pagamento:</div>
												<select v-model="status" class="form-select border-0" data-control="select2" data-placeholder="Seleciona a opcao"> 
												<option v-for="dado in pagamento" :key="dado" :value="dado" >{{ dado | este_status }}</option>
											</select> 
												</div>

												<div class=" align-items-center border-bottom px-8 min-h-50px">
												<div class="text-dark fw-bolder">Tempo de Disparo:</div>
												<select v-model="cron" class="form-select border-0" data-control="select2" data-placeholder="Seleciona a opcao"> 
												<option v-for="dado in tempo" :key="dado" :value="dado" >{{ dado}}</option>
											</select> 
												</div>


												<div class="d-none align-items-center border-bottom ps-8 pe-5 min-h-50px"
													data-kt-inbox-form="cc"> 
													<tags
														class="tagify form-control border-0 tagify--noTags tagify--empty"
														tabindex="-1">
														<span contenteditable="" tabindex="0" data-placeholder="​"
															aria-placeholder="" class="tagify__input" role="textbox"
															aria-autocomplete="both" aria-multiline="false"></span>
														​
													</tags><input type="text" class="form-control border-0"
														name="compose_cc" value="" data-kt-inbox-form="tagify">
												 	<span class="btn btn-clean btn-xs btn-icon"
														data-kt-inbox-form="cc_close">
														<i class="la la-close"></i>
													</span>
												 </div>
												 <div class="d-none align-items-center border-bottom inbox-to-bcc ps-8 pe-5 min-h-50px"
													data-kt-inbox-form="bcc">
												 	<div class="text-dark fw-bolder w-75px">Bcc:</div>
													 <tags
														class="tagify form-control border-0 tagify--noTags tagify--empty"
														tabindex="-1">
														<span contenteditable="" tabindex="0" data-placeholder="​"
															aria-placeholder="" class="tagify__input" role="textbox"
															aria-autocomplete="both" aria-multiline="false"></span>
														​
													</tags><input type="text" class="form-control border-0"
														name="compose_bcc" value="" data-kt-inbox-form="tagify">
												 <span class="btn btn-clean btn-xs btn-icon"
														data-kt-inbox-form="bcc_close">
														<i class="la la-close"></i>
													</span>
												 </div>
											 	<div class="border-bottom">
													<div class="form-floating">
													<textarea v-model="corpo" class="form-control border-0 px-8 min-h-45px" style="height: 100px"
														name="compose_subject" placeholder="Escreva sua mensagem aqui"></textarea>
														<label class="px-8" for="floatingTextarea2">Escreva sua mensagem aqui</label>

													</div>
													</div>



													<div class="border-0 p-8  ql-container ql-snow">
					
													<p>Você pode usar as seguintes Tags:</p>

													<div class="badge badge-light fw-bolder m-2" v-for="tag in tags"> 
													{{tag}}

													{{cron}} 
													 </div> 
 

												</div> 
											</div> 
											<c-mensagem :msg="msg" ></c-mensagem>

											 {{error}}
											<div class="d-flex flex-stack flex-wrap gap-2 py-5 ps-8 pe-5 border-top">


												<div class="d-flex align-items-center me-3">
												 
													<div class="btn-group me-4"> 
													<button class="btn btn-primary" type="submit">SALVAR!</button>
													</div> 

												  
												 </div>
											 	 
										 	</div>
									 	</form>
									 </div>
								</div>
						 	</div>
					 	</div>
						 </div>
						</div>
					</div>
				</div>
			</div>
		</div> 
		<!--end:: Root-->

			<c-footer />   
		</div>
    `,


	data: function () {
		return {
			gravatar: '../painel/assets/image/gravatar.png',
			tags: [
				"{{nome_doador}}",
				"{{nome_doador_completo}}",
				"{{nome_instituicao}}",
				"{{link_boleto}}",
				"{{botao_com_boleto}}",
				"{{link_recuperar_doacao}}",
				"{{botao_recuperar_doacao}}",
				"{{codigo_barras_boleto}}",
				"{{link_recuperacao_senha}}",
				"{{botao_recuperacao_senha}}",
				"{{telefone_doador}}",
				"{{telefone_instituicao}}"
			],
			error: null,
			msg: null,
			assunto: null,
			corpo: null,
			status: null,
			cron: null,
			pagamento: [],
			tempo: []
		}
	},



	filters: {

		este_status(status) {
			let apresentar = {
				refunded: 'Reembolsado',
				processing: 'Em processamento',
				authorized: 'Autorizado ',
				unpaid: 'Não Pago',
				pending: 'Pendente',
				waiting_payment: 'Aguardando Pagamento',
				refused: 'Cancelado',
				paid: 'Pago',
				pending_refund: 'Reembolso pendente ',
				chargedback: 'Estorno',
			}
			return apresentar[status]
		},
	},


	methods: {

		async atualizarEmail() {
			this.error = null

			let res = await adm.alterarEmail(
				this.instituicao_id,
				this.assunto,
				this.corpo,
				this.status,
				this.cron,
			)
			if (!res.next) {
				setTimeout(() => this.msg = "", 5000);
				this.error = res.message
				return null
			}
			this.msg = res.message

		},

		async listarEmails() {
			let res = await adm.listarEmail(localStorage.getItem('instituicao_id'))
			return res
		},

	},

	async mounted() {
		this.pagamento = (await this.listarEmails()).status_pagamento
		this.tempo = (await this.listarEmails()).cron

		this.instituicao_id = window.localStorage.getItem("instituicao_id")

		this.assunto = globalThis._emails.assunto
		this.corpo = globalThis._emails.corpo
		this.status = globalThis._emails.acao
		this.cron = globalThis._emails.cron
		//this.cron = "+15 minute"

	},


}

