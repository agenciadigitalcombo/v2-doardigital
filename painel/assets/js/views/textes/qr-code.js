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
	
						<!--begin::Content-->
						<div class="content d-flex flex-column flex-column-fluid" id="kt_content">
							<!--begin::Post-->
							<div class="post d-flex flex-column-fluid" id="kt_post">
								<!--begin::Container-->
								<div id="kt_content_container" class="container-xxl">
	
									<!--begin::details View-->
									<div class="card mb-5 mb-xl-10" id="kt_profile_details_view">
										<!--begin::Card header-->
										<div class="card-header cursor-pointer">
											<!--begin::Card title-->
											<div class="card-title m-0">
												<h3 class="fw-bolder m-0">QR CODE</h3>
											</div>
										</div>
										<!--begin::Card header-->
										<!--begin::Card body-->
										<div class="card-body p-9">
											<!--begin::Row-->
											<div class="row mb-7">
	
	
	
												<div class="m-0 text-center">
													<h3 class="mb-12">QR CODE para ajudar na divulgação !!!</h3>
												</div>
	
												<div class="col-lg-12">
													<div class="fv-row mb-2">
	
													<center>
													<div id="meucanvas" ref="print_qr"></div> 
												</center>

											 
												
												<canvas id="meucanvas" width="200" height="100" style="border:1px solid #d3d3d3;">
												Seu navegador não suporta CANVAS</canvas>
												<hr>
												<a id="arquivo" download="nome_do_arquivo.extensão" @click="salvarImagem('exemplo.png')">FAÇA O DOWNLOAD AQUI</a>
												
													</div>
												</div>
												<!--begin::Actions-->
												<div class="text-center p-8">
													<button id="arquivo" download="nome_do_arquivo.extensão" @click="salvarImagem('exemplo.png')" type="submit" class="btn btn-primary m-2">
														<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30"
															fill="currentColor" class="bi bi-download p-2"
															viewBox="0 0 16 16">
															<path
																d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z" />
															<path
																d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z" />
														</svg>
														Baixar</button>
												</div>
												<!--end::Actions-->
	
	
											</div>
	
	
										</div>
										<!--end::Card body-->
									</div>
									<!--end::details View-->
									<!--begin::Row-->
	
									<!--end::Row-->
	
								</div>
								<!--end::Container-->
							</div>
							<!--end::Post-->
						</div>
						<!--end::Content-->
	
					</div>
					<!--end::Wrapper-->
				</div>
				<!--end::Page-->
			</div>

			<c-footer />
		</div>
    `,


     data: function () {
		return {
			gravatar: '../painel/assets/image/gravatar.png',
			subdomaim: null,
			dominio: null, 
        }
    },
	methods: {

		salvarImagem(a){
			var meucanvas = document.getElementById('meucanvas');
			var arquivo = document.getElementById('arquivo');
			/*Comentário: a variavel "a" será o nome do arquivo, use aspas para chamar a função */
			arquivo.download = a;
			arquivo.href = meucanvas.toDataURL();
		 },

	  baixar(a){ 
	      const imagemLink = document.createElement('a')
		  var canvas = document.getElementById('meucanvas');
		  const dataUrl = canvas.toDataURL(); 
		  
		  console.log(dataUrl)

		  },

		  baixar2(){
			let vm = this;
			  const imagemLink = document.createElement('a')
			  var canvas = document.getElementById('canvas');
			  //imagemLink.href = canvas.toDataURL('image/png', 1); 
			  
			  console.log(imagemLink.href)
	
			  },
	
		async infoSubdomain() {
			 let res = await adm.todoSubdomain(this.subdomaim = "34edqwe21")
			//let res = await adm.todoSubdomain(this.subdomaim = window.localStorage.getItem("instituicao_subdomaim"))
			return res
		},  
    },
	

		async mounted() {

			let dados = (await this.infoSubdomain()).dados_instituicao
		
			this.subdomaim = dados.subdomaim+'.doardigital.com.br/'
			this.dominio = dados.dominio 

		

			if (this.dominio) { 
					let code_pix = `${this.dominio}`
					var qrcode = new QRCode(this.$refs.print_qr, {
						text: code_pix,
						width: 230,
						height: 230,
						height: 230,
						colorDark: "#000000",
						colorLight: "#ffffff",
						correctLevel: QRCode.CorrectLevel.L
					});
			 
			} else {   
					let code_pix = `${this.subdomaim}`
					var qrcode = new QRCode(this.$refs.print_qr, {
						text: code_pix,
						width: 230,
						height: 230,
						height: 230,
						colorDark: "#000000",
						colorLight: "#ffffff",
						correctLevel: QRCode.CorrectLevel.L
					});
			  
			}
	
		},
	
}

 
