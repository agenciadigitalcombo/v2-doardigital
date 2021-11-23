

export default {
    template: `
    <div>
   <h1>  caixa de qqqqqq </h1> 
   <button disabled="disabled" class="xd"> cadatrar</button>

   <form  class="form w-100" novalidate="novalidate" id="kt_sign_in_form">
				
   <div class="text-center mb-10">
	   
	   <h1 class="text-dark mb-3">Acesso</h1>

   </div>
   <div class="fv-row mb-10">
   
	   <label class="form-label fs-6 fw-bolder text-dark">Email</label>

	   <input class="form-control form-control-lg form-control-solid"
		   type="text" name="email" autocomplete="off" />

   </div>

   <div class="fv-row mb-10">

	   <div class="d-flex flex-stack mb-2">

		   <label class="form-label fw-bolder text-dark fs-6 mb-0">Senha</label>
   
		   <a href="/dist/authentication/flows/basic/password-reset.html"
			   class="link-primary fs-6 fw-bolder">Esqueceu a Senha?</a>

	   </div>

	   <input class="form-control form-control-lg form-control-solid"
		   type="password" name="password" autocomplete="off" />

   </div>
   <div class="text-center">

	   <button type="submit" id="kt_sign_in_submit"
		   class="btn btn-lg btn-primary w-100 mb-5">
		   <span class="indicator-label">Continue</span>
		   <span class="indicator-progress">Please wait...
			   <span
				   class="spinner-border spinner-border-sm align-middle ms-2"></span></span>
	   </button>

   
	   <div  class="alert alert-danger">
	   
		   <span class="svg-icon svg-icon-2hx svg-icon-danger me-3"><i
				   class="bi bi-droplet-half text-danger"></i></span>


		   <div class="d-flex flex-column">

			   <h4 class="mb-1 text-dark">E-mail ou senha inválidos</h4>
	   
		   </div>

	   </div>



   </div>
</form>


	</div>


    `,
    data: function () {
        return {
        }
    },
   
}