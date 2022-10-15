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
import Jw from "../components/jwt.js"


export default {
    data: function() {
        return {
            list: [],
            cols: {
                "Nome": d => `${d.nome}`,
                "Registro": d => `${d.registro}`,
                "SubDomain": d => `${d.subdomain}`,
                "Ações": e => actions(`editar-instituicao?id=${e.institution_fk}`, 'fa fa-pencil', 'blue')
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
        
        let jwt = new Jw()
        let Inst = new ApiInstitution()
        
        let ID = jwt.get().code
        let request = await Inst.list(ID)

        console.log(request)
        if(request.next) {
            this.list = request.payload
        }

    },
    methods: {
        adapter( listAll ) {
            return listAll.map( d => ({
                value: d.price,
                ...d,  
            }) )
        }
    },
    template: `
    <div>
    
    <BreadCrumb text="Home" text2="Minhas Instituições" />
    <div class="relative pt-2 pb-32 bg-[#fff]">
          <div class="px-4 md:px-6 mx-auto w-full">
             <div>
                <div class="flex flex-wrap">
                
                <CardGeral text="" size="seis">
                <!-- Code block starts -->
                    <div class=" container px-6 mx-auto flex flex-col md:flex-row items-start md:items-center justify-between pb-4 border-b border-gray-300">
                        <div>
                            <h4 class="text-2xl font-bold leading-tight text-gray-800">Instituições</h4>
                        </div>
                        <div class="mt-6 md:mt-0">
                            <Botao text="Criar novo" variation="green" link="#/criar-instituicao"/>
                        </div>
                    </div>
                <!-- Code block ends -->
                <Table :rows="list" :cols="cols" pagination="10" />
                </CardGeral>
                
                
                </div>
             </div>
          </div>
       </div>
    
    </div>`,
}