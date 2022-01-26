import adm from "../../../../static/js/api/adm.js"
const { required, minLength, maxLength } = window.validators

export default {
    template: `  loa

<div :style="{ backgroundColor: backgroundColor }">
    <div class="d-flex flex-column flex-root">
        <div class="content d-flex flex-column flex-column-fluid" id="kt_content">
            <div class="post d-flex flex-column-fluid" id="kt_post">
                <div id="kt_content_container" class="container-xxl">

                    <div class="text-center mb-20 mb-xl-5">
                        <img class="rounded" style="width: 150px;" v-bind:src="logo">

                    </div>

                    <div class="card mb-5 mb-xl-10">

                        <div class="card-body">
                            <form @submit.prevent="addTransacao" autocomplete="off" name="formulario" class="form">

                                <div class="row g-5 g-xl-8">
                                    <div class="col-xl-6">
                                    
                                        <div class="card-title mb-10">
                                            <h2>DIGITE SUAS INFORMAÇÕES</h2>
                                        </div>
                                        <div>

                                            <div class="mb-7">
                                                <label for="exampleFormControlInput1"
                                                    class="required form-label">Nome</label>
                                                <input v-model="nome" type="text" required
                                                    class="form-control form-control-solid" placeholder="Nome" />
                                            </div>
                                            <div class="mb-7">
                                                <label for="exampleFormControlInput1"
                                                    class="required form-label">Género</label>
                                                <select class="form-select form-select-solid" required
                                                    aria-label="Select example">
                                                    <option v-model="genero">Masculino</option>
                                                    <option v-model="genero">Feminino</option>
                                                </select>
                                            </div>
  
                                            <div class="mb-7">
                                                <label for="exampleFormControlInput1"
                                                    class="required form-label">CPF</label>
                                                <input v-model="cpf" type="text" v-mask="'###.###.###-##'"
                                                    placeholder="000.000.000-00" 
                                                    class="form-control form-control-solid" required />
                                            </div>

                                            <div class="mb-7">
                                                <label for="exampleFormControlInput1"
                                                    class="required form-label">E-mail</label>
                                                <input v-model="email" type="email"
                                                    class="form-control form-control-solid" required placeholder="Email" />
                                            </div>
                                            <div class="mb-10">
                                                <label for="exampleFormControlInput1"
                                                    class="required form-label">Telefone</label>
                                                <input v-model.trin="$v.telefone.$model" type="text" v-mask="'(##) # ####-####'" placeholder="(00) 0 0000-0000"
                                                    class="form-control form-control-solid" required />
                                                <div class="erros" v-if="$v.telefone.$error">
                                                                                                <div class="erro_texte" v-if="!$v.telefone.required">O Telefone
                                                                                                    é necessária</div>
                                                                                                <div class="erro_texte" v-if="!$v.telefone.minLength">
                                                                                                Telefone tem de ter no minimo 10 número.</div>
                                                                                            
                                                                                            </div>
                                                </div>
                                               
                                        </div>
                                        <div class="card-title mb-10">
                                            <h2>INFORME SEU INDEREÇO</h2>
                                        </div>
                                        <div>
                                            <div class="row g-5">
                                                <div class="col-6">

                                                    <div class="mb-1">
                                                        <label for="exampleFormControlInput1"
                                                            class="required form-label">CEP</label>
                                                        <input v-model.trin="$v.cep.$model" type="text" @blur="searchCep"
                                                            @input="mask_cep" class="form-control form-control-solid" required
                                                            v-mask="'########'" placeholder="00000-000" />
                                                    </div>
                                                    <div class="erros" v-if="$v.cep.$error">
													<div class="erro_texte" v-if="!$v.cep.required">O CEP
														é necessária</div>
													<div class="erro_texte" v-if="!$v.cep.minLength">
														O CEP São 8 numeros.</div>
												</div>

												<div class="sucesso_texte" v-else>

												</div>

                                                </div>
                                                <div class="col-6">
                                                    <div class="mb-1">
                                                        <label for="exampleFormControlInput1"
                                                            class="required form-label">Endereço</label>
                                                        <input v-model="endereco" type="text"
                                                            class="form-control form-control-solid" required
                                                            placeholder="Endereço" />
                                                    </div>

                                                </div>
                                                <div class="col-6">
                                                    <div class="mb-1">
                                                        <label for="exampleFormControlInput1"
                                                            class="required form-label">Número </label>
                                                        <input v-model="numero" type="text"
                                                            class="form-control form-control-solid" required
                                                            placeholder="Numero" />
                                                    </div>
                                                </div>
                                                <div class="col-6">
                                                    <div class="mb-1">
                                                        <label for="exampleFormControlInput1"
                                                            class="required form-label">Bairro</label>
                                                        <input v-model="bairro" type="text"
                                                            class="form-control form-control-solid" required
                                                            placeholder="Bairro" />
                                                    </div>
                                                </div>

                                                <div class="col-6">
                                                    <div class="mb-1">
                                                        <label for="exampleFormControlInput1"
                                                            class="required form-label">Estado</label>
                                                        <input v-model="estado" type="text" required
                                                            class="form-control form-control-solid" 
                                                            placeholder="Estado" />
                                                    </div>
                                                </div>
                                                <div class="col-6">
                                                    <div class="mb-1">
                                                        <label for="exampleFormControlInput1"
                                                            class="required form-label">Cidade</label>
                                                        <input v-model="cidade" type="text" required
                                                            class="form-control form-control-solid"
                                                            placeholder="Cidade" />
                                                    </div>
                                                </div>

                                            </div>
                                        </div>

                                    </div>
                                    <div class="col-xl-6">
                                        <div class="card-title mb-10"  v-if="type_pagamento !=='pix'">
                                            <h1> TOTAL A DOAR: R$ {{ planos_valor == 0 ? valor_digitado : planos_valor
                                                |money }} {{ mensal == '1' ? 'Por mês' : ''}} </h1>
                                        </div>

                                        <div class="card-title mb-10"  v-if="type_pagamento =='pix'">
                                      
                                        <div v-if="planos_valor > '100000'">
                                        <h1> TOTAL A DOAR: R$ {{ planos_valor == 0 ? valor_digitado : planos_valor
                                            |money }} {{ mensal == '1' ? 'Por mês' : ''}} </h1>
                                         </div>
                                         <div v-else>
                                          <h1> O pagamento maximo vai ser R$ 1.000.00 </h1>
                                        </div>
                                    </div>

                                        <P>
                                            Todas as transações são segura e criptografadas. As informações do
                                            cartão de credito nunca são armazenado em nossos servidores.
                                        </P>
                                        <div class="card card-dashed h-xl-0  flex-stack flex-wrap ">

                                            <div class="row">
                                                <div class="btn-group">

                                                    <div class="col-xl-4">
                                                        <input type="radio" class="btn-check"
                                                            @click="type_pagamento = 'credit_card'; consultar();" name="radio_buttons_2"
                                                            value="1" checked="checked"
                                                            id="kt_radio_buttons_2_option_1" />
                                                        <label
                                                            class="btn btn-outline btn-outline-dashed btn-outline-default d-flex align-items-center mb-5"
                                                            for="kt_radio_buttons_2_option_1">
                                                            <span class="d-block fw-bold text-start text-center">
                                                                <svg xmlns="http://www.w3.org/2000/svg" width="60"
                                                                    height="60" fill="currentColor"
                                                                    class="bi bi-credit-card-2-front-fill"
                                                                    viewBox="0 0 16 16">
                                                                    <path
                                                                        d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm2.5 1a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h2a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-2zm0 3a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1h-5zm0 2a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1h-1zm3 0a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1h-1zm3 0a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1h-1zm3 0a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1h-1z" />
                                                                </svg>
                                                                <p classe="mt-3">CARTÃO</p>
                                                            </span>
                                                        </label>
                                                    </div>
                                                    <div class="col-xl-4">
                                                        <input type="radio" class="btn-check"
                                                            @click="type_pagamento = 'boleto'; consultar();" name="radio_buttons_2"
                                                            value="2" id="kt_radio_buttons_2_option_2" />
                                                        <label
                                                            class="btn btn-outline btn-outline-dashed btn-outline-default d-flex align-items-center mb-5"
                                                            for="kt_radio_buttons_2_option_2">
                                                            <span class="d-block fw-bold text-start text-center">
                                                                <svg xmlns="http://www.w3.org/2000/svg" width="60"
                                                                    height="60" fill="currentColor"
                                                                    class="bi bi-upc-scan" viewBox="0 0 16 16">
                                                                    <path
                                                                        d="M1.5 1a.5.5 0 0 0-.5.5v3a.5.5 0 0 1-1 0v-3A1.5 1.5 0 0 1 1.5 0h3a.5.5 0 0 1 0 1h-3zM11 .5a.5.5 0 0 1 .5-.5h3A1.5 1.5 0 0 1 16 1.5v3a.5.5 0 0 1-1 0v-3a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 1-.5-.5zM.5 11a.5.5 0 0 1 .5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 1 0 1h-3A1.5 1.5 0 0 1 0 14.5v-3a.5.5 0 0 1 .5-.5zm15 0a.5.5 0 0 1 .5.5v3a1.5 1.5 0 0 1-1.5 1.5h-3a.5.5 0 0 1 0-1h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 1 .5-.5zM3 4.5a.5.5 0 0 1 1 0v7a.5.5 0 0 1-1 0v-7zm2 0a.5.5 0 0 1 1 0v7a.5.5 0 0 1-1 0v-7zm2 0a.5.5 0 0 1 1 0v7a.5.5 0 0 1-1 0v-7zm2 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-7zm3 0a.5.5 0 0 1 1 0v7a.5.5 0 0 1-1 0v-7z" />
                                                                </svg>
                                                                <p classe="mt-3">BOLETO </p>
                                                            </span>
                                                        </label>
                                                    </div>

                                                    <div class="col-xl-4" v-if="mensal ==='0'">
                                                        <input type="radio" class="btn-check"
                                                            @click="type_pagamento = 'pix'; consultar();" name="radio_buttons_2"
                                                            value="3" id="kt_radio_buttons_3_option_3" />
                                                        <label
                                                            class="btn btn-outline btn-outline-dashed btn-outline-default d-flex align-items-center mb-5"
                                                            for="kt_radio_buttons_3_option_3">
                                                            <span class="d-block fw-bold text-start text-center">

                                                                <svg xmlns="http://www.w3.org/2000/svg" width="60"
                                                                    height="60" fill="currentColor"
                                                                    class="bi bi-qr-code-scan" viewBox="0 0 16 16 ">
                                                                    <path
                                                                        d="M0 .5A.5.5 0 0 1 .5 0h3a.5.5 0 0 1 0 1H1v2.5a.5.5 0 0 1-1 0v-3Zm12 0a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0V1h-2.5a.5.5 0 0 1-.5-.5ZM.5 12a.5.5 0 0 1 .5.5V15h2.5a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5v-3a.5.5 0 0 1 .5-.5Zm15 0a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1 0-1H15v-2.5a.5.5 0 0 1 .5-.5ZM4 4h1v1H4V4Z" />
                                                                    <path
                                                                        d="M7 2H2v5h5V2ZM3 3h3v3H3V3Zm2 8H4v1h1v-1Z" />
                                                                    <path
                                                                        d="M7 9H2v5h5V9Zm-4 1h3v3H3v-3Zm8-6h1v1h-1V4Z" />
                                                                    <path
                                                                        d="M9 2h5v5H9V2Zm1 1v3h3V3h-3ZM8 8v2h1v1H8v1h2v-2h1v2h1v-1h2v-1h-3V8H8Zm2 2H9V9h1v1Zm4 2h-1v1h-2v1h3v-2Zm-4 2v-1H8v1h2Z" />
                                                                    <path d="M12 9h2V8h-2v1Z" />
                                                                </svg>
                                                                <p classe="mt-3">PIX</p>
                                                            </span>
                                                        </label>
                                                    </div>

                                                    <div class="col-xl-4" v-else>
                                                        <label class="btn btn-outline-default ">
                                                            <span class="d-block fw-bold text-start ">
                                                                <svg xmlns="http://www.w3.org/2000/svg" width="60"
                                                                    height="60" fill="currentColor"
                                                                    viewBox="0 0 16 16 ">
                                                                </svg>
                                                            </span>
                                                        </label>
                                                    </div>


                                                </div>
                                            </div>

                                                 
                                        <div class="erro-container">
                                        {{txto_pix}}
                                        <br>
                                        {{txto_pix2}}
                                        </div>

                                            <div v-if="type_pagamento =='credit_card'" style="width: 100%;">
                                                <div class="p-1">
                                                    <!-- comeco do credit_card -->
                                                    <div style="text-align:center;">
                                                        <svg style="width: 60%; margin: 0 auto; "
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
                                                                <tspan style="-inkscape-font-specification:monospace"
                                                                    x="12.994" y="51.352" font-family="monospace">
                                                                    {{ cart_numero|| '0000 0000 0000 0000'}}
                                                                </tspan>
                                                            </text>
                                                            <text
                                                                style="line-height:1.25;-inkscape-font-specification:'Segoe UI'"
                                                                x="13.547" y="79.959" font-weight="400"
                                                                font-size="5.859" font-family="Segoe UI"
                                                                letter-spacing="0" word-spacing="0" fill="#f9f9f9"
                                                                stroke-width="1.099">
                                                                <tspan style="-inkscape-font-specification:monospace"
                                                                    x="13.547" y="79.959" font-family="monospace">
                                                                    {{ cart_nome|| 'NOME COMPLETO'}}</tspan>
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
                                                                <tspan style="-inkscape-font-specification:monospace"
                                                                    x="14.542" y="61.097" font-family="monospace">
                                                                    VALIDADE</tspan>
                                                            </text>
                                                            <text
                                                                style="line-height:1.25;-inkscape-font-specification:'Segoe UI'"
                                                                x="14.101" y="67.018" font-weight="400"
                                                                font-size="5.859" font-family="Segoe UI"
                                                                letter-spacing="0" word-spacing="0" fill="#f9f9f9"
                                                                stroke-width="1.099">
                                                                <tspan style="-inkscape-font-specification:monospace"
                                                                    x="14.101" y="67.018" font-family="monospace">
                                                                    {{ cart_validade|| '02/2027'}}</tspan>
                                                            </text>
                                                            <text
                                                                style="line-height:1.25;-inkscape-font-specification:'Segoe UI'"
                                                                x="124.871" y="61.097" font-weight="400"
                                                                font-size="3.316" font-family="Segoe UI"
                                                                letter-spacing="0" word-spacing="0" fill="#f9f9f9"
                                                                stroke-width=".622">
                                                                <tspan style="-inkscape-font-specification:monospace"
                                                                    x="124.871" y="61.097" font-family="monospace">
                                                                    CVV</tspan>
                                                            </text>
                                                            <text
                                                                style="line-height:1.25;-inkscape-font-specification:'Segoe UI'"
                                                                x="120.401" y="67.018" font-weight="400"
                                                                font-size="5.859" font-family="Segoe UI"
                                                                letter-spacing="0" word-spacing="0" fill="#f9f9f9"
                                                                stroke-width="1.099">
                                                                <tspan style="-inkscape-font-specification:monospace"
                                                                    x="120.401" y="67.018" font-family="monospace">
                                                                    {{ cart_cvv|| '1234'}}</tspan>
                                                            </text>
                                                        </svg>

                                                    </div>
                                                    <!-- fim do credit_card -->

                                                    <div class="card-body border-top p-9">
                                                        <div class="row mb-4">
                                                            <div class="col-lg-12 fv-row">
                                                                <label
                                                                    class="col-lg-10 col-form-label required fw-bold fs-6">Número
                                                                    cartão</label>
                                                                <input v-model="cart_numero" type="text" name="credit_card"
                                                                    v-mask="'#### #### #### ####'"
                                                                    placeholder="0000 0000 0000 0000" required
                                                                    class="form-control form-control-lg form-control-solid" />
                                                            </div>
                                                        </div>
                                                        <div class="row mb-4">
                                                            <div class="col-lg-12">
                                                                <div class="row">
                                                                    <div class="col-lg-6 fv-row">
                                                                        <label
                                                                            class="col-lg-12 col-form-label required fw-bold fs-6">Validade</label>
                                                                        <input v-model="cart_validade" type="text"
                                                                            name="validar"
                                                                            class="form-control form-control-lg form-control-solid mb-3 mb-lg-0"
                                                                            v-mask="'##/##'" placeholder="MM/YY"
                                                                            required />
                                                                    </div>
                                                                    <div class="col-lg-6 fv-row">
                                                                        <label
                                                                            class="col-lg-12 col-form-label required fw-bold fs-6">CVV</label>
                                                                        <input v-model="cart_cvv" type="text" name="cvv"
                                                                            v-mask="'###'" placeholder="123" required
                                                                            class="form-control form-control-lg form-control-solid" />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="row mb-5">
                                                            <div class="col-lg-12 fv-row">
                                                                <label
                                                                    class="col-lg-10 col-form-label required fw-bold fs-6">Nome
                                                                    Completo</label>
                                                                <input v-model="cart_nome" type="text" name="nascimento"
                                                                    class="form-control form-control-lg form-control-solid"
                                                                    placeholder="Nome Completo" required />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <c-mensagem :msg="msg" v-show="msg"></c-mensagem>
                                            <c-mensagem :error="error" ></c-mensagem>

                                            <div style="width: 100%;">
                                                <div class="p-9">
                                                    <div class="card-footer d-flex justify-content-end py-6 px-9">
                                                        <button style="width: 100%;" type="submit"
                                                            class="btn btn-success p-5" :disabled="submitStatus === 'PENDING'" >
                                                            DOAR AGORA!
                                                        </button>
                                                    </div>
                                                    <div class=" d-flex justify-content-end py-2 px-9">
                                                    <p class="typo__p" v-if="submitStatus === 'OK'"> 
                                                    </p>
                                                    <p class="typo__p" v-if="submitStatus === 'ERROR'">
                                                    Por favor, preencha o formulário corretamente.</p>
                                                    <p class="typo__p" v-if="submitStatus === 'PENDING'">
                                                    </p>
                                                   
                                                    <p class="typo__p" v-if="submitStatus === 'CARREGAR'">
                                                    <c-loading></c-loading> 
                                                    </p>
                                                  
                                                 <p class="typo__p" v-if="submitStatus === 'FALHA500'">
                                                    <c-erro_500></c-erro_500> 
                                                    </p>  

                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="post d-flex flex-column-fluid">
        <div class="container-xxl">
            <div class="card mb-5 mb-xl-10">

                <div class="d-flex justify-content-center align-items-center text-center py-6 px-9">
                    <div class="col-xl-5">
                        <h5 class="mb-9">
                            Os seus dados pessoais serão utilizados para processar a sua compra,
                            apoiar a sua experiência em todo este site e para outros
                            fins descritos na nossa
                            <a href="/cadastro/index.html#/termos" target="_blank">
                                política de privacidade.
                            </a>
                        </h5>

                        <img style="width: 80%;" src="../doacao/assets/image/bandeiras.png" class="bandeiras">

                    </div>
                </div>
            </div>
        </div>
    </div>



    <div class="footer py-4 d-flex flex-lg-column a-footer">
        <div class="container-fluid d-flex flex-column flex-md-row align-items-center justify-content-between">
            <div class="text-dark order-2 order-md-1"><span class="text-muted fw-bold me-1">2022©</span> <a
                    href="https://keenthemes.com" target="_blank" class="text-gray-800 text-hover-primary">- 
                    Doar Digital
                    </a></div>
        </div>
    </div>

</div>

`,


    data: function () {
        return {
            logo: '',
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
            type_pagamento: "credit_card",
            cart_numero: null,
            cart_cvv: null,
            cart_validade: null,
            cart_nome: null,

            valor_digitado: null,
            valor: null,

            backgroundColor: '',
            msg: "",
            error: null,
            subdomaim: null,
            codigo_geral: null,
            submitStatus: null,
            dados: [],
            txto_pix: "",
            txto_pix2: ""
        }
    },





    filters: {
        money: val => {
            val = `${val}`
            val = val?.replace('\.', '')
            val = val?.replace(/\D/gi, '')
            val = val ? val : 0
            val = `${parseInt(val)}` ?? '0'
            switch (val.length) {
                case 0:
                    val = '00,00'
                    break;
                case 1:
                    val = val.replace(/(\d{1})/gi, '00,0$1')
                    break;
                case 2:
                    val = val.replace(/(\d{2})/gi, '00,$1')
                    break;
                case 3:
                    val = val.replace(/(\d{1})(\d{2})/gi, '0$1,$2')
                    break;
                case 4:
                    val = val.replace(/(\d{2})(\d{2})/gi, '$1,$2')
                    break;
                case 5:
                    val = val.replace(/(\d{3})(\d{2})/gi, '$1,$2')
                    break;
                case 6:
                    val = val.replace(/(\d{1})(\d{3})(\d{2})/gi, '$1.$2,$3')
                    break;
                default:
                    val = val.replace(/(\d{1})(\d{3})(\d{2})(.*)/gi, '$1.$2,$3')
                    break;
            }
            return val
        }
    },


    validations: {
        cep: {
            required,
            minLength: minLength(9)
        },
        telefone: {
            required,
            minLength: minLength(15)
        },


    },

    methods: {


        consultar() {
            if (this.type_pagamento == "pix") {
                this.txto_pix = "Obs : O valor do PIX entre as 20:00h e 6:00h (noturno)"
                this.txto_pix2 = "será máximo de R$ 1.000,00 reais."

                if (this.planos_valor >= 100000) {
                    // this.planos_valor = "100000"
                } else {
                    this.planos_valor = window.localStorage.getItem("amount")
                }
            } else {
                this.planos_valor = window.localStorage.getItem("amount")
                this.txto_pix = ""
                this.txto_pix2 = ""
            }



        },


        async addTransacao() {
            try {
                this.error = null
                this.$v.$touch()
                if (this.$v.$invalid) {
                    this.submitStatus = 'ERROR'
                } else {
                    this.submitStatus = 'CARREGAR'
                    let res = await adm.transacaoPlano(
                        this.instituicao_id,
                        this.mensal,
                        this.planos_id,
                        this.planos_valor,
                        this.planos_nome,
                        this.email,
                        this.nome,
                        this.genero,
                        this.cpf,
                        this.telefone,
                        this.cep,
                        this.numero,
                        this.estado,
                        this.endereco,
                        this.bairro,
                        this.cidade,
                        this.type_pagamento,
                        this.cart_numero,
                        this.cart_cvv,
                        this.cart_validade,
                        this.cart_nome,
                        window.localStorage.setItem("type_pagamento", this.type_pagamento)

                    )
                    if (!res.next) {
                        this.error = res.message
                        this.submitStatus = 'FALHA'
                        return null
                    }

                    this.submitStatus = 'OK'
                    this.msg = res.message
                    window.localStorage.setItem("codigo", res.codigo)
                    window.localStorage.setItem("url", res.url)
                    window.location.href = "#/obrigado"
                }
            }
            catch (e) {
                setTimeout(() => {
                    this.submitStatus = 'FALHA500'
                }, 1500)

            }

        },

        async infoSubdomain() {
            let res = await adm.todoSubdomain(this.subdomaim = "34edqwe21")
            // let res = await adm.todoSubdomain(this.subdomaim = window.localStorage.getItem("instituicao_subdomaim"))
            return res
        },

        searchCep() {
            let cep = this.cep
            cep = cep.replace(/\D/gi, '')
            if (cep.length == 8) {
                axios.get(`https://viacep.com.br/ws/${cep}/json/`)
                    .then(response => {
                        this.error = ""
                        this.endereco = response.data.logradouro,
                            this.bairro = response.data.bairro,
                            this.cidade = response.data.localidade,
                            this.estado = response.data.uf

                        if (response.data.erro) {
                            this.error = "Número do CEP inválido pretendes Preecher manualmente ?? "
                        }
                    }
                    )
                    .catch(error =>
                        error
                    )
            }
        },

        mask_cep() {
            let mascara = this.cep
            mascara = mascara.replace(/\D/gi, '')
            mascara = mascara.replace(/(\d{5})(.*)/gi, '$1-$2')
            mascara = mascara.replace(/(\d{4}\s)(\d{1,3})(.*)/gi, '$1-$2')
            this.cep = mascara
        },

    },

    async mounted() {
        this.mensal = window.localStorage.getItem("mensal")
        this.planos_id = window.localStorage.getItem("planos_id")

        if (this.planos_id) {
            this.planos_valor = window.localStorage.getItem("amount")
        } else {
            this.planos_valor = window.localStorage.getItem("amount_digitado")
        }
        // this.planos_valor = (window.localStorage.getItem("amount")/100).toLocaleString('pt-br', { minimumFractionDigits: 2 })


        this.planos_nome = window.localStorage.getItem("planos_nome")
        this.email = window.localStorage.getItem("email")
        this.token = localStorage.getItem('token')
        this.instituicao_id = localStorage.getItem('instituicao_id')


        let config = (await this.infoSubdomain()).dados_instituicao
        this.logo = config.logo
        this.backgroundColor = config.cor

    },

}