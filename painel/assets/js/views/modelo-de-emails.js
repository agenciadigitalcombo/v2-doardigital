import adm from "../../../../../static/js/api/adm.js"

export default {
    template: `
<div>

    <c-header></c-header>
    <c-aside></c-aside>

    <!--begin::Root-->
    <div class="d-flex flex-column flex-root">

        <div class="page d-flex flex-row flex-column-fluid">

            <div class="wrapper d-flex flex-column flex-row-fluid" id="kt_wrapper">

                <div class="content d-flex flex-column flex-column-fluid" id="kt_content">

                    <div class="post d-flex flex-column-fluid" id="kt_post">

                        <div id="kt_content_container" class="container-xxl">

                            <div class="card">
                                <div class="card-header border-0 pt-6">

                                    <div class="card-title">
                                        <div class="d-flex align-items-center position-relative my-1">
                                            <h1>Emails</h1>
                                        </div>

                                    </div>

                                    <div class="d-flex justify-content-end align-items-center d-none mr-9"
                                        data-kt-subscription-table-toolbar="selected">
                                        <div class="fw-bolder ">
                                            <span class="" data-kt-subscription-table-select="selected_count"></span>
                                            Activo
                                        </div>
                                    </div>

                                </div>
                                <div class="card-body pt-0">
                                    <div class="table-responsive">
                                        <table class="table align-middle table-row-dashed table-striped fs-6 gy-5"
                                            id="kt_subscriptions_table">
                                            <thead>
                                                <tr class="text-start text-muted fw-bolder fs-7 text-uppercase gs-0">
                                                    <th class="w-10px pe-2">

                                                    </th>
                                                    <th class="min-w-300px">TIpo</th>
                                                    <th class="min-w-50px"></th>
                                                    <th class="min-w-50px"></th>
                                                    <th class="min-w-200px">Status </th>
                                                    <th class="min-w-100px"></th>
                                                    <th class="text-end min-w-170px">Ação</th>
                                                </tr>
                                            </thead>
                                            <tbody class="text-gray-600 fw-bold">
                                                <tr v-for="item in emails" :key="item.id"> 
                                                    <td>
                                                    </td> 
                                                    <td> 
                                                        <!--begin::User details-->
                                                        <div class="d-flex flex-column">
                                                            <a class="text-gray-800  mb-1">
                                                               
                                                            <div class="badge badge-light fw-bolder"> 1 min </div>
                                                          {{item.acao}}
                                                            </a>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div class="badge badge-light"></div>
                                                    </td>
                                                    <td>

                                                    </td>
                                                    <td> 
                                                        <div
                                                            class="form-check form-switch form-check-custom form-check-solid me-10">

                                                            <input class="form-check-input h-30px w-50px"
                                                                v-model="item.status" true-value="1" false-value="0"
                                                                @click="statusx(item.acao)" type="checkbox"
                                                                id="flexSwitch30x50" />
                                                        </div> 
                                                    </td>
                                                    <td>
                                                    </td> 
                                                    <td class="text-end">

                                                        <a @click="editar(item.acao)"
                                                            class="btn btn-icon btn-active-light-primary w-35px h-35px me-3 btn-primary"
                                                            style="margin: 2px;">
                                                            <!--begin::Svg Icon | path: icons/duotune/general/gen019.svg-->
                                                            <span class="svg-icon svg-icon-3">
                                                                <svg xmlns="http://www.w3.org/2000/svg" width="20"
                                                                    height="20" fill="currentColor"
                                                                    class="bi bi-pencil-fill" viewBox="0 0 16 16">
                                                                    <path
                                                                        d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708l-3-3zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207l6.5-6.5zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.499.499 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11l.178-.178z" />
                                                                </svg>
                                                            </span>
                                                        </a>
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
    <!--end::Root-->

    <c-footer />
</div>
`,


    data: function () {
        return {
            instituicao_id: null,
            acao: null,
            emails: []
        }
    },

    methods: {
        async listarEmails() {
            let res = await adm.listarEmail(localStorage.getItem('instituicao_id'))
            return res
        },

        async editar(acao) {
             globalThis._emaiis = this.emails.find(doador => doador.acao == acao) 
            window.location.href = "#/modelo-de-emails/editar"
        },


        async statusx(status) {
            this.error = null
            this.plano_id = status
            let res = await adm.onoffPlano(
                this.plano_id,
                this.token,
            )
            if (!res.next) {
                console.log(res)
                this.error = res.message
                return null
            }

        },

    },

    async mounted() {
        this.emails = (await this.listarEmails()).dados
        // alert(this.emails)

        this.instituicao_id = localStorage.getItem("instituicao_id");
    },

}