import Table  from "../components/Table.js"
import Botao  from "../components/Botao.js"
import BreadCrumb from "../components/BreadCrumb.js"
import Card  from "../components/Card.js"
import ApiDoadores from "../components/apiDoadores.js"
import MyInstitution from "../components/myInstitution.js"
import {data} from "../components/format.js"
import actions from "../components/actions.js"


export default {
    data: function() {
        return { 
            doadores : [],
            cols: {                
                name: d => `${d.name} <br/> ${d.email}` ,
                status: t => `<span class="bg-green-200 text-green-600 py-1 px-3 rounded-full text-xs">
                ${t.status}
                </span>`,
                value: "Data de Cadastro",
                cpf: "CPF", 
                action: e => actions( `detalhe-doador?id=${e.external_fk}`, 'fa-solid fa-eye','blue')
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