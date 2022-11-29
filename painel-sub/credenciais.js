import Card  from "../components/Card.js"
import Botao  from "../components/Botao.js"
import BreadCrumb from "../components/BreadCrumb.js"
import CardCarteira from "../components/CardCarteira.js"
import CardGeral from "../components/CardGeral.js"
import Table from "../components/Table.js"
import MyInstitution from "../components/myInstitution.js"
import ApiPlanos from "../components/apiPlanos.js"
import actions from "../components/actions.js"
import { getUriData, formataMoeda } from "../components/format.js"
import ApiCredencial from "../components/apiCredencial.js"

export default {
    data: function() {
        return {
            transferencias: [],
            cols: {
                "Nome": d => `${d.nome_identificacao}`,
                "Editar": e => actions(`editar-credencial?id=${e.id}`, 'fa fa-pencil', 'blue')
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
        let transferencias = new ApiPlanos()
        let institution = new MyInstitution()
        let credenciais = new ApiCredencial()
        let request = await credenciais.listar(institution.get())
        let requestTransform = request.payload
        if(request.next) {
            this.transferencias = this.adapter(requestTransform)
        }

    },
    methods: {
        adapter( listAll ) {
            return listAll.map( d => ({
                value: formataMoeda(d.price),
                ...d,  
            }) )
        }
    },
    formataMoeda,
    template: `
    <div>
    
    
    <BreadCrumb text="Home" text2="Credenciais" />
    <div class="relative pt-2 pb-32 bg-[#fff]">
          <div class="px-4 md:px-6 mx-auto w-full">
             <div>
                <div class="flex flex-wrap">
                
                <CardGeral text="" size="quatro">
                <!-- Code block starts -->
                    <div class=" container px-6 mx-auto flex flex-col md:flex-row items-start md:items-center justify-between pb-4 border-b border-gray-300">
                        <div>
                            <h4 class="text-2xl font-bold leading-tight text-gray-800">Credenciais</h4>
                        </div>
                        <div class="mt-6 md:mt-0">
                            <Botao text="Criar novo" variation="green" link="#/criar-credencial"/>
                        </div>
                    </div>
                <!-- Code block ends -->
                <Table :rows="transferencias" :cols="cols" pagination="10" />
                </CardGeral>
                
                
                </div>
             </div>
          </div>
       </div>
    
    </div>`,
}