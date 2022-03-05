import tags from '../domain/tag-email.js'
import adm from "../../../../../static/js/api/adm.js"

export default {
	template:`
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
													<div class="ms-auto w-75px text-end">
														<span
															class="text-muted fs-bold cursor-pointer text-hover-primary me-2"
															data-kt-inbox-form="cc_button">Cc</span>
														<span
															class="text-muted fs-bold cursor-pointer text-hover-primary"
															data-kt-inbox-form="bcc_button">Bcc</span>
													</div> 
												</div> 

		
												<div class=" align-items-center border-bottom px-8 min-h-50px">
												<div class="text-dark fw-bolder">status de pagamento:</div>
												<select v-model="status" class="form-select border-0" data-control="select2" data-placeholder="Seleciona a opcao"> 
												<option v-for="dado in pagamento" :key="dado" :value="dado" >{{ dado}}</option>
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

													<span
														class="btn btn-icon btn-sm btn-clean btn-active-light-primary me-2 dz-clickable"
														id="kt_inbox_reply_attachments_select"
														data-kt-inbox-form="dropzone_upload">
													 	<span class="svg-icon svg-icon-2 m-0">
															<svg xmlns="http://www.w3.org/2000/svg" width="24"
																height="24" viewBox="0 0 24 24" fill="none">
																<path opacity="0.3"
																	d="M4.425 20.525C2.525 18.625 2.525 15.525 4.425 13.525L14.825 3.125C16.325 1.625 18.825 1.625 20.425 3.125C20.825 3.525 20.825 4.12502 20.425 4.52502C20.025 4.92502 19.425 4.92502 19.025 4.52502C18.225 3.72502 17.025 3.72502 16.225 4.52502L5.82499 14.925C4.62499 16.125 4.62499 17.925 5.82499 19.125C7.02499 20.325 8.82501 20.325 10.025 19.125L18.425 10.725C18.825 10.325 19.425 10.325 19.825 10.725C20.225 11.125 20.225 11.725 19.825 12.125L11.425 20.525C9.525 22.425 6.425 22.425 4.425 20.525Z"
																	fill="black"></path>
																<path
																	d="M9.32499 15.625C8.12499 14.425 8.12499 12.625 9.32499 11.425L14.225 6.52498C14.625 6.12498 15.225 6.12498 15.625 6.52498C16.025 6.92498 16.025 7.525 15.625 7.925L10.725 12.8249C10.325 13.2249 10.325 13.8249 10.725 14.2249C11.125 14.6249 11.725 14.6249 12.125 14.2249L19.125 7.22493C19.525 6.82493 19.725 6.425 19.725 5.925C19.725 5.325 19.525 4.825 19.125 4.425C18.725 4.025 18.725 3.42498 19.125 3.02498C19.525 2.62498 20.125 2.62498 20.525 3.02498C21.325 3.82498 21.725 4.825 21.725 5.925C21.725 6.925 21.325 7.82498 20.525 8.52498L13.525 15.525C12.325 16.725 10.525 16.725 9.32499 15.625Z"
																	fill="black"></path>
															</svg>
														</span>
												 	</span>
													 <span
														class="btn btn-icon btn-sm btn-clean btn-active-light-primary">
													 	<span class="svg-icon svg-icon-2 m-0">
															<svg xmlns="http://www.w3.org/2000/svg" width="24"
																height="24" viewBox="0 0 24 24" fill="none">
																<path opacity="0.3"
																	d="M18.0624 15.3453L13.1624 20.7453C12.5624 21.4453 11.5624 21.4453 10.9624 20.7453L6.06242 15.3453C4.56242 13.6453 3.76242 11.4453 4.06242 8.94534C4.56242 5.34534 7.46242 2.44534 11.0624 2.04534C15.8624 1.54534 19.9624 5.24534 19.9624 9.94534C20.0624 12.0453 19.2624 13.9453 18.0624 15.3453Z"
																	fill="black"></path>
																<path
																	d="M12.0624 13.0453C13.7193 13.0453 15.0624 11.7022 15.0624 10.0453C15.0624 8.38849 13.7193 7.04535 12.0624 7.04535C10.4056 7.04535 9.06241 8.38849 9.06241 10.0453C9.06241 11.7022 10.4056 13.0453 12.0624 13.0453Z"
																	fill="black"></path>
															</svg>
														</span>
												 	</span>
												 </div>
											 	<div class="d-flex align-items-center">
												 	<span
														class="btn btn-icon btn-sm btn-clean btn-active-light-primary me-2"
														data-toggle="tooltip" title="More actions">
														 <span class="svg-icon svg-icon-2">
															<svg xmlns="http://www.w3.org/2000/svg" width="24"
																height="24" viewBox="0 0 24 24" fill="none">
																<path opacity="0.3"
																	d="M22.1 11.5V12.6C22.1 13.2 21.7 13.6 21.2 13.7L19.9 13.9C19.7 14.7 19.4 15.5 18.9 16.2L19.7 17.2999C20 17.6999 20 18.3999 19.6 18.7999L18.8 19.6C18.4 20 17.8 20 17.3 19.7L16.2 18.9C15.5 19.3 14.7 19.7 13.9 19.9L13.7 21.2C13.6 21.7 13.1 22.1 12.6 22.1H11.5C10.9 22.1 10.5 21.7 10.4 21.2L10.2 19.9C9.4 19.7 8.6 19.4 7.9 18.9L6.8 19.7C6.4 20 5.7 20 5.3 19.6L4.5 18.7999C4.1 18.3999 4.1 17.7999 4.4 17.2999L5.2 16.2C4.8 15.5 4.4 14.7 4.2 13.9L2.9 13.7C2.4 13.6 2 13.1 2 12.6V11.5C2 10.9 2.4 10.5 2.9 10.4L4.2 10.2C4.4 9.39995 4.7 8.60002 5.2 7.90002L4.4 6.79993C4.1 6.39993 4.1 5.69993 4.5 5.29993L5.3 4.5C5.7 4.1 6.3 4.10002 6.8 4.40002L7.9 5.19995C8.6 4.79995 9.4 4.39995 10.2 4.19995L10.4 2.90002C10.5 2.40002 11 2 11.5 2H12.6C13.2 2 13.6 2.40002 13.7 2.90002L13.9 4.19995C14.7 4.39995 15.5 4.69995 16.2 5.19995L17.3 4.40002C17.7 4.10002 18.4 4.1 18.8 4.5L19.6 5.29993C20 5.69993 20 6.29993 19.7 6.79993L18.9 7.90002C19.3 8.60002 19.7 9.39995 19.9 10.2L21.2 10.4C21.7 10.5 22.1 11 22.1 11.5ZM12.1 8.59998C10.2 8.59998 8.6 10.2 8.6 12.1C8.6 14 10.2 15.6 12.1 15.6C14 15.6 15.6 14 15.6 12.1C15.6 10.2 14 8.59998 12.1 8.59998Z"
																	fill="black"></path>
																<path
																	d="M17.1 12.1C17.1 14.9 14.9 17.1 12.1 17.1C9.30001 17.1 7.10001 14.9 7.10001 12.1C7.10001 9.29998 9.30001 7.09998 12.1 7.09998C14.9 7.09998 17.1 9.29998 17.1 12.1ZM12.1 10.1C11 10.1 10.1 11 10.1 12.1C10.1 13.2 11 14.1 12.1 14.1C13.2 14.1 14.1 13.2 14.1 12.1C14.1 11 13.2 10.1 12.1 10.1Z"
																	fill="black"></path>
															</svg>
														</span>
												 	</span>
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
		
	},

	
}

