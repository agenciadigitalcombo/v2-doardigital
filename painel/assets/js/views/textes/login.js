import adm from "../../../../../static/js/api/adm.js" 

export default {
    template: `
	<div>
	<div class="d-flex flex-column flex-root">
    
	<div class="d-flex flex-column flex-column-fluid bgi-position-y-bottom position-x-center bgi-no-repeat bgi-size-contain bgi-attachment-fixed"
		style="background-image: url(dist/assets/media/illustrations/sketchy-1/14.png">

		<div class="d-flex flex-center flex-column flex-column-fluid p-10 pb-lg-20">

			<a href="/demo8/dist/index.html" class="mb-12">
				<img src="./assets/logo/logo.svg" alt="Doar Digital" class="logo" class="h-40px">
			</a>

			<div class="w-lg-500px bg-body rounded shadow-sm p-10 p-lg-15 mx-auto">
	
				<form action="javascript:void(0)" @submit="logar" class="form w-100" novalidate="novalidate"
					id="kt_sign_in_form">
	
					<div class="text-center mb-10">
						
						<h1 class="text-dark mb-3">Acesso</h1>
				
					</div>
					<div class="fv-row mb-10">
					
						<label class="form-label fs-6 fw-bolder text-dark">Email</label>
				
						<input v-model="user"  class="form-control form-control-lg form-control-solid"
							type="text" name="email" autocomplete="off" required />
			
					</div>
			
					<div class="fv-row mb-10">
			
						<div class="d-flex flex-stack mb-2">
			
							<label class="form-label fw-bolder text-dark fs-6 mb-0">Senha</label>
					
							<a href="#/recuperar_senha"
								class="link-primary fs-6 fw-bolder">Esqueceu a Senha?</a>
		
						</div>
			
						<input v-model="senha" class="form-control form-control-lg form-control-solid"
							type="password" name="password" autocomplete="off" required />
		
					</div>
					<div class="text-center">
						<button type="submit" id="kt_sign_in_submit"
							class="btn btn-lg btn-primary w-100 mb-5">
							<span class="indicator-label">Continue</span>
							<span class="indicator-progress">Please wait...
								<span
									class="spinner-border spinner-border-sm align-middle ms-2"></span></span>
						</button>

					
						<div  class="alert alert-danger" v-if="error!=null">
						
							<span class="svg-icon svg-icon-2hx svg-icon-danger me-3"><i
									class="bi bi-droplet-half text-danger"></i></span>
			

							<div class="d-flex flex-column" >
			
								<h4 class="mb-1 text-dark">{{error}}</h4>
						
							</div>
				
						</div>
						


					</div>
				</form>
			</div>
		</div>
		<div class="d-flex flex-center flex-column-auto p-10">
		
			<div class="d-flex align-items-center fw-bold fs-6">
				<a href="https://digitalcombo.com.br" target="_blank"
					class="text-muted text-hover-primary px-2">Sobre Nós</a>
				<a href="mailto:contato@digitalcombo.com.br"
					class="text-muted text-hover-primary px-2">Materiais</a>
				<a href="https://digitalcombo.com.br/contato"
					class="text-muted text-hover-primary px-2">Contato</a>
			</div>
	
		</div>
	
	</div>

</div>
	</div>
    `,
    data: function () {
		return {
            user: null,
            senha: null,
            error: null
        }
    },
	methods: {
        async logar() {
			this.error = null
			
			// localStorage.removeItem('token')
            let res = await adm.login(
                this.user,
                this.senha
            )
            if (!res.next) {
				console.log(res)
                this.error = res.message
                return null
            }
            localStorage.setItem('token', res.token)
            window.location.href = `#/dash`
        },
        updateForm(event) {
            this[event.name] = event.value
        }
    },
	mounted() {
        this.user = localStorage.getItem('user')
		
    }
   
}