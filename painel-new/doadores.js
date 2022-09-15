import Table  from "../components/Table.js"
import Botao  from "../components/Botao.js"
import BreadCrumb from "../components/BreadCrumb.js"
import Card  from "../components/Card.js"
import ApiDoadores from "../components/apiDoadores.js"
import MyInstitution from "../components/myInstitution.js"
import {data} from "../components/format.js"


export default {
    data: function() {
        return { 
            doadores : [],
            cols: {                
                name: "Nome Doador",
                status: t => `<span class="bg-green-200 text-green-600 py-1 px-3 rounded-full text-xs">
                ${t.status}
                </span>`,
                value: "Data de Cadastro",
                cpf: "CPF", 
                email: "E-mail",               
                editar: e => `
                <div class="w-4 mr-2 transform hover:text-purple-500 hover:scale-110">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                            </svg>
                                        </div>
                `
            },
        }
    },
    components: {
        Table,
        Botao,
        BreadCrumb,
        Card
    },
    async mounted() {
        let doadores = new ApiDoadores()
        let institution = new MyInstitution()
        let request = await doadores.lista(institution.get())
        if(request.next) {
            this.doadores = this.adapter( request.payload )
        }

    },
    methods: {
        adapter( listAll ) {
            return listAll.map( d => ({
                name: d.nome,
                status: d.recorrente,
                value: data(d.registro),
                ...d,  
            }) )
        }
    },
    template: `
    <div>
    <BreadCrumb text="Home" text2="Doadores" />

    

   
        


        <div class="relative pt-10 pb-32 bg-[#fff]">
          <div class="bg-blackpx-4 md:px-6 mx-auto w-full">
             <div>
                <div class="flex flex-wrap">
                <Card text="Total de Doadores" value="300" variation="blue" icon="bar" size="3" />
                <Card text="Total Doadores Únicos" value="100" variation="yellow" size="3"/>
                <Card text="Doadores Recorrentes" value="200" variation="green" icon="heart" size="3" />
                
                
                <CardCarteira />
                
                
                </div>
                <Table :rows="doadores" :cols="cols" pagination="10" />
             </div>
          </div>
       </div>

       
    </div>`,
}