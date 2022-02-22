import adm from "../../../../../static/js/api/adm.js"

export default {
	template:`
		<div>

			<c-header></c-header>
			<c-aside></c-aside>

			<!--begin::Root-->
			<div class="d-flex flex-column flex-root">
				<div class="page d-flex flex-row flex-column-fluid">

					<div class="wrapper d-flex flex-column flex-row-fluid" id="kt_wrapper">

						<div class="content d-flex flex-column flex-column-fluid" id="kt_content">

							<div class="post d-flex flex-column-fluid" id="kt_post">
								<div id="kt_content_container" class="container-xxl">
									<div class="card">
										<div class="card-header border-0 pt-6">

											<div class="card-title">

												<div class="d-flex align-items-center position-relative my-1">
													<h1>Plano Digital</h1>
												</div>

											</div>

											<div class="d-flex justify-content-end align-items-center d-none mr-9"
												data-kt-subscription-table-toolbar="selected">
												<div class="fw-bolder ">
													<span class=""
														data-kt-subscription-table-select="selected_count"></span> Activo
												</div>
											</div>
											<div class="card-toolbar">
												<div class="d-flex justify-content-end"
													data-kt-subscription-table-toolbar="base">

												</div>
												<a href="#/plano-digital/novo"
													class="btn btn-primary">
													<span class="svg-icon svg-icon-2">
														<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
															viewBox="0 0 24 24" fill="none">
															<rect opacity="0.5" x="11.364" y="20.364" width="16"
																height="2" rx="1" transform="rotate(-90 11.364 20.364)"
																fill="black" />
															<rect x="4.36396" y="11.364" width="16" height="2" rx="1"
																fill="black" />
														</svg>
													</span>
													Novo
												</a>
											</div>
										</div>
										<div class="card-body pt-0">
											<div class="table-responsive">
												<table class="table align-middle table-row-dashed fs-6 gy-5"
													id="kt_subscriptions_table">
													<thead>
														<tr class="text-start text-muted fw-bolder fs-7 text-uppercase gs-0">
															<th class="w-10px pe-2">

															</th>
															<th class="min-w-200px">Tipo</th>
															<th class="min-w-150px">Whatsapp</th>
															<th class="min-w-150px">Valor </th>
															<th class="min-w-5px"></th>
															<th class="min-w-100px">Status </th>
															<th class="text-end min-w-100px">Ação</th>
														</tr>
													</thead>
													<tbody class="text-gray-600 fw-bold">
														<tr v-for="item in dados" :key="item.id">
													
														<td>

														</td>

														<td>

															<div class="d-flex flex-column">
																<a class="text-gray-800 text-hover-primary mb-1">
																	{{ item.nome }}
																</a>
															</div>
														</td>
														<td>
														<div v-if="whatsapp === item.whatsapp">
														Sim
															</div>

															<div v-else>
															Não
															</div>
														</td>
														<td>
															<span class="w25">{{ item.amount | is_price }}</span>
														</td>
														<td></td>
														<td>

																<div class="form-check form-switch form-check-custom form-check-solid me-10">
																
																<input class="form-check-input h-30px w-50px" v-model="item.status" true-value="1" false-value="0" @click="statusx(item.id)"
																type="checkbox" id="flexSwitch30x50" />
																	</div>

														</td>
														<td class="text-end">
															<a @click="editar(item.id)"
															class="btn btn-icon btn-active-light-primary w-35px h-35px me-3 btn-primary"
															style="margin: 2px;">
															<!--begin::Svg Icon | path: icons/duotune/general/gen019.svg-->
															<span class="svg-icon svg-icon-3">
																<svg xmlns="http://www.w3.org/2000/svg" width="20"
																	height="20" fill="currentColor"
																	class="bi bi-pencil-fill" viewBox="0 0 16 16">
																	<path
																		d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708l-3-3zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207l6.5-6.5zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.499.499 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11l.178-.178z" />
																</svg>
															</span>
														</a>
													</td>
												</tr>

											</tbody>
										</table>
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
	</div >
	`,


     data: function () {
		return {
			id: null,
			plano_id: null,
			nome: null,
			whatsapp: null,
			instituicao_max: null,
			quant_disparos: null,
			amount: null,
			status: null,
	        token: null,
     	    dados: [],
        }
    },

	filters: {
        is_price(price) {
            let amount = (price / 100).toLocaleString('pt-br', { minimumFractionDigits: 2 })
            return `R$ ${amount}`
        }
    },
	
	methods: {
        async listar() {
            let res = await adm.listarPlanoDigital(localStorage.getItem('token'))
            return res
        },

		async editar(id) {
			globalThis._planos = this.dados.find(user => user.id == id)
            window.location.href = "#/plano-digital/editar"
        },

		async statusx(status) {
			this.error = null
			this.plano_id= status 
			let res = await adm.onOff(
				this.plano_id,
				this.token,
			)
			if (!res.next) {
				console.log(res)
				this.error = res.message
				return null
			}
			
		},	
	
	},

	async mounted() {
		this.dados = (await this.listar()).dados
       
	   
	},
	
}

