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
import BotaoAdicionar from "../components/BotaoAdicionar.js"

export default {
    data: function () {
        return {
            lista: [],
            cols: {
                "Nome": d => `${d.nome}`,
                "Credencial": d => `${d.credencial}`,
                "Ações": e => actions(`editar-usuario?id=${e.code}`, 'fa fa-pencil', 'blue')
            },

        }
    },

    components: {
        Botao,
        Card,
        BreadCrumb,
        CardCarteira,
        CardGeral,
        Table,
        BotaoAdicionar
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
    <div class="relative pt-2 pb-32 bg-[#fff]">
          <div class="px-4 md:px-6 mx-auto w-full">
             <div>
                <div class="flex flex-wrap">
                
                <CardGeral text="" size="cinco">
                <!-- Code block starts -->
                    <div class=" container px-6 mx-auto flex flex-col md:flex-row items-start md:items-center justify-between pb-4 border-b border-gray-300">
                        <div>
                            <h4 class="text-2xl font-bold leading-tight text-gray-800">Lista de Usuários</h4>
                        </div>
                        <div class="mt-6 md:mt-0">
                            <BotaoAdicionar text="Criar novo" variation="green" link="#/criar-usuario"/>
                        </div>
                    </div>
                <!-- Code block ends -->
                <Table :rows="lista" :cols="cols" pagination="10" />
                </CardGeral>
                
                
                </div>
             </div>
          </div>
       </div>
    
    </div>`,
}