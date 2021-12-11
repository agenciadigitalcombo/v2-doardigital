import adm from "../../../../static/js/api/adm.js"

export default {
	template: `
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
										<h1>Usuários</h1>
									</div>
									<!--end::Search-->
								</div>
								<!--begin::Card title-->
								<!--begin::Card toolbar-->
								<div class="card-toolbar">
									<!--begin::Toolbar-->
									<div class="d-flex justify-content-end" data-kt-subscription-table-toolbar="base">
										
									
										<!--begin::Add subscription-->
										<a href="#/usuario-novo" class="btn btn-primary">
										<!--begin::Svg Icon | path: icons/duotune/arrows/arr075.svg-->
										<span class="svg-icon svg-icon-2">
											<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
												<rect opacity="0.5" x="11.364" y="20.364" width="16" height="2" rx="1" transform="rotate(-90 11.364 20.364)" fill="black" />
												<rect x="4.36396" y="11.364" width="16" height="2" rx="1" fill="black" />
											</svg>
										</span>
										<!--end::Svg Icon-->Adicionar</a>
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
								<div class="table-responsive">
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
											<th class="min-w-300px">Usuario</th>
											<th class="min-w-25px"></th>
											<th class="min-w-200px">Data Cadastro </th>
											<th class="min-w-25px"></th>
											<th class="min-w-150px">Credencial </th>
											<th class="text-end min-w-120px">Ação</th>
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
											<td> <div class=""> 10/10/2021</div> </td>
											<!--end::Date=-->
											<!--begin::Action=-->
											<!--begin::Product=-->
											<td></td>
											<!--end::Product=-->
											<!--begin::Status=-->
											<td>
												<div class="badge badge-light-success">Consultor</div>
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
											<td class=""> <div> 10/10/2021</div></td>
											<!--end::Date=-->
											<!--end::Billing=-->
											<!--begin::Product=-->
											<td></td>
											<!--end::Product=-->
											<!--begin::Status=-->
											<td>
												<div class="badge badge-light-danger">Administrativo</div>
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
											<td> <div class=""> 10/10/2021</div> </td>
											<!--end::Date=-->
											<!--begin::Action=-->
											<!--begin::Product=-->
											<td></td>
											<!--end::Product=-->
											<!--begin::Status=-->
											<td>
												<div class="badge badge-light-warning">Gerente</div>
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
											<td> <div class=""> 10/10/2021</div> </td>
											<!--end::Date=-->
											<!--begin::Action=-->
											<!--begin::Product=-->
											<td></td>
											<!--end::Product=-->
											<!--begin::Status=-->
											<td>
												<div class="badge badge-light-info">Diretor </div>
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
									</tbody>
									<!--end::Table body-->
								</table>
								</div>
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

