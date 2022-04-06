import adm from "../../../../../static/js/api/adm.js"

export default {
	template: `
	<div>
	<div>

	<c-header></c-header>
	<c-aside></c-aside>

	<div class="d-flex flex-column flex-root">
			<!--begin::Sales Statistics-->
			<div class="page d-flex flex-row flex-column-fluid">
		
				<!--begin::Wrapper-->
				<div class="wrapper d-flex flex-column flex-row-fluid" id="kt_wrapper">
			 
		 
					<!--end::Header-->
					<!--begin::Content-->
					<div class="content d-flex flex-column flex-column-fluid" id="kt_content">
						<!--begin::Post-->
						<div class="post d-flex flex-column-fluid" id="kt_post">
							<!--begin::Container-->
							<div id="kt_content_container" class="container-xxl">
								<!--begin::Row-->
								<div class="row g-5 g-xl-8">
									<!--begin::Col-->
									<div class="col-xl-3">
										<!--begin::Mixed Widget 1-->
										<div class="card card-xl-stretch mb-xl-8">
											<!--begin::Body-->
											<div class="card-body p-0">
												<!--begin::Header-->
												<div class="px-9 pt-7 card-rounded h-275px w-100 bg-primary">
												 
													<!--begin::Balance-->
													<div class="d-flex text-center flex-column text-white pt-8">
														<h3 class="m-0 text-white fw-bolder fs-3">Total de Doações</h3>
														<span class="fw-bolder fs-2x pt-1">{{doacao_total+'00'  | is_price }}</span>
														
													</div> 
												</div>
												<!--end::Header-->
												<!--begin::Items-->
												<div class="bg-body shadow-sm card-rounded mx-9 mb-9 px-6 py-9 position-relative z-index-1" style="margin-top: -100px">
													<!--begin::Item-->
													<div class="d-flex align-items-center mb-6">
														<!--begin::Symbol-->
														<div class="symbol symbol-45px w-40px me-5">
															<span class="symbol-label bg-lighten">
																<!--begin::Svg Icon | path: icons/duotune/maps/map004.svg-->
																<span class="svg-icon svg-icon-1">
																	<svg xmlns="http://www.w3.org/2000/svg" width="60"
																	height="60" fill="currentColor"
																	class="bi bi-qr-code-scan" viewBox="0 0 16 16 ">
																	<path d="M0 .5A.5.5 0 0 1 .5 0h3a.5.5 0 0 1 0 1H1v2.5a.5.5 0 0 1-1 0v-3Zm12 0a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0V1h-2.5a.5.5 0 0 1-.5-.5ZM.5 12a.5.5 0 0 1 .5.5V15h2.5a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5v-3a.5.5 0 0 1 .5-.5Zm15 0a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1 0-1H15v-2.5a.5.5 0 0 1 .5-.5ZM4 4h1v1H4V4Z" />
																	<path d="M7 2H2v5h5V2ZM3 3h3v3H3V3Zm2 8H4v1h1v-1Z" />
																	<path d="M7 9H2v5h5V9Zm-4 1h3v3H3v-3Zm8-6h1v1h-1V4Z" />
																	<path d="M9 2h5v5H9V2Zm1 1v3h3V3h-3ZM8 8v2h1v1H8v1h2v-2h1v2h1v-1h2v-1h-3V8H8Zm2 2H9V9h1v1Zm4 2h-1v1h-2v1h3v-2Zm-4 2v-1H8v1h2Z" />
																	<path d="M12 9h2V8h-2v1Z" />
																</svg>
																</span>
																<!--end::Svg Icon-->
															</span>
														</div>
														<!--end::Symbol-->
														<!--begin::Description-->
														<div class="d-flex align-items-center flex-wrap w-100">
															<!--begin::Title-->
															<div class="mb-1 pe-3 flex-grow-1"> 
																<div class="text-gray-400 fw-bold fs-7">Pix</div>
															</div>
															
															<!--end::Title-->
															<!--begin::Label-->
															<div class="d-flex align-items-center">
																<div class="fw-bolder fs-5 text-gray-800 pe-1">{{ pix_total+'00' | is_price }}</div>
																 
															</div> 
														</div>
														<!--end::Description-->
													</div>
													<!--end::Item-->
												
													<!--begin::Item-->
													<div class="d-flex align-items-center mb-6">
														<!--begin::Symbol-->
														<div class="symbol symbol-45px w-40px me-5">
															<span class="symbol-label bg-lighten">
																<!--begin::Svg Icon | path: icons/duotune/electronics/elc005.svg-->
																<span class="svg-icon svg-icon-1">
																	<svg xmlns="http://www.w3.org/2000/svg" width="60"
																	height="60" fill="currentColor"
																	class="bi bi-upc-scan" viewBox="0 0 16 16">
																	<path
																		d="M1.5 1a.5.5 0 0 0-.5.5v3a.5.5 0 0 1-1 0v-3A1.5 1.5 0 0 1 1.5 0h3a.5.5 0 0 1 0 1h-3zM11 .5a.5.5 0 0 1 .5-.5h3A1.5 1.5 0 0 1 16 1.5v3a.5.5 0 0 1-1 0v-3a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 1-.5-.5zM.5 11a.5.5 0 0 1 .5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 1 0 1h-3A1.5 1.5 0 0 1 0 14.5v-3a.5.5 0 0 1 .5-.5zm15 0a.5.5 0 0 1 .5.5v3a1.5 1.5 0 0 1-1.5 1.5h-3a.5.5 0 0 1 0-1h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 1 .5-.5zM3 4.5a.5.5 0 0 1 1 0v7a.5.5 0 0 1-1 0v-7zm2 0a.5.5 0 0 1 1 0v7a.5.5 0 0 1-1 0v-7zm2 0a.5.5 0 0 1 1 0v7a.5.5 0 0 1-1 0v-7zm2 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-7zm3 0a.5.5 0 0 1 1 0v7a.5.5 0 0 1-1 0v-7z" />
																</svg>
																</span>
																<!--end::Svg Icon-->
															</span>
														</div>
														<!--end::Symbol-->
														<!--begin::Description-->
														<div class="d-flex align-items-center flex-wrap w-100">
															<!--begin::Title-->
															<div class="mb-1 pe-3 flex-grow-1"> 
																<div class="text-gray-400 fw-bold fs-7">Boleto </div>
															</div>
															<!--end::Title-->
															<!--begin::Label-->
															<div class="d-flex align-items-center">
																<div class="fw-bolder fs-5 text-gray-800 pe-1">{{ boleto_total+'00' | is_price }}</div>
									 
															</div>   
														</div>
														<!--end::Description-->
													</div>
													<!--end::Item-->

														<!--begin::Item-->
														<div class="d-flex align-items-center mb-6">
															<!--begin::Symbol-->
															<div class="symbol symbol-45px w-40px me-5">
																<span class="symbol-label bg-lighten">
																	<!--begin::Svg Icon | path: icons/duotune/general/gen025.svg-->
																	<span class="svg-icon svg-icon-1">
																		<svg xmlns="http://www.w3.org/2000/svg" width="60"
																		height="60" fill="currentColor"
																		class="bi bi-credit-card-2-front-fill"
																		viewBox="0 0 16 16">
																		<path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm2.5 1a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h2a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-2zm0 3a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1h-5zm0 2a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1h-1zm3 0a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1h-1zm3 0a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1h-1zm3 0a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1h-1z" />
																	</svg>
																	</span>
																	<!--end::Svg Icon-->
																</span>
															</div>
															<!--end::Symbol-->
															<!--begin::Description-->
															<div class="d-flex align-items-center flex-wrap w-100">
																<!--begin::Title-->
																<div class="mb-1 pe-3 flex-grow-1">
																	 <div class="text-gray-400 fw-bold fs-7"> Cartão </div>
																</div>
																<!--end::Title-->
																<!--begin::Label-->
																<div class="d-flex align-items-center">   
																	<div class="fw-bolder fs-5 text-gray-800 pe-1">{{ cartao_total+'00' | is_price }}</div>
																	 
																</div>
																<!--end::Label-->
															</div>
															<!--end::Description-->
														</div>
														<!--end::Item-->
												</div>
												<!--end::Items-->
											</div>
											<!--end::Body-->
										</div>
										<!--end::Mixed Widget 1-->
									</div>
									<!--end::Col-->
								
									<!--begin::Col-->
									<div class="col-xl-3">
										<!--begin::Mixed Widget 1-->
										<div class="card card-xl-stretch mb-5 mb-xl-8">
											<!--begin::Body-->
											<div class="card-body p-0">
												<!--begin::Header-->
												<div class="px-9 pt-7 card-rounded h-275px w-100 bg-success">
												 
													<!--begin::Balance-->
													<div class="d-flex text-center flex-column text-white pt-8"> 
														<h3 class="m-0 text-white fw-bolder fs-3">Doações Concluidas</h3>
														<span class="fw-bolder fs-2x pt-1">{{ concluido_total+'00' | is_price }}</span>
													</div>
												</div>
												<!--end::Header-->
												<!--begin::Items-->
												<div class="bg-body shadow-sm card-rounded mx-9 mb-9 px-6 py-9 position-relative z-index-1" style="margin-top: -100px">
													<!--begin::Item-->
													<div class="d-flex align-items-center mb-6">
														<!--begin::Symbol-->
														<div class="symbol symbol-45px w-40px me-5">
															<span class="symbol-label bg-lighten">
																<!--begin::Svg Icon | path: icons/duotune/maps/map004.svg-->
																<span class="svg-icon svg-icon-1">
																	<svg xmlns="http://www.w3.org/2000/svg" width="60"
																	height="60" fill="currentColor"
																	class="bi bi-qr-code-scan" viewBox="0 0 16 16 ">
																	<path d="M0 .5A.5.5 0 0 1 .5 0h3a.5.5 0 0 1 0 1H1v2.5a.5.5 0 0 1-1 0v-3Zm12 0a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0V1h-2.5a.5.5 0 0 1-.5-.5ZM.5 12a.5.5 0 0 1 .5.5V15h2.5a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5v-3a.5.5 0 0 1 .5-.5Zm15 0a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1 0-1H15v-2.5a.5.5 0 0 1 .5-.5ZM4 4h1v1H4V4Z" />
																	<path d="M7 2H2v5h5V2ZM3 3h3v3H3V3Zm2 8H4v1h1v-1Z" />
																	<path d="M7 9H2v5h5V9Zm-4 1h3v3H3v-3Zm8-6h1v1h-1V4Z" />
																	<path d="M9 2h5v5H9V2Zm1 1v3h3V3h-3ZM8 8v2h1v1H8v1h2v-2h1v2h1v-1h2v-1h-3V8H8Zm2 2H9V9h1v1Zm4 2h-1v1h-2v1h3v-2Zm-4 2v-1H8v1h2Z" />
																	<path d="M12 9h2V8h-2v1Z" />
																</svg>
																</span>
																<!--end::Svg Icon-->
															</span>
														</div>
														<!--end::Symbol-->
														<!--begin::Description-->
														<div class="d-flex align-items-center flex-wrap w-100">
															<!--begin::Title-->
															<div class="mb-1 pe-3 flex-grow-1"> 
																<div class="text-gray-400 fw-bold fs-7">Pix</div>
															</div>
															
															<!--end::Title-->
															<!--begin::Label-->
															<div class="d-flex align-items-center">
																<div class="fw-bolder fs-5 text-gray-800 pe-1">{{ pix_concluido+'00' | is_price }}</div>
														
															</div>
															<!--end::Label-->
														</div>
														<!--end::Description-->
													</div>
													<!--end::Item-->
												
													<!--begin::Item-->
													<div class="d-flex align-items-center mb-6">
														<!--begin::Symbol-->
														<div class="symbol symbol-45px w-40px me-5">
															<span class="symbol-label bg-lighten">
																<!--begin::Svg Icon | path: icons/duotune/electronics/elc005.svg-->
																<span class="svg-icon svg-icon-1">
																	<svg xmlns="http://www.w3.org/2000/svg" width="60"
																	height="60" fill="currentColor"
																	class="bi bi-upc-scan" viewBox="0 0 16 16">
																	<path
																		d="M1.5 1a.5.5 0 0 0-.5.5v3a.5.5 0 0 1-1 0v-3A1.5 1.5 0 0 1 1.5 0h3a.5.5 0 0 1 0 1h-3zM11 .5a.5.5 0 0 1 .5-.5h3A1.5 1.5 0 0 1 16 1.5v3a.5.5 0 0 1-1 0v-3a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 1-.5-.5zM.5 11a.5.5 0 0 1 .5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 1 0 1h-3A1.5 1.5 0 0 1 0 14.5v-3a.5.5 0 0 1 .5-.5zm15 0a.5.5 0 0 1 .5.5v3a1.5 1.5 0 0 1-1.5 1.5h-3a.5.5 0 0 1 0-1h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 1 .5-.5zM3 4.5a.5.5 0 0 1 1 0v7a.5.5 0 0 1-1 0v-7zm2 0a.5.5 0 0 1 1 0v7a.5.5 0 0 1-1 0v-7zm2 0a.5.5 0 0 1 1 0v7a.5.5 0 0 1-1 0v-7zm2 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-7zm3 0a.5.5 0 0 1 1 0v7a.5.5 0 0 1-1 0v-7z" />
																</svg>
																</span>
																<!--end::Svg Icon-->
															</span>
														</div>
														<!--end::Symbol-->
														<!--begin::Description-->
														<div class="d-flex align-items-center flex-wrap w-100">
															<!--begin::Title-->
															<div class="mb-1 pe-3 flex-grow-1"> 
																<div class="text-gray-400 fw-bold fs-7">Boleto </div>
															</div>
															<!--end::Title-->
															<!--begin::Label-->
															<div class="d-flex align-items-center">
																<div class="fw-bolder fs-5 text-gray-800 pe-1">{{ boleto_concluido+'00' | is_price }}</div>
									 
															</div>
															<!--end::Label-->
														</div>
														<!--end::Description-->
													</div>
													<!--end::Item-->
														<!--begin::Item-->
														<div class="d-flex align-items-center mb-6">
															<!--begin::Symbol-->
															<div class="symbol symbol-45px w-40px me-5">
																<span class="symbol-label bg-lighten">
																	<!--begin::Svg Icon | path: icons/duotune/general/gen025.svg-->
																	<span class="svg-icon svg-icon-1">
																		<svg xmlns="http://www.w3.org/2000/svg" width="60"
																		height="60" fill="currentColor"
																		class="bi bi-credit-card-2-front-fill"
																		viewBox="0 0 16 16">
																		<path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm2.5 1a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h2a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-2zm0 3a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1h-5zm0 2a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1h-1zm3 0a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1h-1zm3 0a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1h-1zm3 0a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1h-1z" />
																	</svg>
																	</span>
																	<!--end::Svg Icon-->
																</span>
															</div>
															<!--end::Symbol-->
															<!--begin::Description-->
															<div class="d-flex align-items-center flex-wrap w-100">
																<!--begin::Title-->
																<div class="mb-1 pe-3 flex-grow-1">
																	 <div class="text-gray-400 fw-bold fs-7"> Cartão </div>
																</div>
																<!--end::Title-->
																<!--begin::Label-->
																<div class="d-flex align-items-center">
																	<div class="fw-bolder fs-5 text-gray-800 pe-1">{{ cartao_concluido+'00' | is_price }}</div>		 
																</div>
																<!--end::Label-->
															</div>
															<!--end::Description-->
														</div>
														<!--end::Item-->
												</div>
												<!--end::Items-->
											</div>
											<!--end::Body-->
										</div>
										<!--end::Mixed Widget 1-->
									</div>
									<!--end::Col-->

										<!--begin::Col-->
										<div class="col-xl-3">
											<!--begin::Mixed Widget 1-->
											<div class="card card-xl-stretch mb-5 mb-xl-8">
												<!--begin::Body-->
												<div class="card-body p-0">
													<!--begin::Header-->
													<div class="px-9 pt-7 card-rounded h-275px w-100 bg-warning">
													 
														<!--begin::Balance-->
														<div class="d-flex text-center flex-column text-white pt-8"> 
															<h3 class="m-0 text-white fw-bolder fs-3">Doações em Aberto</h3>
															<span class="fw-bolder fs-2x pt-1">{{ aberto_total+'00' | is_price }}</span>
														</div>
													</div>
													<!--end::Header-->
												<!--begin::Items-->
												<div class="bg-body shadow-sm card-rounded mx-9 mb-9 px-6 py-9 position-relative z-index-1" style="margin-top: -100px">
													<!--begin::Item-->
													<div class="d-flex align-items-center mb-6">
														<!--begin::Symbol-->
														<div class="symbol symbol-45px w-40px me-5">
															<span class="symbol-label bg-lighten">
																<!--begin::Svg Icon | path: icons/duotune/maps/map004.svg-->
																<span class="svg-icon svg-icon-1">
																	<svg xmlns="http://www.w3.org/2000/svg" width="60"
																	height="60" fill="currentColor"
																	class="bi bi-qr-code-scan" viewBox="0 0 16 16 ">
																	<path d="M0 .5A.5.5 0 0 1 .5 0h3a.5.5 0 0 1 0 1H1v2.5a.5.5 0 0 1-1 0v-3Zm12 0a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0V1h-2.5a.5.5 0 0 1-.5-.5ZM.5 12a.5.5 0 0 1 .5.5V15h2.5a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5v-3a.5.5 0 0 1 .5-.5Zm15 0a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1 0-1H15v-2.5a.5.5 0 0 1 .5-.5ZM4 4h1v1H4V4Z" />
																	<path d="M7 2H2v5h5V2ZM3 3h3v3H3V3Zm2 8H4v1h1v-1Z" />
																	<path d="M7 9H2v5h5V9Zm-4 1h3v3H3v-3Zm8-6h1v1h-1V4Z" />
																	<path d="M9 2h5v5H9V2Zm1 1v3h3V3h-3ZM8 8v2h1v1H8v1h2v-2h1v2h1v-1h2v-1h-3V8H8Zm2 2H9V9h1v1Zm4 2h-1v1h-2v1h3v-2Zm-4 2v-1H8v1h2Z" />
																	<path d="M12 9h2V8h-2v1Z" />
																</svg>
																</span>
																<!--end::Svg Icon-->
															</span>
														</div>
														<!--end::Symbol-->
														<!--begin::Description-->
														<div class="d-flex align-items-center flex-wrap w-100">
															<!--begin::Title-->
															<div class="mb-1 pe-3 flex-grow-1"> 
																<div class="text-gray-400 fw-bold fs-7">Pix</div>
															</div>
															
															<!--end::Title-->
															<!--begin::Label-->
															<div class="d-flex align-items-center">
																<div class="fw-bolder fs-5 text-gray-800 pe-1">{{ pix_aberto+'00' | is_price }}</div>
																 
															</div>
													
														</div> 
													</div> 

													<div class="d-flex align-items-center mb-6">
														 
														<div class="symbol symbol-45px w-40px me-5">
															<span class="symbol-label bg-lighten"> 
																<span class="svg-icon svg-icon-1">
																	<svg xmlns="http://www.w3.org/2000/svg" width="60"
																	height="60" fill="currentColor"
																	class="bi bi-upc-scan" viewBox="0 0 16 16">
																	<path
																		d="M1.5 1a.5.5 0 0 0-.5.5v3a.5.5 0 0 1-1 0v-3A1.5 1.5 0 0 1 1.5 0h3a.5.5 0 0 1 0 1h-3zM11 .5a.5.5 0 0 1 .5-.5h3A1.5 1.5 0 0 1 16 1.5v3a.5.5 0 0 1-1 0v-3a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 1-.5-.5zM.5 11a.5.5 0 0 1 .5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 1 0 1h-3A1.5 1.5 0 0 1 0 14.5v-3a.5.5 0 0 1 .5-.5zm15 0a.5.5 0 0 1 .5.5v3a1.5 1.5 0 0 1-1.5 1.5h-3a.5.5 0 0 1 0-1h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 1 .5-.5zM3 4.5a.5.5 0 0 1 1 0v7a.5.5 0 0 1-1 0v-7zm2 0a.5.5 0 0 1 1 0v7a.5.5 0 0 1-1 0v-7zm2 0a.5.5 0 0 1 1 0v7a.5.5 0 0 1-1 0v-7zm2 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-7zm3 0a.5.5 0 0 1 1 0v7a.5.5 0 0 1-1 0v-7z" />
																</svg>
																</span> 
															</span>
														</div> 
														<div class="d-flex align-items-center flex-wrap w-100">
															<!--begin::Title-->
															<div class="mb-1 pe-3 flex-grow-1"> 
																<div class="text-gray-400 fw-bold fs-7">Boleto </div>
															</div>
															
															<div class="d-flex align-items-center">
																<div class="fw-bolder fs-5 text-gray-800 pe-1">{{ boleto_aberto+'00' | is_price }}</div>
									 
															</div> 
														</div> 
													</div> 
														<div class="d-flex align-items-center mb-6"> 
															<div class="symbol symbol-45px w-40px me-5">
																<span class="symbol-label bg-lighten"> 
																	<span class="svg-icon svg-icon-1">
																		<svg xmlns="http://www.w3.org/2000/svg" width="60"
																		height="60" fill="currentColor"
																		class="bi bi-credit-card-2-front-fill"
																		viewBox="0 0 16 16">
																		<path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm2.5 1a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h2a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-2zm0 3a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1h-5zm0 2a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1h-1zm3 0a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1h-1zm3 0a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1h-1zm3 0a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1h-1z" />
																	</svg>
																	</span> 
																</span>
															</div> 
															<div class="d-flex align-items-center flex-wrap w-100">
															 
																<div class="mb-1 pe-3 flex-grow-1">
																	 <div class="text-gray-400 fw-bold fs-7"> Cartão </div>
																</div>
																<div class="d-flex align-items-center">
																	<div class="fw-bolder fs-5 text-gray-800 pe-1"> {{ cartao_aberto+'00' | is_price }}</div>
															 	</div>
																 
															</div>
															<!--end::Description-->
														</div>
														<!--end::Item-->
												</div>
												<!--end::Items-->
												</div>
												<!--end::Body-->
											</div>
											<!--end::Mixed Widget 1-->
										</div>
										<!--end::Col-->

											<!--begin::Col-->
									<div class="col-xl-3">
										<!--begin::Mixed Widget 1-->
										<div class="card card-xl-stretch mb-xl-8">
											<!--begin::Body-->
											<div class="card-body p-0">
												<!--begin::Header-->
												<div class="px-9 pt-7 card-rounded h-275px w-100 bg-danger">
												 
													<!--begin::Balance-->
													<div class="d-flex text-center flex-column text-white pt-8"> 
														<h3 class="m-0 text-white fw-bolder fs-3">Total Vencido/Falhado</h3>
														<span class="fw-bolder fs-2x pt-1">{{ falhado_total+'00' | is_price }}</span>
													</div>
												 
												</div> 
												<div class="bg-body shadow-sm card-rounded mx-9 mb-9 px-6 py-9 position-relative z-index-1" style="margin-top: -100px">
													<!--begin::Item-->
													<div class="d-flex align-items-center mb-6">
														<!--begin::Symbol-->
														<div class="symbol symbol-45px w-40px me-5">
															<span class="symbol-label bg-lighten"> 
																<span class="svg-icon svg-icon-1">
																	<svg xmlns="http://www.w3.org/2000/svg" width="60"
																	height="60" fill="currentColor"
																	class="bi bi-qr-code-scan" viewBox="0 0 16 16 ">
																	<path d="M0 .5A.5.5 0 0 1 .5 0h3a.5.5 0 0 1 0 1H1v2.5a.5.5 0 0 1-1 0v-3Zm12 0a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0V1h-2.5a.5.5 0 0 1-.5-.5ZM.5 12a.5.5 0 0 1 .5.5V15h2.5a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5v-3a.5.5 0 0 1 .5-.5Zm15 0a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1 0-1H15v-2.5a.5.5 0 0 1 .5-.5ZM4 4h1v1H4V4Z" />
																	<path d="M7 2H2v5h5V2ZM3 3h3v3H3V3Zm2 8H4v1h1v-1Z" />
																	<path d="M7 9H2v5h5V9Zm-4 1h3v3H3v-3Zm8-6h1v1h-1V4Z" />
																	<path d="M9 2h5v5H9V2Zm1 1v3h3V3h-3ZM8 8v2h1v1H8v1h2v-2h1v2h1v-1h2v-1h-3V8H8Zm2 2H9V9h1v1Zm4 2h-1v1h-2v1h3v-2Zm-4 2v-1H8v1h2Z" />
																	<path d="M12 9h2V8h-2v1Z" />
																</svg>
																</span> 
															</span>
														</div>
														<!--end::Symbol-->
														<!--begin::Description-->
														<div class="d-flex align-items-center flex-wrap w-100">
															<!--begin::Title-->
															<div class="mb-1 pe-3 flex-grow-1"> 
																<div class="text-gray-400 fw-bold fs-7">Pix</div>
															</div>
															
															<!--end::Title-->
															<!--begin::Label-->
															<div class="d-flex align-items-center">
																<div class="fw-bolder fs-5 text-gray-800 pe-1">{{ pix_falhado+'00' | is_price }}</div>

															</div> 
														</div> 
													</div> 
													<div class="d-flex align-items-center mb-6"> 
														<div class="symbol symbol-45px w-40px me-5">
															<span class="symbol-label bg-lighten">
																<!--begin::Svg Icon | path: icons/duotune/electronics/elc005.svg-->
																<span class="svg-icon svg-icon-1">
																	<svg xmlns="http://www.w3.org/2000/svg" width="60"
																	height="60" fill="currentColor"
																	class="bi bi-upc-scan" viewBox="0 0 16 16">
																	<path
																		d="M1.5 1a.5.5 0 0 0-.5.5v3a.5.5 0 0 1-1 0v-3A1.5 1.5 0 0 1 1.5 0h3a.5.5 0 0 1 0 1h-3zM11 .5a.5.5 0 0 1 .5-.5h3A1.5 1.5 0 0 1 16 1.5v3a.5.5 0 0 1-1 0v-3a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 1-.5-.5zM.5 11a.5.5 0 0 1 .5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 1 0 1h-3A1.5 1.5 0 0 1 0 14.5v-3a.5.5 0 0 1 .5-.5zm15 0a.5.5 0 0 1 .5.5v3a1.5 1.5 0 0 1-1.5 1.5h-3a.5.5 0 0 1 0-1h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 1 .5-.5zM3 4.5a.5.5 0 0 1 1 0v7a.5.5 0 0 1-1 0v-7zm2 0a.5.5 0 0 1 1 0v7a.5.5 0 0 1-1 0v-7zm2 0a.5.5 0 0 1 1 0v7a.5.5 0 0 1-1 0v-7zm2 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-7zm3 0a.5.5 0 0 1 1 0v7a.5.5 0 0 1-1 0v-7z" />
																</svg>
																</span> 
															</span>
														</div> 
														<div class="d-flex align-items-center flex-wrap w-100">
															<!--begin::Title-->
															<div class="mb-1 pe-3 flex-grow-1"> 
																<div class="text-gray-400 fw-bold fs-7">Boleto </div>
															</div>
															<!--end::Title-->
															<!--begin::Label-->
															<div class="d-flex align-items-center">
																<div class="fw-bolder fs-5 text-gray-800 pe-1">{{ boleto_falhado+'00' | is_price }}</div>
					
															</div> 
														</div> 
													</div> 
														<div class="d-flex align-items-center mb-6">
															<!--begin::Symbol-->
															<div class="symbol symbol-45px w-40px me-5">
																<span class="symbol-label bg-lighten"> 
																	<span class="svg-icon svg-icon-1">
																		<svg xmlns="http://www.w3.org/2000/svg" width="60"
																		height="60" fill="currentColor"
																		class="bi bi-credit-card-2-front-fill"
																		viewBox="0 0 16 16">
																		<path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm2.5 1a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h2a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-2zm0 3a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1h-5zm0 2a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1h-1zm3 0a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1h-1zm3 0a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1h-1zm3 0a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1h-1z" />
																	</svg>
																	</span> 
																</span>
															</div> 
															<div class="d-flex align-items-center flex-wrap w-100">
																<!--begin::Title-->
																<div class="mb-1 pe-3 flex-grow-1">
																	 <div class="text-gray-400 fw-bold fs-7"> Cartão </div>
																</div>  
																<div class="d-flex align-items-center">
																	<div class="fw-bolder fs-5 text-gray-800 pe-1">{{ cartao_falhado+'00' | is_price }}</div>
																	 
																</div> 
															</div> 
														</div>
														<!--end::Item-->
												</div>
												<!--end::Items-->
											</div>
											<!--end::Body-->
										</div>
										<!--end::Mixed Widget 1-->
									</div>
									<!--end::Col-->
								</div>
								
						 
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
											 
									  
	<c-footer/>
	</div>
 
	</div>												
    
    `,



	data: function () {

		return {
			token: null,
			instituicao_id: null,
			dash_inst: "",
			doacao_total: "",
			cartao_total: "",
			 boleto_total: "",
			 pix_total: "",

			 concluido_total: "",
			 cartao_concluido: "",
			 boleto_concluido: "",
			 pix_concluido: "",

			 aberto_total: "",
			 cartao_aberto: "",
			 boleto_aberto: "",
			 pix_aberto: "",

			 falhado_total: "",
			 cartao_falhado: "",
			 boleto_falhado: "",
			 pix_falhado: "",

			msg: null,
			error: null,
			jms: true,
		}

	},
	filters: {
        is_price(price) {
            let amount = (price / 100).toLocaleString('pt-br', { minimumFractionDigits: 2 })
            return `R$ ${amount}`
        }
    },
	methods: {

		async istituicaoDashboard() {
			this.error = null

			let res = await adm.dashboardInstituicao(
				this.token,
				this.instituicao_id,
			)
			if (!res.next) {
				this.jms = res.next,
				 this.error = res.message
				return null
			}

			    this.jms = res.next,
				this.msg = res.message
			//	this.dash_inst = res.dados.boleto || {} 
				console.log(this.dash_inst)

				this.cartao_total = parseInt(res.dados.credit_card.total)
				this.boleto_total = parseInt(res.dados.boleto.total)
				this.pix_total = parseInt(res.dados.PIX.total)
				this.doacao_total  =  this.cartao_total + this.boleto_total + this.pix_total
				
				var unicoC = parseInt(res.dados.credit_card.unico.paid.total)
				var recorentC = parseInt(res.dados.credit_card.recorrente.paid.total)
				var unicoP = parseInt(res.dados.PIX.unico.paid.total)
				var recorentP = parseInt(res.dados.PIX.recorrente.paid.total)
				var unicoB = parseInt(res.dados.boleto.unico.paid.total)
				var recorentB = parseInt(res.dados.boleto.recorrente.paid.total)
				
				this.cartao_concluido = unicoC + recorentC
				this.boleto_concluido = unicoB + recorentB
				this.pix_concluido = unicoP + recorentP 
				this.concluido_total = this.cartao_concluido + this.boleto_concluido + this.pix_concluido



				var unicoAC = parseInt(res.dados.credit_card.unico.waiting_payment.total)
				var recorentAC = parseInt(res.dados.credit_card.recorrente.waiting_payment.total)
				var unicoAP = parseInt(res.dados.PIX.unico.waiting_payment.total)
				var recorentAP = parseInt(res.dados.PIX.recorrente.waiting_payment.total)
				var unicoAB = parseInt(res.dados.boleto.unico.waiting_payment.total)
				var recorentAB = parseInt(res.dados.boleto.recorrente.waiting_payment.total)

				this.cartao_aberto = unicoAC + recorentAC
				this.boleto_aberto = unicoAB + recorentAB
				this.pix_aberto = unicoAP + recorentAP 
				this.aberto_total = this.cartao_aberto + this.boleto_aberto + this.pix_aberto

				var unicoFC = parseInt(res.dados.credit_card.unico.refused.total)
				var recorentFC = parseInt(res.dados.credit_card.recorrente.refused.total)
				var unicoFP = parseInt(res.dados.PIX.unico.refused.total)
				var recorentFP = parseInt(res.dados.PIX.recorrente.refused.total)
				var unicoFB = parseInt(res.dados.boleto.unico.refused.total)
				var recorentFB = parseInt(res.dados.boleto.recorrente.refused.total)

				this.cartao_falhado = unicoFC + recorentFC
				this.boleto_falhado = unicoFB + recorentFB
				this.pix_falhado = unicoFP + recorentFP 
				this.falhado_total = this.cartao_falhado + this.boleto_falhado + this.pix_falhado

			return res

		},

			async dashboardInst() {
			let res = await adm.dashboardInstituicao(
				this.token,
				this.instituicao_id,
			)
			return res
		},

	},

	mounted() {
	   this.istituicaoDashboard() 
	 

	//	let token_payload = token.split('.')[0]
	//	let token_parse = JSON.parse(atob(token_payload))
	},

	created() {
		this.token = localStorage.getItem('token')
		this.instituicao_id = window.localStorage.getItem("instituicao_id")
	},

}

