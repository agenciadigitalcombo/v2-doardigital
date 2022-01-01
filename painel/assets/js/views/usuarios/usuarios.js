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
                                            <h1>Usuários</h1>
                                        </div>
                                    </div>

                                    <div class="card-toolbar">
                                        <div class="d-flex justify-content-end"
                                            data-kt-subscription-table-toolbar="base">

                                            <a href="#/usuario-novo" class="btn btn-primary">
                                                <span class="svg-icon svg-icon-2">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                        viewBox="0 0 24 24" fill="none">
                                                        <rect opacity="0.5" x="11.364" y="20.364" width="16" height="2"
                                                            rx="1" transform="rotate(-90 11.364 20.364)" fill="black" />
                                                        <rect x="4.36396" y="11.364" width="16" height="2" rx="1"
                                                            fill="black" />
                                                    </svg>
                                                </span>
                                                Adicionar</a>

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
                                                    <th class="min-w-300px">Usuario</th>
                                                    <th class="min-w-25px"></th>
                                                    <th class="min-w-200px">Telefone </th>
                                                    <th class="min-w-25px"></th>
                                                    <th class="min-w-150px">Credencial </th>
                                                    <th class="text-end min-w-100px">Ação</th>
                                                </tr>
                                            </thead>
                                            <tbody class="text-gray-600 fw-bold">

                                                <tr v-for=" (item, indice ) in dados" :key="item.id">

                                                    <td>
                                                        <div
                                                            class="form-check form-check-sm form-check-custom form-check-solid">
                                                            <input class="form-check-input" type="checkbox" value="1" />
                                                        </div>
                                                    </td>
                                                    <td class="d-flex align-items-center">

                                                        <div
                                                            class="symbol symbol-circle symbol-50px overflow-hidden me-3">
                                                            <a>
                                                                <div class="symbol-label">
                                                                    <img :src="item.foto" alt="Emma Smith"
                                                                        class="w-100" />
                                                                </div>
                                                            </a>
                                                        </div>
                                                        <div class="d-flex flex-column">
                                                            <a class="text-gray-800 text-hover-primary mb-1">
                                                                {{item.nome}}</a>
                                                            <span> {{item.email}}</span>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div class="badge badge-light"></div>
                                                    </td>
                                                    <td>
                                                        <div class=""> {{item.telefone}} </div>
                                                    </td>

                                                    <td></td>
                                                    <td>
                                                        <div class="badge badge-light-success">
                                                            {{item.credencial_id }}
                                                        </div>
                                                    </td>
                                                    <td class="text-end">
                                                        <a @click="editar(item.secret)"
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
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="20"
                                                                height="20" fill="currentColor"
                                                                class="bi bi-trash2-fill" viewBox="0 0 16 16">
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
    <!--end::Root-->
		<c-footer/>
		
	</div>
    `,

	data: function () {
		return {
			gravatar: 'https://doardigital.tk/api/gravatar?email=brunnocriacoes@gmail.com',
			nome: null,
			email: null,
			senha: null,
			telefone: null,
			credencial_id: null,
			dados: [],
			listaCredencial: [],

			nome_identificacao: null,
			secret: null,
			jms: {},
			estilo: "",
			show: false,
		}
	},
	methods: {
		async listar() {
			let res = await adm.listarSubadm(localStorage.getItem('token'))
			return res
		},

		async listar_credencial() {
			let res = await adm.listarCredencial(localStorage.getItem('token'))
			return res
		},

		async editar(secret) {
			globalThis._usuario = this.dados.find(user => user.secret == secret)
			window.location.href = "#/usuario-editar"
		},
	},


	async mounted() {
		this.dados = (await this.listar()).dados

		this.listaCredencial = (await this.listar_credencial()).dados
		this.nome_identificacao = this.listaCredencial.nome_identificacao
		console.log(this.listaCredencial)



		
		console.log(this.$refs.pop_1)
	},

	created() {

	},

	filters: {
		nomeCredencial: (valor, lista) => lista.find(
			credencial => credencial.id == valor
		).nome_identificacao
	}
}


