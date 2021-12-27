

export default {
    template:`
	<div>

    <c-header></c-header>
    <c-aside></c-aside>

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
										<!--begin::Svg Icon | path: icons/duotune/general/gen021.svg-->
										<span class="svg-icon svg-icon-1 position-absolute ms-6">
											<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
												<rect opacity="0.5" x="17.0365" y="15.1223" width="8.15546" height="2" rx="1" transform="rotate(45 17.0365 15.1223)" fill="black" />
												<path d="M11 19C6.55556 19 3 15.4444 3 11C3 6.55556 6.55556 3 11 3C15.4444 3 19 6.55556 19 11C19 15.4444 15.4444 19 11 19ZM11 5C7.53333 5 5 7.53333 5 11C5 14.4667 7.53333 17 11 17C14.4667 17 17 14.4667 17 11C17 7.53333 14.4667 5 11 5Z" fill="black" />
											</svg>
										</span>
										<!--end::Svg Icon-->
										<input type="text" data-kt-subscription-table-filter="search" class="form-control form-control-solid w-250px ps-14" placeholder="Search Subscriptions" />
									</div>
									<!--end::Search-->
								</div>
								<!--begin::Card title-->
								<!--begin::Card toolbar-->
								<div class="card-toolbar">
									<!--begin::Toolbar-->
									<div class="d-flex justify-content-end" data-kt-subscription-table-toolbar="base">
										<!--begin::Filter-->
										<button type="button" class="btn btn-light-primary me-3" data-kt-menu-trigger="click" data-kt-menu-placement="bottom-end">
										<!--begin::Svg Icon | path: icons/duotune/general/gen031.svg-->
										<span class="svg-icon svg-icon-2">
											<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
												<path d="M19.0759 3H4.72777C3.95892 3 3.47768 3.83148 3.86067 4.49814L8.56967 12.6949C9.17923 13.7559 9.5 14.9582 9.5 16.1819V19.5072C9.5 20.2189 10.2223 20.7028 10.8805 20.432L13.8805 19.1977C14.2553 19.0435 14.5 18.6783 14.5 18.273V13.8372C14.5 12.8089 14.8171 11.8056 15.408 10.964L19.8943 4.57465C20.3596 3.912 19.8856 3 19.0759 3Z" fill="black" />
											</svg>
										</span>
										<!--end::Svg Icon-->Filtros</button>
										<!--begin::Menu 1-->
										<div class="menu menu-sub menu-sub-dropdown w-300px w-md-325px" data-kt-menu="true">
											<!--begin::Header-->
											<div class="px-7 py-5">
												<div class="fs-5 text-dark fw-bolder">Opção de Filtros</div>
											</div>
											<!--end::Header-->
											<!--begin::Separator-->
											<div class="separator border-gray-200"></div>
											<!--end::Separator-->
											<!--begin::Content-->
											<div class="px-7 py-5" data-kt-subscription-table-filter="form">
												<!--begin::Input group-->
												<div class="mb-10">
													<label class="form-label fs-6 fw-bold">Periodo:</label>
													<select class="form-select form-select-solid fw-bolder" data-kt-select2="true" data-placeholder="selecione a Opção" data-allow-clear="true" data-kt-subscription-table-filter="month" data-hide-search="true">
														<option></option>
														<option value="0">Hoje</option>
														<option value="1">Ontem</option>
														<option value="7">Últimos 7 dias</option>
														<option value="30">Últimos 30 dias</option>
														<option value="365">Este Ano</option>
														<option value="366">Escolher Periodo</option>
													</select>
												</div>
												<!--end::Input group-->
												<!--begin::Input group-->
												<div class="mb-10">
													<label class="d-flex align-items-center fs-6 fw-bold form-label mb-2">
														<span class="required">Data Ínicio</span>
														<i class="fas fa-exclamation-circle ms-2 fs-7" data-bs-toggle="tooltip" title="Enter a card CVV code"></i>
													</label>
													<div class="position-relative">
														<input type="date" class="form-control form-control-solid" />
													</div>
												</div>
												<!--end::Input group-->
												<!--begin::Input group-->
												<div class="mb-10">
													<label class="d-flex align-items-center fs-6 fw-bold form-label mb-2">
														<span class="required">Data Final</span>
														<i class="fas fa-exclamation-circle ms-2 fs-7" data-bs-toggle="tooltip" title="Enter a card CVV code"></i>
													</label>
													<div class="position-relative">	
														<input type="date"  class="form-control form-control-solid"  />								
													</div>
												</div>
												<!--end::Input group-->
												<!--begin::Input group-->
												<div class="mb-10">
													<label class="form-label fs-6 fw-bold">Recorrente:</label>
													<select class="form-select form-select-solid fw-bolder" data-kt-select2="true" data-placeholder="selecione a Opção" data-allow-clear="true" data-kt-subscription-table-filter="product" data-hide-search="true">
														<option></option>
														<option value="1">SIM</option>
														<option value="0">NÃO</option>
													</select>
												</div>
												<!--end::Input group-->
												<!--begin::Actions-->
												<div class="d-flex justify-content-end">
													<button type="reset" class="btn btn-light btn-active-light-primary fw-bold me-2 px-6" data-kt-menu-dismiss="true" data-kt-subscription-table-filter="reset">Reset</button>
													<button type="submit" class="btn btn-primary fw-bold px-6" data-kt-menu-dismiss="true" data-kt-subscription-table-filter="filter">Aplicar</button>
												</div>
												<!--end::Actions-->
											</div>
											<!--end::Content-->
										</div>
										<!--end::Menu 1-->
										<!--end::Filter-->
										<!--begin::Export-->
										<button type="button" class="btn btn-light-primary me-3" data-bs-toggle="modal" data-bs-target="#kt_subscriptions_export_modal">
										<!--begin::Svg Icon | path: icons/duotune/arrows/arr078.svg-->
										<span class="svg-icon svg-icon-2">
											<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
												<rect opacity="0.3" x="12.75" y="4.25" width="12" height="2" rx="1" transform="rotate(90 12.75 4.25)" fill="black" />
												<path d="M12.0573 6.11875L13.5203 7.87435C13.9121 8.34457 14.6232 8.37683 15.056 7.94401C15.4457 7.5543 15.4641 6.92836 15.0979 6.51643L12.4974 3.59084C12.0996 3.14332 11.4004 3.14332 11.0026 3.59084L8.40206 6.51643C8.0359 6.92836 8.0543 7.5543 8.44401 7.94401C8.87683 8.37683 9.58785 8.34458 9.9797 7.87435L11.4427 6.11875C11.6026 5.92684 11.8974 5.92684 12.0573 6.11875Z" fill="black" />
												<path d="M18.75 8.25H17.75C17.1977 8.25 16.75 8.69772 16.75 9.25C16.75 9.80228 17.1977 10.25 17.75 10.25C18.3023 10.25 18.75 10.6977 18.75 11.25V18.25C18.75 18.8023 18.3023 19.25 17.75 19.25H5.75C5.19772 19.25 4.75 18.8023 4.75 18.25V11.25C4.75 10.6977 5.19771 10.25 5.75 10.25C6.30229 10.25 6.75 9.80228 6.75 9.25C6.75 8.69772 6.30229 8.25 5.75 8.25H4.75C3.64543 8.25 2.75 9.14543 2.75 10.25V19.25C2.75 20.3546 3.64543 21.25 4.75 21.25H18.75C19.8546 21.25 20.75 20.3546 20.75 19.25V10.25C20.75 9.14543 19.8546 8.25 18.75 8.25Z" fill="#C4C4C4" />
											</svg>
										</span>
										<!--end::Svg Icon-->Export</button>
										<!--end::Export-->
										<!--begin::Add subscription-->
										<a href="../../demo8/dist/apps/subscriptions/add.html" class="btn btn-primary">
										<!--begin::Svg Icon | path: icons/duotune/arrows/arr075.svg-->
										<span class="svg-icon svg-icon-2">
											<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
												<rect opacity="0.5" x="11.364" y="20.364" width="16" height="2" rx="1" transform="rotate(-90 11.364 20.364)" fill="black" />
												<rect x="4.36396" y="11.364" width="16" height="2" rx="1" fill="black" />
											</svg>
										</span>
										<!--end::Svg Icon-->Novo</a>
										<!--end::Add subscription-->
									</div>
									<!--end::Toolbar-->
									<!--begin::Group actions-->
									<div class="d-flex justify-content-end align-items-center d-none" data-kt-subscription-table-toolbar="selected">
										<div class="fw-bolder me-5">
										<span class="me-2" data-kt-subscription-table-select="selected_count"></span>Selected</div>
										<button type="button" class="btn btn-danger" data-kt-subscription-table-select="delete_selected">Delete Selected</button>
									</div>
									<!--end::Group actions-->
								</div>
								<!--end::Card toolbar-->
							</div>
							<!--end::Card header-->
							<!--begin::Card body-->
							<div class="card-body pt-0">
								<!--begin::Table-->
								<table class="table align-middle table-row-dashed fs-6 gy-5" id="kt_subscriptions_table">
									<!--begin::Table head-->
									<thead>
										<!--begin::Table row-->
										<tr class="text-start text-muted fw-bolder fs-7 text-uppercase gs-0">
											<th class="w-10px pe-2">
												<div class="form-check form-check-sm form-check-custom form-check-solid me-3">
													<input class="form-check-input" type="checkbox" data-kt-check="true" data-kt-check-target="#kt_subscriptions_table .form-check-input" value="1" />
												</div>
											</th>
											<th class="min-w-250px">Usuario</th>
											<th class="min-w-125px"></th>
											<th class="min-w-125px">Data Cadastro </th>
											<th class="min-w-125px"></th>
											<th class="min-w-125px">Tipo</th>
											<th class="text-end min-w-70px">Ação</th>
										</tr>
										<!--end::Table row-->
									</thead>
									<!--end::Table head-->
									<!--begin::Table body-->
									<tbody class="text-gray-600 fw-bold">
									
										
										<tr>
											<!--begin::Checkbox-->
											<td>
												<div class="form-check form-check-sm form-check-custom form-check-solid">
													<input class="form-check-input" type="checkbox" value="1" />
												</div>
											</td>
											<!--end::Checkbox-->
											<!--begin::Customer=-->
											<td class="d-flex align-items-center">
												<!--begin:: Avatar -->
												<div class="symbol symbol-circle symbol-50px overflow-hidden me-3">
													<a href="../../demo8/dist/apps/user-management/users/view.html">
														<div class="symbol-label">
															<img src="../painel/assets/image/gravatar.png" alt="Emma Smith" class="w-100" />
														</div>
													</a>
												</div>
												<!--end::Avatar-->
												<!--begin::User details-->
												<div class="d-flex flex-column">
													<a href="../../demo8/dist/apps/user-management/users/view.html" class="text-gray-800 text-hover-primary mb-1">Emma Smith</a>
													<span>e.smith@kpmg.com.au</span>
												</div>
												<!--begin::User details-->
											</td>
											<!--end::Customer=-->
											<!--begin::Billing=-->
											<td>
												<div class="badge badge-light"></div>
											</td>
											<!--begin::Date=-->
											<td  class="badge badge-light">Dec 20, 2021</td>
											<!--end::Date=-->
											<!--begin::Action=-->
											<!--begin::Product=-->
											<td></td>
											<!--end::Product=-->
											<!--begin::Status=-->
											<td>
												<div class="badge badge-light-success">Recorrente</div>
											</td>
											<!--end::Status=-->
											<td class="text-end">
												<a href="#" class="btn btn-light btn-active-light-primary btn-sm" data-kt-menu-trigger="click" data-kt-menu-placement="bottom-end">o que fazer
												<!--begin::Svg Icon | path: icons/duotune/arrows/arr072.svg-->
												<span class="svg-icon svg-icon-5 m-0">
													<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
														<path d="M11.4343 12.7344L7.25 8.55005C6.83579 8.13583 6.16421 8.13584 5.75 8.55005C5.33579 8.96426 5.33579 9.63583 5.75 10.05L11.2929 15.5929C11.6834 15.9835 12.3166 15.9835 12.7071 15.5929L18.25 10.05C18.6642 9.63584 18.6642 8.96426 18.25 8.55005C17.8358 8.13584 17.1642 8.13584 16.75 8.55005L12.5657 12.7344C12.2533 13.0468 11.7467 13.0468 11.4343 12.7344Z" fill="black" />
													</svg>
												</span>
												<!--end::Svg Icon--></a>
												<!--begin::Menu-->
												<div class="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-bold fs-7 w-125px py-4" data-kt-menu="true">
													<!--begin::Menu item-->
													<div class="menu-item px-3">
														<a href="#/doadorHitorico" class="menu-link px-3">ver</a>
													</div>
													<!--end::Menu item-->
													<!--begin::Menu item-->
													<div class="menu-item px-3">
														<a href="../../demo8/dist/apps/subscriptions/add.html" class="menu-link px-3">Editar</a>
													</div>
													<!--end::Menu item-->
													<!--begin::Menu item-->
													<div class="menu-item px-3">
														<a href="#" data-kt-subscriptions-table-filter="delete_row" class="menu-link px-3">Delete</a>
													</div>
													<!--end::Menu item-->
												</div>
												<!--end::Menu-->
											</td>
											<!--end::Action=-->
										</tr>
									
										<tr>
											<!--begin::Checkbox-->
											<td>
												<div class="form-check form-check-sm form-check-custom form-check-solid">
													<input class="form-check-input" type="checkbox" value="1" />
												</div>
											</td>
											<!--end::Checkbox-->
											<!--begin::Customer=-->
											<td class="d-flex align-items-center">
												<!--begin:: Avatar -->
												<div class="symbol symbol-circle symbol-50px overflow-hidden me-3">
													<a href="../../demo8/dist/apps/user-management/users/view.html">
														<div class="symbol-label">
															<img src="../painel/assets/image/gravatar.png" alt="Emma Smith" class="w-100" />
														</div>
													</a>
												</div>
												<!--end::Avatar-->
												<!--begin::User details-->
												<div class="d-flex flex-column">
													<a href="../../demo8/dist/apps/user-management/users/view.html" class="text-gray-800 text-hover-primary mb-1">Emma Smith</a>
													<span>e.smith@kpmg.com.au</span>
												</div>
												<!--begin::User details-->
											</td>
											<!--end::Customer=-->
											<!--begin::Billing=-->
											<td>
												<div class="badge badge-light"></div>
											</td>
											<!--begin::Date=-->
											<td class="badge badge-light">Nov 10, 2021</td>
											<!--end::Date=-->
											<!--end::Billing=-->
											<!--begin::Product=-->
											<td></td>
											<!--end::Product=-->
											<!--begin::Status=-->
											<td>
												<div class="badge badge-light-danger">Unica</div>
											</td>
											<!--end::Status=-->
											<!--begin::Action=-->
											<td class="text-end">
												<a href="#" class="btn btn-light btn-active-light-primary btn-sm" data-kt-menu-trigger="click" data-kt-menu-placement="bottom-end">o que fazer
												<!--begin::Svg Icon | path: icons/duotune/arrows/arr072.svg-->
												<span class="svg-icon svg-icon-5 m-0">
													<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
														<path d="M11.4343 12.7344L7.25 8.55005C6.83579 8.13583 6.16421 8.13584 5.75 8.55005C5.33579 8.96426 5.33579 9.63583 5.75 10.05L11.2929 15.5929C11.6834 15.9835 12.3166 15.9835 12.7071 15.5929L18.25 10.05C18.6642 9.63584 18.6642 8.96426 18.25 8.55005C17.8358 8.13584 17.1642 8.13584 16.75 8.55005L12.5657 12.7344C12.2533 13.0468 11.7467 13.0468 11.4343 12.7344Z" fill="black" />
													</svg>
												</span>
												<!--end::Svg Icon--></a>
												<!--begin::Menu-->
												<div class="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-bold fs-7 w-125px py-4" data-kt-menu="true">
													<!--begin::Menu item-->
													<div class="menu-item px-3">
														<a href="#/doadorHitorico" class="menu-link px-3">ver</a>
													</div>
													<!--end::Menu item-->
													<!--begin::Menu item-->
													<div class="menu-item px-3">
														<a href="../../demo8/dist/apps/subscriptions/add.html" class="menu-link px-3">Editar</a>
													</div>
													<!--end::Menu item-->
													<!--begin::Menu item-->
													<div class="menu-item px-3">
														<a href="#" data-kt-subscriptions-table-filter="delete_row" class="menu-link px-3">Delete</a>
													</div>
													<!--end::Menu item-->
												</div>
												<!--end::Menu-->
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

