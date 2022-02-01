import adm from "../../../../../static/js/api/adm.js"

export default {
    template: `
<div>
    <c-header></c-header>
    <c-aside></c-aside> 
    <div class="d-flex flex-column flex-root"> 
        <div class="page d-flex flex-row flex-column-fluid"> 
            <div class="wrapper d-flex flex-column flex-row-fluid" id="kt_wrapper"> 
                <div class="content d-flex flex-column flex-column-fluid" id="kt_content"> 
                    <div class="post d-flex flex-column-fluid" id="kt_post"> 
                        <div id="kt_content_container" class="container-xxl"> 
                            <div class="card"> 
                                <div class="card-header border-0 pt-6"> 
                                    <div class="card-title"> 
                                        
                                    </div> 
                                    <div class="card-toolbar"> 
                                        <div class="d-flex justify-content-end"
                                            data-kt-subscription-table-toolbar="base"> 
                                            <button type="button" class="btn btn-light-primary me-3" v-once
                                                data-kt-menu-trigger="click" data-kt-menu-placement="bottom-end">
                                                 <span class="svg-icon svg-icon-2">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                        viewBox="0 0 24 24" fill="none">
                                                        <path
                                                            d="M19.0759 3H4.72777C3.95892 3 3.47768 3.83148 3.86067 4.49814L8.56967 12.6949C9.17923 13.7559 9.5 14.9582 9.5 16.1819V19.5072C9.5 20.2189 10.2223 20.7028 10.8805 20.432L13.8805 19.1977C14.2553 19.0435 14.5 18.6783 14.5 18.273V13.8372C14.5 12.8089 14.8171 11.8056 15.408 10.964L19.8943 4.57465C20.3596 3.912 19.8856 3 19.0759 3Z"
                                                            fill="black" />
                                                    </svg>
                                                </span>
                                               Filtros
                                            </button>
                                            <div class="menu menu-sub menu-sub-dropdown w-300px w-md-325px"
                                                data-kt-menu="true">
                                                <div class="px-7 py-5">
                                                    <div class="fs-5 text-dark fw-bolder">Opção de Filtros</div>
                                                </div>
                                                 <div class="separator border-gray-200"></div>
                                                 <div class="px-7 py-5" data-kt-subscription-table-filter="form">
                                                     <div class="mb-10">
                                                        <label class="form-label fs-6 fw-bold">Periodo:</label>
                                                        <select class="form-select form-select-solid fw-bolder"
                                                            data-kt-select2="true" data-placeholder="selecione a Opção"
                                                            data-allow-clear="true"
                                                            data-kt-subscription-table-filter="month"
                                                            data-hide-search="true">
                                                            <option></option>
                                                            <option value="0">Hoje</option>
                                                            <option value="1">Ontem</option>
                                                            <option value="7">Últimos 7 dias</option>
                                                            <option value="30">Últimos 30 dias</option>
                                                            <option value="365">Este Ano</option>
                                                            <option value="366">Escolher Periodo</option>
                                                        </select>
                                                    </div>
                                                     <div class="mb-10">
                                                        <label
                                                            class="d-flex align-items-center fs-6 fw-bold form-label mb-2">
                                                            <span class="required">Data Ínicio</span>
                                                            <i class="fas fa-exclamation-circle ms-2 fs-7"
                                                                data-bs-toggle="tooltip"
                                                                title="Enter a card CVV code"></i>
                                                        </label>
                                                        <div class="position-relative">
                                                            <input type="date"
                                                                class="form-control form-control-solid" />
                                                        </div>
                                                    </div>
                                                   <div class="mb-10">
                                                        <label
                                                            class="d-flex align-items-center fs-6 fw-bold form-label mb-2">
                                                            <span class="required">Data Final</span>
                                                            <i class="fas fa-exclamation-circle ms-2 fs-7"
                                                                data-bs-toggle="tooltip"
                                                                title="Enter a card CVV code"></i>
                                                        </label>
                                                        <div class="position-relative">
                                                            <input type="date"
                                                                class="form-control form-control-solid" />
                                                        </div>
                                                    </div> 
                                                    <div class="mb-10">
                                                        <label class="form-label fs-6 fw-bold">Status
                                                            Pagamento:</label>
                                                        <select class="form-select form-select-solid fw-bolder"
                                                            data-kt-select2="true" data-placeholder="selecione a Opção"
                                                            data-allow-clear="true"
                                                            data-kt-subscription-table-filter="product"
                                                            data-hide-search="true">
                                                            <option></option>
                                                            <option value="1">Todos</option>
                                                            <option value="paid">Pago</option>
                                                            <option value="waiting_payment">Pendente</option>
                                                            <option value="unpaid">Cancelado</option>
                                                        </select>
                                                    </div> 
                                                    <div class="mb-10">
                                                        <label class="form-label fs-6 fw-bold">Tipo
                                                            Pagamento</label>
                                                        <select class="form-select form-select-solid fw-bolder"
                                                            data-kt-select2="true" data-placeholder="selecione a Opção"
                                                            data-allow-clear="true"
                                                            data-kt-subscription-table-filter="product"
                                                            data-hide-search="true">
                                                            <option></option>
                                                            <option value="1">Todos</option>
                                                            <option value="cartao_credito">Cartão Credito</option>
                                                            <option value="boleto">Boleto</option>
                                                            <option value="pix">PIX</option>
                                                        </select>
                                                    </div> 
                                                    <div class="d-flex justify-content-end">
                                                        <button type="reset"
                                                            class="btn btn-light btn-active-light-primary fw-bold me-2 px-6"
                                                            data-kt-menu-dismiss="true"
                                                            data-kt-subscription-table-filter="reset">Reset</button>
                                                        <button type="submit" class="btn btn-primary fw-bold px-6"
                                                            data-kt-menu-dismiss="true"
                                                            data-kt-subscription-table-filter="filter">Aplicar</button>
                                                    </div> 
                                                </div> 
                                            </div> 
                                            <button type="button" class="btn btn-light-primary me-3"
                                                data-bs-toggle="modal" data-bs-target="#kt_subscriptions_export_modal">
                                                 <span class="svg-icon svg-icon-2">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                        viewBox="0 0 24 24" fill="none">
                                                        <rect opacity="0.3" x="12.75" y="4.25" width="12" height="2"
                                                            rx="1" transform="rotate(90 12.75 4.25)" fill="black" />
                                                        <path
                                                            d="M12.0573 6.11875L13.5203 7.87435C13.9121 8.34457 14.6232 8.37683 15.056 7.94401C15.4457 7.5543 15.4641 6.92836 15.0979 6.51643L12.4974 3.59084C12.0996 3.14332 11.4004 3.14332 11.0026 3.59084L8.40206 6.51643C8.0359 6.92836 8.0543 7.5543 8.44401 7.94401C8.87683 8.37683 9.58785 8.34458 9.9797 7.87435L11.4427 6.11875C11.6026 5.92684 11.8974 5.92684 12.0573 6.11875Z"
                                                            fill="black" />
                                                        <path
                                                            d="M18.75 8.25H17.75C17.1977 8.25 16.75 8.69772 16.75 9.25C16.75 9.80228 17.1977 10.25 17.75 10.25C18.3023 10.25 18.75 10.6977 18.75 11.25V18.25C18.75 18.8023 18.3023 19.25 17.75 19.25H5.75C5.19772 19.25 4.75 18.8023 4.75 18.25V11.25C4.75 10.6977 5.19771 10.25 5.75 10.25C6.30229 10.25 6.75 9.80228 6.75 9.25C6.75 8.69772 6.30229 8.25 5.75 8.25H4.75C3.64543 8.25 2.75 9.14543 2.75 10.25V19.25C2.75 20.3546 3.64543 21.25 4.75 21.25H18.75C19.8546 21.25 20.75 20.3546 20.75 19.25V10.25C20.75 9.14543 19.8546 8.25 18.75 8.25Z"
                                                            fill="#C4C4C4" />
                                                    </svg>
                                                </span>
                                                Exportar
                                            </button> 
                                           
                                        </div> 
                                        <div class="d-flex justify-content-end align-items-center d-none"
                                            data-kt-subscription-table-toolbar="selected">
                                            <div class="fw-bolder me-5">
                                                <span class="me-2"
                                                    data-kt-subscription-table-select="selected_count"></span>Selected
                                            </div>
                                            <button type="button" class="btn btn-danger"
                                                data-kt-subscription-table-select="delete_selected">Delete
                                                Selected</button>
                                        </div> 
                                    </div> 
                                </div> 
                                <div class="card-body pt-0"> 
                                    <div class="table-responsive">
                                        <table class="table align-middle table-row-dashed fs-6 gy-5"
                                            id="kt_subscriptions_table"> 
                                            <thead> 
                                                <tr class="text-start text-muted fw-bolder fs-7 text-uppercase gs-0">
                                                    <th class="w-10px pe-2">
                                                        <div
                                                            class="form-check form-check-sm form-check-custom form-check-solid me-3">
                                                            <input class="form-check-input" type="checkbox"
                                                                data-kt-check="true"
                                                                data-kt-check-target="#kt_subscriptions_table .form-check-input"
                                                                value="1" />
                                                        </div>
                                                    </th>



                                                    <th class="min-w-125px">Doador</th>
                                                    <th class="min-w-125px">Valor</th>
                                                    <th class="min-w-125px">Status</th>
                                                    <th class="min-w-125px">Data</th>
                                                    <th class="min-w-125px">Tipo</th>
                                                    <th class="text-end min-w-70px">Ação</th>
                                                </tr> 
                                            </thead> 
                                            <tbody class="text-gray-600 fw-bold">
                                                <tr v-for="item in dadosPagina"> 
                                                    <td>
                                                        <div
                                                            class="form-check form-check-sm form-check-custom form-check-solid">
                                                            <input class="form-check-input" type="checkbox" value="1" />
                                                        </div>
                                                    </td> 
                                                    <td class="d-flex align-items-center"> 
                                                        <div
                                                            class="symbol symbol-circle symbol-50px overflow-hidden me-3">
                                                            <a
                                                                href="../../demo8/dist/apps/user-management/users/view.html">
                                                                <div class="symbol-label">
                                                                    <img src="../painel/assets/image/gravatar.png"
                                                                        alt="Emma Smith" class="w-100" />
                                                                </div>
                                                            </a>
                                                        </div> 
                                                        <div class="d-flex flex-column">
                                                            <a class="text-gray-800 text-hover-primary mb-1">     Emma
                                                                Smith</a>
                                                            <span>e.smith@kpmg.com.au</span>
                                                        </div> 
                                                    </td> 
                                                    <td> {{ item.valor | is_price }} </td> 
                                                    <td>
                                                        <div class="badge badge-light-success"> {{item.status_pagamento  | is_status | is_status2}} </div>
                                                    </td> 
                                                    <td>{{item.data | is_data }}</td> 
                                                    <td>
                                                        <div class="badge badge-light"> {{item.tipo | is_tipo | is_tipo2 | is_tipo3}}</div>
                                                    </td> 
                                                    <td class="text-end">

                                                        <a @click="editar(item.id)" href="#/doacoesDetalhe"
                                                            class="btn btn-icon btn-active-light-primary w-35px h-35px me-3 btn-primary"
                                                            style="margin: 2px;">
                                                             <span class="svg-icon svg-icon-3">
                                                             <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye-fill" viewBox="0 0 16 16">
                                                             <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z"/>
                                                             <path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8zm8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z"/>
                                                           </svg>
                                                            </span> 
                                                        </a>

                                                    </td> 
                                                </tr>
                                              
                                            </tbody> 
                                        </table>
 

                                    <ul class="pagination"> 
                                        <li @click="getAnterior()" class="page-item previous disabled"><a class="page-link"><i class="previous"></i></a></li>
                                        <li  @click="getPagina(pagina)" v-for="pagina in totalPagina()" v-bind:class="estaActivo(pagina)" class="page-item "><a class="page-link btn">{{pagina}}</a></li>
                                        <li @click="getProximo()" class="page-item next"><a class="page-link"><i class="next"></i></a></li>
                                    </ul>

                                    </div> 
                                </div> 
                            </div> 
                        </div> 
                    </div> 
                </div> 
            </div> 
        </div> 
    </div> 

    <c-footer /> novo
</div>
`,


    data: function () {
        return {

            instituicao_id: "",
            data: "",
            doacoes: [],
            elementoPaginacao: 10,
            dadosPagina: [],
            paginaAtual: 1

        }
    },

    filters: {
        is_price(price) {
            let valor = (price / 100).toLocaleString('pt-br', { minimumFractionDigits: 2 })
            return `R$ ${valor}`
        },

        is_data(datas) {
            let data = datas.split('-').reverse().join('/');
            return `${data}`
        },

        is_status(status) {
            let status_pagamento = status.split('waiting_payment').join('Aguardando Pagamento')
           return `${status_pagamento}`
        },

        is_status2(status) {
            let status_pagamento = status.split('paid').join('Pago')
           return `${status_pagamento}`
        },
        
        is_tipo(tipo) {
            let tipo_pagamento = tipo.split('boleto').join('Boleto ')
           return `${tipo_pagamento}`
        },
        	
        is_tipo2(tipo) {
            let tipo_pagamento = tipo.split('credit_card').join('Crédito')
           return `${tipo_pagamento}`
        },

        is_tipo3(tipo) {
            let tipo_pagamento = tipo.split('pix').join('PIX ')
           return `${tipo_pagamento}`
        },
    },
    

    methods: {

        async listarDoacoes() {
            let res = await adm.listarDoacoes(
                this.instituicao_id
            )
            return res
        },

        totalPagina() {
            return Math.ceil(this.doacoes.length / this.elementoPaginacao)
        },

        getPagina(semPagina) {
            this.paginaAtual = semPagina;
            this.dadosPagina = [];
            let inicio = (semPagina * this.elementoPaginacao) - this.elementoPaginacao;
            let fim = (semPagina * this.elementoPaginacao);
            this.dadosPagina = this.doacoes.slice(inicio, fim);

        },

        getProximo() {
            if (this.paginaAtual < this.totalPagina()) {
                this.paginaAtual++
            }
            this.getPagina(this.paginaAtual)
        },

        getAnterior() {
            if (this.paginaAtual > 1) {
                this.paginaAtual--
            }
            this.getPagina(this.paginaAtual)
        },
        estaActivo(semPagina) {
            return semPagina  == this.paginaAtual ? "active": ""
                        //        ou
          //  if (semPagina == this.paginaAtual) {
           //     return "active"
         //   } else {
            //    return ""
          //  }
        }
    },
 
    async mounted() {

        this.doacoes = (await this.listarDoacoes()).dados || {}
        this.getPagina(1)

      

    },

    created() {
        this.instituicao_id = window.localStorage.getItem("instituicao_id")

  
        
    },


}