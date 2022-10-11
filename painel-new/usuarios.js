import Card from "../components/Card.js"
import Botao from "../components/Botao.js"
import BreadCrumb from "../components/BreadCrumb.js"
import CardCarteira from "../components/CardCarteira.js"
import CardGeral from "../components/CardGeral.js"
import Table from "../components/Table.js"
import MyInstitution from "../components/myInstitution.js"
import ApiPlanos from "../components/apiPlanos.js"
import actions from "../components/actions.js"
import ApiInstitution from "../components/apiInstitution.js"
import apiAdmin from "../components/apiAdmin.js"
import Jwt from "../components/jwt.js"

export default {
    data: function () {
        return {
            lista: [],
            cols: {
                "Nome": d => `${d.nome}`,
                "Ações": e => actions(`editar-usuario?id=${e.code}`, 'fa-solid fa-eye', 'blue')
            },

        }
    },

    components: {
        Botao,
        Card,
        BreadCrumb,
        CardCarteira,
        CardGeral,
        Table
    },
    async mounted() {
        let admin = new apiAdmin()
        let jwt = new Jwt()
        let adm_fk = jwt.get().code
        let request = await admin.list_all_subs(adm_fk)
        this.lista = request.payload
        console.log(this.lista)
        
    },
    methods: {
        adapter(listAll) {
            return listAll.map(d => ({
                ...d,
            }))
        }
    },
    template: `
    <div>
    
    
    <BreadCrumb text="Home" text2="Usuários" />
    {{planos}}
    <div class="relative pt-2 pb-32 bg-[#fff]">
          <div class="px-4 md:px-6 mx-auto w-full">
             <div>
                <div class="flex flex-wrap">
                
                <CardGeral text="Lista de Usuários" size="quatro">
                <Botao text="Criar Novo" variation="green" link="#/criar-usuario"/>
                <Table :rows="lista" :cols="cols" pagination="10" />
                </CardGeral>
                
                
                </div>
             </div>
          </div>
       </div>
    
    </div>`,
}