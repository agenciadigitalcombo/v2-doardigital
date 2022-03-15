import adm from "../../../../../static/js/api/adm.js"

export default {
	template: `
	<div>

    <c-header></c-header>
    <c-aside></c-aside>

	<!--begin::Root-->
 <div class="d-flex flex-column flex-root"> 
	<div class="page d-flex flex-row flex-column-fluid">
 
		<div class="wrapper d-flex flex-column flex-row-fluid"  > 
			<div class="content d-flex flex-column flex-column-fluid" > 
				<div class="post d-flex flex-column-fluid"> 
					<div class="container-xxl"> 
						
						<div class="card mb-5 mb-xl-10"> 
							<div class="card-header border-0 cursor-pointer"> 
								<div class="card-title m-0">
									<h3 class="fw-bolder m-0">Domínio personalizado</h3>
								</div> 
							</div> 

							<form class="form" @submit.prevent="domainPersonalizado" novalidate="novalidate">
							<div
								class="notice d-flex bg-light-primary rounded border-primary border border-dashed flex-stack h-xl-100 m-8 -10 p-6">
							 
								<div class="d-flex flex-stack flex-grow-1 flex-wrap flex-md-nowrap"> 
									<div class="input-group mb-3">
										<span class="input-group-text" id="basic-addon2">Informe seu
											Domínio
										</span>
										<input type="texte" name="Domínio" v-model="dominio"
											class="form-control form-control-lg " />
									</div> 
								</div> 
							</div> 

										<c-mensagem :msg="msg" ></c-mensagem>
										<div class="card-footer d-flex justify-content-end py-6 px-9">
											<button class="btn btn-primary"" type=" submit"
												:disabled="submitStatus === 'PENDING'">SALVAR!</button>
										
										</div>
										<div class=" d-flex justify-content-end py-2 px-9">
										<p class="typo__p" v-if="submitStatus === 'OK'"> 
										</p>
										<p class="typo__p" v-if="submitStatus === 'ERROR'">
										Por favor, preencha o formulário corretamente.</p>
										<p class="typo__p" v-if="submitStatus === 'PENDING'">Salvando...
										</p>
										</div>

							</form> 
						</div> 
					</div> 
				</div> 
			</div> 
		</div>
	</div>
</div>
	
		
		<!--end::Root-->

		<c-footer/>
	</div>
    `,


	data: function () {
		return {
			token: null,
			instituicao_id: null,
			dominio: null,
			msg: null,
			submitStatus: null,
			error: null
		}
	},
	methods: {

		async domainPersonalizado() {
			this.error = null
			let res = await adm.domainPerson(
			
				this.token,
				this.instituicao_id,
				this.dominio
			)
			if (!res.next) {
				console.log(res)
				this.error = res.message
				return null
			}
			window.location.href = `#/dash`
		},
	

	
	},
	async mounted() {
		this.instituicao_id = localStorage.getItem('instituicao_id')
	},
}

