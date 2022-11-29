import Table from "../components/Table.js"
import Botao from "../components/Botao.js"
import Bread from "../components/Bread.js"
import Card from "../components/Card.js"
import ApiDoadores from "../components/apiDoadores.js"
import MyInstitution from "../components/myInstitution.js"
import { data, formatRecorrente } from "../components/format.js"
import actions from "../components/actions.js"
import { cpf } from "../components/mask.js"
import FiltroDoador from "../components/FiltroDoador.js"
import Loader from "../components/Loader.js"


export default {
    data: function () {
        return {
            isLoad: 'true',
            statusUnico: 0,
            statusRecorrente: 0,
            totalDoadores: 0,
            doadores: [],
            cols: {
                "Nome do Doador": d => `${d.name} <br/> ${d.email}`,
                "Recorrencia": t => `<span class="bg-${t.status == 'ATIVA' ? 'green' : 'yellow'}-200 text-${t.status == 'ATIVA' ? 'green' : 'yellow'}-600 py-1 px-3 rounded-full text-xs">
                ${t.status}
                </span>`,
                value: "Data de Cadastro",
                cpf: d => `${d.cpf}`,
                "Ação": e => actions(`detalhe-doador?id=${e.external_fk}`, 'fa-solid fa-eye', 'blue')
            },
        }
    },
    components: {
        Table,
        Botao,
        Bread,
        Card,
        FiltroDoador,
        Loader
    },
    async mounted() {
        this.isLoad = 'true'
        let doadores = new ApiDoadores()
        let institution = new MyInstitution()
        let request = await doadores.lista(institution.get())
        if (request.next) {
            this.doadores = this.adapter(request.payload.reverse())
            this.doadoresCopy = this.adapter(request.payload)
        }
        this.statusRecorrente = this.somaAll(this.doadores.filter(d => d.recorrente === true))
        this.statusUnico = this.somaAll(this.doadores.filter(d => d.recorrente === false))

        this.totalDoadores = this.somaAll(this.doadores)
        this.isLoad = 'false'




    },
    methods: {
        somaAll(ar) {
            return ar.reduce((acc, el) => {
                acc += 1
                return acc
            }, 0)
        },
        filtrar(payload) {
            let dados = Array.from(this.doadoresCopy.map(x => x))
            if (payload.search) {
                dados = dados.filter(t => {
                    let search = payload.search
                    let termo = t.name + " " + t.email + " " + t.cpf
                    search = search.toLowerCase()
                    termo = termo.toLowerCase()
                    search = search.normalize('NFD').replace(/[\u0300-\u036f]/g, "");
                    termo = termo.normalize('NFD').replace(/[\u0300-\u036f]/g, "");
                    return termo.indexOf(search) > -1
                })

            }            
            if (payload.recorrente == "ativo") {
                dados = dados.filter(d => d.recorrente === true)
            }
            if (payload.recorrente == "inativo") { 
                dados = dados.filter(d => d.recorrente === false)
            }
            this.doadores = dados
            
        },
        adapter(listAll) {

            return listAll.map(d => ({
                ...d,
                name: d.nome,
                status: formatRecorrente(d.recorrente),
                value: data(d.registro),
                cpf: cpf(d.cpf),
            }))
        }
    },
    template: `
    <div>
    <Loader :open="isLoad" />
        
        <Bread :steps="[
                ['Home','#/dashboard'],
                ['Doadores','#/s'],
            ]" 
        />

        <div class="relative pt-10 pb-32 bg-[#fff]">
          <div class="bg-blackpx-4 md:px-6 mx-auto w-full">
             <div>
                <div class="flex flex-wrap">
                <Card text="Total de Doadores" :value="totalDoadores" variation="blue" icon="bar" size="3" />
                <Card text="Doadores Recorrentes" :value="statusRecorrente" variation="green" icon="heart" size="3" />
                <Card text="Total Doadores Únicos" :value="statusUnico" variation="yellow" size="3"/>
                </div>
                <br>
                <FiltroDoador @filter="filtrar"/>
                <Table :rows="doadores" :cols="cols" pagination="20" />
             </div>
          </div>
       </div>

       
    </div>`,
}