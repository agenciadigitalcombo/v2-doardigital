import Card from "../components/Card.js"
import Botao from "../components/Botao.js"
import BreadCrumb from "../components/BreadCrumb.js"
import CardCarteira from "../components/CardCarteira.js"
import CardGeral from "../components/CardGeral.js"
import Table from "../components/Table.js"
import MyInstitution from "../components/myInstitution.js"
import ApiPlanos from "../components/apiPlanos.js"
import actions from "../components/actions.js"
import { Form, Input, Button, Text, Select, Option, Check } from "../components/Form.js";
import ApiCredencial from "../components/apiCredencial.js"
import recursos from "../components/recursos.js"

export default {
    data: function () {
        return {
            error: null,
            inputs: "",
            formData: {
            },
            transferencias: [],
            cols: {
                value: d => `${d.value}`,
                action: e => actions(`editar-credencial?id=${e.id}`, 'fa-solid fa-eye', 'blue')
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
        let request = await transferencias.listarPlanoDigital(institution.get())
        let requestTransform = request.payload
        if (request.next) {
            this.transferencias = this.adapter(requestTransform)

            console.log(recursos)
        }
        const inputs = [
            new Input('nome', 'Nome', 'text', 4),
        ]
        recursos.forEach( r => {
            inputs.push(new Check(r.slug.replace(/\-/gi, '_'), r.name, 2))
        } )
        inputs.push(new Button('Criar'))
        globalThis.Dados = this.formData
        const form = new Form(inputs)
        this.inputs = form.render()

    },
    methods: {
        adapter(listAll) {
            return listAll.map(d => ({
                value: d.price,
                ...d,
            }))
        },
        async atualizar() {
            this.error = null
            let api = new ApiCredencial()
            let allRecursos = Object.keys( this.formData ).filter( k => this.formData[k] === true )
            allRecursos = allRecursos.map( s => s.replace(/_/gi, '-') ).join(',')
            

            let request = await api.cadastrar(
                this.formData.nome,
                allRecursos
            )
            this.error = request.message
            if (!request.next) {
                return
            }

            window.location.href = "#/credenciais"
        }
    },
    template: `
    <div>
        <BreadCrumb text="Home" text2="Criar Credencial" />
        <div class="relative pt-2 pb-32 bg-[#fff]">
            <div class="px-4 md:px-6 mx-auto w-full">
                <div>
                    <div class="flex flex-wrap">
                        <CardGeral text="Criar Credencial" size="quatro">
                            <form action="javascript:void(0)" method="POST" class="js-form grid grid-cols-4 gap-4" v-html="inputs" @submit="atualizar"></form>
                            <div v-show="error">{{error}}</div>
                        </CardGeral>
                    </div>
                </div>
            </div>
        </div>
    </div>`,
}