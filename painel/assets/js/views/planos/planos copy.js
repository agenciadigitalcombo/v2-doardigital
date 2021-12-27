

export default {
    template:`
	<div>

    <c-header></c-header>
    <c-aside></c-aside>

	<!--begin::Root-->
	<!--begin::Root-->
		<div class="d-flex flex-column flex-root">
			<!--begin::Page-->
			<div class="page d-flex flex-row flex-column-fluid">

				<!--end::Aside-->
				<!--begin::Wrapper-->
				<div class="wrapper d-flex flex-column flex-row-fluid" id="kt_wrapper">

					<!--begin::Content-->
					<div class="content d-flex flex-column flex-column-fluid" id="kt_content">
						<!--begin::Post-->
						<div class="post d-flex flex-column-fluid" id="kt_post">
							<!--begin::Container-->
							<div id="kt_content_container" class="container-xxl">
								<!--begin::Card-->
								<div class="card">
									<!--begin::Card header-->
									<div class="card-header border-0 pt-6">
										<!--begin::Card title-->
										<div class="card-title">
											<!--begin::Search-->
											<div class="d-flex align-items-center position-relative my-1">
												<h1>Planos</h1>
											</div>
											
											<!--end::Search-->
										</div>
										<!--begin::Card title-->
											<!--begin::Group actions-->
											<div class="d-flex justify-content-end align-items-center d-none mr-9"
											data-kt-subscription-table-toolbar="selected">
											<div class="fw-bolder ">
												<span class=""
													data-kt-subscription-table-select="selected_count"></span> Activo
											</div>
										</div>
										<!--end::Group actions-->
										<!--begin::Card toolbar-->
										<div class="card-toolbar">
											<!--begin::Toolbar-->
											<div class="d-flex justify-content-end"
												data-kt-subscription-table-toolbar="base">

											</div>
											<!--end::Toolbar-->
										
											<a  href="#/planos/novo"
											class="btn btn-primary">
											<!--begin::Svg Icon | path: icons/duotune/arrows/arr075.svg-->
											
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
											<!--end::Svg Icon-->
											Novo
										</a>
										</div>
										<!--end::Card toolbar-->
									</div>
									<!--end::Card header-->
									<!--begin::Card body-->
									<div class="card-body pt-0">
										<!--begin::Table-->
										<table class="table align-middle table-row-dashed fs-6 gy-5"
											id="kt_subscriptions_table">
											<!--begin::Table head-->
											<thead>
												<!--begin::Table row-->
												<tr class="text-start text-muted fw-bolder fs-7 text-uppercase gs-0">
													<th class="w-10px pe-2">

													</th>
													<th class="min-w-200px">TIpo</th>
													<th class="min-w-50px"></th>
													<th class="min-w-200px">Valor </th>
													<th class="min-w-50px"></th>
													<th class="min-w-150px">Status </th>
													<th class="text-end min-w-170px">Ação</th>
												</tr>
												<!--end::Table row-->
											</thead>
											<!--end::Table head-->
											<!--begin::Table body-->
											<tbody class="text-gray-600 fw-bold">


												<tr>
													<!--begin::Checkbox-->
													<td>

													</td>
													<!--end::Checkbox-->
													<!--begin::Customer=-->
													<td>

														<!--begin::User details-->
														<div class="d-flex flex-column">
															<a class="text-gray-800 text-hover-primary mb-1">Plano
																800</a>
														</div>
														<!--begin::User details-->
													</td>
													<!--end::Customer=-->
													<!--begin::Billing=-->
													<td>
														<div class="badge badge-light"></div>
													</td>
													<!--begin::Date=-->
													<td>
														<div class=""> R$ 800,00</div>
													</td>
													<!--end::Date=-->
													<!--begin::Action=-->
													<!--begin::Product=-->
													<td></td>
													<!--end::Product=-->
													<!--begin::Status=-->
													<td>

														<div
															class="form-check form-switch form-check-custom form-check-solid me-10">
															<input class="form-check-input h-30px w-50px"
																type="checkbox" value="" id="flexSwitch30x50" />
														</div>

													</td>
													<!--end::Status=-->
													<td class="text-end">

														<a href="#/planos/editar"
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
															<!--end::Svg Icon-->
														</a>
													</td>
													<!--end::Action=-->
												</tr>

												<tr>
													<!--begin::Checkbox-->
													<td>

													</td>
													<!--end::Checkbox-->
													<!--begin::Customer=-->
													<td>

														<!--begin::User details-->
														<div class="d-flex flex-column">
															<a class="text-gray-800 text-hover-primary mb-1">Plano
																500</a>
														</div>
														<!--begin::User details-->
													</td>
													<!--end::Customer=-->
													<!--begin::Billing=-->
													<td>
														<div class="badge badge-light"></div>
													</td>
													<!--begin::Date=-->
													<td class="">
														<div> R$ 500,00</div>
													</td>
													<!--end::Date=-->
													<!--end::Billing=-->
													<!--begin::Product=-->
													<td></td>
													<!--end::Product=-->
													<!--begin::Status=-->
													<td>

														<div
															class="form-check form-switch form-check-custom form-check-solid me-10">
															<input class="form-check-input h-30px w-50px"
																type="checkbox" value="" id="flexSwitch30x50" />
														</div>

													</td>
													<!--end::Status=-->
													<!--begin::Action=-->
													<td class="text-end">

														<a href="#/planos/editar"
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
															<!--end::Svg Icon-->
														</a>
													</td>
													<!--end::Action=-->
												</tr>


												<tr>
													<!--begin::Checkbox-->
													<td>

													</td>
													<!--end::Checkbox-->
													<!--begin::Customer=-->
													<td>

														<!--begin::User details-->
														<div class="d-flex flex-column">
															<a class="text-gray-800 text-hover-primary mb-1">Plano
																300</a>
														</div>
														<!--begin::User details-->
													</td>
													<!--end::Customer=-->
													<!--begin::Billing=-->
													<td>
														<div class="badge badge-light"></div>
													</td>
													<!--begin::Date=-->
													<td>
														<div class=""> R$ 300,00</div>
													</td>
													<!--end::Date=-->
													<!--begin::Action=-->
													<!--begin::Product=-->
													<td></td>
													<!--end::Product=-->
													<!--begin::Status=-->
													<td>

														<div
															class="form-check form-switch form-check-custom form-check-solid me-10">
															<input class="form-check-input h-30px w-50px"
																type="checkbox" value="" id="flexSwitch30x50" />
														</div>

													</td>
													<!--end::Status=-->
													<td class="text-end">

														<a href="#/planos/editar"
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
															<!--end::Svg Icon-->
														</a>
													</td>
													<!--end::Action=-->
												</tr>

												<tr>
													<!--begin::Checkbox-->
													<td>

													</td>
													<!--end::Checkbox-->
													<!--begin::Customer=-->
													<td>

														<!--begin::User details-->
														<div class="d-flex flex-column">
															<a class="text-gray-800 text-hover-primary mb-1">Plano
																200</a>
														</div>
														<!--begin::User details-->
													</td>
													<!--end::Customer=-->
													<!--begin::Billing=-->
													<td>
														<div class="badge badge-light"></div>
													</td>
													<!--begin::Date=-->
													<td>
														<div class=""> R$ 200,00</div>
													</td>
													<!--end::Date=-->
													<!--begin::Action=-->
													<!--begin::Product=-->
													<td></td>
													<!--end::Product=-->
													<!--begin::Status=-->
													<td>

														<div
															class="form-check form-switch form-check-custom form-check-solid me-10">
															<input class="form-check-input h-30px w-50px"
																type="checkbox" value="" id="flexSwitch30x50" />
														</div>

													</td>
													<!--end::Status=-->
													<td class="text-end">

														<a href="#/planos/editar"
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
															<!--end::Svg Icon-->
														</a>
													</td>
													<!--end::Action=-->
												</tr>


												<tr>
													<!--begin::Checkbox-->
													<td>

													</td>
													<!--end::Checkbox-->
													<!--begin::Customer=-->
													<td>

														<!--begin::User details-->
														<div class="d-flex flex-column">
															<a class="text-gray-800 text-hover-primary mb-1">Plano
																100</a>
														</div>
														<!--begin::User details-->
													</td>
													<!--end::Customer=-->
													<!--begin::Billing=-->
													<td>
														<div class="badge badge-light"></div>
													</td>
													<!--begin::Date=-->
													<td>
														<div class=""> R$ 100,00</div>
													</td>
													<!--end::Date=-->
													<!--begin::Action=-->
													<!--begin::Product=-->
													<td></td>
													<!--end::Product=-->
													<!--begin::Status=-->
													<td>
														<div class="">
															<div
																class="form-check form-switch form-check-custom form-check-solid me-10">
																<input class="form-check-input h-30px w-50px"
																	type="checkbox" value="" id="flexSwitch30x50" />
															</div>

													</td>
													<!--end::Status=-->
													<td class="text-end">

														<a href="#/planos/editar"
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
															<!--end::Svg Icon-->
														</a>
													</td>
													<!--end::Action=-->
												</tr>


												<tr>
													<!--begin::Checkbox-->
													<td>

													</td>
													<!--end::Checkbox-->
													<!--begin::Customer=-->
													<td>

														<!--begin::User details-->
														<div class="d-flex flex-column">
															<a class="text-gray-800 text-hover-primary mb-1">Plano
																75</a>
														</div>
														<!--begin::User details-->
													</td>
													<!--end::Customer=-->
													<!--begin::Billing=-->
													<td>
														<div class="badge badge-light"></div>
													</td>
													<!--begin::Date=-->
													<td>
														<div class=""> R$ 75,00</div>
													</td>
													<!--end::Date=-->
													<!--begin::Action=-->
													<!--begin::Product=-->
													<td></td>
													<!--end::Product=-->
													<!--begin::Status=-->
													<td>
														<div class="">
															<div
																class="form-check form-switch form-check-custom form-check-solid me-10">
																<input class="form-check-input h-30px w-50px"
																	type="checkbox" value="" id="flexSwitch30x50" />
															</div>

													</td>
													<!--end::Status=-->
													<td class="text-end">

														<a href="#/planos/editar"
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
															<!--end::Svg Icon-->
														</a>
													</td>
													<!--end::Action=-->
												</tr>


												<tr>
													<!--begin::Checkbox-->
													<td>

													</td>
													<!--end::Checkbox-->
													<!--begin::Customer=-->
													<td>

														<!--begin::User details-->
														<div class="d-flex flex-column">
															<a class="text-gray-800 text-hover-primary mb-1">Plano
																50</a>
														</div>
														<!--begin::User details-->
													</td>
													<!--end::Customer=-->
													<!--begin::Billing=-->
													<td>
														<div class="badge badge-light"></div>
													</td>
													<!--begin::Date=-->
													<td>
														<div class=""> R$ 50,00</div>
													</td>
													<!--end::Date=-->
													<!--begin::Action=-->
													<!--begin::Product=-->
													<td></td>
													<!--end::Product=-->
													<!--begin::Status=-->
													<td>
														<div class="">
															<div
																class="form-check form-switch form-check-custom form-check-solid me-10">
																<input class="form-check-input h-30px w-50px"
																	type="checkbox" value="" id="flexSwitch30x50" />
															</div>

													</td>
													<!--end::Status=-->
													<td class="text-end">

														<a href="#/planos/editar"
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
															<!--end::Svg Icon-->
														</a>
													</td>
													<!--end::Action=-->
												</tr>


												<tr>
													<!--begin::Checkbox-->
													<td>

													</td>
													<!--end::Checkbox-->
													<!--begin::Customer=-->
													<td>

														<!--begin::User details-->
														<div class="d-flex flex-column">
															<a class="text-gray-800 text-hover-primary mb-1">Plano
																25</a>
														</div>
														<!--begin::User details-->
													</td>
													<!--end::Customer=-->
													<!--begin::Billing=-->
													<td>
														<div class="badge badge-light"></div>
													</td>
													<!--begin::Date=-->
													<td>
														<div class=""> R$ 25,00</div>
													</td>
													<!--end::Date=-->
													<!--begin::Action=-->
													<!--begin::Product=-->
													<td></td>
													<!--end::Product=-->
													<!--begin::Status=-->
													<td>
														<div class="">
															<div
																class="form-check form-switch form-check-custom form-check-solid me-10">
																<input class="form-check-input h-30px w-50px"
																	type="checkbox" value="" id="flexSwitch30x50" />
															</div>

													</td>
													<!--end::Status=-->
													<td class="text-end">

														<a href="#/planos/editar"
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
															<!--end::Svg Icon-->
														</a>
													</td>
													<!--end::Action=-->
												</tr>

											</tbody>
											<!--end::Table body-->
										</table>
										<!--end::Table-->
									</div>
									<!--end::Card body-->
								</div>
								<!--end::Card-->
								<!--begin::Modals-->

								<!--end::Modals-->
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
	<!--end::Root-->

		<c-footer/>
	</div>
    `,


     data: function () {
		return {
			gravatar: '../painel/assets/image/gravatar.png',
	
        }
    },
	methods: {
	
     
       

    },
	

	
}

