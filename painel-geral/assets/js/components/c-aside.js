import get_template from './get_template.js'
import menus from '../vendor/lista-menu.js'
import adm from "../../../../../static/js/api/adm.js"

export default {
    data: function () {
        return {
            title: "aside",
            menus,
            jms: "",
            token: null,
            lista: [],
            permisao: [],
            permisao2: [],
            selecionado: ''
        }
    },

    async mounted() {

        this.token = localStorage.getItem('token')
        let str = this.token.split('.')[0]
        let encodedStr = atob(str);
        var res = JSON.parse(encodedStr);
        this.code = res.code
        this.jms = this.code.split('_')[0]


        let dados = (await this.listar()).payload
        this.nome = dados.nome
        this.email = dados.email
        this.id = dados.credencial || "777"

        this.permisao = (await this.credenciais()).payload.recursos
        let recursos = this.permisao


        if (this.jms == 'super') {
            this.lista = this.menus
        } else if (this.jms == 'adm') {
            this.lista = this.menus.filter(itens => this.jms.includes(itens.permisao2))
        } else {
            this.lista = this.menus.filter(itens => recursos.includes(itens.id))
        }
    },

    created() {
        this.setar()
    },

    methods: {

        setar() {
            var jms = [window.location.href.split('#/')[1]]
            for (var i = 0; i < this.menus.length; i++) {

                if (this.menus[i].id == jms) {
                    globalThis._menu = [window.location.href.split('#/')[1]]
                    this.selecionado = globalThis._menu
                } else {
                    this.selecionado = globalThis._menu
                }

            }

        },

        async listar() {
            let res = await adm.ListarPerfil(
                this.token,
                this.code,
            )
            return res
        },

        async credenciais() {
            let res = await adm.credencial(
                this.token,
                this.id
            )
            return res
        },


        async logout() {
            localStorage.removeItem('token')
            localStorage.removeItem('instituicao_nome')
            localStorage.removeItem('instituicao_id')

            window.location.href = "#/login";
        },

    },

    template: await get_template('./assets/js/components/c-aside')
}