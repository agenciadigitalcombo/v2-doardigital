
export default {
    template: `
	<div>
     

	<!--begin::Root-->
 <div class="d-flex flex-column flex-root">
	<!--begin::Page-->
	<div class="page d-flex flex-row flex-column-fluid">

		<!--begin::Wrapper-->
		<div class="wrapper d-flex flex-column flex-row-fluid" id="kt_wrapper">
		
		<button @click="alterarAdm()" type="submit"> ir para la </button>
				</div>
				<!--end::Post-->
			</div>
			<!--end::Content-->

		</div>
	</div>
</div>
		
		<!--end::Root-->

	</div>>
    `,


     data: function () {
		return {
		
        }
    },
	methods: {
	
      async alterarAdm() {
			
            // window.location.href = `#/dash`
			// window.location.replace("painel/index.html#/perfil");
			window.location.href = "/painel/index.html#/perfil";

			
            // const prot = window.location.protocol
			// const host = window.location.hostname
        },
        updateForm(event) {
            this[event.name] = event.value
        }
    },
	mounted() {
        this.user = localStorage.getItem('user')
    },

	
}

