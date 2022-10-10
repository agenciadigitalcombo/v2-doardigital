import Card  from "../components/Card.js"
import Botao  from "../components/Botao.js"
import BreadCrumb from "../components/BreadCrumb.js"
import CardCarteira from "../components/CardCarteira.js"
import CardGeral from "../components/CardGeral.js"
import Table from "../components/Table.js"
import MyInstitution from "../components/myInstitution.js"
import ApiPlanos from "../components/apiPlanos.js"
import actions from "../components/actions.js"
import ApiInstitution from "../components/apiInstitution.js"
import apiAdmin from "../components/apiAdmin.js"

export default {
    data: function() {
        return {
            transferencias: [],
            cols: {
                value: d => `${d.value}`,
                action: e => actions(`detalhe-doacao?id=${e.id}`, 'fa-solid fa-eye', 'blue')
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
        let institution = new MyInstitution()
        let apiinstituicao = new ApiInstitution()
        let request = await admin.list_all_subs(institution.get())
        let requestTransform = request.payload
        if(request.next) {
            console.log(requestTransform)

        }

    },
    methods: {
        adapter( listAll ) {
            return listAll.map( d => ({
                ...d,  
            }) )
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
                <Table :rows="transferencias" :cols="cols" pagination="10" />
                </CardGeral>
                
                
                </div>
             </div>
          </div>
       </div>
    
    </div>`,
}