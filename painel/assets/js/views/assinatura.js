import adm from "../../../../static/js/api/adm.js" 

export default {
    template:` checkbox
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
                                <!--begin::Navbar-->
                                <div class="card mb-5 mb-xl-10">
                                    <div class="card-body pt-9 pb-0">
                                        <!--begin::Details-->

                                     
                                            <div class="step-grid">
                                                <div class="corte" style="background-image: linear-gradient(45deg , blue, #1679bd">
                                                    <img src="../painel/assets/icons/step/parabens.png">
                                                    <img class="item-corte" src="../painel/assets/icons/step/corte.svg">
                                                </div>
                                                <div>
                                                    <h2>Titulo</h2>
                                                    <p>Descricao</p>
                                                    <a href="link">Link</a>
                                                </div>
                                            </div>
                                         

                                        <!--begin::Stepper-->
                                        <div class="stepper stepper-pills" id="kt_stepper_example_basic">
                                            <!--begin::Nav-->
                                            <div class="stepper-nav flex-center flex-wrap mb-5">
                                                <!--begin::Step 1-->
                                                <div class="stepper-item mx-2 my-4 current"
                                                    data-kt-stepper-element="nav">
                                                    <!--begin::Line-->
                                                    <div class="stepper-line w-40px"></div>
                                                    <!--end::Line-->

                                                    <!--begin::Icon-->
                                                    <div class="stepper-icon w-40px h-40px">
                                                        <i class="stepper-check fas fa-check"></i>
                                                        <span class="stepper-number">1</span>
                                                    </div>
                                                    <!--end::Icon-->

                                                </div>
                                                <!--end::Step 1-->

                                                <!--begin::Step 2-->
                                                <div class="stepper-item mx-2 my-4" data-kt-stepper-element="nav">
                                                    <!--begin::Line-->
                                                    <div class="stepper-line w-40px"></div>
                                                    <!--end::Line-->

                                                    <!--begin::Icon-->
                                                    <div class="stepper-icon w-40px h-40px">
                                                        <i class="stepper-check fas fa-check"></i>
                                                        <span class="stepper-number">2</span>
                                                    </div>
                                                    <!--begin::Icon-->


                                                </div>
                                                <!--end::Step 2-->

                                                <!--begin::Step 3-->
                                                <div class="stepper-item mx-2 my-4" data-kt-stepper-element="nav">
                                                    <!--begin::Line-->
                                                    <div class="stepper-line w-40px"></div>
                                                    <!--end::Line-->

                                                    <!--begin::Icon-->
                                                    <div class="stepper-icon w-40px h-40px">
                                                        <i class="stepper-check fas fa-check"></i>
                                                        <span class="stepper-number">3</span>
                                                    </div>
                                                    <!--begin::Icon-->


                                                </div>
                                                <!--end::Step 3-->

                                                <!--begin::Step 4-->
                                                <div class="stepper-item mx-2 my-4" data-kt-stepper-element="nav">
                                                    <!--begin::Line-->
                                                    <div class="stepper-line w-40px"></div>
                                                    <!--end::Line-->

                                                    <!--begin::Icon-->
                                                    <div class="stepper-icon w-40px h-40px">
                                                        <i class="stepper-check fas fa-check"></i>
                                                        <span class="stepper-number">4</span>
                                                    </div>
                                                    <!--begin::Icon-->

                                                </div>
                                                <!--end::Step 4-->


                                            </div>

                                        </div>
                                        <!--end::Stepper-->
                                    </div>
                                </div>
                                <!--end::Navbar-->

                                <!--begin::Billing Address-->
                                <div class="card mb-5 mb-xl-10">
                                    <!--begin::Card header-->
                                    <div class="card-header">
                                        <!--begin::Title-->
                                        <div class="card-title">
                                            <h1>Meu Plano</h1>
                                        </div>
                                        <!--end::Title-->
                                    </div>
                                    <!--end::Card header-->
                                    <!--begin::Card body-->
                                    <div class="card-body">
                                        <!--begin::Addresses-->
                                        <div class="row gx-9 gy-6">
                                            <!--begin::Col-->
                                            <div class="col-xl-6">


                                                <!--begin::Radio group-->
                                                <div class="card-title">
                                                    <h3>Planos</h3>
                                                </div>
                                                <div data-kt-buttons="true">
                                                    <!--begin::Radio button-->
                                                    <label v-for="plano in planos"
                                                        v-if="!trial.status || plano.instancias==1"
                                                        class="btn btn-outline btn-outline-dashed d-flex flex-stack text-start p-4 mb-2">
                                                        <!--end::Description-->
                                                        <div class="d-flex align-items-center me-2">
                                                            <!--begin::Radio-->
                                                            <div
                                                                class="form-check form-check-custom form-check-solid form-check-primary me-6">
                                                                <input class="form-check-input" type="radio" name="plan"
                                                                    :value="plano.id" name="planos_doardigital" />
                                                            </div>
                                                            <!--end::Radio-->

                                                            <!--begin::Info-->
                                                            <div class="flex-grow-1">
                                                                <h2
                                                                    class="d-flex align-items-center fs-4 fw-bolder flex-wrap">
                                                                    {{plano.instancias}} instituição
                                                                </h2>

                                                            </div>
                                                            <!--end::Info-->
                                                        </div>
                                                        <!--end::Description-->

                                                        <!--begin::Price-->
                                                        <div class="ms-5">
                                                            <span class="mb-2">R$</span>
                                                            <span class="fs-2 fw-bolder">
                                                                {{plano.preco|money}}
                                                            </span>
                                                            <span class="fs-7 opacity-50">/
                                                                <span data-kt-element="period">ao mês</span>
                                                            </span>
                                                        </div>
                                                        <!--end::Price-->
                                                    </label>
                                                    <!--end::Radio button-->

                                                </div>
                                                <!--end::Radio group-->

                                                <br>
                                                <br>

                                                <!--begin::Radio group-->
                                                <div class="card-title">
                                                    <h3>Planos com WhatsApp</h3>
                                                </div>
                                                <div data-kt-buttons="true">

                                                    <!--end::Radio button-->
                                                    <!--begin::Radio button-->
                                                    <label v-for="p in plano_whatsapp"
                                                        class="btn btn-outline btn-outline-dashed d-flex flex-stack text-start p-4 mb-2">
                                                        <!--end::Description-->
                                                        <div class="d-flex align-items-center me-2">
                                                            <!--begin::Radio-->
                                                            <div
                                                                class="form-check form-check-custom form-check-solid form-check-primary me-6">
                                                                <input v-model="plano_id_zap" class="form-check-input"
                                                                    type="radio" name="plan2" value="startup" />
                                                            </div>
                                                            <!--end::Radio-->

                                                            <!--begin::Info-->
                                                            <div class="flex-grow-1">
                                                                <h2
                                                                    class="d-flex align-items-center fs-4 fw-bolder flex-wrap">
                                                                    {{p.text}}
                                                                </h2>

                                                            </div>
                                                            <!--end::Info-->
                                                        </div>
                                                        <!--end::Description-->

                                                        <!--begin::Price-->
                                                        <div class="ms-5">
                                                            <span class="mb-2">R$</span>
                                                            <span class="fs-2 fw-bolder">
                                                                {{p.preco}}
                                                            </span>
                                                            <span class="fs-7 opacity-50">/
                                                                <span data-kt-element="period">ao mês</span>
                                                            </span>
                                                        </div>
                                                        <!--end::Price-->
                                                    </label>
                                                    <!--end::Radio button-->

                                                </div>
                                                <!--end::Radio group-->

                                            </div>
                                            <!--end::Col-->
                                            <!--begin::Col-->
                                            <div class="col-xl-6">
                                                <!--begin::Address-->
                                                <div
                                                    class="card card-dashed h-xl-100 flex-row flex-stack flex-wrap p-6">
                                                    <!--begin::Form-->
                                                    <form id="kt_account_profile_details_form" class="form">
                                                        <!--begin::Card body-->


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
                                                                        {{doacao.card||'0000 0000 0000 0000'}}</tspan>
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
                                                                        {{doacao.nome_card||'NOME COMPLETO'}}</tspan>
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
                                                                        {{doacao.validade||'02/2027'}}</tspan>
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
                                                                        {{doacao.cvv||'1234'}}</tspan>
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
                                                                    <input v-model="doacao.card" type="text"
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
                                                                            <input v-model="doacao.validade" type="text"
                                                                                name="validar"
                                                                                class="form-control form-control-lg form-control-solid mb-3 mb-lg-0"
                                                                                placeholder="DD/YY" required />
                                                                        </div>
                                                                        <!--end::Col-->
                                                                        <!--begin::Col-->
                                                                        <div class="col-lg-6 fv-row">
                                                                            <label
                                                                                class="col-lg-12 col-form-label required fw-bold fs-6">CVV</label>
                                                                            <input v-model="doacao.cvv" type="text"
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
                                                                    <input v-model="doacao.nome_card" type="text"
                                                                        name="nascimento"
                                                                        class="form-control form-control-lg form-control-solid"
                                                                        placeholder="Nome Completo" required />
                                                                </div>
                                                                <!--end::Col-->
                                                            </div>

                                                            <div class="row mb-2">
                                                                <div
                                                                    class="form-check form-switch form-check-custom form-check-solid">

                                                                    <label
                                                                        class="form-check-label col-lg-10 col-form-label required fw-bold fs-6"
                                                                        for="flexSwitchDefault">
                                                                        Você tem um código promocional
                                                                    </label>
                                                                    <input @click="jms = !jms" class="form-check-input"
                                                                        type="checkbox" value=""
                                                                        id="flexSwitchDefault" />

                                                                </div>
                                                            </div>

                                                            <br>
                      

                                                            <div class="row mb-6" v-if="jms">
                                                                <div class="col-lg-12 fv-row">
                                                                    <label
                                                                        class="col-lg-10 col-form-label required fw-bold fs-6">Cupom</label>
                                                                    <input v-model="doacao.cupom" type="text"
                                                                        name="cupom"
                                                                        class="form-control form-control-lg form-control-solid"
                                                                        placeholder="?" />
                                                                </div>
                                                                <!--end::Col-->
                                                            </div>

                                                        </div>
                                                        <!--end::Card body-->
                                                        <!--begin::Actions-->
                                                        <div class="card-footer d-flex justify-content-end py-6 px-9">
                                                            <button type="submit" class="btn btn-primary p-5"
                                                                id="kt_account_profile_details_submit">
                                                                Pagar Agora
                                                            </button>
                                                        </div>
                                                        <!--end::Actions-->
                                                    </form>
                                                    <!--end::Form-->
                                                </div>
                                                <!--end::Address-->
                                            </div>
                                            <!--end::Col-->

                                        </div>
                                        <!--end::Addresses-->

                                    </div>
                                    <!--end::Card body-->
                                </div>
                            </div>
                            <!--end::Container-->
                        </div>
                        <!--end::Post-->
                    </div>
                    <!--end::Content-->
                </div>
            </div>
        </div>
        <!--end::Root--></div>
	
	<c-footer/>
	</div>
    `,


     data: function () {
		return {
			gravatar: '../painel/assets/image/gravatar.png',
	
			
			plano_id: "1386061",
			plano_id_zap: 0,

			doacao: {
				plan_id: null,
				amount: '400',
				card: "",
				validade: "",
				cvv: "",
				nome_card: "",
				payment_type: 'card',
				cupom: ""
			},

			jms: false,

			plano_whatsapp: [
				{ id: 0, preco: "00,00", text: "Nenhum disparo" },
				{ id: 1, preco: "69,90", text: "1 mil disparos por mês" },
				{ id: 2, preco: "110,00", text: "2 mil disparos por mês" },
				{ id: 5, preco: "190,00", text: "5 mil disparos por mês" }
			],
			planos: [
				{ preco: 29.90, id: "1386061", instancias: 1 },
				{ preco: 56.81, id: "1396159", instancias: 2 },
				{ preco: 80.73, id: "1386052", instancias: 3 },
				{ preco: 152.49, id: "1386056", instancias: 6 },
				{ preco: 220.66, id: "1386057", instancias: 9 },
				{ preco: 279.86, id: "1386058", instancias: 12 },
				{ preco: 336.37, id: "1386059", instancias: 15 },
			],

			lista_whats: {
				11: { preco: 99.80, id: "1430707", instancias: 1 },
				21: { preco: 139.90, id: "1430709", instancias: 1 },
				51: { preco: 219.90, id: "1430711", instancias: 1 },
				12: { preco: 126.71, id: "1430718", instancias: 2 },
				22: { preco: 166.81, id: "1430719", instancias: 2 },
				52: { preco: 246.81, id: "1430720", instancias: 2 },
				13: { preco: 150.63, id: "1430722", instancias: 3 },
				23: { preco: 190.73, id: "1430723", instancias: 3 },
				53: { preco: 270.73, id: "1430724", instancias: 3 },
				16: { preco: 222.39, id: "1430725", instancias: 6 },
				26: { preco: 262.49, id: "1430726", instancias: 6 },
				56: { preco: 342.49, id: "1430727", instancias: 6 },
				19: { preco: 290.56, id: "1430729", instancias: 9 },
				29: { preco: 330.66, id: "1430730", instancias: 9 },
				59: { preco: 410.66, id: "1430731", instancias: 9 },
				112: { preco: 349.76, id: "1430732", instancias: 12 },
				212: { preco: 389.86, id: "1430733", instancias: 12 },
				512: { preco: 469.86, id: "1430734", instancias: 12 },
				115: { preco: 406.27, id: "1430735", instancias: 15 },
				215: { preco: 446.37, id: "1430736", instancias: 15 },
				515: { preco: 526.37, id: "1430737", instancias: 15 },
			},
			trial: {
				status: false,
				plan_id: null
			}
        }
    },
	methods: {
	
     
       

    },
	

	
}

