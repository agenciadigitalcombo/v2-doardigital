export default {
    template: `
	<div>
    <!--begin::Header-->
    <div id="kt_header" style="" class="header align-items-stretch">
    
        <div class="header-brand">
        
            <a href="">
            <img alt="Logo" src="../assets/logo/logo.svg" class="h-25px h-lg-25px" />
        </a>
         
            <div id="kt_aside_toggle" class="btn btn-icon w-auto px-0 btn-active-color-primary aside-minimize" data-kt-toggle="true" data-kt-toggle-state="active" data-kt-toggle-target="body" data-kt-toggle-name="aside-minimize">
                <!-- <div id="kt_aside_toggle" class="btn btn-icon w-auto px-0 btn-active-color-primary aside-minimize" data-kt-toggle="true" data-kt-toggle-state="active" data-kt-toggle-target="body" data-kt-toggle-name="aside-minimize"> -->
            
                
                <span class="svg-icon svg-icon-1 me-n1 minimize-default">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <rect opacity="0.3" x="8.5" y="11" width="12" height="2" rx="1" fill="black" />
                        <path d="M10.3687 11.6927L12.1244 10.2297C12.5946 9.83785 12.6268 9.12683 12.194 8.69401C11.8043 8.3043 11.1784 8.28591 10.7664 8.65206L7.84084 11.2526C7.39332 11.6504 7.39332 12.3496 7.84084 12.7474L10.7664 15.3479C11.1784 15.7141 11.8043 15.6957 12.194 15.306C12.6268 14.8732 12.5946 14.1621 12.1244 13.7703L10.3687 12.3073C10.1768 12.1474 10.1768 11.8526 10.3687 11.6927Z" fill="black" />
                        <path opacity="0.5" d="M16 5V6C16 6.55228 15.5523 7 15 7C14.4477 7 14 6.55228 14 6C14 5.44772 13.5523 5 13 5H6C5.44771 5 5 5.44772 5 6V18C5 18.5523 5.44771 19 6 19H13C13.5523 19 14 18.5523 14 18C14 17.4477 14.4477 17 15 17C15.5523 17 16 17.4477 16 18V19C16 20.1046 15.1046 21 14 21H5C3.89543 21 3 20.1046 3 19V5C3 3.89543 3.89543 3 5 3H14C15.1046 3 16 3.89543 16 5Z" fill="black" />
                    </svg>
                </span>
                <span class="svg-icon svg-icon-1 minimize-active">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <rect opacity="0.3" width="12" height="2" rx="1" transform="matrix(-1 0 0 1 15.5 11)" fill="black" />
                        <path d="M13.6313 11.6927L11.8756 10.2297C11.4054 9.83785 11.3732 9.12683 11.806 8.69401C12.1957 8.3043 12.8216 8.28591 13.2336 8.65206L16.1592 11.2526C16.6067 11.6504 16.6067 12.3496 16.1592 12.7474L13.2336 15.3479C12.8216 15.7141 12.1957 15.6957 11.806 15.306C11.3732 14.8732 11.4054 14.1621 11.8756 13.7703L13.6313 12.3073C13.8232 12.1474 13.8232 11.8526 13.6313 11.6927Z" fill="black" />
                        <path d="M8 5V6C8 6.55228 8.44772 7 9 7C9.55228 7 10 6.55228 10 6C10 5.44772 10.4477 5 11 5H18C18.5523 5 19 5.44772 19 6V18C19 18.5523 18.5523 19 18 19H11C10.4477 19 10 18.5523 10 18C10 17.4477 9.55228 17 9 17C8.44772 17 8 17.4477 8 18V19C8 20.1046 8.89543 21 10 21H19C20.1046 21 21 20.1046 21 19V5C21 3.89543 20.1046 3 19 3H10C8.89543 3 8 3.89543 8 5Z" fill="#C4C4C4" />
                    </svg>
                </span>
            </div>
            <div class="d-flex align-items-center d-lg-none ms-n3 me-1" title="Show aside menu">
                <div class="btn btn-icon btn-active-color-primary w-30px h-30px" id="kt_aside_mobile_toggle">
                   <span class="svg-icon svg-icon-1">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M21 7H3C2.4 7 2 6.6 2 6V4C2 3.4 2.4 3 3 3H21C21.6 3 22 3.4 22 4V6C22 6.6 21.6 7 21 7Z" fill="black" />
                            <path opacity="0.3" d="M21 14H3C2.4 14 2 13.6 2 13V11C2 10.4 2.4 10 3 10H21C21.6 10 22 10.4 22 11V13C22 13.6 21.6 14 21 14ZM22 20V18C22 17.4 21.6 17 21 17H3C2.4 17 2 17.4 2 18V20C2 20.6 2.4 21 3 21H21C21.6 21 22 20.6 22 20Z" fill="black" />
                        </svg>
                    </span>
                </div>
            </div>
        </div>
     
        <div class="toolbar">
      
            <div class="container-fluid py-6 py-lg-0 d-flex flex-column flex-lg-row align-items-lg-stretch justify-content-lg-between">
           
                <div class="page-title d-flex flex-column me-5">
              
                </div>
                
                <div class="d-flex align-items-center overflow-auto pt-13 pt-lg-0"  v-if="id">
               
                    <div class="d-flex align-items-center">
                     
                        <span class="fs-7 fw-bolder text-gray-700 pe-4 text-nowrap d-none d-xxl-block"></span>
    
                        ID {{ id }} - {{ nome_fantasia }}
                    </div>
                    <div class="d-flex align-items-center">
                    
                        <div class="d-flex  m-2">                                           
                            <div class="d-flex align-items-center">
               <a class="btn btn-icon btn-active-light-danger w-35px h-35px btn-danger" @click="remover()" >
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-box-arrow-right" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M10 12.5a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v2a.5.5 0 0 0 1 0v-2A1.5 1.5 0 0 0 9.5 2h-8A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-2a.5.5 0 0 0-1 0v2z"/>
                                <path fill-rule="evenodd" d="M15.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L14.293 7.5H5.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3z"/>
                              </svg>
                                </a>
                            
                            </div>
                        </div>
                    </div>
                </div>
                <div class="d-flex align-items-center overflow-auto pt-3 pt-lg-0" v-else>
                
                <div class="d-flex align-items-center">
                 
                    <span class="fs-7 fw-bolder text-gray-700 pe-4 text-nowrap d-none d-xxl-block"></span>
                       
                    ID 1 - Doar Digital 
                
                
                </div>
                <div class="d-flex align-items-center">
                
                  
                </div>
            </div>
            </div>
        </div>
         </div>
    <!--end::Header-->
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
			
		}

	},

	async mounted() {
       this.id = localStorage.getItem("instituicao_id");
       this.nome_fantasia = localStorage.getItem("instituicao_nome");
	},



	methods: {
	  remover(){
        window.localStorage.removeItem('instituicao_id');
        window.localStorage.removeItem('instituicao_nome');
        window.location.href = `/painel-geral/index.html#/instituicoes`
      }
	},
}