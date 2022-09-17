import Table from "../components/Table.js"
import Botao from "../components/Botao.js"
import BreadCrumb from "../components/BreadCrumb.js"
import Card from "../components/Card.js"
import CardCarteira from "../components/CardCarteira.js"
import CardGeral from "../components/CardGeral.js"
import CardPerfil from "../components/CardPerfil.js"
import apiDoadores from "../components/apiDoadores.js"
import { getUriData } from "../components/format.js"
import status from "../components/status.js"

export default {
    data: function () {
        return {
            info: { address: { bairro: null } },
            donations: [
                { value: "R$ 50", status: "CONFIRMED", tipo: "PIX", dataHora: "20/09/2022 08:20:34" },
                { value: "R$ 1000", status: "PENDING", tipo: "PIX", dataHora: "19/09/2022 08:20:34" },
            ],
            assinaturas: [
                { dataHora: "20/09/2022 08:20:34", value: "R$ 50", status: "ATIVO", tipo: "CRÉDITO", },
                { value: "R$ 1000", status: "INATIVO", tipo: "PIX", dataHora: "19/09/2022 08:20:34" },
            ],
            cols: {
                dataHora: "Data e Hora cadastrada",
                value: "Valor Doação",
                status: t => status(t.status),
                tipo: t => `<span class="bg-white text-grey-600 py-1 px-3 rounded-full text-xs">
                ${t.tipo}
                </span>`,
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
        Card,
        CardCarteira,
        CardGeral,
        CardPerfil
    },
    async mounted() {
        let ID = getUriData('id')
        let doador = new apiDoadores()
        let request = await doador.detalhe(ID)


        if (request.next) {
            this.info = request.payload
        }
    },
    template: `
    <div>
    {{info}}
    <BreadCrumb text="Home" text2="Detalhe Doador" />

       

    <div class="relative pt-2 pb-32 bg-[#fff]">
          <div class="px-4 md:px-6 mx-auto w-full">
             <div>
                <div class="flex flex-wrap">
                <CardPerfil :text="info.nome" :recorrente="info.recorrente" :gravatar="info.gravatar"/>
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
                <CardGeral text="Histórico de Doações" size="quatro">
                <Table :rows="donations" :cols="cols" pagination="10" />
                </CardGeral>
                <CardGeral text="Assinaturas" size="quatro">
                <Table :rows="assinaturas" :cols="cols" pagination="10" />
                </CardGeral>
                
                
                
               

       

    </div>`,
}

