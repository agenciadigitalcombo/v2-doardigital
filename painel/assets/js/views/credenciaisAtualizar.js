import adm from "../../../../static/js/api/adm.js"

export default {
	template: `
		<div>
			<div>

				<c-header></c-header>
				<c-aside></c-aside>

				<!--begin::Root-->
				<div class="d-flex flex-column flex-root">
					<!--begin::Page-->
					<div class="page d-flex flex-row flex-column-fluid">

						<!--begin::Wrapper-->
						<div class="wrapper d-flex flex-column flex-row-fluid" id="kt_wrapper">
							<!--begin::Root-->
							<div class="content d-flex flex-column flex-column-fluid">
								<!--begin::Post-->
								<div class="post d-flex flex-column-fluid">
									<!--begin::Container-->
									<div class="container-xxl">
										<!--begin::Card-->
										<div class="card">
											<div class="card-body pb-0">
												<div class="card-px pt-10 pb-5">

													<h2 class="fs-2x fw-bolder mb-0 fs-4 fw-bold py-7">Adicione uma credencial</h2>
													<div class="text-center">
														<form class="form" action="javascript:void(0)" >
															<input v-model="nome_identificacao" type="text" class="form-control form-control-solid  mb-20"
																placeholder="informe um nome" required />

																<input v-model="id" type="text" class="form-control form-control-solid  mb-20"
																placeholder="id" required />


																
															<p class="text-gray-400 fs-4 fw-bold py-7">Poderá acessar em:</p>

															<div class="row g-5">


															<div class="col-lg-4" v-for="listar in permisao">
																<div class="card card-stretch mb-5">
																	<label
																		class="form-check form-switch form-check-custom form-check-solid">

																		<input v-bind:value="listar" v-model="jms"
																			@change='atualizarCheckall()'
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
																@click="checkAll()" v-model="isCheckAll" /> selecionar
															tudo
															</div>
													

															<button type="submit"  @click="alterarCredencia()"
										class="btn btn-primary er fs-6 px-8 py-4 col-lg-4">Salvar</button>

										<button type="submit"  @click="eliminar()"
										class="btn btn-danger er fs-6 px-8 py-4 col-lg-4">Eliminar</button>
													</form>
												</div>
											</div>
										</div>
									</div>

								</div>
							</div>

							<!--end::Root-->

						</div>
						<!--end::Wrapper-->
					</div>
					<!--end::Page-->
				</div>


				<c-footer />
			</div>

		</div>
    
    `,



	data: function () {

		return {
			id: null,
			nome_identificacao: null,


			isCheckAll: false,
			permisao: ['Atendente', 'atendente 01', 'atendente 02', 'atendente 03'],
			jms: [],
			recursos: ""
		}

	},

	async mounted() {



	},

	methods: {

		async alterarCredencia() {
			this.error = null

			this.recursos = "";
			for (var key in this.jms) {
				this.recursos += this.jms[key] + ", ";
			}

			let res = await adm.atualizarCredencia(
				this.id,
				this.nome_identificacao,
				this.recursos,
			)
			if (!res.next) {
				console.log(res)
				this.error = res.message
				return null
			}
			console.log("atualizado")
		},

		async eliminar() {
			this.error = null

			let res = await adm.deleterCredencia(
				this.id,
				console.log("eliminado")
			)
			if (!res.next) {
				console.log(res)
				this.error = res.message
				return null
			}
			console.log("eliminado")
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
		atualizarCheckall() {
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
