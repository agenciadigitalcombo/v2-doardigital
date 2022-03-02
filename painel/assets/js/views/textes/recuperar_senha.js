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
	
                       <form class="" @submit.prevent="recuperarSenha">
							<!--begin::Heading-->
							<div class="text-center mb-10">
								<!--begin::Title-->
								<h1 class="text-dark mb-3">Esqueceu a senha ?</h1>
								<!--end::Title-->
								<!--begin::Link-->
								<div class="text-gray-400 fw-bold fs-4">Insira seu e-mail para redefinir sua senha.</div>
								<!--end::Link-->
							</div>
							<!--begin::Heading-->
							<!--begin::Input group-->
							<div class="fv-row mb-10 fv-plugins-icon-container">
								<label class="form-label fw-bolder text-gray-900 fs-6">Email</label>
								<input  v-model="email" class="form-control form-control-solid" type="email" placeholder="" name="email" autocomplete="off">
							<div class="fv-plugins-message-container invalid-feedback"></div></div>
							<!--end::Input group-->
							<!--begin::Actions-->
							<div class="d-flex flex-wrap justify-content-center pb-lg-0 mb-5">
								<button type="submit" class="btn btn-lg btn-primary fw-bolder me-4">
									<span class="indicator-label">Submit</span>
									<span class="indicator-progress">Please wait... 
									<span class="spinner-border spinner-border-sm align-middle ms-2"></span></span>
								</button>
								<a href="#/" class="btn btn-lg btn-light-primary fw-bolder">Cancel</a>
							</div>

					<div class="alert alert-danger d-flex align-items-center p-5 mb-10" v-if="error!=null">
					<!--begin::Svg Icon | path: icons/duotune/general/gen048.svg-->
					<span class="svg-icon svg-icon-2hx svg-icon-danger me-4">
					<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
																<rect opacity="0.5" x="6" y="17.3137" width="16" height="2" rx="1" transform="rotate(-45 6 17.3137)" fill="black"></rect>
																<rect x="7.41422" y="6" width="16" height="2" rx="1" transform="rotate(45 7.41422 6)" fill="black"></rect>
															</svg>
					</span>
					<!--end::Svg Icon-->
					<div class="d-flex flex-column">
						<h4 class="mb-1 text-danger">{{error}}</h4>
		 				</div>
				</div>


					<div class="alert alert-success d-flex align-items-center p-5 mb-10" v-else-if="msg!=null">
													<!--begin::Svg Icon | path: icons/duotune/general/gen048.svg-->
													<span class="svg-icon svg-icon-2hx svg-icon-success me-4">
														<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
															<path opacity="0.3" d="M20.5543 4.37824L12.1798 2.02473C12.0626 1.99176 11.9376 1.99176 11.8203 2.02473L3.44572 4.37824C3.18118 4.45258 3 4.6807 3 4.93945V13.569C3 14.6914 3.48509 15.8404 4.4417 16.984C5.17231 17.8575 6.18314 18.7345 7.446 19.5909C9.56752 21.0295 11.6566 21.912 11.7445 21.9488C11.8258 21.9829 11.9129 22 12.0001 22C12.0872 22 12.1744 21.983 12.2557 21.9488C12.3435 21.912 14.4326 21.0295 16.5541 19.5909C17.8169 18.7345 18.8277 17.8575 19.5584 16.984C20.515 15.8404 21 14.6914 21 13.569V4.93945C21 4.6807 20.8189 4.45258 20.5543 4.37824Z" fill="black"></path>
															<path d="M10.5606 11.3042L9.57283 10.3018C9.28174 10.0065 8.80522 10.0065 8.51412 10.3018C8.22897 10.5912 8.22897 11.0559 8.51412 11.3452L10.4182 13.2773C10.8099 13.6747 11.451 13.6747 11.8427 13.2773L15.4859 9.58051C15.771 9.29117 15.771 8.82648 15.4859 8.53714C15.1948 8.24176 14.7183 8.24176 14.4272 8.53714L11.7002 11.3042C11.3869 11.6221 10.874 11.6221 10.5606 11.3042Z" fill="black"></path>
														</svg>
													</span>
													<!--end::Svg Icon-->
													<div class="d-flex flex-column">
														<h4 class="mb-1 text-success">{{msg}}</h4>
													 	</div>
												</div>


							<!--end::Actions-->
						<div></div></form>





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
            email: null, 
            error: null,
			msg: null
        }
    },
	methods: {
        async recuperarSenha() {
			this.error = null
			
            let res = await adm.recuperar_senha(
                this.email, 
            )
            if (!res.next) { 
                this.error = res.message
                return null
            }
			this.msg = res.message
           //  window.location.href = `#/`
        },
        
    }, 
}