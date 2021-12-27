import adm from "../../../../../static/js/api/adm.js"

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
					<!--begin::Content-->
					<div class="content d-flex flex-column flex-column-fluid" id="kt_content">
						<!--begin::Post-->
						<div class="post d-flex flex-column-fluid" id="kt_post">
							<!--begin::Container-->
							<div id="kt_content_container" class="container-xxl">
								<!--begin::Layout-->
								<div class="d-flex flex-column flex-xl-row">
									<!--begin::Sidebar-->
									<div class="flex-column flex-lg-row-auto w-100 w-xl-350px mb-10">
										<!--begin::Card-->
										<div class="card mb-5 mb-xl-8">
											<!--begin::Card body-->
											<div class="card-body">
												<!--begin::Summary-->
												<!--begin::User Info-->
												<div class="d-flex flex-center flex-column py-5">
													<!--begin::Avatar-->
													<div class="symbol symbol-100px symbol-circle mb-7">
														<img src="../painel/assets/image/gravatar.png" alt="image" />
													</div>
													<!--end::Avatar-->
													<!--begin::Name-->
													<a href="#"
														class="fs-3 text-gray-800 text-hover-primary fw-bolder mb-3">Emma
														Smith</a>
													<!--end::Name-->
													<!--begin::Position-->
													<div class="mb-9">
														<!--begin::Badge-->
														<div class="badge badge-lg badge-light-primary d-inline">
															Administrator</div>
														<!--begin::Badge-->
													</div>
													<!--end::Position-->
													<!--begin::Info-->
													<!--begin::Info heading-->
													<div class="fw-bolder mb-3">Assinatura
														<i class="fas fa-exclamation-circle ms-2 fs-7"
															data-bs-toggle="popover" data-bs-trigger="hover"
															data-bs-html="true"
															data-bs-content="Number of support tickets assigned, closed and pending this week."></i>
													</div>
													<!--end::Info heading-->

													<!--end::Info-->
												</div>
												<!--end::User Info-->
												<!--end::Summary-->
												<!--begin::Details toggle-->
												<div class="d-flex flex-stack fs-4 py-3">
													<div class="fw-bolder rotate collapsible" data-bs-toggle="collapse"
														href="#kt_user_view_details" role="button" aria-expanded="false"
														aria-controls="kt_user_view_details">Details
														<span class="ms-2 rotate-180">
															<!--begin::Svg Icon | path: icons/duotune/arrows/arr072.svg-->
															<span class="svg-icon svg-icon-3">
																<svg xmlns="http://www.w3.org/2000/svg" width="24"
																	height="24" viewBox="0 0 24 24" fill="none">
																	<path
																		d="M11.4343 12.7344L7.25 8.55005C6.83579 8.13583 6.16421 8.13584 5.75 8.55005C5.33579 8.96426 5.33579 9.63583 5.75 10.05L11.2929 15.5929C11.6834 15.9835 12.3166 15.9835 12.7071 15.5929L18.25 10.05C18.6642 9.63584 18.6642 8.96426 18.25 8.55005C17.8358 8.13584 17.1642 8.13584 16.75 8.55005L12.5657 12.7344C12.2533 13.0468 11.7467 13.0468 11.4343 12.7344Z"
																		fill="black" />
																</svg>
															</span>
															<!--end::Svg Icon-->
														</span>
													</div>
													<span data-bs-toggle="tooltip" data-bs-trigger="hover"
														title="Edit customer details">
														<a href="#" class="btn btn-sm btn-light-primary"
															data-bs-toggle="modal"
															data-bs-target="#kt_modal_update_details">Editar</a>
													</span>
												</div>
												<!--end::Details toggle-->
												<div class="separator"></div>
												<!--begin::Details content-->
												<div id="kt_user_view_details" class="collapse show">
													<div class="pb-5 fs-6">
														<!--begin::Details item-->
														<div class="fw-bolder mt-5">Account ID</div>
														<div class="text-gray-600">ID-45453423</div>
														<!--begin::Details item-->
														<!--begin::Details item-->
														<div class="fw-bolder mt-5">Email</div>
														<div class="text-gray-600">
															<a href="#"
																class="text-gray-600 text-hover-primary">info@keenthemes.com</a>
														</div>
														<!--begin::Details item-->
														<!--begin::Details item-->
														<div class="fw-bolder mt-5">Telefone</div>
														<div class="text-gray-600">+5541996283086</div>
														<!--begin::Details item-->
														<!--begin::Details item-->
														<div class="fw-bolder mt-5">CPF</div>
														<div class="text-gray-600">08988901959</div>
														<!--begin::Details item-->
														<!--begin::Details item-->
														<div class="fw-bolder mt-5">Endereço</div>
														<div class="text-gray-600">
															<span style="color: black;">CEP: </span>82540-091,
															<br />
															<span style="color: black;">Rua: </span> Rua Desembargador
															Aurélio Feijó
															<br />
															<span style="color: black;">Número: </span> 11
															<br />
															<span style="color: black;">Bairro: </span> Boa Vista
															<br />
															<span style="color: black;">Cidade: </span> Curitiba
														</div>

														<!--begin::Details item-->

													</div>
												</div>
												<!--end::Details content-->
											</div>
											<!--end::Card body-->
										</div>
										<!--end::Card-->

									</div>
									<!--end::Sidebar-->
									<!--begin::Content-->
									<div class="flex-lg-row-fluid ms-lg-15">
										<!--begin:::Tabs-->
										<ul
											class="nav nav-custom nav-tabs nav-line-tabs nav-line-tabs-2x border-0 fs-4 fw-bold mb-8">
											<!--begin:::Tab item-->
											<li class="nav-item">
												<a class="nav-link text-active-primary pb-4 active" data-bs-toggle="tab"
													href="#kt_user_view_overview_tab">Visão Gera</a>
											</li>
											<!--end:::Tab item-->

											<!--begin:::Tab item Security-->
											<li class="nav-item">
												<a class="nav-link text-active-primary pb-4" data-bs-toggle="tab"
													href="#kt_user_view_overview_events_and_logs_tab">
													Assinaturas</a>
											</li>
											<!--end:::Tab item-->
											<!--begin:::Tab item-->
											<li class="nav-item">
												<a class="nav-link text-active-primary pb-4" data-kt-countup-tabs="true"
													data-bs-toggle="tab"
													href="#kt_customer_view_overview_statements">Histórico</a>
											</li>
											<!--end:::Tab item-->
										</ul>
										<!--end:::Tabs-->





















										<!--begin:::Tab content-->
										<div class="tab-content" id="myTabContent">
											<!--begin:::Tab pane-->
											<div class="tab-pane fade show active" id="kt_user_view_overview_tab"
												role="tabpanel">

												<!--begin::Card-->
												<div class="card pt-4 mb-6 mb-xl-9">
													<!--begin::Card header-->
													<div class="card-header border-0">
														<!--begin::Card title-->
														<div class="card-title">
															<h2>Historico de transação</h2>
														</div>
														<!--end::Card title-->

													</div>
													<!--end::Card header-->
													<!--begin::Card body-->
													<div class="card-body pt-0 pb-5">
														<!--begin::Table-->
														<table class="table align-middle table-row-dashed gy-5"
															id="kt_table_customers_payment">
															<!--begin::Table head-->
															<thead class="border-bottom border-gray-200 fs-7 fw-bolder">
																<!--begin::Table row-->
																<tr class="text-start text-muted text-uppercase gs-0">
																	<th class="min-w-100px">Data</th>
																	<th>Valor</th>
																	<th>Método </th>
																	<th class="min-w-100px">Status</th>
																	<th class="text-end min-w-100px pe-4">ação</th>
																</tr>
																<!--end::Table row-->
															</thead>
															<!--end::Table head-->
															<!--begin::Table body-->
															<tbody class="fs-6 fw-bold text-gray-600">

																<!--begin::Table row-->
																<tr>
																	<!--begin::Invoice=-->
																	<td>
																		21/12/2021
																	</td>
																	<!--end::Invoice=-->
																	<!--begin::Status=
		<div
		-->
																	<td>R$1,200.00</td>
																	<!--end::Status=-->
																	<!--begin::Amount=-->
																	<td>Pix</td>
																	<!--end::Amount=-->
																	<!--begin::Date=-->
																	<td><span
																			class="badge badge-light-success">Pago</span>
																	</td>
																	<!--end::Date=-->
																	<!--begin::Action=-->
																	<td class="pe-0 text-end">
																		<a href="#"
																			class="btn btn-sm btn-light btn-active-light-primary"
																			data-kt-menu-trigger="click"
																			data-kt-menu-placement="bottom-end">ação
																			<!--begin::Svg Icon | path: icons/duotune/arrows/arr072.svg-->
																			<span class="svg-icon svg-icon-5 m-0">
																				<svg xmlns="http://www.w3.org/2000/svg"
																					width="24" height="24"
																					viewBox="0 0 24 24" fill="none">
																					<path
																						d="M11.4343 12.7344L7.25 8.55005C6.83579 8.13583 6.16421 8.13584 5.75 8.55005C5.33579 8.96426 5.33579 9.63583 5.75 10.05L11.2929 15.5929C11.6834 15.9835 12.3166 15.9835 12.7071 15.5929L18.25 10.05C18.6642 9.63584 18.6642 8.96426 18.25 8.55005C17.8358 8.13584 17.1642 8.13584 16.75 8.55005L12.5657 12.7344C12.2533 13.0468 11.7467 13.0468 11.4343 12.7344Z"
																						fill="black" />
																				</svg>
																			</span>
																			<!--end::Svg Icon-->
																		</a>
																		<!--begin::Menu-->
																		<div class="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-bold fs-7 w-125px py-4"
																			data-kt-menu="true">
																			<!--begin::Menu item-->
																			<div class="menu-item px-3">
																				<a href="../../demo8/dist/apps/customers/view.html"
																					class="menu-link px-3">Ver</a>
																			</div>
																			<!--end::Menu item-->
																			<!--begin::Menu item-->
																			<div class="menu-item px-3">
																				<a href="#" class="menu-link px-3"
																					data-kt-customer-table-filter="delete_row">Deletar</a>
																			</div>
																			<!--end::Menu item-->
																		</div>
																		<!--end::Menu-->
																	</td>
																	<!--end::Action=-->
																</tr>
																<!--end::Table row-->


																<!--begin::Table row-->
																<tr>
																	<!--begin::Invoice=-->
																	<td>
																		21/12/2021
																	</td>
																	<!--end::Invoice=-->
																	<!--begin::Status=
	<div
	-->
																	<td>R$1,200.00</td>
																	<!--end::Status=-->
																	<!--begin::Amount=-->
																	<td>Cartão </td>
																	<!--end::Amount=-->
																	<!--begin::Date=-->
																	<td><span class="badge badge-light-danger"> Vencidos
																		</span></td>
																	<!--end::Date=-->
																	<!--begin::Action=-->
																	<td class="pe-0 text-end">
																		<a href="#"
																			class="btn btn-sm btn-light btn-active-light-primary"
																			data-kt-menu-trigger="click"
																			data-kt-menu-placement="bottom-end">ação
																			<!--begin::Svg Icon | path: icons/duotune/arrows/arr072.svg-->
																			<span class="svg-icon svg-icon-5 m-0">
																				<svg xmlns="http://www.w3.org/2000/svg"
																					width="24" height="24"
																					viewBox="0 0 24 24" fill="none">
																					<path
																						d="M11.4343 12.7344L7.25 8.55005C6.83579 8.13583 6.16421 8.13584 5.75 8.55005C5.33579 8.96426 5.33579 9.63583 5.75 10.05L11.2929 15.5929C11.6834 15.9835 12.3166 15.9835 12.7071 15.5929L18.25 10.05C18.6642 9.63584 18.6642 8.96426 18.25 8.55005C17.8358 8.13584 17.1642 8.13584 16.75 8.55005L12.5657 12.7344C12.2533 13.0468 11.7467 13.0468 11.4343 12.7344Z"
																						fill="black" />
																				</svg>
																			</span>
																			<!--end::Svg Icon-->
																		</a>
																		<!--begin::Menu-->
																		<div class="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-bold fs-7 w-125px py-4"
																			data-kt-menu="true">
																			<!--begin::Menu item-->
																			<div class="menu-item px-3">
																				<a href="../../demo8/dist/apps/customers/view.html"
																					class="menu-link px-3">Ver</a>
																			</div>
																			<!--end::Menu item-->
																			<!--begin::Menu item-->
																			<div class="menu-item px-3">
																				<a href="#" class="menu-link px-3"
																					data-kt-customer-table-filter="delete_row">Deletar</a>
																			</div>
																			<!--end::Menu item-->
																		</div>
																		<!--end::Menu-->
																	</td>
																	<!--end::Action=-->
																</tr>
																<!--end::Table row pago-->




																<!--begin::Table row-->
																<tr>
																	<!--begin::Invoice=-->
																	<td>
																		21/12/2021
																	</td>
																	<!--end::Invoice=-->
																	<!--begin::Status=
	<div
	-->
																	<td>R$1,200.00</td>
																	<!--end::Status=-->
																	<!--begin::Amount=-->
																	<td>Boleto</td>
																	<!--end::Amount=-->
																	<!--begin::Date=-->
																	<td><span
																			class="badge badge-light-warning">Aberto</span>
																	</td>
																	<!--end::Date=-->
																	<!--begin::Action=-->
																	<td class="pe-0 text-end">
																		<a href="#"
																			class="btn btn-sm btn-light btn-active-light-primary"
																			data-kt-menu-trigger="click"
																			data-kt-menu-placement="bottom-end">ação
																			<!--begin::Svg Icon | path: icons/duotune/arrows/arr072.svg-->
																			<span class="svg-icon svg-icon-5 m-0">
																				<svg xmlns="http://www.w3.org/2000/svg"
																					width="24" height="24"
																					viewBox="0 0 24 24" fill="none">
																					<path
																						d="M11.4343 12.7344L7.25 8.55005C6.83579 8.13583 6.16421 8.13584 5.75 8.55005C5.33579 8.96426 5.33579 9.63583 5.75 10.05L11.2929 15.5929C11.6834 15.9835 12.3166 15.9835 12.7071 15.5929L18.25 10.05C18.6642 9.63584 18.6642 8.96426 18.25 8.55005C17.8358 8.13584 17.1642 8.13584 16.75 8.55005L12.5657 12.7344C12.2533 13.0468 11.7467 13.0468 11.4343 12.7344Z"
																						fill="black" />
																				</svg>
																			</span>
																			<!--end::Svg Icon-->
																		</a>
																		<!--begin::Menu-->
																		<div class="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-bold fs-7 w-125px py-4"
																			data-kt-menu="true">
																			<!--begin::Menu item-->
																			<div class="menu-item px-3">
																				<a href="../../demo8/dist/apps/customers/view.html"
																					class="menu-link px-3">Ver</a>
																			</div>
																			<!--end::Menu item-->
																			<!--begin::Menu item-->
																			<div class="menu-item px-3">
																				<a href="#" class="menu-link px-3"
																					data-kt-customer-table-filter="delete_row">Deletar</a>
																			</div>
																			<!--end::Menu item-->
																		</div>
																		<!--end::Menu-->
																	</td>
																	<!--end::Action=-->
																</tr>
																<!--end::Table row-->



																<!--begin::Table row-->
																<tr>
																	<!--begin::Invoice=-->
																	<td>
																		21/12/2021
																	</td>
																	<!--end::Invoice=-->
																	<!--begin::Status=
	<div
	-->
																	<td>R$1,200.00</td>
																	<!--end::Status=-->
																	<!--begin::Amount=-->
																	<td>Pix </td>
																	<!--end::Amount=-->
																	<!--begin::Date=-->
																	<td><span class="badge badge-light-danger"> Falhado
																		</span></td>
																	<!--end::Date=-->
																	<!--begin::Action=-->
																	<td class="pe-0 text-end">
																		<a href="#"
																			class="btn btn-sm btn-light btn-active-light-primary"
																			data-kt-menu-trigger="click"
																			data-kt-menu-placement="bottom-end">ação
																			<!--begin::Svg Icon | path: icons/duotune/arrows/arr072.svg-->
																			<span class="svg-icon svg-icon-5 m-0">
																				<svg xmlns="http://www.w3.org/2000/svg"
																					width="24" height="24"
																					viewBox="0 0 24 24" fill="none">
																					<path
																						d="M11.4343 12.7344L7.25 8.55005C6.83579 8.13583 6.16421 8.13584 5.75 8.55005C5.33579 8.96426 5.33579 9.63583 5.75 10.05L11.2929 15.5929C11.6834 15.9835 12.3166 15.9835 12.7071 15.5929L18.25 10.05C18.6642 9.63584 18.6642 8.96426 18.25 8.55005C17.8358 8.13584 17.1642 8.13584 16.75 8.55005L12.5657 12.7344C12.2533 13.0468 11.7467 13.0468 11.4343 12.7344Z"
																						fill="black" />
																				</svg>
																			</span>
																			<!--end::Svg Icon-->
																		</a>
																		<!--begin::Menu-->
																		<div class="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-bold fs-7 w-125px py-4"
																			data-kt-menu="true">
																			<!--begin::Menu item-->
																			<div class="menu-item px-3">
																				<a href="../../demo8/dist/apps/customers/view.html"
																					class="menu-link px-3">Ver</a>
																			</div>
																			<!--end::Menu item-->
																			<!--begin::Menu item-->
																			<div class="menu-item px-3">
																				<a href="#" class="menu-link px-3"
																					data-kt-customer-table-filter="delete_row">Deletar</a>
																			</div>
																			<!--end::Menu item-->
																		</div>
																		<!--end::Menu-->
																	</td>
																	<!--end::Action=-->
																</tr>
																<!--end::Table row pago-->


																<!--begin::Table row-->
																<tr>
																	<!--begin::Invoice=-->
																	<td>
																		21/12/2021
																	</td>
																	<!--end::Invoice=-->
																	<!--begin::Status=
	<div
	-->
																	<td>R$1,200.00</td>
																	<!--end::Status=-->
																	<!--begin::Amount=-->
																	<td>Boleto</td>
																	<!--end::Amount=-->
																	<!--begin::Date=-->
																	<td><span
																			class="badge badge-light-warning">Aberto</span>
																	</td>
																	<!--end::Date=-->
																	<!--begin::Action=-->
																	<td class="pe-0 text-end">
																		<a href="#"
																			class="btn btn-sm btn-light btn-active-light-primary"
																			data-kt-menu-trigger="click"
																			data-kt-menu-placement="bottom-end">ação
																			<!--begin::Svg Icon | path: icons/duotune/arrows/arr072.svg-->
																			<span class="svg-icon svg-icon-5 m-0">
																				<svg xmlns="http://www.w3.org/2000/svg"
																					width="24" height="24"
																					viewBox="0 0 24 24" fill="none">
																					<path
																						d="M11.4343 12.7344L7.25 8.55005C6.83579 8.13583 6.16421 8.13584 5.75 8.55005C5.33579 8.96426 5.33579 9.63583 5.75 10.05L11.2929 15.5929C11.6834 15.9835 12.3166 15.9835 12.7071 15.5929L18.25 10.05C18.6642 9.63584 18.6642 8.96426 18.25 8.55005C17.8358 8.13584 17.1642 8.13584 16.75 8.55005L12.5657 12.7344C12.2533 13.0468 11.7467 13.0468 11.4343 12.7344Z"
																						fill="black" />
																				</svg>
																			</span>
																			<!--end::Svg Icon-->
																		</a>
																		<!--begin::Menu-->
																		<div class="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-bold fs-7 w-125px py-4"
																			data-kt-menu="true">
																			<!--begin::Menu item-->
																			<div class="menu-item px-3">
																				<a href="../../demo8/dist/apps/customers/view.html"
																					class="menu-link px-3">Ver</a>
																			</div>
																			<!--end::Menu item-->
																			<!--begin::Menu item-->
																			<div class="menu-item px-3">
																				<a href="#" class="menu-link px-3"
																					data-kt-customer-table-filter="delete_row">Deletar</a>
																			</div>
																			<!--end::Menu item-->
																		</div>
																		<!--end::Menu-->
																	</td>
																	<!--end::Action=-->
																</tr>
																<!--end::Table row-->

																<!--begin::Table row-->
																<tr>
																	<!--begin::Invoice=-->
																	<td>
																		21/12/2021
																	</td>
																	<!--end::Invoice=-->
																	<!--begin::Status=
	<div
	-->
																	<td>R$1,200.00</td>
																	<!--end::Status=-->
																	<!--begin::Amount=-->
																	<td>Pix</td>
																	<!--end::Amount=-->
																	<!--begin::Date=-->
																	<td><span
																			class="badge badge-light-success">Pago</span>
																	</td>
																	<!--end::Date=-->
																	<!--begin::Action=-->
																	<td class="pe-0 text-end">
																		<a href="#"
																			class="btn btn-sm btn-light btn-active-light-primary"
																			data-kt-menu-trigger="click"
																			data-kt-menu-placement="bottom-end">ação
																			<!--begin::Svg Icon | path: icons/duotune/arrows/arr072.svg-->
																			<span class="svg-icon svg-icon-5 m-0">
																				<svg xmlns="http://www.w3.org/2000/svg"
																					width="24" height="24"
																					viewBox="0 0 24 24" fill="none">
																					<path
																						d="M11.4343 12.7344L7.25 8.55005C6.83579 8.13583 6.16421 8.13584 5.75 8.55005C5.33579 8.96426 5.33579 9.63583 5.75 10.05L11.2929 15.5929C11.6834 15.9835 12.3166 15.9835 12.7071 15.5929L18.25 10.05C18.6642 9.63584 18.6642 8.96426 18.25 8.55005C17.8358 8.13584 17.1642 8.13584 16.75 8.55005L12.5657 12.7344C12.2533 13.0468 11.7467 13.0468 11.4343 12.7344Z"
																						fill="black" />
																				</svg>
																			</span>
																			<!--end::Svg Icon-->
																		</a>
																		<!--begin::Menu-->
																		<div class="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-bold fs-7 w-125px py-4"
																			data-kt-menu="true">
																			<!--begin::Menu item-->
																			<div class="menu-item px-3">
																				<a href="../../demo8/dist/apps/customers/view.html"
																					class="menu-link px-3">Ver</a>
																			</div>
																			<!--end::Menu item-->
																			<!--begin::Menu item-->
																			<div class="menu-item px-3">
																				<a href="#" class="menu-link px-3"
																					data-kt-customer-table-filter="delete_row">Deletar</a>
																			</div>
																			<!--end::Menu item-->
																		</div>
																		<!--end::Menu-->
																	</td>
																	<!--end::Action=-->
																</tr>
																<!--end::Table row-->



																<!--begin::Table row-->
																<tr>
																	<!--begin::Invoice=-->
																	<td>
																		21/12/2021
																	</td>
																	<!--end::Invoice=-->
																	<!--begin::Status=
	<div
	-->
																	<td>R$1,200.00</td>
																	<!--end::Status=-->
																	<!--begin::Amount=-->
																	<td>Cartão </td>
																	<!--end::Amount=-->
																	<!--begin::Date=-->
																	<td><span class="badge badge-light-danger"> Vencidos
																		</span></td>
																	<!--end::Date=-->
																	<!--begin::Action=-->
																	<td class="pe-0 text-end">
																		<a href="#"
																			class="btn btn-sm btn-light btn-active-light-primary"
																			data-kt-menu-trigger="click"
																			data-kt-menu-placement="bottom-end">ação
																			<!--begin::Svg Icon | path: icons/duotune/arrows/arr072.svg-->
																			<span class="svg-icon svg-icon-5 m-0">
																				<svg xmlns="http://www.w3.org/2000/svg"
																					width="24" height="24"
																					viewBox="0 0 24 24" fill="none">
																					<path
																						d="M11.4343 12.7344L7.25 8.55005C6.83579 8.13583 6.16421 8.13584 5.75 8.55005C5.33579 8.96426 5.33579 9.63583 5.75 10.05L11.2929 15.5929C11.6834 15.9835 12.3166 15.9835 12.7071 15.5929L18.25 10.05C18.6642 9.63584 18.6642 8.96426 18.25 8.55005C17.8358 8.13584 17.1642 8.13584 16.75 8.55005L12.5657 12.7344C12.2533 13.0468 11.7467 13.0468 11.4343 12.7344Z"
																						fill="black" />
																				</svg>
																			</span>
																			<!--end::Svg Icon-->
																		</a>
																		<!--begin::Menu-->
																		<div class="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-bold fs-7 w-125px py-4"
																			data-kt-menu="true">
																			<!--begin::Menu item-->
																			<div class="menu-item px-3">
																				<a href="../../demo8/dist/apps/customers/view.html"
																					class="menu-link px-3">Ver</a>
																			</div>
																			<!--end::Menu item-->
																			<!--begin::Menu item-->
																			<div class="menu-item px-3">
																				<a href="#" class="menu-link px-3"
																					data-kt-customer-table-filter="delete_row">Deletar</a>
																			</div>
																			<!--end::Menu item-->
																		</div>
																		<!--end::Menu-->
																	</td>
																	<!--end::Action=-->
																</tr>
																<!--end::Table row pago-->

															</tbody>
															<!--end::Table body-->
														</table>
														<!--end::Table-->
													</div>
													<!--end::Card body-->
												</div>
												<!--end::Card-->
											</div>
											<!--end:::Tab pane-->

											<!--begin:::Tab pane-->
											<div class="tab-pane fade" id="kt_user_view_overview_events_and_logs_tab"
												role="tabpanel">
												<!--begin::Card-->
												<div class="card pt-4 mb-6 mb-xl-9">
													<!--begin::Card header-->
													<div class="card-header border-0">
														<!--begin::Card title-->
														<div class="card-title">
															<h2>Minhas Assinatura</h2>
														</div>
														<!--end::Card title-->

													</div>
													<!--end::Card header-->
													<!--begin::Card body-->
													<div class="card-body pt-0 pb-5">
														<!--begin::Table wrapper-->
														<div class="table-responsive">
															<!--begin::Table-->
															<table class="table align-middle table-row-dashed gy-5"
																id="kt_table_users_login_session">
																<!--begin::Table head-->
																<thead
																	class="border-bottom border-gray-200 fs-7 fw-bolder">
																	<!--begin::Table row-->
																	<tr
																		class="text-start text-muted text-uppercase gs-0">
																		<th class="min-w-100px">Minha Assinatura</th>
																		<th>Métodos</th>
																		<th>Valor</th>
																		<th class="min-w-125px">Ação</th>
																		<th class="min-w-70px">Motivo Desistencia</th>
																	</tr>
																	<!--end::Table row-->
																</thead>
																<!--end::Table head-->
																<!--begin::Table body-->
																<tbody class="fs-6 fw-bold text-gray-800">
																	<tr>
																		<!--begin::Invoice=-->
																		<td>30/10/2021 - 17:23</td>
																		<!--end::Invoice=-->
																		<!--begin::Status=-->
																		<td>Cartãos</td>
																		<!--end::Status=-->
																		<!--begin::Amount=-->
																		<td>R$29,90</td>
																		<!--end::Amount=-->
																		<!--begin::Date=-->
																		<td>
																			<label
																				class="form-check form-switch form-check-custom form-check-solid">
																				<input class="form-check-input"
																					type="checkbox" />
																			</label>
																		</td>
																		<!--end::Date=-->
																		<!--begin::Action=-->
																		<td>
																			<textarea class="form-control"
																				id="exampleFormControlTextarea1"
																				rows="3"></textarea>
																		</td>
																		<!--end::Action=-->
																	</tr>
																	<tr>
																		<!--begin::Invoice=-->
																		<td>30/10/2021 - 17:23</td>
																		<!--end::Invoice=-->
																		<!--begin::Status=-->
																		<td>Cartãos</td>
																		<!--end::Status=-->
																		<!--begin::Amount=-->
																		<td>R$29,90</td>
																		<!--end::Amount=-->
																		<!--begin::Date=-->
																		<td>
																			<label
																				class="form-check form-switch form-check-custom form-check-solid">
																				<input class="form-check-input"
																					type="checkbox" />
																			</label>
																		</td>
																		<!--end::Date=-->
																		<!--begin::Action=-->
																		<td>
																			<textarea class="form-control"
																				id="exampleFormControlTextarea1"
																				rows="3"></textarea>
																		</td>
																		<!--end::Action=-->
																	</tr>
																	<tr>
																		<!--begin::Invoice=-->
																		<td>30/10/2021 - 17:23</td>
																		<!--end::Invoice=-->
																		<!--begin::Status=-->
																		<td>Cartãos</td>
																		<!--end::Status=-->
																		<!--begin::Amount=-->
																		<td>R$29,90</td>
																		<!--end::Amount=-->
																		<!--begin::Date=-->
																		<td>
																			<label
																				class="form-check form-switch form-check-custom form-check-solid">
																				<input class="form-check-input"
																					type="checkbox" />
																			</label>
																		</td>
																		<!--end::Date=-->
																		<!--begin::Action=-->
																		<td>
																			<textarea class="form-control"
																				id="exampleFormControlTextarea1"
																				rows="3"></textarea>
																		</td>
																		<!--end::Action=-->
																	</tr>
																</tbody>
																<!--end::Table body-->
															</table>
															<!--end::Table-->
														</div>
														<!--end::Table wrapper-->
													</div>
													<!--end::Card body-->
												</div>
												<!--end::Card-->

											</div>
											<!--end:::Tab pane-->

											<!--begin:::Tab pane-->
											<div class="tab-pane fade" id="kt_customer_view_overview_statements"
												role="tabpanel">
												<!--begin::Earnings-->
												<div class="card mb-6 mb-xl-9">

													<div class="card card-xl-stretch mb-xl-8">
														<!--begin::Header-->
														<div class="card-header align-items-center border-0 mt-4">
															<h3 class="card-title align-items-start flex-column">
																<span class="fw-bolder mb-2 text-dark">Historico </span>
															</h3>
															<div class="card-toolbar">

																<div class="menu menu-sub menu-sub-dropdown w-250px w-md-300px"
																	data-kt-menu="true" id="kt_menu_615c40205fc45">
																	<!--begin::Header-->
																	<div class="px-7 py-5">
																		<div class="fs-5 text-dark fw-bolder">Filter
																			Options</div>
																	</div>
																	<!--end::Header-->
																	<!--begin::Menu separator-->
																	<div class="separator border-gray-200"></div>
																	<!--end::Menu separator-->
																	<!--begin::Form-->
																	<div class="px-7 py-5">
																		<!--begin::Input group-->
																		<div class="mb-10">
																			<!--begin::Label-->
																			<label
																				class="form-label fw-bold">Status:</label>
																			<!--end::Label-->
																			<!--begin::Input-->
																			<div>
																				<select
																					class="form-select form-select-solid"
																					data-kt-select2="true"
																					data-placeholder="Select option"
																					data-dropdown-parent="#kt_menu_615c40205fc45"
																					data-allow-clear="true">
																					<option></option>
																					<option value="1">Approved</option>
																					<option value="2">Pending</option>
																					<option value="2">In Process
																					</option>
																					<option value="2">Rejected</option>
																				</select>
																			</div>
																			<!--end::Input-->
																		</div>
																		<!--end::Input group-->
																		<!--begin::Input group-->
																		<div class="mb-10">
																			<!--begin::Label-->
																			<label class="form-label fw-bold">Member
																				Type:</label>
																			<!--end::Label-->
																			<!--begin::Options-->
																			<div class="d-flex">
																				<!--begin::Options-->
																				<label
																					class="form-check form-check-sm form-check-custom form-check-solid me-5">
																					<input class="form-check-input"
																						type="checkbox" value="1" />
																					<span
																						class="form-check-label">Author</span>
																				</label>
																				<!--end::Options-->
																				<!--begin::Options-->
																				<label
																					class="form-check form-check-sm form-check-custom form-check-solid">
																					<input class="form-check-input"
																						type="checkbox" value="2"
																						checked="checked" />
																					<span
																						class="form-check-label">Customer</span>
																				</label>
																				<!--end::Options-->
																			</div>
																			<!--end::Options-->
																		</div>
																		<!--end::Input group-->
																		<!--begin::Input group-->
																		<div class="mb-10">
																			<!--begin::Label-->
																			<label
																				class="form-label fw-bold">Notifications:</label>
																			<!--end::Label-->
																			<!--begin::Switch-->
																			<div
																				class="form-check form-switch form-switch-sm form-check-custom form-check-solid">
																				<input class="form-check-input"
																					type="checkbox" value=""
																					name="notifications"
																					checked="checked" />
																				<label
																					class="form-check-label">Enabled</label>
																			</div>
																			<!--end::Switch-->
																		</div>
																		<!--end::Input group-->
																		<!--begin::ação -->
																		<div class="d-flex justify-content-end">
																			<button type="reset"
																				class="btn btn-sm btn-light btn-active-light-primary me-2"
																				data-kt-menu-dismiss="true">Reset</button>
																			<button type="submit"
																				class="btn btn-sm btn-primary"
																				data-kt-menu-dismiss="true">Apply</button>
																		</div>
																		<!--end::ação -->
																	</div>
																	<!--end::Form-->
																</div>
																<!--end::Menu 1-->
																<!--end::Menu-->
															</div>
														</div>
														<!--end::Header-->
														<!--begin::Body-->
														<div class="card-body pt-5">
															<!--begin::Timeline-->
															<div class="timeline-label">
																<!--begin::Item-->
																<div class="timeline-item">
																	<!--begin::Label-->
																	<div
																		class="timeline-label fw-bolder text-gray-800 fs-6">
																		08:42</div>
																	<!--end::Label-->
																	<!--begin::Badge-->
																	<div class="timeline-badge">
																		<i
																			class="fa fa-genderless text-warning fs-1"></i>
																	</div>
																	<!--end::Badge-->
																	<!--begin::Text-->
																	<div
																		class="fw-mormal timeline-content text-muted ps-3">
																		Outlines keep you honest. And keep structure
																	</div>
																	<!--end::Text-->
																</div>
																<!--end::Item-->
																<!--begin::Item-->
																<div class="timeline-item">
																	<!--begin::Label-->
																	<div
																		class="timeline-label fw-bolder text-gray-800 fs-6">
																		10:00</div>
																	<!--end::Label-->
																	<!--begin::Badge-->
																	<div class="timeline-badge">
																		<i
																			class="fa fa-genderless text-success fs-1"></i>
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
																	<div
																		class="timeline-label fw-bolder text-gray-800 fs-6">
																		14:37</div>
																	<!--end::Label-->
																	<!--begin::Badge-->
																	<div class="timeline-badge">
																		<i
																			class="fa fa-genderless text-danger fs-1"></i>
																	</div>
																	<!--end::Badge-->
																	<!--begin::Desc-->
																	<div
																		class="timeline-content fw-bolder text-gray-800 ps-3">
																		Make deposit
																		<a href="#" class="text-primary">USD 700</a>. to
																		ESL
																	</div>
																	<!--end::Desc-->
																</div>
																<!--end::Item-->
																<!--begin::Item-->
																<div class="timeline-item">
																	<!--begin::Label-->
																	<div
																		class="timeline-label fw-bolder text-gray-800 fs-6">
																		16:50</div>
																	<!--end::Label-->
																	<!--begin::Badge-->
																	<div class="timeline-badge">
																		<i
																			class="fa fa-genderless text-primary fs-1"></i>
																	</div>
																	<!--end::Badge-->
																	<!--begin::Text-->
																	<div
																		class="timeline-content fw-mormal text-muted ps-3">
																		Indulging in poorly driving and keep structure
																		keep great</div>
																	<!--end::Text-->
																</div>
																<!--end::Item-->
																<!--begin::Item-->
																<div class="timeline-item">
																	<!--begin::Label-->
																	<div
																		class="timeline-label fw-bolder text-gray-800 fs-6">
																		21:03</div>
																	<!--end::Label-->
																	<!--begin::Badge-->
																	<div class="timeline-badge">
																		<i
																			class="fa fa-genderless text-danger fs-1"></i>
																	</div>
																	<!--end::Badge-->
																	<!--begin::Desc-->
																	<div
																		class="timeline-content fw-bold text-gray-800 ps-3">
																		New order placed
																		<a href="#" class="text-primary">#XF-2356</a>.
																	</div>
																	<!--end::Desc-->
																</div>
																<!--end::Item-->
																<!--begin::Item-->
																<div class="timeline-item">
																	<!--begin::Label-->
																	<div
																		class="timeline-label fw-bolder text-gray-800 fs-6">
																		16:50</div>
																	<!--end::Label-->
																	<!--begin::Badge-->
																	<div class="timeline-badge">
																		<i
																			class="fa fa-genderless text-primary fs-1"></i>
																	</div>
																	<!--end::Badge-->
																	<!--begin::Text-->
																	<div
																		class="timeline-content fw-mormal text-muted ps-3">
																		Indulging in poorly driving and keep structure
																		keep great</div>
																	<!--end::Text-->
																</div>
																<!--end::Item-->
																<!--begin::Item-->
																<div class="timeline-item">
																	<!--begin::Label-->
																	<div
																		class="timeline-label fw-bolder text-gray-800 fs-6">
																		21:03</div>
																	<!--end::Label-->
																	<!--begin::Badge-->
																	<div class="timeline-badge">
																		<i
																			class="fa fa-genderless text-danger fs-1"></i>
																	</div>
																	<!--end::Badge-->
																	<!--begin::Desc-->
																	<div
																		class="timeline-content fw-bold text-gray-800 ps-3">
																		New order placed
																		<a href="#" class="text-primary">#XF-2356</a>.
																	</div>
																	<!--end::Desc-->
																</div>
																<!--end::Item-->
																<!--begin::Item-->
																<div class="timeline-item">
																	<!--begin::Label-->
																	<div
																		class="timeline-label fw-bolder text-gray-800 fs-6">
																		10:30</div>
																	<!--end::Label-->
																	<!--begin::Badge-->
																	<div class="timeline-badge">
																		<i
																			class="fa fa-genderless text-success fs-1"></i>
																	</div>
																	<!--end::Badge-->
																	<!--begin::Text-->
																	<div
																		class="timeline-content fw-mormal text-muted ps-3">
																		Finance KPI Mobile app launch preparion meeting
																	</div>
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
												<!--end::Earnings-->

											</div>
											<!--end:::Tab pane-->
										</div>
										<!--end:::Tab content-->
									</div>
									<!--end::Content-->
								</div>
								<!--end::Layout-->
								<!--begin::Modals-->
								<!--begin::Modal - Update user details-->
								<div class="modal fade" id="kt_modal_update_details" tabindex="-1" aria-hidden="true">
									<!--begin::Modal dialog-->
									<div class="modal-dialog modal-dialog-centered mw-650px">
										<!--begin::Modal content-->
										<div class="modal-content">
											<!--begin::Form-->
											<form class="form" action="#" id="kt_modal_update_user_form">
												<!--begin::Modal header-->
												<div class="modal-header" id="kt_modal_update_user_header">
													<!--begin::Modal title-->
													<h2 class="fw-bolder">Update User Details</h2>
													<!--end::Modal title-->
													<!--begin::Close-->
													<div class="btn btn-icon btn-sm btn-active-icon-primary"
														data-kt-users-modal-action="close">
														<!--begin::Svg Icon | path: icons/duotune/arrows/arr061.svg-->
														<span class="svg-icon svg-icon-1">
															<svg xmlns="http://www.w3.org/2000/svg" width="24"
																height="24" viewBox="0 0 24 24" fill="none">
																<rect opacity="0.5" x="6" y="17.3137" width="16"
																	height="2" rx="1" transform="rotate(-45 6 17.3137)"
																	fill="black" />
																<rect x="7.41422" y="6" width="16" height="2" rx="1"
																	transform="rotate(45 7.41422 6)" fill="black" />
															</svg>
														</span>
														<!--end::Svg Icon-->
													</div>
													<!--end::Close-->
												</div>
												<!--end::Modal header-->
												<!--begin::Modal body-->
												<div class="modal-body py-10 px-lg-17">
													<!--begin::Scroll-->
													<div class="d-flex flex-column scroll-y me-n7 pe-7"
														id="kt_modal_update_user_scroll" data-kt-scroll="true"
														data-kt-scroll-activate="{default: false, lg: true}"
														data-kt-scroll-max-height="auto"
														data-kt-scroll-dependencies="#kt_modal_update_user_header"
														data-kt-scroll-wrappers="#kt_modal_update_user_scroll"
														data-kt-scroll-offset="300px">
														<!--begin::User toggle-->
														<div class="fw-boldest fs-3 rotate collapsible mb-7"
															data-bs-toggle="collapse"
															href="#kt_modal_update_user_user_info" role="button"
															aria-expanded="false"
															aria-controls="kt_modal_update_user_user_info">User
															Information
															<span class="ms-2 rotate-180">
																<!--begin::Svg Icon | path: icons/duotune/arrows/arr072.svg-->
																<span class="svg-icon svg-icon-3">
																	<svg xmlns="http://www.w3.org/2000/svg" width="24"
																		height="24" viewBox="0 0 24 24" fill="none">
																		<path
																			d="M11.4343 12.7344L7.25 8.55005C6.83579 8.13583 6.16421 8.13584 5.75 8.55005C5.33579 8.96426 5.33579 9.63583 5.75 10.05L11.2929 15.5929C11.6834 15.9835 12.3166 15.9835 12.7071 15.5929L18.25 10.05C18.6642 9.63584 18.6642 8.96426 18.25 8.55005C17.8358 8.13584 17.1642 8.13584 16.75 8.55005L12.5657 12.7344C12.2533 13.0468 11.7467 13.0468 11.4343 12.7344Z"
																			fill="black" />
																	</svg>
																</span>
																<!--end::Svg Icon-->
															</span>
														</div>
														<!--end::User toggle-->
														<!--begin::User form-->
														<div id="kt_modal_update_user_user_info" class="collapse show">
															<!--begin::Input group-->
															<div class="mb-7">
																<!--begin::Label-->
																<label class="fs-6 fw-bold mb-2">
																	<span>Update Avatar</span>
																	<i class="fas fa-exclamation-circle ms-1 fs-7"
																		data-bs-toggle="tooltip"
																		title="Allowed file types: png, jpg, jpeg."></i>
																</label>
																<!--end::Label-->
																<!--begin::Image input wrapper-->
																<div class="mt-1">
																	<!--begin::Image input-->
																	<div class="image-input image-input-outline"
																		data-kt-image-input="true"
																		style="background-image: url(assets/media/avatars/blank.png)">
																		<!--begin::Preview existing avatar-->
																		<div class="image-input-wrapper w-125px h-125px"
																			style="background-image: url(assets/media/avatars/150-1.jpg">
																		</div>
																		<!--end::Preview existing avatar-->
																		<!--begin::Edit-->
																		<label
																			class="btn btn-icon btn-circle btn-active-color-primary w-25px h-25px bg-body shadow"
																			data-kt-image-input-action="change"
																			data-bs-toggle="tooltip"
																			title="Change avatar">
																			<i class="bi bi-pencil-fill fs-7"></i>
																			<!--begin::Inputs-->
																			<input type="file" name="avatar"
																				accept=".png, .jpg, .jpeg" />
																			<input type="hidden" name="avatar_remove" />
																			<!--end::Inputs-->
																		</label>
																		<!--end::Edit-->
																		<!--begin::Cancel-->
																		<span
																			class="btn btn-icon btn-circle btn-active-color-primary w-25px h-25px bg-body shadow"
																			data-kt-image-input-action="cancel"
																			data-bs-toggle="tooltip"
																			title="Cancel avatar">
																			<i class="bi bi-x fs-2"></i>
																		</span>
																		<!--end::Cancel-->
																		<!--begin::Remove-->
																		<span
																			class="btn btn-icon btn-circle btn-active-color-primary w-25px h-25px bg-body shadow"
																			data-kt-image-input-action="remove"
																			data-bs-toggle="tooltip"
																			title="Remove avatar">
																			<i class="bi bi-x fs-2"></i>
																		</span>
																		<!--end::Remove-->
																	</div>
																	<!--end::Image input-->
																</div>
																<!--end::Image input wrapper-->
															</div>
															<!--end::Input group-->
															<!--begin::Input group-->
															<div class="fv-row mb-7">
																<!--begin::Label-->
																<label class="fs-6 fw-bold mb-2">Name</label>
																<!--end::Label-->
																<!--begin::Input-->
																<input type="text"
																	class="form-control form-control-solid"
																	placeholder="" name="name" value="Emma Smith" />
																<!--end::Input-->
															</div>
															<!--end::Input group-->
															<!--begin::Input group-->
															<div class="fv-row mb-7">
																<!--begin::Label-->
																<label class="fs-6 fw-bold mb-2">
																	<span>Email</span>
																	<i class="fas fa-exclamation-circle ms-1 fs-7"
																		data-bs-toggle="tooltip"
																		title="Email address must be active"></i>
																</label>
																<!--end::Label-->
																<!--begin::Input-->
																<input type="email"
																	class="form-control form-control-solid"
																	placeholder="" name="email"
																	value="e.smith@kpmg.com.au" />
																<!--end::Input-->
															</div>
															<!--end::Input group-->
															<!--begin::Input group-->
															<div class="fv-row mb-7">
																<!--begin::Label-->
																<label class="fs-6 fw-bold mb-2">Description</label>
																<!--end::Label-->
																<!--begin::Input-->
																<input type="text"
																	class="form-control form-control-solid"
																	placeholder="" name="description" />
																<!--end::Input-->
															</div>
															<!--end::Input group-->
															<!--begin::Input group-->
															<div class="fv-row mb-15">
																<!--begin::Label-->
																<label class="fs-6 fw-bold mb-2">Language</label>
																<!--end::Label-->
																<!--begin::Input-->
																<select name="language" aria-label="Select a Language"
																	data-control="select2"
																	data-placeholder="Select a Language..."
																	class="form-select form-select-solid"
																	data-dropdown-parent="#kt_modal_update_details">
																	<option></option>
																	<option value="da">Dansk - Danish</option>
																	<option value="de">Deutsch - German</option>
																	<option value="en">English</option>

																</select>
																<!--end::Input-->
															</div>
															<!--end::Input group-->
														</div>
														<!--end::User form-->
														<!--begin::Address toggle-->
														<div class="fw-boldest fs-3 rotate collapsible mb-7"
															data-bs-toggle="collapse"
															href="#kt_modal_update_user_address" role="button"
															aria-expanded="false"
															aria-controls="kt_modal_update_user_address">Address Details
															<span class="ms-2 rotate-180">
																<!--begin::Svg Icon | path: icons/duotune/arrows/arr072.svg-->
																<span class="svg-icon svg-icon-3">
																	<svg xmlns="http://www.w3.org/2000/svg" width="24"
																		height="24" viewBox="0 0 24 24" fill="none">
																		<path
																			d="M11.4343 12.7344L7.25 8.55005C6.83579 8.13583 6.16421 8.13584 5.75 8.55005C5.33579 8.96426 5.33579 9.63583 5.75 10.05L11.2929 15.5929C11.6834 15.9835 12.3166 15.9835 12.7071 15.5929L18.25 10.05C18.6642 9.63584 18.6642 8.96426 18.25 8.55005C17.8358 8.13584 17.1642 8.13584 16.75 8.55005L12.5657 12.7344C12.2533 13.0468 11.7467 13.0468 11.4343 12.7344Z"
																			fill="black" />
																	</svg>
																</span>
																<!--end::Svg Icon-->
															</span>
														</div>
														<!--end::Address toggle-->
														<!--begin::Address form-->
														<div id="kt_modal_update_user_address" class="collapse show">
															<!--begin::Input group-->
															<div class="d-flex flex-column mb-7 fv-row">
																<!--begin::Label-->
																<label class="fs-6 fw-bold mb-2">Address Line 1</label>
																<!--end::Label-->
																<!--begin::Input-->
																<input class="form-control form-control-solid"
																	placeholder="" name="address1"
																	value="101, Collins Street" />
																<!--end::Input-->
															</div>
															<!--end::Input group-->
															<!--begin::Input group-->
															<div class="d-flex flex-column mb-7 fv-row">
																<!--begin::Label-->
																<label class="fs-6 fw-bold mb-2">Address Line 2</label>
																<!--end::Label-->
																<!--begin::Input-->
																<input class="form-control form-control-solid"
																	placeholder="" name="address2" />
																<!--end::Input-->
															</div>
															<!--end::Input group-->
															<!--begin::Input group-->
															<div class="d-flex flex-column mb-7 fv-row">
																<!--begin::Label-->
																<label class="fs-6 fw-bold mb-2">Town</label>
																<!--end::Label-->
																<!--begin::Input-->
																<input class="form-control form-control-solid"
																	placeholder="" name="city" value="Melbourne" />
																<!--end::Input-->
															</div>
															<!--end::Input group-->
															<!--begin::Input group-->
															<div class="row g-9 mb-7">
																<!--begin::Col-->
																<div class="col-md-6 fv-row">
																	<!--begin::Label-->
																	<label class="fs-6 fw-bold mb-2">State /
																		Province</label>
																	<!--end::Label-->
																	<!--begin::Input-->
																	<input class="form-control form-control-solid"
																		placeholder="" name="state" value="Victoria" />
																	<!--end::Input-->
																</div>
																<!--end::Col-->
																<!--begin::Col-->
																<div class="col-md-6 fv-row">
																	<!--begin::Label-->
																	<label class="fs-6 fw-bold mb-2">Post Code</label>
																	<!--end::Label-->
																	<!--begin::Input-->
																	<input class="form-control form-control-solid"
																		placeholder="" name="postcode" value="3000" />
																	<!--end::Input-->
																</div>
																<!--end::Col-->
															</div>
															<!--end::Input group-->

														</div>
														<!--end::Address form-->
													</div>
													<!--end::Scroll-->
												</div>
												<!--end::Modal body-->
												<!--begin::Modal footer-->
												<div class="modal-footer flex-center">
													<!--begin::Button-->
													<button type="reset" class="btn btn-light me-3"
														data-kt-users-modal-action="cancel">Discard</button>
													<!--end::Button-->
													<!--begin::Button-->
													<button type="submit" class="btn btn-primary"
														data-kt-users-modal-action="submit">
														<span class="indicator-label">Submit</span>
														<span class="indicator-progress">Please wait...
															<span
																class="spinner-border spinner-border-sm align-middle ms-2"></span></span>
													</button>
													<!--end::Button-->
												</div>
												<!--end::Modal footer-->
											</form>
											<!--end::Form-->
										</div>
									</div>
								</div>
								<!--end::Modal - Update user details-->





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
 

    <c-footer/>
	</div>
 
	</div>
    
    `,


    
    data: function () {
        
        return {
			gravatar: '../painel/assets/image/gravatar.png',
			token: null,
			nome: null,
			cpf: null,
			telefone: null,
			email: null
        }
    
    },
	
    async mounted() {
        // this.user = localStorage.getItem('user')
		
        // let plugin = document.createElement('script')
        // plugin.setAttribute('src', './front-js/scripts.bundle.js')
        // plugin.async = true;
        // document.head.appendChild(plugin)

		let dados = (await this.listar()).dados

		console.log(dados)
		this.nome = dados.nome
		this.email = dados.email
		this.cpf = dados.cpf
		this.telefone = dados.telefone
    
		
    }, 

	methods: {
		async listar() {
            let res = await adm.ListarPerfil( localStorage.getItem('token') )
			return res
        },
	},
}

// Taxa de Doações

// Preenchimento de Perfil
