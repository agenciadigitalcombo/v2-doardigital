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
				<div class="d-flex flex-column flex-root">
					<!--begin::Content-->
					<div class="content d-flex flex-column flex-column-fluid" id="kt_content">
						<!--begin::Post-->
						<div class="post d-flex flex-column-fluid" id="kt_post">
							<!--begin::Container-->
							<div id="kt_content_container" class="container-xxl">
								<!--begin::Card-->
								<div class="card card-flush">

									<!--begin::Card header-->
									<div class="card-header mt-5">

										<div class="card-title flex-column">
											<h3 class="fw-bolder mb-1"> Minhas Instituições</h3>
										</div>

										<!--begin::Card toolbar-->
										<div class="card-toolbar">
											<!--begin::Button-->
											<a type="button" class="btn btn-light-primary" href="#/add-instituicoes">
												<!--begin::Svg Icon | path: icons/duotune/general/gen035.svg-->
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
											<!--end::Button-->
										</div>
										<!--end::Card toolbar-->
									</div>
									<!--end::Card header-->
									<!--begin::Card body-->
									<div class="card-body pt-0">

										<!--begin::Root-->
										<div class="d-flex flex-column flex-root">
											<!--begin::Page-->
											<div class="page d-flex flex-row flex-column-fluid">
												<!--end::Wrapper-->
											</div>
											<!--end::Page-->
										</div>
										<!--end::Root-->
										<div class="row g-5">


											<div class="col-lg-4" v-for="item in dados" :key="item.id">
												<a @click="addLocahostore(item)">
													<div class="card  card-bordered mb-5">
														<div class="card-header">
															<h3 class="card-title">{{item.nome_fantasia}}</h3>
															{{ item.id }}
                                                      
														</div>

													</div>
												</a>
											</div>

										</div>
									</div>
									<!--end::Card body-->
								</div>
								<!--end::Card-->

							</div>
							<!--end::Container-->
						</div>
						<!--end::Post-->
					</div>
					<!--end::Content-->
				</div>
				<!--end::Root-->
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
			gravatar: '../painel/assets/image/gravatar.png',
			id: null,
			nome_fantasia: null,
			razao_social: null,
			subdomaim: null,
			email: null,
			cor: null,

			logo: null,
			cnpj: null,
			telefone: null,
			jms: false,
			dados: [],
			item: []
			// .doardigital.com.br
		}

	},

	async mounted() {

		this.dados = (await this.listar()).dados
		this.nome_fantasia = this.dados.nome_fantasia,
			this.subdomaim = this.dados.subdomaim,
            this.id = this.dados.id,
            
			console.log(this.dados)

	},





	methods: {
         addLocahostore(item) {
         this.id = item.id

            localStorage.setItem("instituicao", this.id);
        //    localStorage.setItem("razoes", this.razao_social) ;
			console.log(this.id)
		},

		async listar() {
			let res = await adm.listarInstutuicao(localStorage.getItem('token'))
			return res
			// console.log(res)
		
		},
	},
}

