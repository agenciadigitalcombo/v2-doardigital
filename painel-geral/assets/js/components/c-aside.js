import get_template from './get_template.js'
import menus from '../vendor/lista-menu.js'
import adm from "../../../../../static/js/api/adm.js"

export default {
    data: function () {
        return {
            title: "aside",
            menus,
            lista: [], 
            permisao: [],
            permisao2: [],
            selecionado : ''
        }
    },

    async mounted() {
       
          
        let dados = (await this.listar()).dados
        this.nome = dados.nome.split(' ')[0]
        this.gravatar = dados.gravatar
        this.superAdm = dados.super_adm || "777"
       
           this.id =  dados.credencial_id || "777"

         
         this.permisao = (await this.credenciais()).dados.recursos

      

        let recursos = this.permisao
         let adm = this.superAdm
       
        
        if (adm == '1') {
            this.lista = this.menus
        } else if (adm == '0') {
            this.lista = this.menus.filter(itens => this.superAdm.includes(itens.permisao2))
        } else {
            this.lista = this.menus.filter(itens => recursos.includes(itens.id))
        }


   
    },

    created() {
        this.selecionado  = [window.location.href.split('#/')[1]] 
    },

    methods: {  
        async listar() {
            let res = await adm.ListarPerfil(localStorage.getItem('token'))
            return res
        },

        async credenciais() {
            let res = await adm.credencial(this.id)
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