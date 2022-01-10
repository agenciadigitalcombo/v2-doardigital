import adm from "../../../../../static/js/api/adm.js"

export default {
    template: `
    <div>
    <div>
 
    <c-header></c-header>
    <c-aside></c-aside>
  
    <!--begin::Root-->
    <div class="d-flex flex-column flex-root">
        <div class="page d-flex flex-row flex-column-fluid">        
            <div class="wrapper d-flex flex-column flex-row-fluid" id="kt_wrapper">     
            <div class="d-flex flex-column flex-root">

              <div class="content d-flex flex-column flex-column-fluid" id="kt_content">                      
                        <div class="post d-flex flex-column-fluid" id="kt_post">                  
                            <div id="kt_content_container" class="container-xxl">  
  
                       
                             <c-mensagem :msg="msg" ></c-mensagem>  
                            

                                <div class="card card-flush">
                              <div class="card-header mt-5">
                                        <div class="card-title flex-column">
                                            <h3 class="fw-bolder mb-1"> Divisao de Pagamento</h3>
                                        </div>
                                       

                                        <div class="card-toolbar">
                                            <a type="button" class="btn btn-light-primary" href="#/add-pagamento">
                                                <span class="svg-icon svg-icon-3">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                        viewBox="0 0 24 24" fill="none">
                                                        <rect opacity="0.3" x="2" y="2" width="20" height="20" rx="5"
                                                            fill="black" />
                                                        <rect x="10.8891" y="17.8033" width="12" height="2" rx="1"
                                                            transform="rotate(-90 10.8891 17.8033)" fill="black" />
                                                        <rect x="6.01041" y="10.9247" width="12" height="2" rx="1"
                                                            fill="black" />
                                                    </svg>
                                                </span>
                                               Novo
                                            </a>
                                        </div>
                                    </div>
                                    <div class="card-body pt-0">
                                        <div class="table-responsive">
                                        <table class="table align-middle table-row-dashed fs-6 gy-5 mb-0"
                                            id="kt_permissions_table">
                                            <thead>
                                                <tr class="text-start text-gray-400 fw-bolder fs-7 text-uppercase gs-0">
                                                    <th class="min-w-200px">Recebedor</th>
                                                    <th class="min-w-150px">responsavel</th>
                                                    <th class="min-w-200px">Porcentagem</th>
                                                    <th class="min-w-100px text-end"></th>
                                                </tr>
                                            </thead>
                                            <tbody class="fw-bold text-gray-600">
                                                <tr v-for="item in dados" :key="item.id">
                                                    <td>
                                                   {{ item.recebedor_id }}
		
                                                    </td>
                                                    
                                                    <td>
                                                    <div v-if="responsavel_estorno === item.responsavel_estorno">
														Sim
															</div>

															<div v-else>
															Não
															</div>
                                                     </td>
                                                    <td>
                                                        <a class="badge badge-light-primary fs-7 m-1">
                                                        {{ item.porcentagem }}%
                                                        </a>
                                                    </td>
                                                    <td class="text-end">
    
                                                        <a @click="editar(item.id)"
                                                            class="btn btn-icon btn-active-light-primary w-35px h-35px me-3 btn-primary"
                                                            style="margin: 2px;">
                                                           <span class="svg-icon svg-icon-3">
                                                                <svg xmlns="http://www.w3.org/2000/svg" width="20"
                                                                    height="20" fill="currentColor"
                                                                    class="bi bi-pencil-fill" viewBox="0 0 16 16">
                                                                    <path
                                                                        d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708l-3-3zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207l6.5-6.5zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.499.499 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11l.178-.178z" />
                                                                </svg>
                                                            </span>
                                                        </a>

                                                        <button @click="eliminar(item)"
                                                            title="Para Apagar de duplo click"
                                                            class="btn btn-icon btn-active-light-danger w-35px h-35px btn-danger"
                                                            style="margin: 2px;">
                                                           <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                                                                fill="currentColor" class="bi bi-trash2-fill"
                                                                viewBox="0 0 16 16">
                                                                <path
                                                                    d="M2.037 3.225A.703.703 0 0 1 2 3c0-1.105 2.686-2 6-2s6 .895 6 2a.702.702 0 0 1-.037.225l-1.684 10.104A2 2 0 0 1 10.305 15H5.694a2 2 0 0 1-1.973-1.671L2.037 3.225zm9.89-.69C10.966 2.214 9.578 2 8 2c-1.58 0-2.968.215-3.926.534-.477.16-.795.327-.975.466.18.14.498.307.975.466C5.032 3.786 6.42 4 8 4s2.967-.215 3.926-.534c.477-.16.795-.327.975-.466-.18-.14-.498-.307-.975-.466z" />
                                                            </svg>
                                                        </button>
    
                                                    </td>
                                                </tr>  
                                            </tbody>
                                        </table>
                                    </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
            </div>
            </div>
        </div>
        <!--end::Page-->
    </div>
 

    <c-footer/>
	</div>
	</div>
    
    `,

    data: function () {

        return {
            instituicao_id: null,
            recebedor_id: null,
            responsavel_estorno: '1',
            porcentagem: null,
            token: null,
            dados: [],
            msg: null,
            totalPercentagem: 100,
            total: ""
        }
    },


    methods: {
        async listar() {
            let res = await adm.listarSplit(localStorage.getItem('instituicao_id'))
            this.msg = res.message;
            return res
        },

        async eliminar(dados) {
            if (confirm('deseja excluir a Divicao de Pagamento ?')) {
                this.error = null
                let res = await adm.deleterSplit(
                    this.id = dados.id,
                    this.token
                )
                if (!res.next) {
                    console.log(res)
                    this.error = res.message
                    return null
                }

                this.msg = res.message,
                    setTimeout(() => this.msg = "", 3000);

                this.dados = (await this.listar()).dados

            }
        },

        async editar(id) {
            globalThis._divisao = this.dados.find(user => user.id == id)
            window.location.href = "#/editar-pagamento"
        },

    },


    async mounted() {
        this.dados = (await this.listar()).dados
        this.instituicao_id = localStorage.getItem("instituicao_id");  
    },

}
