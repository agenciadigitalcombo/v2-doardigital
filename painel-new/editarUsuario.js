import Card from "../components/Card.js"
import Botao from "../components/Botao.js"
import BreadCrumb from "../components/BreadCrumb.js"
import CardCarteira from "../components/CardCarteira.js"
import CardGeral from "../components/CardGeral.js"
import Table from "../components/Table.js"
import MyInstitution from "../components/myInstitution.js"
import ApiPlanos from "../components/apiPlanos.js"
import actions from "../components/actions.js"
import ApiInstitution from "../components/apiInstitution.js"
import apiAdmin from "../components/apiAdmin.js"
import { Form, Input, Button, Text, Select, Option, Check } from "../components/Form.js"
import { getUriData, data, formataMoeda, formatRecorrente } from "../components/format.js"
import Jwt from "../components/jwt.js"
import ApiCredencial from "../components/apiCredencial.js"
import Loader from "../components/Loader.js"

export default {
    data: function () {
        return {
            isLoad: 'true',
            error: null,
            inputs: "",
            name: "",
            lastName: "",
            email: "",
            data: "",
            cpf: "",
            inputsAnotacoes: "",
            lista: [],
            inst_sub: [],
            listaInst: [],
            formData: {},
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
        Table,
        Loader
    },
    async mounted() {
        this.isLoad = 'true'
        let ID = getUriData('id')
        this.ID = ID
        let admin = new apiAdmin()
        let Inst = new ApiInstitution()
        let jwt = new Jwt()
        let adm_fk = jwt.get().code
        let requestInst = await Inst.list(adm_fk)
        let request = await admin.list_all_subs(adm_fk)
        let lista = request.payload
        let ids = lista.filter(p => p.code === ID)
        let transformIds = ids[0]

        this.formData.name = transformIds.nome
        this.formData.email = transformIds.email
        this.formData.phone = transformIds.telefone
        this.formData.credencial = transformIds.credencial

        let apiCred = new ApiCredencial()
        let allCredencial = await apiCred.listar()
        let arrCred = allCredencial.payload.map(c => new Option(c.id, c.nome_identificacao))
        this.formData.credencial = allCredencial.payload[0].id

        this.inst_sub = (await Inst.list(this.ID)).payload.map(i => i.institution_fk)

        if (request.next) {
            this.renderInst()
            this.listaInst = requestInst.payload
        }
        const inputs = [
            new Input('name', 'Nome', 'text', 4),
            new Input('email', 'Email', 'email', 2, true, '', true),
            new Input('phone', 'Telefone', 'text', 2),
            new Select('credencial', "Credencial", 4, arrCred, true, transformIds.credencial),
            new Button('Atualizar Usuário'),
        ]
        globalThis.Dados = this.formData
        const form = new Form(inputs)
        this.inputs = form.render()
        this.isLoad = 'false'

    },
    methods: {
        renderInst() {
            const inputsAnotacoes = [
                new Text('mensagem', 'Mensagem', 4, true),
                new Button('Criar Anotação'),
            ]
            const formAnotacoes = new Form(inputsAnotacoes)
            this.inputsAnotacoes = formAnotacoes.render()
        },
        adapter(listAll) {
            return listAll.map(d => ({
                ...d,
            }))
        },
        adapter(listAll) {
            return listAll.map(d => ({
                ...d,
            }))
        },
        async atualizar() {
            this.error = null
            let admin = new apiAdmin()
            let request = await admin.update(
                this.ID,
                this.formData.name,
                '00000000000',
                '0000-00-00',
                this.formData.phone,
                this.formData.credencial
            )
            this.error = request.message
            if( !request.next ) {
                return
            }
            window.location.href = "#/usuarios"
            
        },
        async toggleAdm(e) {
            let action = e.target.checked ? "1" : "0"
            let inst_fk = e.target.getAttribute('data-fk')
            let adm_fk = this.ID
            let inst = new ApiInstitution()
            let request = await inst.add_admin(
                inst_fk,
                adm_fk,
                action
            )
        }
    },
    template: `
    <div>
        <Loader :open="isLoad" />
        <BreadCrumb text="Home" text2="Editar Usuário" />
        <div class="relative pt-2 pb-32 bg-[#fff]">
            <div class="px-4 md:px-6 mx-auto w-full">
                <div>
                    <div class="flex flex-wrap">
                        <CardGeral text="Editar Usuário" size="quatro">
                            <form method="POST" action="javascript:void(0)" class="js-form grid grid-cols-4 gap-4" v-html="inputs" @submit="atualizar"></form>
                            <div v-show="error">{{error}}</div>
                            
                        </CardGeral>
                        <CardGeral text="Acessos" size="quatro">
                            <label v-for="i in listaInst" class="block">
                                <input type="checkbox" @click="toggleAdm" :checked="inst_sub.includes(i.institution_fk)"
                                    :data-fk="i.institution_fk" />
                                {{ i.nome }}
                            </label>
                        </CardGeral>
                    </div>
                </div>
            </div>
        </div>
    </div>`,
}