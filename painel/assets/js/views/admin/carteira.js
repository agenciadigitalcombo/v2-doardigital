import adm from "../../../../../static/js/api/adm.js" 

export default {
	template: `
	<div>

    <c-header></c-header>
    <c-aside></c-aside>
	<!--begin::Root-->
		<div class="d-flex flex-column flex-root">
			<!--begin::Page-->
			<div class="page d-flex flex-row flex-column-fluid">

				<!--begin::Wrapper-->
				<div class="wrapper d-flex flex-column flex-row-fluid" id="kt_wrapper">

	<!--begin::Content-->
					<div class="content d-flex flex-column flex-column-fluid" id="kt_content">
						<!--begin::Post-->
						<div class="post d-flex flex-column-fluid" id="kt_post">
							<!--begin::Container-->
							<div id="kt_content_container" class="container-xxl">
								<!--begin::Row-->
								<div class="row g-5 g-xl-8">
									<!--begin::Stats-->
									<div class="row">
										<!--begin::Col-->
										<div class="col">
											<div class="card card-dashed flex-center min-w-175px my-3 p-6">
												<span class="fs-4 fw-bold text-info pb-1 px-2">Saldo Liberado</span>
												<span class="fs-lg-2tx fw-bolder d-flex justify-content-center">R$
													<span data-kt-countup="true"
														data-kt-countup-value="63,240.00">0</span></span>
											</div>
										</div>
										<!--end::Col-->
										<!--begin::Col-->
										<div class="col">
											<div class="card card-dashed flex-center min-w-175px my-3 p-6">
												<span class="fs-4 fw-bold text-success pb-1 px-2">Saldo á liberar</span>
												<span class="fs-lg-2tx fw-bolder d-flex justify-content-center">R$
													<span data-kt-countup="true"
														data-kt-countup-value="8,530.00">0</span></span>
											</div>
										</div>
										<!--end::Col-->
										<!--begin::Col-->
										<div class="col">
											<div class="card card-dashed flex-center min-w-175px my-3 p-6">
												<span class="fs-4 fw-bold text-danger pb-1 px-2">Total Retirado</span>
												<span class="fs-lg-2tx fw-bolder d-flex justify-content-center">R$
													<span data-kt-countup="true"
														data-kt-countup-value="2,600">0</span></span>
											</div>
										</div>
										<!--end::Col-->

									</div>
									<!--end::Stats-->
								</div>
								<!--end::Row-->



								<!--begin::Row-->
								<div class="row g-5 g-xl-8 pt-5">


									<div class="col-xl-6">
										<!--begin::List Widget 5-->
										<div class="card card-xl-stretch mb-xl-8">
											<!--begin::Header-->
											<div class="card-header align-items-center border-0 mt-4">
												<h3 class="card-title align-items-start flex-column">
													<span class="fw-bolder mb-2 text-dark">Solicitar Saque</span>
												</h3>

											</div>
											<!--end::Header-->
											<!--begin::Body-->
											<div class="card-body pt-5">
												<!--begin::Timeline-->
												<!--begin::Form-->
												<form class="form" action="#">
													<!--begin::Modal body-->
													<div class="py-10 px-lg-17">
														<!--begin::Scroll-->
														<div class="mb-5">
															<!--begin::Row-->
															<div class="fv-row">
																<!--begin::Radio group-->
																<div class="btn-group w-100" data-kt-buttons="true"
																	data-kt-buttons-target="[data-kt-button]">
																	<!--begin::Radio-->
																	<label
																		class="btn btn-outline-secondary text-muted text-hover-white text-active-white btn-outline btn-active-success active"
																		data-kt-button="true">
																		<!--begin::Input-->
																		<input @click="jms = false" class="btn-check"
																			type="radio" name="method" value="1" />
																		<!--end::Input-->
																		Valor Total
																	</label>
																	<!--end::Radio-->
																	<!--begin::Radio-->
																	<label
																		class="btn btn-outline-secondary text-muted text-hover-white text-active-white btn-outline btn-active-success"
																		data-kt-button="true">
																		<!--begin::Input-->
																		<input @click="jms = true" class="btn-check"
																			type="radio" name="method" value="2" />
																		<!--end::Input-->
																		Valor Parcial
																	</label>
																	<!--end::Radio-->
																</div>
																<!--end::Radio group-->

																<div class="mb-2 mt-10" v-if="jms">
																	<input type="email"
																		class="form-control form-control-solid"
																		value="0" />
																</div>

															</div>
															<!--end::Row-->
														</div>
														<!--end::Input group-->

														<!--end::Scroll-->
													</div>
													<!--end::Modal body-->
													<!--begin::Modal footer-->
													<div class="modal-footer flex-center">

														<!--begin::Button-->
														<button type="submit" id="kt_modal_create_api_key_submit"
															class="btn btn-primary">
															<span class="indicator-label">Solicitar Saque</span>
															<span class="indicator-progress">Please wait...
																<span
																	class="spinner-border spinner-border-sm align-middle ms-2"></span></span>
														</button>

														<!--end::Modal footer-->

														<div class="">
															<!--begin::Desc-->
															<div class="timeline-content fw-bolder text-gray-800 ps-3">
																*Será cobrado o valor de
																<a class="text-primary"> R$3,90 </a>
																por saque
															</div>
															<!--end::Desc-->
														</div>
														<!--end::Button-->
													</div>
													<!--end::Modal footer-->
												</form>
												<!--end::Form-->
												<!--end::Timeline-->
											</div>
											<!--end: Card Body-->
										</div>
										<!--end: List Widget 5-->
									</div>

									<div class="col-xl-6">
										<!--begin::List Widget 5-->
										<div class="card card-xl-stretch mb-xl-8">
											<!--begin::Header-->
											<div class="card-header align-items-center border-0 mt-4">
												<h3 class="card-title align-items-start flex-column">
													<span class="fw-bolder mb-2 text-dark">Historico</span>
												</h3>

											</div>
											<!--end::Header-->
											<!--begin::Body-->
											<div class="card-body pt-5">
												<!--begin::Timeline-->
												<div class="timeline-label">
													<!--begin::Item-->
													<div class="timeline-item">
														<!--begin::Label-->
														<div class="timeline-label fw-bolder text-gray-800 fs-6">08:42
														</div>
														<!--end::Label-->
														<!--begin::Badge-->
														<div class="timeline-badge">
															<i class="fa fa-genderless text-warning fs-1"></i>
														</div>
														<!--end::Badge-->
														<!--begin::Text-->
														<div class="timeline-content fw-bolder text-gray-800 ps-3">
															Mauro fanio
															<a href="#" class="text-primary">R$89,26</a>
															<div class="timeline-content fw-bolder text-gray-800 fs-6">
																03/12/2021
															</div>
														</div>
														<!--end::Text-->
													</div>
													<!--end::Item-->
													<!--begin::Item-->
													<div class="timeline-item">
														<!--begin::Label-->
														<div class="timeline-label fw-bolder text-gray-800 fs-6">10:00
														</div>
														<!--end::Label-->
														<!--begin::Badge-->
														<div class="timeline-badge">
															<i class="fa fa-genderless text-success fs-1"></i>
														</div>
														<!--end::Badge-->
														<!--begin::Content-->
														<div class="timeline-content d-flex">
															<span class="fw-bolder text-gray-800 ps-3">AEOL
																meeting</span>
														</div>
														<!--end::Content-->
													</div>
													<!--end::Item-->
													<!--begin::Item-->
													<div class="timeline-item">
														<!--begin::Label-->
														<div class="timeline-label fw-bolder text-gray-800 fs-6">14:37
														</div>
														<!--end::Label-->
														<!--begin::Badge-->
														<div class="timeline-badge">
															<i class="fa fa-genderless text-danger fs-1"></i>
														</div>
														<!--end::Badge-->
														<!--begin::Desc-->
														<div class="timeline-content fw-bolder text-gray-800 ps-3">
															ted
															<a href="#" class="text-primary">R$89,26</a>
															<div class="timeline-content fw-bolder text-gray-800 fs-6">
																03/12/2021
															</div>
														</div>
														<!--end::Desc-->
													</div>
													<!--end::Item-->
													<!--begin::Item-->
													<div class="timeline-item">
														<!--begin::Label-->
														<div class="timeline-label fw-bolder text-gray-800 fs-6">16:50
														</div>
														<!--end::Label-->
														<!--begin::Badge-->
														<div class="timeline-badge">
															<i class="fa fa-genderless text-primary fs-1"></i>
														</div>
														<!--end::Badge-->
														<!--begin::Text-->
														<div class="timeline-content fw-bolder text-gray-800 ps-3">
															Filipense
															<a href="#" class="text-primary">R$89,26</a>
															<div class="timeline-content fw-bolder text-gray-800 fs-6">
																03/12/2021
															</div>
														</div>
														<!--end::Text-->
													</div>
													<!--end::Item-->
													<!--begin::Item-->
													<div class="timeline-item">
														<!--begin::Label-->
														<div class="timeline-label fw-bolder text-gray-800 fs-6">21:03
														</div>
														<!--end::Label-->
														<!--begin::Badge-->
														<div class="timeline-badge">
															<i class="fa fa-genderless text-danger fs-1"></i>
														</div>
														<!--end::Badge-->
														<!--begin::Desc-->
														<div class="timeline-content fw-bold text-gray-800 ps-3">New
															order placed
															<a href="#" class="text-primary">#XF-2356</a>.
														</div>
														<!--end::Desc-->
													</div>
													<!--end::Item-->
													<!--begin::Item-->
													<div class="timeline-item">
														<!--begin::Label-->
														<div class="timeline-label fw-bolder text-gray-800 fs-6">16:50
														</div>
														<!--end::Label-->
														<!--begin::Badge-->
														<div class="timeline-badge">
															<i class="fa fa-genderless text-primary fs-1"></i>
														</div>
														<!--end::Badge-->
														<!--begin::Text-->
														<div class="timeline-content fw-mormal text-muted ps-3">
															Indulging in poorly driving and keep structure keep great
														</div>
														<!--end::Text-->
													</div>
													<!--end::Item-->
													<!--begin::Item-->
													<div class="timeline-item">
														<!--begin::Label-->
														<div class="timeline-label fw-bolder text-gray-800 fs-6">21:03
														</div>
														<!--end::Label-->
														<!--begin::Badge-->
														<div class="timeline-badge">
															<i class="fa fa-genderless text-danger fs-1"></i>
														</div>
														<!--end::Badge-->
														<!--begin::Desc-->
														<div class="timeline-content fw-bold text-gray-800 ps-3">New
															order placed
															<a href="#" class="text-primary">#XF-2356</a>.
														</div>
														<!--end::Desc-->
													</div>
													<!--end::Item-->
													<!--begin::Item-->
													<div class="timeline-item">
														<!--begin::Label-->
														<div class="timeline-label fw-bolder text-gray-800 fs-6">10:30
														</div>
														<!--end::Label-->
														<!--begin::Badge-->
														<div class="timeline-badge">
															<i class="fa fa-genderless text-success fs-1"></i>
														</div>
														<!--end::Badge-->
														<!--begin::Text-->
														<div class="timeline-content fw-mormal text-muted ps-3">Finance
															KPI Mobile app launch preparion meeting</div>
														<!--end::Text-->
													</div>
													<!--end::Item-->
												</div>
												<!--end::Timeline-->
											</div>
											<!--end: Card Body-->
										</div>
										<!--end: List Widget 5-->
									</div>

								</div>
								<!--end::Row-->

							</div>
							<!--end::Container-->
						</div>
						<!--end::Post-->
					</div>
					<!--end::Content-->

				</div>
				<!--end::Wrapper-->
			</div>
			<!--end::Page-->
		</div>
		<!--end::Root-->

		<c-footer/>
		
	</div>
    `,

	data: function () {
		return {
			gravatar: '../painel/assets/image/gravatar.png',
			jms: false,
		}
	},
	methods: {


	},


	mounted() {


	},
	created() {


	},


}

