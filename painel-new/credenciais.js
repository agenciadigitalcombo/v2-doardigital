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
                "Editar": e => actions(`editar-credencial?id=${e.id}`, 'fa-solid fa-eye', 'blue')
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
                
                <CardGeral text="Lista de Credenciais" size="quatro">
                <Botao text="Criar Novo" variation="green" link="#/criar-credencial"/>
                <Table :rows="transferencias" :cols="cols" pagination="10" />
                </CardGeral>
                
                
                </div>
             </div>
          </div>
       </div>
    
    </div>`,
}