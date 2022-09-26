import BreadCrumb from "../components/BreadCrumb.js"
import { Form, Input, Button, Text } from "../components/Form.js";
import CardGeral from "../components/CardGeral.js";
import HeaderDoador from "../components/HeaderDoador.js"
import MyInstitution from "../components/myInstitution.js"
import ApiDoadores from "../components/apiDoadores.js"
import { getUriData } from "../components/format.js"

export default {
    data: function () {
        return {
            totalFaturas: 0,
            info: {
                address: { bairro: null }
            },
            inputs: "",
            inputsEndereco: "",
            inputsAnotacoes: "",
            formData: {
                nome: "",
                scripts: ""
            },
            formDataEndereco: {
                cep: "056000",
                rua: "056000",
            },
            formDataAnotacoes: {
                cep: "056000",
                rua: "056000",
            }
        }
    },
    components: {
        BreadCrumb,
        CardGeral,
        HeaderDoador
    },
    async mounted() {
        const inputs = [
            new Input('nome', 'Nome', 'text', 4),
            new Input('email', 'Email', 'email', 4, true),
            new Input('telefone', 'Telefone', 'text', 4),
            new Input('cpf', 'CPF', 'text', 4),
            new Button('Salvar Alterações'),
        ]
        const inputsEndereco = [
            new Input('cep', 'CEP', 'text', 4),
            new Input('rua', 'Logradouro', 'text', 4, true),
            new Input('numero', 'Número', 'text', 4, true),
            new Input('bairro', 'Bairro', 'text', 4, true),
            new Input('cidade', 'Cidade', 'text', 4, true),
            new Input('estado', 'Estado', 'text', 4, true),
            new Button('Salvar Alterações'),
        ]
        const inputsAnotacoes = [
            new Text('mensagem', 'Mensagem', 4, true),
            new Button('Criar Anotação'),
        ]
        globalThis.Dados = this.formData
        globalThis.DadosEndereco = this.formDataEndereco
        globalThis.DadosAnotacoes = this.formDataAnotacoes
        const form = new Form(inputs)
        const formEndereco = new Form(inputsEndereco)
        const formAnotacoes = new Form(inputsAnotacoes)
        this.inputs = form.render()
        this.inputsEndereco = formEndereco.render()
        this.inputsAnotacoes = formAnotacoes.render()
        //
        let ID = getUriData('id')
        let institution = new MyInstitution()
        let doador = new ApiDoadores()
        let request = await doador.detalhe(ID)
        let formatRequestDoador = request.payload
        
        if (request.next) {
            this.info = formatRequestDoador
            console.log(formatRequestDoador)
        }
    },
    methods: {
        adapter(listAll) {
            return listAll.map(d => ({
                name: d.doador_nome,
                email: d.doador_email,
                datas: d.data,
                value: d.valor,
                status: d.status_pagamento,
                tipo: d.tipo_pagamento,
                id: d.fatura_id,
                ...d,
            }))

        },
    },
    template: `
    <div> 
      <BreadCrumb text="Home" text2="Editar Doador" />
      <HeaderDoador :recorrente="info.recorrente" :name="info.nome" :gravatar="info.gravatar" />
      <div class="relative pt-2 pb-32 bg-[#fff]">
          <div class="px-4 md:px-6 mx-auto w-full">
             <div>
                <div class="flex flex-wrap">

                <CardGeral text="Editar Dados do Doador" size="tres" value="">
                
                <form class="js-form grid grid-cols-4 gap-4" v-html="inputs" @submit="atualizar"></form>                           
                </CardGeral>
                
                <CardGeral text="Editar Endereço do Doador" size="tres">
                <form class="js-form grid grid-cols-4 gap-4" v-html="inputsEndereco" @submit="atualizar"></form>
                </CardGeral>

                <CardGeral text="Criar Anotação" size="tres">
                <form class="js-form grid grid-cols-4 gap-4" v-html="inputsAnotacoes" @submit="atualizar"></form>
                </CardGeral>
                
    </div>`,
}