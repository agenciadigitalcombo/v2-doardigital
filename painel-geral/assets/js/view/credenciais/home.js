import get_template from '../../components/get_template.js'
import adm from "../../../../../static/js/api/adm.js"

export default {
   
    data: function () {

        return {
            id: null,
            nome_identificacao: null,
            recursos: null,
            dados: [],
            msg: null
        }

    },

    async mounted() {

         globalThis._jms = "ola jms"

        this.dados = (await this.listar()).dados
        this.id = dados.id
        this.nome_identificacao = dados.nome_identificacao
        this.recursos = dados.recursos
        console.log(dados)
    },

    methods: {
        async listar() {
            let res = await adm.listarCredencial(localStorage.getItem('token'))
            return res
        },


        async eliminar(dados) {
            if (confirm('deseja excluir a credencial ?')) {
                this.error = null
                let res = await adm.deleterCredencia(
                    this.id = dados.id,

                )
                if (!res.next) {
                    console.log(res)
                    this.error = res.message
                    return null
                }

                this.msg = res.message,
                    setTimeout(() => this.msg = "", 5000);


                this.dados = (await this.listar()).dados
                this.id = dados.id
                this.nome_identificacao = dados.nome_identificacao
                this.recursos = dados.recursos
                console.log(this.dados)
            }
        },

        async editar(id) {
            globalThis._usuario = this.dados.find(user => user.id == id)
            window.location.href = "#/credencias/editar"
        },

    },

    template: await get_template('./assets/js/view/credenciais/home')
}