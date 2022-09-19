import Table from "../components/Table.js"
import BreadCrumb from "../components/BreadCrumb.js"
import Card from "../components/Card.js"
import CardCarteira from "../components/CardCarteira.js"
import CardGeral from "../components/CardGeral.js"
import CardPerfil from "../components/CardPerfil.js"
import apiDoadores from "../components/apiDoadores.js"
import ApiDoacoes from "../components/apiDoacoes.js"
import { getUriData } from "../components/format.js"
import MyInstitution from "../components/myInstitution.js"
import status from "../components/status.js"
import { data, formataMoeda } from "../components/format.js"
import actions from "../components/actions.js"
import HeaderDoador from "../components/HeaderDoador.js"

export default {
    data: function () {
        return {
            info: { address: { bairro: null } },
            donations: [],
            assinaturas: [],
            cols: {
                data: d => `${d.datas}`,
                value: d => `${d.value}`,
                status: t => status(t.status),
                tipo: t => `<span class="bg-white text-grey-600 py-1 px-3 rounded-full text-xs">
                ${t.tipo}
                </span>`,
                action: e => actions(`detalhe-doacao?id=${e.id}`, 'fa-solid fa-eye', 'blue')
            },
            colsSub: {
                
            },

        }
    },
    filters: {
        formataMoeda
    },
    components: {
        Table,
        BreadCrumb,
        Card,
        CardCarteira,
        CardGeral,
        CardPerfil,
        HeaderDoador
    },
    async mounted() {
        let ID = getUriData('id')
        let institution = new MyInstitution()
        let doador = new apiDoadores()
        let request = await doador.detalhe(ID)  
        let formatRequestDoador = request.payload
      //  
        let donations = new ApiDoacoes()
        let requestDoacao = await donations.lista(institution.get())
        let formatRequest = Object.values(requestDoacao)
        let minRequest = formatRequest[2]
        const ids = minRequest.filter(p => p.doador_fk === ID)
        



        if (request.next) {
            this.info = formatRequestDoador
            this.donations = this.adapter(ids)
            console.log(formatRequestDoador)
        }
    },
    
    methods: {
        adapter(listAll) {
            return listAll.map(d => ({
                name: d.doador_nome,
                email: d.doador_email,
                datas: data(d.data),
                value: formataMoeda(d.valor),
                status: d.status_pagamento,
                tipo: d.tipo_pagamento,
                id: d.fatura_id,
                ... d,
            }))

        }
    },
    template: `
    <div>
    <BreadCrumb text="Home" text2="Detalhe Doador" />
    <HeaderDoador :recorrente="info.recorrente" :name="info.nome" />
       

    <div class="relative pt-2 pb-32 bg-[#fff]">
          <div class="px-4 md:px-6 mx-auto w-full">
             <div>
                <div class="flex flex-wrap">
                <CardGeral text="Dados do Doador" size="tres" value="">
                    <h2 class="text-gray-500">Email:</h2>
                    <p>{{info.email}}</p>
                    <br>
                    <h2 class="text-gray-500">Telefone:</h2>
                    <p>{{info.telefone}}</p>
                    <br>
                    <h2 class="text-gray-500">CPF:</h2>
                    <p>{{info.cpf}}</p>
                    <br>                    
                    <h2 class="text-gray-500">Cadastro em:</h2>
                    <p>{{info.registro}}</p>
                    <br>                    
                </CardGeral>
                <CardGeral text="Endereço" size="tres">
                <h2 class="text-gray-500">CEP:</h2>
                    <p>{{info.address.cep}}</p>
                    <br>
                    <h2 class="text-gray-500">Rua:</h2>
                    <p>{{info.address.logadouro}}</p>
                    <br>
                    <h2 class="text-gray-500">Número:</h2>
                    <p>{{info.address.numero}}</p>
                    <br>
                    <h2 class="text-gray-500">Bairro:</h2>
                    <p>{{info.address.bairro}}</p>
                    <br>
                    <h2 class="text-gray-500">Cidade:</h2>
                    <p>{{info.address.cidade}}</p>
                    <br>
                    <h2 class="text-gray-500">Estado:</h2>
                    <p>{{info.address.estado}}</p>
                    <br>
                </CardGeral>
                <CardGeral text="Anotações" size="tres">
                </CardGeral>
                <CardGeral text="Histórico de Doações" size="quatro">
                <Table :rows="donations" :cols="cols" pagination="10" />
                </CardGeral>
                <CardGeral text="Assinaturas" size="quatro">
                <Table :rows="assinaturas" :cols="colsSub" pagination="10" />
                </CardGeral>
                
                
                
               

       

    </div>`,
}

