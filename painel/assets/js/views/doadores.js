import adm from "../../../../static/js/api/adm.js" 

export default {
    template:`
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
				<div id="kt_content_container" class="container-xxl">
     <div class="modal-content">
				<div class="modal-header">
					<h2>Doadores</h2>
				</div>
				<div class="modal-body">
					<!--begin::Form-->
					<form id="kt_modal_new_card_form" class="form" action="#">
						<div class="row mb-10">
						<div class="col-md-3 fv-row">
								<label class="d-flex align-items-center fs-6 fw-bold form-label mb-2">
									<span class="required">Periodo</span>
									<i class="fas fa-exclamation-circle ms-2 fs-7" data-bs-toggle="tooltip" title="Enter a card CVV code"></i>
								</label>
								<div class="position-relative">
									<select name="card_expiry_year" class="form-select form-select-solid">
										<option value="0">Hoje</option>
										<option value="1">Ontem</option>
										<option value="7">Últimos 7 dias</option>
										<option value="30">Últimos 30 dias</option>
										<option value="365">Este Ano</option>
										<option value="366">Escolher Periodo</option>
									</select>
								</div>
							</div>

							<div class="col-md-3 fv-row">
								<label class="d-flex align-items-center fs-6 fw-bold form-label mb-2">
									<span class="required">Data Ínicio</span>
									<i class="fas fa-exclamation-circle ms-2 fs-7" data-bs-toggle="tooltip" title="Enter a card CVV code"></i>
								</label>
								<div class="position-relative">
									<input type="date" class="form-control form-control-solid" />
								</div>
							</div>
							<div class="col-md-3 fv-row">
								<label class="d-flex align-items-center fs-6 fw-bold form-label mb-2">
									<span class="required">Data Final</span>
									<i class="fas fa-exclamation-circle ms-2 fs-7" data-bs-toggle="tooltip" title="Enter a card CVV code"></i>
								</label>
								<div class="position-relative">	
									<input type="date"  class="form-control form-control-solid"  />								
								</div>
							</div>
							<div class="col-md-3 fv-row">
								<label class="d-flex align-items-center fs-6 fw-bold form-label mb-2">
									<span class="required">Recorrente</span>
									<i class="fas fa-exclamation-circle ms-2 fs-7" data-bs-toggle="tooltip" title="Enter a card CVV code"></i>
								</label>
								<div class="position-relative">
									<select  class="form-select form-select-solid" >
										<option value="1">SIM</option>
								<option value="0">NÃO</option>
									</select>
								</div>
							</div>
						</div>
							</form>
				</div>
			</div>
		</div>
	</div>

	<div class="content d-flex flex-column flex-column-fluid">
                    <div class="post d-flex flex-column-fluid" >
                        <!--begin::Container-->
                        <div id="kt_content_container" class="container-xxl">
                            <!--begin::Card-->
                            <div class="card card-flush">
                                <!--begin::Card header-->
                                <div class="card-header mt-6">
                                    <!--begin::Card title-->
                                    <div class="card-title">
                                        <!--begin::Search-->
                                        <div class="d-flex align-items-center position-relative my-1 me-5">
                                            <!--begin::Svg Icon | path: icons/duotune/general/gen021.svg-->
                                            <span class="svg-icon svg-icon-1 position-absolute ms-6">
													<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
														<rect opacity="0.5" x="17.0365" y="15.1223" width="8.15546" height="2" rx="1" transform="rotate(45 17.0365 15.1223)" fill="black" />
														<path d="M11 19C6.55556 19 3 15.4444 3 11C3 6.55556 6.55556 3 11 3C15.4444 3 19 6.55556 19 11C19 15.4444 15.4444 19 11 19ZM11 5C7.53333 5 5 7.53333 5 11C5 14.4667 7.53333 17 11 17C14.4667 17 17 14.4667 17 11C17 7.53333 14.4667 5 11 5Z" fill="black" />
													</svg>
												</span>
                                            <!--end::Svg Icon-->
                                            <input type="text" data-kt-permissions-table-filter="search" class="form-control form-control-solid w-250px ps-15" placeholder="Buscar ..." />
                                        </div>
                                        <!--end::Search-->
                                    </div>
                                    <!--end::Card title-->
                                    <!--begin::Card toolbar-->
                                    <div class="card-toolbar">

										<div>
										
                                        <!--begin::Button-->
										<small>Exportar CSV</small> <br>
                                        <a href="" download="doadores.csv" type="button" class="btn btn-primary bg-primary">
											<!--begin::Svg Icon | path: icons/duotune/general/gen035.svg-->
											<span class="svg-icon svg-icon-3">
												<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cloud-download-fill" viewBox="0 0 16 16">
													<path fill-rule="evenodd" d="M8 0a5.53 5.53 0 0 0-3.594 1.342c-.766.66-1.321 1.52-1.464 2.383C1.266 4.095 0 5.555 0 7.318 0 9.366 1.708 11 3.781 11H7.5V5.5a.5.5 0 0 1 1 0V11h4.188C14.502 11 16 9.57 16 7.773c0-1.636-1.242-2.969-2.834-3.194C12.923 1.999 10.69 0 8 0zm-.354 15.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 14.293V11h-1v3.293l-2.146-2.147a.5.5 0 0 0-.708.708l3 3z"/>
												  </svg>
											</span>
											Exportar</a>	
										</div>
                                        <!--end::Button-->
                                    </div>
                                    <!--end::Card toolbar-->
                                </div>
                                <!--end::Card header-->
                                <!--begin::Card body-->
                                <div class="card-body pt-0">
                                    <!--begin::Table-->
                                    <table class="table align-middle table-row-dashed fs-6 gy-5 mb-0" id="kt_permissions_table">
                                        <!--begin::Table head-->
                                        <thead>
                                            <!--begin::Table row-->
                                            <tr class="text-start text-gray-400 fw-bolder fs-7 text-uppercase gs-0">
                                                <th class="min-w-125px"></th>
                                                <th class="min-w-250px"> </th>
                                                <th class="min-w-125px"></th>
                                                <th class="text-end min-w-100px"></th>
                                            </tr>
                                            <!--end::Table row-->
                                        </thead>
                                      
                                        <tbody class="fw-bold text-gray-600">
                                           
                                            <tr>
                                                <!--begin::Name=-->
                                                <td>
													<span>
													<div class="symbol symbol-50px">

													<img v-bind:src="gravatar" >
														
													</div>
														</span>
													
												</td>
                                                <!--end::Name=-->
                                                <!--begin::Assigned to=-->
                                                <td>
                                                    <a class="badge-light-primary ">	nome doador</a>
												 <br>
													email <br>
													telefone} <br>
												 </td>
                                                <!--end::Assigned to=-->
                                                <!--begin::Created Date-->
                                                <td>
												<small>Data Cadastro</small> <br>
													data de cadastro
												</td>

												<td>
                                                    <a class="badge badge-light-primary fs-7 m-1">
														recorencia

													</a>
                                                </td>
                                                <!--end::Created Date-->
                                                <!--begin::Action=-->
                                                <td class="text-end">
                                                   <!--begin::Delete-->
                                                    <a href="#/doadorHitorico"  class="btn btn-icon btn-active-light-primary w-30px h-30px" >
															<!--begin::Svg Icon | path: icons/duotune/general/gen027.svg-->
															<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye-fill" viewBox="0 0 16 16">
																<path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z"/>
																<path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8zm8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z"/>
															  </svg>
															<!--end::Svg Icon-->
														</a>
                                                    <!--end::Delete-->
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
                           
                            
                        </div>
                        <!--end::Container-->
                    </div>
				</div>
	<!--end::Root-->

				
			
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

