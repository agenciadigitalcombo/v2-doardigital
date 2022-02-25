import adm from "../../../../../static/js/api/adm.js"
const { required, minLength, maxLength } = window.validators

export default {
    template: `

<div class="d-flex flex-column flex-lg-row flex-column-fluid stepper stepper-pills stepper-column"
    id="kt_create_account_stepper">

    <div class="d-flex flex-column flex-lg-row-auto w-xl-500px bg-lighten shadow-sm">

        <div class="d-flex flex-column position-xl-fixed top-0 bottom-0 w-xl-500px scroll-y">
            <div class="d-flex flex-row-fluid flex-column flex-center p-10 pt-lg-20">
                <a href="../../demo9/dist/index.html" class="mb-10 mb-lg-20">
                    <img alt="Logo" src="assets/media/logos/logotipo1.png" class="h-40px" />
                </a>
                <div class="stepper-nav">
                    <div class="stepper-item completed" data-kt-stepper-element="nav">
                        <div class="stepper-line w-40px"></div>
                        <div class="stepper-icon w-40px h-40px">
                            <i class="stepper-check fas fa-check"></i>
                            <span class="stepper-number">1</span>
                        </div>
                        <div class="stepper-label">
                            <h3 class="stepper-title">Tipo de Conta</h3>
                        </div>
                    </div>
                    <div class="stepper-item completed" data-kt-stepper-element="nav">
                        <div class="stepper-line w-40px"></div>
                        <div class="stepper-icon w-40px h-40px">
                            <i class="stepper-check fas fa-check"></i>
                            <span class="stepper-number">2</span>
                        </div>
                        <div class="stepper-label">
                            <h3 class="stepper-title">Completar Perfil</h3>
                        </div>
                    </div>
                    <div class="stepper-item completed" data-kt-stepper-element="nav">
                        <div class="stepper-line w-40px"></div>
                        <div class="stepper-icon w-40px h-40px">
                            <i class="stepper-check fas fa-check"></i>
                            <span class="stepper-number">3</span>
                        </div>
                        <div class="stepper-label">
                            <h3 class="stepper-title">Endereço</h3>
                        </div>
                    </div>
                    <div class="stepper-item current" data-kt-stepper-element="nav">
                        <div class="stepper-line w-40px"></div>
                        <div class="stepper-icon w-40px h-40px">
                            <i class="stepper-check fas fa-check"></i>
                            <span class="stepper-number">4</span>
                        </div>
                        <div class="stepper-label">
                            <h3 class="stepper-title">Assinar Plano</h3>
                        </div>
                    </div>
                    <div class="stepper-item" data-kt-stepper-element="nav">
                        <div class="stepper-line w-40px"></div>
                        <div class="stepper-icon w-40px h-40px">
                            <i class="stepper-check fas fa-check"></i>
                            <span class="stepper-number">5</span>
                        </div>
                        <div class="stepper-label">
                            <h3 class="stepper-title">Finalizado</h3>
                        </div>
                    </div>
                </div>
            </div>
            <div class="d-flex flex-row-auto bgi-no-repeat bgi-position-x-center bgi-size-contain bgi-position-y-bottom min-h-150px min-h-lg-300px"
                style="background-image: url(assets/media/illustrations/sigma-1/16.png"></div>

        </div>
    </div>
    <div class="d-flex flex-column flex-lg-row-fluid py-10">
        <div class="d-flex flex-center flex-column flex-column-fluid">
            <div class="w-lg-700px p-10 p-lg-15 mx-auto">
                <form @submit.prevent="transacaoRecorrencia" class="my-auto pb-5">

                    <div class="current" data-kt-stepper-element="content">
                        <div class="w-100">

                            <div class="pb-10 pb-lg-15">

                                <h2 class="fw-bolder text-dark">Selecionar Plano</h2>
                             

                            </div>


                            <div class="row fv-row mb-7 ">
                                <div class="col-6">
                                    <label class="d-flex align-items-center fs-6 fw-bold form-label mb-2">
                                        <span class="required">Instituições</span>
                                        <i class="fas fa-exclamation-circle ms-2 fs-7" data-bs-toggle="tooltip"
                                            title="Specify a card holder's name"></i>
                                    </label>
                                    <select name="card_expiry_month" class="form-select form-select-solid"
                                        v-model="inst" @change="setarPlano($event)" required>
                                        <option disabled selected hidden>Qual a Plano da Instituicao</option>
                                        <option v-for="item in planoInst" :key="item.id" :value="item">{{item}}
                                            Instituição</option>
                                    </select>
                                </div>

                                <div class="col-6">
                                    <label class="d-flex align-items-center fs-6 fw-bold form-label mb-2">
                                        <span class="required">Disparos Whatsapp</span>
                                        <i class="fas fa-exclamation-circle ms-2 fs-7" data-bs-toggle="tooltip"
                                            title="Specify a card holder's name"></i>
                                    </label>
                                    <select name="card_expiry_year" class="form-select form-select-solid" v-model="zap"
                                        @change="setarPlano($event)" required>
                                        <option disabled selected hidden>Selecione o disparo</option>
                                        <option value="000">Nenhum Disparo</option>
                                        <option v-for="item in planoZap" :key="item.id" :value="item">{{item}} Mil
                                            Disparos</option>
                                    </select>
                                </div>
                            </div>

                            <div class="d-flex flex-column mb-7 fv-row">

                            <label class="d-flex align-items-center fs-6 fw-bold form-label mb-2">
                                <span class="required">Valor a Pagar</span>
                                <i class="fas fa-exclamation-circle ms-2 fs-7" data-bs-toggle="tooltip"
                                    title="Specify a card holder's name"></i>
                            </label>

                            <input type="text" class="form-control form-control-solid" placeholder="" disabled
                                name="amount" v-model="amount" />
                        </div>

                            <div class="d-flex flex-column mb-7 fv-row">

                                <label class="d-flex align-items-center fs-6 fw-bold form-label mb-2">
                                    <span class="required">Nome do cartão</span>
                                    <i class="fas fa-exclamation-circle ms-2 fs-7" data-bs-toggle="tooltip"
                                        title="Specify a card holder's name"></i>
                                </label>

                                <input type="text" class="form-control form-control-solid" placeholder=""
                                    name="card_name" v-model="cart_nome" />
                            </div>
                            <div class="d-flex flex-column mb-7 fv-row">

                                <label class="required fs-6 fw-bold form-label mb-2">Número do cartão</label>
                                <div class="position-relative">
                                    <input type="number" class="form-control form-control-solid" required v-mask="'################'"
                                        placeholder="Numero do Cartao" name="card_number" v-model="cart_numero" />
                                    <div class="position-absolute translate-middle-y top-50 end-0 me-5">
                                        <img src="assets/media/svg/card-logos/visa.svg" alt="" class="h-25px" />
                                        <img src="assets/media/svg/card-logos/mastercard.svg" alt="" class="h-25px" />
                                        <img src="assets/media/svg/card-logos/american-express.svg" alt=""
                                            class="h-25px" />
                                    </div>
                                </div>
                            </div>
                            <div class="row mb-10">
                                <div class="col-md-8 fv-row">

                                    <label class="required fs-6 fw-bold form-label mb-2">Data de validade </label>

                                    <div class="row fv-row">
                                        <div class="col-6">
                                            <select name="card_expiry_month" class="form-select form-select-solid" v-model="mes"
                                                data-control="select2" data-hide-search="true">
                                                <option value="00" disabled selected hidden>Mês</option>
                                                <option value="01">1</option>
                                                <option value="02">2</option>
                                                <option value="03">3</option>
                                                <option value="04">4</option>
                                                <option value="05">5</option>
                                                <option value="06">6</option>
                                                <option value="07">7</option>
                                                <option value="08">8</option>
                                                <option value="09">9</option>
                                                <option value="10">10</option>
                                                <option value="11">11</option>
                                                <option value="12">12</option>
                                            </select>
                                        </div>
                                        <div class="col-6">
                                            <select name="card_expiry_year" class="form-select form-select-solid" v-model="ano"
                                                data-control="select2" data-hide-search="true" >
                                                <option value="00" disabled selected hidden>Ano</option>
                                                <option value="21">2021</option>
                                                <option value="22">2022</option>
                                                <option value="23">2023</option>
                                                <option value="24">2024</option>
                                                <option value="25">2025</option>
                                                <option value="26">2026</option>
                                                <option value="27">2027</option>
                                                <option value="28">2028</option>
                                                <option value="29">2029</option>
                                                <option value="30">2030</option>
                                                <option value="31">2031</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>

                                
                                <div class="col-md-4 fv-row">

                                    <label class="d-flex align-items-center fs-6 fw-bold form-label mb-2">
                                        <span class="required">CVV</span>
                                        <i class="fas fa-exclamation-circle ms-2 fs-7" data-bs-toggle="tooltip"
                                            title="Enter a card CVV code"></i>
                                    </label>

                                    <div class="position-relative">
                                        <input type="number" class="form-control form-control-solid" required minlength="3" maxlength="4" v-mask="'####'"
                                            placeholder="CVV" name="card_cvv" v-model="cart_cvv"  />

                                        <div class="position-absolute translate-middle-y top-50 end-0 me-3">
                                            <span class="svg-icon svg-icon-2hx">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                    viewBox="0 0 24 24" fill="none">
                                                    <path d="M22 7H2V11H22V7Z" fill="black" />
                                                    <path opacity="0.3"
                                                        d="M21 19H3C2.4 19 2 18.6 2 18V6C2 5.4 2.4 5 3 5H21C21.6 5 22 5.4 22 6V18C22 18.6 21.6 19 21 19ZM14 14C14 13.4 13.6 13 13 13H5C4.4 13 4 13.4 4 14C4 14.6 4.4 15 5 15H13C13.6 15 14 14.6 14 14ZM16 15.5C16 16.3 16.7 17 17.5 17H18.5C19.3 17 20 16.3 20 15.5C20 14.7 19.3 14 18.5 14H17.5C16.7 14 16 14.7 16 15.5Z"
                                                        fill="black" />
                                                </svg>
                                            </span>
                                        </div>
                                    </div>
                                </div>
 

                                <div class="row fv-row pt-20">
                                    <div class="col-6">
                                        <div class="form-check form-switch form-check-custom form-check-solid">

                                            <label class="form-check-label col-lg-10 col-form-label fw-bold fs-6"
                                                for="flexSwitchDefault">
                                                Tem um código promocional
                                            </label>
                                            <input @click="jms = !jms" class="form-check-input" type="checkbox" value=""
                                                id="flexSwitchDefault" />
                                        </div>
                                    </div>

                                    <div class="col-6">
                                        <div class="row mb-6" v-if="jms">
                                            <div class="col-lg-12 fv-row pb-3">
                                                <label class="col-lg-10 col-form-label fw-bold fs-6">Cupom</label>
                                                <input type="text" name="cupom" v-model="cupon"  @blur="setaCupon($event)"
                                                    class="form-control form-control-lg form-control-solid"
                                                    placeholder="?" />
                                            </div>

                                            <a @click="verCupoms($event)" class="btn btn-success btn-hover-rotate-end">Validar Cupom</a>
                                          
                                            <div class="pt-3">
                                            <div class="alert alert-dismissible bg-danger d-flex flex-column flex-sm-row w-100 p-5 mb-10"  v-if="showCupon === '0'">												
                                            <span class="svg-icon svg-icon-2hx svg-icon-light me-4 mb-5 mb-sm-0">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                    <path opacity="0.3" d="M2 4V16C2 16.6 2.4 17 3 17H13L16.6 20.6C17.1 21.1 18 20.8 18 20V17H21C21.6 17 22 16.6 22 16V4C22 3.4 21.6 3 21 3H3C2.4 3 2 3.4 2 4Z" fill="black"></path>
                                                    <path d="M18 9H6C5.4 9 5 8.6 5 8C5 7.4 5.4 7 6 7H18C18.6 7 19 7.4 19 8C19 8.6 18.6 9 18 9ZM16 12C16 11.4 15.6 11 15 11H6C5.4 11 5 11.4 5 12C5 12.6 5.4 13 6 13H15C15.6 13 16 12.6 16 12Z" fill="black"></path>
                                                </svg>
                                            </span>
                                            <div class="d-flex flex-column text-light pe-0 pe-sm-10">
                                                <h4 class="mb-2 text-light">{{smsCupon}}</h4>
                                            </div>    
                                        </div>


                                        <div class="alert alert-dismissible bg-success d-flex flex-column flex-sm-row w-100 p-5 mb-10"  v-if="showCupon === '1'">
                                         
                                            <span class="svg-icon svg-icon-2hx svg-icon-light me-4 mb-5 mb-sm-0">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                    <path opacity="0.3" d="M21.4 8.35303L19.241 10.511L13.485 4.755L15.643 2.59595C16.0248 2.21423 16.5426 1.99988 17.0825 1.99988C17.6224 1.99988 18.1402 2.21423 18.522 2.59595L21.4 5.474C21.7817 5.85581 21.9962 6.37355 21.9962 6.91345C21.9962 7.45335 21.7817 7.97122 21.4 8.35303ZM3.68699 21.932L9.88699 19.865L4.13099 14.109L2.06399 20.309C1.98815 20.5354 1.97703 20.7787 2.03189 21.0111C2.08674 21.2436 2.2054 21.4561 2.37449 21.6248C2.54359 21.7934 2.75641 21.9115 2.989 21.9658C3.22158 22.0201 3.4647 22.0084 3.69099 21.932H3.68699Z" fill="black"></path>
                                                    <path d="M5.574 21.3L3.692 21.928C3.46591 22.0032 3.22334 22.0141 2.99144 21.9594C2.75954 21.9046 2.54744 21.7864 2.3789 21.6179C2.21036 21.4495 2.09202 21.2375 2.03711 21.0056C1.9822 20.7737 1.99289 20.5312 2.06799 20.3051L2.696 18.422L5.574 21.3ZM4.13499 14.105L9.891 19.861L19.245 10.507L13.489 4.75098L4.13499 14.105Z" fill="black"></path>
                                                </svg>
                                            </span> 
                                            <div class="d-flex flex-column text-light pe-0 pe-sm-10">
                                                <h4 class="mb-2 text-light">{{smsCupon}}</h4>
                                        </div> 
                                        
                                        </div>

                                        </div>
                                   
                                        </div>
                                    </div>
                                    
                                </div>
 





     







                            </div>


                        </div>
                    </div>
                    
                    <div class="d-flex flex-stack pt-15">
                        <div class="mr-2">
                            <a href="#/checkout_endereco" type="button" class="btn btn-lg btn-light-primary me-3">
                                <span class="svg-icon svg-icon-4 me-1">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                        fill="none">
                                        <rect opacity="0.5" x="6" y="11" width="13" height="2" rx="1" fill="black" />
                                        <path
                                            d="M8.56569 11.4343L12.75 7.25C13.1642 6.83579 13.1642 6.16421 12.75 5.75C12.3358 5.33579 11.6642 5.33579 11.25 5.75L5.70711 11.2929C5.31658 11.6834 5.31658 12.3166 5.70711 12.7071L11.25 18.25C11.6642 18.6642 12.3358 18.6642 12.75 18.25C13.1642 17.8358 13.1642 17.1642 12.75 16.75L8.56569 12.5657C8.25327 12.2533 8.25327 11.7467 8.56569 11.4343Z"
                                            fill="black" />
                                    </svg>
                                </span>
                                Anterior</a>
                        </div>
                        <div v-show="invision ==='visivel'">
                            <button type="submit" class="btn btn-lg btn-primary">
                                <span class="indicator-label">Fazer Assinatura {{amount}}
                                    <span class="svg-icon svg-icon-4 ms-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                            viewBox="0 0 24 24" fill="none">
                                            <rect opacity="0.5" x="18" y="13" width="13" height="2" rx="1"
                                                transform="rotate(-180 18 13)" fill="black" />
                                            <path
                                                d="M15.4343 12.5657L11.25 16.75C10.8358 17.1642 10.8358 17.8358 11.25 18.25C11.6642 18.6642 12.3358 18.6642 12.75 18.25L18.2929 12.7071C18.6834 12.3166 18.6834 11.6834 18.2929 11.2929L12.75 5.75C12.3358 5.33579 11.6642 5.33579 11.25 5.75C10.8358 6.16421 10.8358 6.83579 11.25 7.25L15.4343 11.4343C15.7467 11.7467 15.7467 12.2533 15.4343 12.5657Z"
                                                fill="black" />
                                        </svg>
                                    </span>
                                </span>
                                <span class="indicator-progress">Aguarda...
                                    <span class="spinner-border spinner-border-sm align-middle ms-2"></span></span>
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
        <div class="d-flex flex-center flex-wrap fs-6 p-5 pb-0">

            <div class="d-flex flex-center fw-bold fs-6">
                <a href="https://doardigital.com.br" class="text-muted text-hover-primary px-2"
                    target="_blank">Sobre</a>
                <a href="https://crm.digitalcombo.com.br/index.php/about/suporte"
                    class="text-muted text-hover-primary px-2" target="_blank">Suporte</a>
                <a href="https://doardigital.com.br" class="text-muted text-hover-primary px-2" target="_blank">Termos &
                    Condições</a>
            </div>
        </div>
    </div>
</div>

`,


    data: function () {
        return {
            token: null,
            plano_token: "",
            amount: "",
            cart_nome: null,
            cart_numero: null,
            cart_cvv: null,
            mes: "00",
            ano: "00",
            cart_validade: null,
            zap: null,
            inst: null,
            cupon: null,
            validarCupon: null,
            dados: [],
            planoInst: [],
            planoZap: [],
            search: null,
            jms: false,
            smsCupon: null,
            showCupon: null,
            invision: "visivel"



        }
    },

    computed: {

        filtraPlanos() {
            let valores

            valores = this.dados.filter((filtrar) => {
                if (this.inst === null) {
                    return filtrar;
                }
                return filtrar.instituicao_max === this.inst;
            })

            valores = valores.filter((filtrar) => {
                if (this.zap === null) {
                    return filtrar;
                }

                return filtrar.quant_disparos === this.zap;
            })

            return valores

        },




    },

    methods: {

        setarPlano(event) {
            const novoaray = this.dados.filter((valorAtual) => {

                return valorAtual.instituicao_max.includes(this.inst) && valorAtual.quant_disparos.includes(this.zap)

            })

            try {
                console.log(novoaray[0].amount)
                console.log(novoaray[0].token)
                console.log(novoaray[0].instituicao_max)
                console.log(novoaray[0].quant_disparos)
                console.log("cupon" + novoaray[0].codigo_cupom)
                console.log(this.jms)

                this.invision = "visivel"
                this.amount = novoaray[0].amount
                this.plano_token = novoaray[0].token
                this.validarCupon = novoaray[1].codigo_cupom


            } catch (e) {
                if (e instanceof TypeError) {

                    console.log("cupon invalido")

                }
            }




        },

      
        setaCupon(event) {
            const novoaray = this.dados.filter((valorAtual) => {

                return valorAtual.codigo_cupom.includes(this.cupon)

            })

            try { 
                console.log("cupon" + novoaray[1].codigo_cupom)
                console.log(this.jms)

                this.invision = "visivel"
                this.amount = novoaray[1].amount
                this.plano_token = novoaray[1].token 


            } catch (e) {
                if (e instanceof TypeError) {

                    console.log("cupon invalido")

                }
            }




        },
 

        verCupoms(event) {

            try {

                const vercupom = this.dados.filter((cuponAtual) => {
                    return cuponAtual.instituicao_max.includes(this.inst) && cuponAtual.quant_disparos.includes(this.zap) && cuponAtual.codigo_cupom.includes(this.cupon)
                })


             
 
                if (this.cupon === this.validarCupon) {

                    this.amount = vercupom[0].amount
                    this.plano_token = vercupom[0].token
                    this.validarCupon = vercupom[0].codigo_cupom
                    console.log("cupon valido")

                    console.log(this.validarCupon)
                    console.log(vercupom[0].amount)
                    console.log(vercupom[0].token)
                    console.log(vercupom[0].instituicao_max)
                    console.log(vercupom[0].quant_disparos)
                    console.log("cupon" + vercupom[0].codigo_cupom)
                    console.log(this.jms)

                    this.invision = "visivel"
                    this.showCupon = "1"
                    this.smsCupon = "Cupom confirmado"

                } else {
                    this.invision = "invisivel"
                    this.showCupon = "0"
                    this.smsCupon = "Este Cupon não é valido"
                    console.log("cupon invalido")
                }
            } catch (e) {
                if (e instanceof TypeError) {

                    this.invision = "invisivel"
                    this.showCupon = "0"
                    this.smsCupon = "Este Cupon não é valido"
                    console.log("cupon invalido")

                } else {
                    this.invision = "invisivel"
                    this.showCupon = "0"
                    this.smsCupon = "Este Cupon não é valido"
                    console.log("cupon invalido")
                }
            }


        },

        async transacaoRecorrencia() {
            this.error = null
            let res = await adm.recorrenciaDigital(
                this.token,
                this.plano_token,
                this.amount,
                this.cart_nome,
                this.cart_numero,
                this.cart_cvv,
                this.cart_validade =  "08/23"

            )
            if (!res.next) {
                // this.error = res.message = parseInt(this.mes) + parseInt(this.ano)
                this.msg = res.message
                return null
            }

            window.location.href = "/painel-geral/index.html#/";
        },

        async listar() {
            let res = await adm.listarPlanoDigital(localStorage.getItem('token'))
            return res
        },

        descartavel() {
            window.location.href = "/painel-geral/index.html#/perfil-editar";
        }

    },

    async mounted() {

       // this.cart_validade = this.mes+'/'+this.ano,
        
        this.dados = (await this.listar()).dados
        console.log(this.dados)

        const unicoInt = new Map();
        this.dados.forEach((element) => {
            if (!unicoInt.has(element.instituicao_max)) {
                unicoInt.set(element.instituicao_max, element)


            }
        });

        const unicoZap = new Map();
        this.dados.forEach((element) => {
            if (!unicoZap.has(element.quant_disparos)) {
                unicoZap.set(element.quant_disparos, element)

            }
        });

        this.planoInst = [...unicoInt.keys()]
        this.planoZap = [...unicoZap.keys()]


    },

}