import adm from "../../../../../static/js/api/adm.js"

export default {
	template: `
		<div>
			<div>

				<c-header></c-header>
				<c-aside></c-aside>

				<!--begin::Root-->
				<div class="d-flex flex-column flex-root"> 
					<div class="page d-flex flex-row flex-column-fluid">
 <div class="wrapper d-flex flex-column flex-row-fluid" id="kt_wrapper">
							 <div class="content d-flex flex-column flex-column-fluid"> 
								<div class="post d-flex flex-column-fluid"> 

									<div class="container-xxl"> 
										<div class="card">
											<div class="card-body pb-0">
												<div class="card-px pt-10 pb-5">

													<h2 class="fs-2x fw-bolder mb-0 fs-4 fw-bold py-7">Adicione uma credencial</h2>
													<div class="text-center">
													<form class="form" action="javascript:void(0)">
														<input v-model="nome_identificacao" type="text"
															class="form-control form-control-solid"
															placeholder="informe um nome" required />
 
														<p class="text-gray-400 fs-4 fw-bold py-7">Poderá acessar em:
														</p>

														<div class="row g-5">
																		{{jms}}

															<div class="col-lg-4" v-for="listar in permisao">
																<div class="card card-stretch mb-5">
																	<label
																		class="form-check form-switch form-check-custom form-check-solid">

																		<input v-bind:value="listar" v-model="jms"
																			@change='updateCheckall()'
																			class="form-check-input" type="checkbox" />
																		<span class="form-check-label">
																			{{ listar }}
																		</span>
																	</label>
																</div>
															</div>
															<br>
														
														</div>

														<div class="mb-10">
														<input class="form-check-input" type="checkbox"
																@click="checkAll()" v-model="isCheckAll"/> selecionar
															tudo
															</div>

														<c-mensagem :msg="msg" v-show="msg" ></c-mensagem>
														
														<button type="submit" @click="adicionaCredencia()"
															class="btn btn-primary er fs-6 px-8 py-4 col-lg-4">Salvar</button>
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

				<c-footer />
			</div>

		</div>
    
    `,



	data: function () {

		return {
			token: null,
			nome_identificacao: null,
			// recursos: null,
			msg: null,
			isCheckAll: false,
			permisao: ['Inicio', 'Doadores', 'Doações', 'Credenciais', 'Usuários', 'Minhas Instituições', 'Divisão Pagamento',
				'Metas', 'Modelo de E-mails', 'Configuração', 'Perfil', 'Modulos', 'Meu Plano', 'Carteira', 'QR CODE'],
			jms: [],
			recursos: ""
		}
	},

	async mounted() {

	},

	methods: {
		async adicionaCredencia() {
			this.error = null

			this.recursos = "";
			for (var key in this.jms) {
				this.recursos += this.jms[key] + ", ";
			}

			let res = await adm.cadastrarCredencia(
				this.nome_identificacao,
				this.recursos,
			)
			if (!res.next) {
				console.log(res)
				this.error = res.message
				return null
			}

			this.msg = res.message,
				setTimeout(() => this.msg = "", 3000); 
				this.nome_identificacao= "" 	
		},


		checkAll() {
			this.isCheckAll = !this.isCheckAll;
			this.jms = [];

			if (this.isCheckAll) {
				for (var key in this.permisao) {
					this.jms.push(this.permisao[key]);
				}
			}
		},
		updateCheckall() {
			if (this.jms.length == this.permisao.length) {
				this.isCheckAll = true;
			} else {
				this.isCheckAll = false;
			}
		},

		printValues() {
			this.recursos = "";

			for (var key in this.jms) {
				this.recursos += this.jms[key] + ", ";

			}
		}

	},


}

