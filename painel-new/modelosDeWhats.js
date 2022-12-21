import Card from "../components/Card.js"
import Botao from "../components/Botao.js"
import BreadCrumb from "../components/BreadCrumb.js"
import CardCarteira from "../components/CardCarteira.js"
import CardGeral from "../components/CardGeral.js"
import Table from "../components/Table.js"
import MyInstitution from "../components/myInstitution.js"
import actions from "../components/actions.js"
import apiAdmin from "../components/apiAdmin.js"
import Jwt from "../components/jwt.js"
import status from "../components/status.js"
import BotaoAdicionar from "../components/BotaoAdicionar.js"
import Loader from "../components/Loader.js"
import { formatTipoPagamento } from "../components/format.js"
import ApiTemplateWhats from "../components/apiTemplateWhats.js"

export default {
    data: function () {
        return {
            isLoad: 'true',
            lista: [],
            cols: {
                tipo: t => `<span class="bg-white text-grey-600 py-1 px-3 rounded-full text-xs">
                ${t.tipo}
                </span>`,
                status: t => status(t.status_pagamento),
                "Ação": s => actions(`editar-whatsapp?tipo=${s.tipo}&status=${s.status_pagamento}`, 'fa-solid fa-eye', 'blue'),
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
        BotaoAdicionar,
        Loader
    },
    async mounted() {
        this.isLoad = 'true'
        let admin = new apiAdmin()
        let institution = new MyInstitution()
        let templates = new ApiTemplateWhats()
        let jwt = new Jwt()
        let adm_fk = jwt.get().code
        let institutionFk = institution.get()
        let request = await templates.listar(institutionFk)
        if (request.payload.length == 0) {
            await templates.install(institutionFk)
            request = await templates.listar(institutionFk)
        }
        this.lista = request.payload
        this.isLoad = 'false'

    },
    methods: {
        adapter(listAll) {
            return listAll.map(d => ({
                tipo: formatTipoPagamento(d.tipo),
                ...d,
            }))
        }
    },
    template: `
    <div>    
        <Loader :open="isLoad" />
        <BreadCrumb text="Home" text2="Modelo de WhatsApp" />
        <div class="relative pt-2 pb-32 bg-[#fff]">
            <div class="px-4 md:px-6 mx-auto w-full">
                <div>
                    <div class="flex flex-wrap">                
                        <CardGeral text="" size="full">
                            <Table :rows="lista" :cols="cols" pagination="10" />
                        </CardGeral>
                    </div>
                </div>
            </div>
        </div>    
    </div>`,
}