import adm from "../../../../../static/js/api/adm.js"

export default {
    template:`
	<div>

    <c-header></c-header>
    <c-aside></c-aside>

 
	<div class="d-flex flex-column flex-root">
		 
		<div class="page d-flex flex-row flex-column-fluid">
 
			<div class="wrapper d-flex flex-column flex-row-fluid" id="kt_wrapper">

				<div class="content d-flex flex-column flex-column-fluid" id="kt_content">
					 
					<div class="post d-flex flex-column-fluid" id="kt_post">
					 
						<div id="kt_content_container" class="container-xxl">
						
						 
							<div class="card mb-5 mb-xl-10">
							 
								<div class="card-header border-0 cursor-pointer" role="button" data-bs-toggle="collapse"
									data-bs-target="#kt_account_profile_details" aria-expanded="true"
									aria-controls="kt_account_profile_details">
									 
									<div class="card-title m-0">
										<h3 class="fw-bolder m-0">Mailing Boss</h3>
									</div>
									 
								</div>
							 
								<div>
									 
									<form class="form" @submit.prevent="adicionaMailBoss">
		 
											<div class=" m-2 p-6">
												<div class="mb-3">
													<label for="token" class="form-label">Token </label>
													<input type="text" class="form-control form-control-lg form-control-solid" id="token" v-model="token_uid" disabled >
												  </div>
												  <div class="mb-3">
													<label for="UID" class="form-label">UID</label>
													<input type="text" class="form-control form-control-lg form-control-solid" id="UID" disabled >
											  </div>
										</div>
										<c-mensagem :msg="msg" ></c-mensagem>
										<div class="card-footer d-flex justify-content-end py-6 px-9">
											<button type="submit" class="btn btn-primary">SALVAR</button>
										</div>
										 
									</form>
									 
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
    `,


	data: function () {
		return {
			instituicao_id: null,
			token: null,
			token_uid: null,
			error: null,
			msg: null,
		}
	},

	methods: {

		async adicionaMailBoss() {
			this.error = null

			let res = await adm.savarMailBoss(
				this.instituicao_id,
				this.token,
				this.token_uid,
			)
			if (!res.next) {
				setTimeout(() => this.msg = "", 5000);
				this.error = res.message
				return null
			}
			this.msg = res.message
		},

		async listar() {
			let res = await adm.listarMailBoss(
				this.instituicao_id
			)
			return res
		},

	},

	async mounted() {
		this.instituicao_id = window.localStorage.getItem('instituicao_id');

		var evenda = (await this.listar()).dados 
		this.token_uid = evenda.token_uid
	}



}

