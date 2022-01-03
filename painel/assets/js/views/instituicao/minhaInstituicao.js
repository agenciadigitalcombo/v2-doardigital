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
		<div class="d-flex flex-column flex-root"> 
				<div class="content d-flex flex-column flex-column-fluid" id="kt_content"> 
					<div class="post d-flex flex-column-fluid" id="kt_post"> 
						<div id="kt_content_container" class="container-xxl"> 
							<div class="card card-flush"> 
								<div class="card-header mt-5">

									<div class="card-title flex-column">
										<h3 class="fw-bolder mb-1"> Minhas Instituições</h3>
									</div> 
									<div class="card-title"> 
										<div class="d-flex align-items-center position-relative my-1 me-5">
										 	<span class="svg-icon svg-icon-1 position-absolute ms-6">
												<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
													viewBox="0 0 24 24" fill="none">
													<rect opacity="0.5" x="17.0365" y="15.1223" width="8.15546"
														height="2" rx="1" transform="rotate(45 17.0365 15.1223)"
														fill="black" />
													<path
														d="M11 19C6.55556 19 3 15.4444 3 11C3 6.55556 6.55556 3 11 3C15.4444 3 19 6.55556 19 11C19 15.4444 15.4444 19 11 19ZM11 5C7.53333 5 5 7.53333 5 11C5 14.4667 7.53333 17 11 17C14.4667 17 17 14.4667 17 11C17 7.53333 14.4667 5 11 5Z"
														fill="black" />
												</svg>
											</span> 
											<input type="text" data-kt-permissions-table-filter="search"
												class="form-control form-control-solid w-250px ps-15"
												placeholder=" o que você procura ?" />
										</div> 
									</div> 
									<div class="card-toolbar"> 
										<a type="button" class="btn btn-light-primary" href="#/add-instituicoes">
											 <span class="svg-icon svg-icon-3">
												<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
													viewBox="0 0 24 24" fill="none">
													<rect opacity="0.3" x="2" y="2" width="20" height="20" rx="5"
														fill="black" />
													<rect x="10.8891" y="17.8033" width="12" height="2" rx="1"
														transform="rotate(-90 10.8891 17.8033)" fill="black" />
													<rect x="6.01041" y="10.9247" width="12" height="2" rx="1"
														fill="black" />
												</svg>
											</span>
											Add Instituição
										</a> 
									</div> 
								</div> 
								<div class="card-body pt-0"> 
									<div class="table-responsive">
									<table class="table align-middle table-row-dashed fs-6 gy-5 mb-0"
										id="kt_permissions_table"> 
										<thead> 
											<tr class="text-start text-gray-400 fw-bolder fs-7 text-uppercase gs-0">
												<th class="min-w-150px">Nome Fantazia</th>
												<th class="min-w-300px">Sub Domain</th>
												<th class="min-w-100px text-end"></th>
												<th class="min-w-100px text-end"></th>
												<th class="min-w-100px text-end"></th>
											</tr> 
										</thead> 
										<tbody class="fw-bold text-gray-600">
											<tr v-for="item in dados" :key="item.id">
												<td>
													{{item.nome_fantasia}}
												</td>

												<td>
													<a class="badge badge-light-primary fs-5 m-1">
													 {{ item.subdomaim }} {{ item.id }}
													</a> 
												</td>

												<td>
													<a href=""  rel="noopener noreferrer">
														<svg xmlns="http://www.w3.org/2000/svg" width="26" height="36" fill="currentColor" class="bi bi-arrow-counterclockwise" viewBox="0 0 16 16">
															<path fill-rule="evenodd" d="M8 3a5 5 0 1 1-4.546 2.914.5.5 0 0 0-.908-.417A6 6 0 1 0 8 2v1z"/>
															<path d="M8 4.466V.534a.25.25 0 0 0-.41-.192L5.23 2.308a.25.25 0 0 0 0 .384l2.36 1.966A.25.25 0 0 0 8 4.466z"/>
														  </svg>
													</a>
												</td>

												<td>
														<label class="form-check form-switch form-check-custom form-check-solid">
				
																	<input class="form-check-input" type="checkbox"/>
																
																</label>
												</td> 
												<td class="text-end">

													<a  @click="editar(item.id)"
														class="btn btn-icon btn-active-light-primary w-35px h-35px me-3 btn-primary"
														style="margin: 2px;">
													 <span class="svg-icon svg-icon-3">
															<svg xmlns="http://www.w3.org/2000/svg" width="20"
																height="20" fill="currentColor"
																class="bi bi-pencil-fill" viewBox="0 0 16 16">
																<path
																	d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708l-3-3zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207l6.5-6.5zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.499.499 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11l.178-.178z" />
															</svg>
														</span> 
													</a>

													<!--<a 
														title="Para Apagar de duplo click"
														class="btn btn-icon btn-active-light-danger w-35px h-35px btn-danger"
														style="margin: 2px;">
														<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"
															fill="currentColor" class="bi bi-trash2-fill"
															viewBox="0 0 16 16">
															<path
																d="M2.037 3.225A.703.703 0 0 1 2 3c0-1.105 2.686-2 6-2s6 .895 6 2a.702.702 0 0 1-.037.225l-1.684 10.104A2 2 0 0 1 10.305 15H5.694a2 2 0 0 1-1.973-1.671L2.037 3.225zm9.89-.69C10.966 2.214 9.578 2 8 2c-1.58 0-2.968.215-3.926.534-.477.16-.795.327-.975.466.18.14.498.307.975.466C5.032 3.786 6.42 4 8 4s2.967-.215 3.926-.534c.477-.16.795-.327.975-.466-.18-.14-.498-.307-.975-.466z" />
														</svg>
													</a>-->
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
</div>

    <c-footer/>
	</div>
	</div>
    `,

	data: function () {

		return {
			token: null,
			gravatar: '../painel/assets/image/gravatar.png',
			nome_fantasia: null,
			razao_social: null,
			subdomaim: null,
			email: null,
			cor: null,

			logo: null,
			cnpj: null,
			telefone: null,
			jms: false,
			dados: []
			// .doardigital.com.br
		}

	},

	async mounted() {

		this.dados = (await this.listar()).dados
		this.nome_fantasia = this.dados.nome_fantasia,
			this.subdomaim = this.dados.subdomaim,

			console.log(this.dados)

	},

	methods: {
		async listar() {
			let res = await adm.listarInstutuicao(localStorage.getItem('token'))
			return res
		},

		async editar(id) {
			globalThis._intituicao = this.dados.find(user => user.id == id)
            window.location.href = "#/editar-instituicoes"
        },
	},


}
