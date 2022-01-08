import adm from "../../../../static/js/api/adm.js"

export default {
	template: `
	<div>
	<!--begin::Root -->
          <div class="d-flex flex-column flex-root">
            <!--begin::Content-->
                     <div class="content d-flex flex-column flex-column-fluid" id="kt_content">
                         <!--begin::Post-->
                         <div class="post d-flex flex-column-fluid" id="kt_post">
                             <!--begin::Container-->
                             <div id="kt_content_container" class="container-xxl">
                              
 
                                 <!--begin::Billing Address-->
                                 <div class="card mb-5 mb-xl-10">
                                   
                                     <!--begin::Card body-->
                                     <div class="card-body">
                                            <!--begin::Form-->
                                            <form id="kt_account_profile_details_form" class="form">
                                         <!--begin::Addresses  jms xx-->
                                         <div class="row gx-9 gy-6">
                                             <!--begin::Col-->
                                             <div class="col-xl-6">
 
 
                                                 <!--begin::Radio group-->
                                                 <div class="card-title mb-10" >
                                                     <h2>DIGITE SUAS INFORMAÇÕES</h2>
                                                 </div>
                                                
                                                 <!--begin::Radio group-->
                                           
                                                 <div>
 
                                                     <div class="mb-7">
                                                         <label for="exampleFormControlInput1" class="required form-label">Nome</label>
                                                         <input v-model="nome" type="text" class="form-control form-control-solid" placeholder="Nome"/>
                                                     </div>
                                                     <div class="mb-7">
                                                         <label for="exampleFormControlInput1" class="required form-label">Género</label>
                                                         <select class="form-select form-select-solid" aria-label="Select example">
                                                            <option v-model="genero">Masculino</option>
                                                             <option v-model="genero">Feminino</option>
                                                         </select>
                                                     </div>
                                                     <div class="mb-7">
                                                         <label for="exampleFormControlInput1" class="required form-label">CPF</label>
                                                         <input v-model="cpf" type="text" class="form-control form-control-solid" placeholder="CPF"/>
                                                     </div>
                                                     <div class="mb-7">
                                                         <label for="exampleFormControlInput1" class="required form-label">E-mail</label>
                                                         <input v-model="email" type="email" class="form-control form-control-solid" placeholder="Email"/>
                                                     </div>
                                                     <div class="mb-10">
                                                         <label for="exampleFormControlInput1" class="required form-label">Telefone</label>
                                                         <input v-model="telefone" type="text" class="form-control form-control-solid" placeholder="Telefone"/>
                                                     </div>
                                                  
 
                                                 </div>
                                                
                                                 
                                                 <!--begin::Radio group-->
                                                 <div class="card-title mb-10">
                                                     <h2>INFORME SEU INDEREÇO</h2>
                                                 </div>
                                                
                                                 <!--begin::Radio group-->
                                           
                                                 <div>
                                                     <div class="row g-5">
                                                         <div class="col-6">
                                                           
                                                     <div class="mb-1">
                                                         <label for="exampleFormControlInput1" class="required form-label">CEP</label>
                                                         <input v-model="cep" type="text" class="form-control form-control-solid" placeholder="CEP"/>
                                                     </div>
                                                 </div>
                                                 <div class="col-6">
                                                     <div class="mb-1">
                                                         <label for="exampleFormControlInput1" class="required form-label">Endereço</label>
                                                         <input v-model="endereco" type="text" class="form-control form-control-solid" placeholder="Endereço"/>
                                                     </div>
                                                    
                                                 </div>
                                                     <div class="col-6">
                                                     <div class="mb-1">
                                                         <label for="exampleFormControlInput1" class="required form-label">Numero</label>
                                                         <input v-model="numero" type="text" class="form-control form-control-solid" placeholder="Numero"/>
                                                     </div>
                                                 </div>
                                                 <div class="col-6">
                                                     <div class="mb-1">
                                                         <label for="exampleFormControlInput1" class="required form-label">Bairro</label>
                                                         <input v-model="bairro" type="text" class="form-control form-control-solid" placeholder="Bairro"/>
                                                     </div>
                                                 </div>
 
                                                 <div class="col-6">
                                                     <div class="mb-1">
                                                         <label for="exampleFormControlInput1" class="required form-label">Estado</label>
                                                         <input v-model="estado" type="text" class="form-control form-control-solid" placeholder="Estado"/>
                                                     </div>
                                                 </div>
                                                 <div class="col-6">
                                                     <div class="mb-1">
                                                         <label for="exampleFormControlInput1" class="required form-label">Cidade</label>
                                                         <input v-model="cidade" type="text" class="form-control form-control-solid" placeholder="Cidade"/>
                                                     </div>
                                                 </div>
 
                                                 </div>
                                                 </div>
 
                                             </div>
                                             <!--end::Col-->
                                             <!--begin::Col-->
                                             <div class="col-xl-6">
 
                                                 <div class="card-title mb-10" >
                                                     <h2>Total a Pagar: R$ {{planos_valor}} Por {{tipo}} </h2>
                                                 </div>
                                                 <P>
                                                     Todas as transações são segura e cri+tografadas. As informações do cartão de credito nuca são armazenado em nossos servidores
                                                 </P>
                                                 <!--begin::Address-->
                                                 <div class="card card-dashed h-xl-0 flex-row flex-stack flex-wrap ">
                                                  
                                                         <!--begin::Card body-->
                                                              <div class="fv-row m-15" >
                                                             <!--begin::Radio group-->
                                                             <div class="btn-group w-100" data-kt-buttons="true"
                                                                 data-kt-buttons-target="[data-kt-button]">
                                                                 <!--begin::Radio-->
                                                                 <label
                                                                     class="btn btn-outline-secondary text-muted text-hover-white text-active-white btn-outline btn-active-primary active "
                                                                     data-kt-button="true">
                                                                     <!--begin::Input-->
                                                                     <input  class="btn-check"  @click="jms = 'cartao'" v-model="type_pagamento"  value="CARTÃO" 
                                                                     type="radio" name="method" value="1" />
                                                                     <!--end::Input-->
                                                                     <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-credit-card-2-front-fill" viewBox="0 0 16 16">
                                                                         <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm2.5 1a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h2a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-2zm0 3a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1h-5zm0 2a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1h-1zm3 0a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1h-1zm3 0a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1h-1zm3 0a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1h-1z"/>
                                                                       </svg>
                                                                 <p>CARTÃO</p>	
                                                                 </label>
                                                                 <!--end::Radio-->
                                                                 <!--begin::Radio-->
                                                                 <label
                                                                     class="btn btn-outline-secondary text-muted text-hover-white text-active-white btn-outline btn-active-primary "
                                                                     data-kt-button="true">
                                                                     <!--begin::Input-->
                                                                     <input class="btn-check" @click="jms = 'boleto'"  v-model="type_pagamento"  value="BOLETO" 
                                                                         type="radio" name="method" value="2" />
                                                                     <!--end::Input-->
                                                                     <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-upc-scan" viewBox="0 0 16 16">
                                                                         <path d="M1.5 1a.5.5 0 0 0-.5.5v3a.5.5 0 0 1-1 0v-3A1.5 1.5 0 0 1 1.5 0h3a.5.5 0 0 1 0 1h-3zM11 .5a.5.5 0 0 1 .5-.5h3A1.5 1.5 0 0 1 16 1.5v3a.5.5 0 0 1-1 0v-3a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 1-.5-.5zM.5 11a.5.5 0 0 1 .5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 1 0 1h-3A1.5 1.5 0 0 1 0 14.5v-3a.5.5 0 0 1 .5-.5zm15 0a.5.5 0 0 1 .5.5v3a1.5 1.5 0 0 1-1.5 1.5h-3a.5.5 0 0 1 0-1h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 1 .5-.5zM3 4.5a.5.5 0 0 1 1 0v7a.5.5 0 0 1-1 0v-7zm2 0a.5.5 0 0 1 1 0v7a.5.5 0 0 1-1 0v-7zm2 0a.5.5 0 0 1 1 0v7a.5.5 0 0 1-1 0v-7zm2 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-7zm3 0a.5.5 0 0 1 1 0v7a.5.5 0 0 1-1 0v-7z"/>
                                                                       </svg>
                                                                 <p>BOLETO </p>
                                                                     
                                                                 </label>
                                                                 <!--end::Radio-->
                                                                   <!--begin::Radio-->
                                                                   <label
                                                                   class="btn btn-outline-secondary text-muted text-hover-white text-active-white btn-outline btn-active-primary "
                                                                   data-kt-button="true">
                                                                   <!--begin::Input-->
                                                                   <input class="btn-check" @click="jms = 'pix'" v-model="type_pagamento"  value="PIX" 
                                                                       type="radio" name="method" value="3" />
                                                                   <!--end::Input-->
                                                                  
                                                                   <svg   xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-qr-code-scan" viewBox="0 0 16 16 ">
                                                                     <path d="M0 .5A.5.5 0 0 1 .5 0h3a.5.5 0 0 1 0 1H1v2.5a.5.5 0 0 1-1 0v-3Zm12 0a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0V1h-2.5a.5.5 0 0 1-.5-.5ZM.5 12a.5.5 0 0 1 .5.5V15h2.5a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5v-3a.5.5 0 0 1 .5-.5Zm15 0a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1 0-1H15v-2.5a.5.5 0 0 1 .5-.5ZM4 4h1v1H4V4Z"/>
                                                                     <path d="M7 2H2v5h5V2ZM3 3h3v3H3V3Zm2 8H4v1h1v-1Z"/>
                                                                     <path d="M7 9H2v5h5V9Zm-4 1h3v3H3v-3Zm8-6h1v1h-1V4Z"/>
                                                                     <path d="M9 2h5v5H9V2Zm1 1v3h3V3h-3ZM8 8v2h1v1H8v1h2v-2h1v2h1v-1h2v-1h-3V8H8Zm2 2H9V9h1v1Zm4 2h-1v1h-2v1h3v-2Zm-4 2v-1H8v1h2Z"/>
                                                                     <path d="M12 9h2V8h-2v1Z"/>
                                                                   </svg>
                                                               <p>PIX</p>
                                                                   
                                                               </label>
                                                               <!--end::Radio-->
                                                             </div>
                                                             <!--end::Radio group-->
                                                         </div>
                                                         <!--end::Row-->
 
                                                         <div  v-if="jms =='cartao'">
                                                         
                                                        <!-- comeco do cartao -->
                                                         <div style="text-align:center;">
                                                             <svg style="width: 300px; margin: 0 auto; "
                                                                 viewBox="0 0 141.287 88.635"
                                                                 xmlns="http://www.w3.org/2000/svg">
                                                                 <rect width="141.18" height="88.629" x=".054" y=".003"
                                                                     ry="4.572" fill="#0094e8"
                                                                     paint-order="stroke markers fill" />
                                                                 <text
                                                                     style="line-height:1.25;-inkscape-font-specification:'Segoe UI'"
                                                                     x="12.994" y="51.352" font-weight="400"
                                                                     font-size="10.48" font-family="Segoe UI"
                                                                     letter-spacing="0" word-spacing="0" fill="#f9f9f9"
                                                                     stroke-width="1.965">
                                                                     <tspan
                                                                         style="-inkscape-font-specification:monospace"
                                                                         x="12.994" y="51.352" font-family="monospace">
                                                                         {{cart_numero||'0000 0000 0000 0000'}}</tspan>
                                                                 </text>
                                                                 <text
                                                                     style="line-height:1.25;-inkscape-font-specification:'Segoe UI'"
                                                                     x="13.547" y="79.959" font-weight="400"
                                                                     font-size="5.859" font-family="Segoe UI"
                                                                     letter-spacing="0" word-spacing="0" fill="#f9f9f9"
                                                                     stroke-width="1.099">
                                                                     <tspan
                                                                         style="-inkscape-font-specification:monospace"
                                                                         x="13.547" y="79.959" font-family="monospace">
                                                                         {{cart_nome||'NOME COMPLETO'}}</tspan>
                                                                 </text>
                                                                 <path
                                                                     d="M17.606 21.77c-.813 0-1.552.305-2.108.81h5.23l-.81-.81zm3.12 0l3.307 3.306 3.306-3.307zm7.422 0l-.824.824h5.227a3.127 3.127 0 00-2.124-.825zM15.002 23.15a3.13 3.13 0 00-.534 1.756v1.078h6.323v.122h.116v6.539h-.125v.144h-6.314v1.2c0 .566.15 1.096.41 1.554h6.307l2.562-2.561v-7.386L21.3 23.151zm11.75.014L24.319 25.6v7.383l2.449 2.448h6.448c.223-.431.349-.92.349-1.441v-1.17H27.33V25.82h6.235v-.914a3.13 3.13 0 00-.525-1.742zm1.15 3.228v2.612h5.663v-2.612zm-13.434.163v2.449h5.867v-2.449zm0 3.021v2.641h5.867v-2.64zm13.434 0v2.67h5.663v-2.67zm-3.869 3.929l-3.622 3.622h7.245zm3.306 2.497l1.125 1.124h1.963c.97 0 1.836-.436 2.41-1.124zm-12.044.113a3.128 3.128 0 002.311 1.011h1.995l1.012-1.011z"
                                                                     fill="#efcd33" paint-order="stroke markers fill" />
                                                                 <text
                                                                     style="line-height:1.25;-inkscape-font-specification:'Segoe UI'"
                                                                     x="14.542" y="61.097" font-weight="400"
                                                                     font-size="3.316" font-family="Segoe UI"
                                                                     letter-spacing="0" word-spacing="0" fill="#f9f9f9"
                                                                     stroke-width=".622">
                                                                     <tspan
                                                                         style="-inkscape-font-specification:monospace"
                                                                         x="14.542" y="61.097" font-family="monospace">
                                                                         VALIDADE</tspan>
                                                                 </text>
                                                                 <text
                                                                     style="line-height:1.25;-inkscape-font-specification:'Segoe UI'"
                                                                     x="14.101" y="67.018" font-weight="400"
                                                                     font-size="5.859" font-family="Segoe UI"
                                                                     letter-spacing="0" word-spacing="0" fill="#f9f9f9"
                                                                     stroke-width="1.099">
                                                                     <tspan
                                                                         style="-inkscape-font-specification:monospace"
                                                                         x="14.101" y="67.018" font-family="monospace">
                                                                         {{cart_validade||'02/2027'}}</tspan>
                                                                 </text>
                                                                 <text
                                                                     style="line-height:1.25;-inkscape-font-specification:'Segoe UI'"
                                                                     x="124.871" y="61.097" font-weight="400"
                                                                     font-size="3.316" font-family="Segoe UI"
                                                                     letter-spacing="0" word-spacing="0" fill="#f9f9f9"
                                                                     stroke-width=".622">
                                                                     <tspan
                                                                         style="-inkscape-font-specification:monospace"
                                                                         x="124.871" y="61.097" font-family="monospace">
                                                                         CVV</tspan>
                                                                 </text>
                                                                 <text
                                                                     style="line-height:1.25;-inkscape-font-specification:'Segoe UI'"
                                                                     x="120.401" y="67.018" font-weight="400"
                                                                     font-size="5.859" font-family="Segoe UI"
                                                                     letter-spacing="0" word-spacing="0" fill="#f9f9f9"
                                                                     stroke-width="1.099">
                                                                     <tspan
                                                                         style="-inkscape-font-specification:monospace"
                                                                         x="120.401" y="67.018" font-family="monospace">
                                                                         {{cart_cvv||'1234'}}</tspan>
                                                                 </text>
                                                             </svg>
 
                                                         </div>
                                                         <!-- fim do cartao -->
 
                                                         <div class="card-body border-top p-9">
                                                             <div class="row mb-4">
                                                                 <div class="col-lg-12 fv-row">
                                                                     <label
                                                                         class="col-lg-10 col-form-label required fw-bold fs-6">Número
                                                                         cartão</label>
                                                                     <input v-model="cart_numero" type="text"
                                                                         name="cartao"
                                                                         class="form-control form-control-lg form-control-solid"
                                                                         placeholder="0000 0000 0000 0000" required />
                                                                 </div>
                                                                 <!--end::Col-->
                                                             </div>
                                                             <!--end::Input group-->
                                                             <!--begin::Input group-->
                                                             <div class="row mb-4">
                                                                 <!--begin::Label-->
 
                                                                 <!--end::Label-->
                                                                 <!--begin::Col-->
                                                                 <div class="col-lg-12">
                                                                     <!--begin::Row-->
                                                                     <div class="row">
                                                                         <!--begin::Col-->
                                                                         <div class="col-lg-6 fv-row">
                                                                             <label
                                                                                 class="col-lg-12 col-form-label required fw-bold fs-6">Validade</label>
                                                                             <input v-model="cart_validade" type="text"
                                                                                 name="validar"
                                                                                 class="form-control form-control-lg form-control-solid mb-3 mb-lg-0"
                                                                                 placeholder="DD/YY" required />
                                                                         </div>
                                                                         <!--end::Col-->
                                                                         <!--begin::Col-->
                                                                         <div class="col-lg-6 fv-row">
                                                                             <label
                                                                                 class="col-lg-12 col-form-label required fw-bold fs-6">CVV</label>
                                                                             <input v-model="cart_cvv" type="text"
                                                                                 name="cvv"
                                                                                 class="form-control form-control-lg form-control-solid"
                                                                                 placeholder="123" required />
                                                                         </div>
                                                                         <!--end::Col-->
                                                                     </div>
                                                                     <!--end::Row-->
                                                                 </div>
                                                                 <!--end::Col-->
                                                             </div>
                                                             <!--end::Input group-->
                                                             <!--begin::Input group-->
 
                                                             <div class="row mb-5">
                                                                 <div class="col-lg-12 fv-row">
                                                                     <label
                                                                         class="col-lg-10 col-form-label required fw-bold fs-6">Nome
                                                                         Completo</label>
                                                                     <input v-model="cart_nome" type="text"
                                                                         name="nascimento"
                                                                         class="form-control form-control-lg form-control-solid"
                                                                         placeholder="Nome Completo" required />
                                                                 </div>
                                                                 <!--end::Col-->
                                                             </div>
 
 
                                                         </div>
                                                         <!--end::Card body-->
                                                         <!--begin::Actions-->
                                                         <div class="card-footer d-flex justify-content-end py-6 px-9">
                                                         <button  @click="addTransacao()" style="width: 100%;" type="submit" class="btn btn-success p-5"
                                                                 id="kt_account_profile_details_submit">
                                                                 DOAR AGORA!
                                                             </button>
                                                         </div>
                                                         <!--end::Actions-->
 
                                                     </div>
 
 
                                                         <div  v-if="jms =='boleto'">
 
 
                                                                 <div class="">
                                                                 <button style="width: 100%; position:relative; left:10%;" class="btn btn-success p-5">DOAR AGORA!</button>
                                                                 </div>
 
                                                         </div>
 
                                                         <div  v-if="jms =='pix'">
                                                             <div class="card-body border-top p-9">
                                                               
                                                             
                                                                 <div class="col-lg-12" >
                                                                     <!--begin::Row-->
                                                                     <div class="row" >
                                                                       <div class="col-lg-6 fv-row">
                                                                        
                                                                             <input  class="form-control form-control-lg form-control-solid " />
                                                                         </div>
                                                                      
                                                                         <div class="col-lg-6 fv-row">
                                                                             <input class="form-control form-control-lg form-control-solid" />
                                                                         </div>
                                                                     </div>
                                                                <button style="width: 100%; position:relative; left:10%;" class="btn btn-success p-5">DOAR AGORA!</button>
                                                        
                                                                 </div>
                                                               
                                                         </div>
 
                                                          
                                                         </div>
                                                         
                                                 </div>
                                                 <!--end::Address-->
                                             </div>
                                             <!--end::Col-->
 
                                         </div>
                                         <!--end::Addresses-->
 
                                                          </form>
                                                     <!--end::Form-->
 
                                     </div>
                                     <!--end::Card body-->
                                 </div>
                             </div>
                             <!--end::Container-->
                         </div>
                         <!--end::Post-->
                     </div>
               
         </div>
         <!--end::Root-->
	</div>
    `,


	data: function () {
		return {
			gravatar: '../painel/assets/image/gravatar.png',

			plano_id: "1386061",
			plano_id_zap: 0,

			token: null,
			instituicao_id: null,
			mensal: null,
			planos_id: null,
			planos_valor: null,
			email: null,
			nome: null,
			genero: null,
			cpf: null,
			telefone: null,
			cep: null,
			numero: null,
			estado: null,
			endereco: null,
			bairro: null,
			cidade: null,
			type_pagamento: null,
			cart_numero: null,
			cart_cvv: null,
			cart_validade: null,
			cart_nome: null,


			jms: "cartao",
			tipo: null,

		}
	},

	methods: {
		async addTransacao() {
			this.error = null

			let res = await adm.transacaoPlano(
				this.token,
				this.instituicao_id = "3",
				this.mensal = "1",
				this.planos_id = "12",
				this.planos_valor ,
				this.email ,
				this.nome,
				this.genero,
				this.cpf,
				this.telefone,
				this.cep ,
				this.numero ,
				this.estado,
				this.endereco,
				this.bairro,
				this.cidade ,
				this.type_pagamento,
				this.cart_numero,
				this.cart_cvv,
				this.cart_validade,
				this.cart_nome,
				
				// this.token,
				// this.instituicao_id,
				// this.mensal,
				// this.planos_id,
				// this.planos_valor,
				// this.email,
				// this.nome,
				// this.genero,
				// this.cpf,
				// this.telefone,
				// this.cep,
				// this.numero,
				// this.estado,
				// this.endereco,
				// this.bairro,
				// this.cidade,
				// this.type_pagamento,
				// this.cart_numero,
				// this.cart_cvv,
				// this.cart_validade,
				// this.cart_nome,
			)
			if (!res.next) {
				this.error = res.message
				return null
			}

			console.log(res)
		},


	},

	mounted() {
		this.tipo = window.localStorage.getItem("tipo")
		this.planos_valor = window.localStorage.getItem("valor")
		this.email = window.localStorage.getItem("email")
        this.token = localStorage.getItem('token')

	},


}

