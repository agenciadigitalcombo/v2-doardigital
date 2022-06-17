import get_template from '../../componentes/get_template.js'
import adm from "../../../../../static/js/api/adm.js"

export default {


    data: function () {
        return {
            token: null,
            instituicao_fk: null,
            key: null,
            error: null,
            msg: null,
            jms: null,
        }
    },

    methods: {

        async adicionaTags() {
            this.error = null

            let res = await adm.savarTags(
                this.token,
                this.instituicao_fk,
                this.key,

            )
            if (!res.next) {
                setTimeout(() => this.msg = "", 5000);
                this.error = res.message
                return null
            }
            this.msg = res.message
            this.jms = res.next
        },

        async listar() {
            let res = await adm.listarTags(
                this.token,
                this.instituicao_fk,
            )
            return res
        },

    },

    async mounted() {
        this.instituicao_fk = window.localStorage.getItem('instituicao_id');

        var evenda = (await this.listar()).payload
        this.key = evenda.key
    },

    template: await get_template('./assets/js/views/modulos/tags')
}