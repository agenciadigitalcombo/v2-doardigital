import BreadCrumb from "../components/BreadCrumb.js"
import { Form, Input, Button, Text, Select } from "../components/Form.js";
import CardGeral from "../components/CardGeral.js";
import HeaderDoador from "../components/HeaderDoador.js"
import MyInstitution from "../components/myInstitution.js"
import ApiDoadores from "../components/apiDoadores.js"
import ApiAdmin from "../components/apiAdmin.js";
import { getUriData } from "../components/format.js"
import Jwt from "../components/jwt.js";
import HeaderAlt from "../components/HeaderAlt.js";
import ApiInstitution from "../components/apiInstitution.js"


export default {
    data: function () {
        return {
            totalFaturas: 0,
            ID: 0,
            Inst: 0,
            error_note: null,
            error_info: null,
            customer: null,
            info: {
                address: { bairro: null }
            },
            inputs: "",
            inputsEndereco: "",
            inputsAnotacoes: "",
            formData: {
                nome: "ok",
                scripts: ""
            },
            formDataEndereco: {
            },
            formDataAnotacoes: {
            }
        }
    },
    components: {
        BreadCrumb,
        CardGeral,
        HeaderDoador,
        HeaderAlt
    },
    async mounted() {

        globalThis.DadosAnotacoes = this.formDataAnotacoes
        let ID = getUriData('id')
        this.ID = ID
        let thisInstitution = new ApiInstitution()
        let request = await thisInstitution.get(ID)
        let formatRequestDoador = request.payload
        if (request.next) {
            this.Inst = formatRequestDoador.institution_fk
            this.info = formatRequestDoador
            this.formData = formatRequestDoador
            globalThis.Dados = this.formData
            this.renderInfo()
            this.renderAddress()
            this.renderBank()

        }
    },

    methods: {
        renderBank() {
            this.formData.agencia = this.info.agency
            this.formData.conta = this.info.account
            this.formData.contaDigito = this.info.accountDigit
            this.formData.bank = this.info.bank
            const inputsAnotacoes = [
                new Input('conta', 'Conta', 'text', 3, false, '', true),
                new Input('contaDigito', 'Digito', 'text', 1, false, '', true),
                new Input('agencia', 'Agência', 'text', 2, false, '', true),
                new Input('bank', 'Banco', 'text', 2, false, '', true),
                new Select('tipo', 'Tidpo', 4, [
                    new Option('CONTA_CORRENTE', 'Corrente'),
                    new Option('POUPANCA', 'Poupança'),
                ], false, this.formData.bankAccountType, true),
            ]
            const formBank = new Form(inputsAnotacoes)
            this.inputsAnotacoes = formBank.render()
        },
        renderInfo() {
            this.formData.nome = this.info.nome
            this.formData.email = this.info.email
            this.formData.telefone = this.info.telefone
            this.formData.cpfCnpj = this.info.cpfCnpj
            const inputs = [
                new Input('nome', 'Nome Fantasia', 'text', 4),
                new Input('email', 'Email', 'email', 4, true),
                new Input('telefone', 'Telefone', 'text', 4),
                new Input('cpfCnpj', 'CPF/CNPJ', 'text', 4),
                new Button('Atualizar Cadastro'),
            ]
            const form = new Form(inputs)
            this.inputs = form.render()
        },
        renderAddress() {
            this.formData.cep = this.info.endereco.cep
            this.formData.rua = this.info.endereco.logadouro
            this.formData.numero = this.info.endereco.numero
            this.formData.bairro = this.info.endereco.bairro
            this.formData.complemento = this.info.endereco.complemento
            this.formData.cidade = this.info.endereco.cidade
            this.formData.estado = this.info.endereco.estado
            const inputsEndereco = [
                new Input('cep', 'CEP', 'text', 4),
                new Input('rua', 'Logradouro', 'text', 4, true),
                new Input('numero', 'Número', 'text', 4, true),
                new Input('complemento', 'Complemento', 'text', 4, true),
                new Input('bairro', 'Bairro', 'text', 4, true),
                new Input('cidade', 'Cidade', 'text', 4, true),
                new Input('estado', 'Estado', 'text', 4, true),
                new Button('Atualizar Cadastro'),
            ]
            const formEndereco = new Form(inputsEndereco)
            this.inputsEndereco = formEndereco.render()
        },
        adapter(listAll) {
            return listAll.map(d => ({
                ...d,
            }))

        },
        async atualizar() {
            this.error_info = null
            console.log(this.formData)

            let api = new ApiInstitution()
            let request = await api.update(
                this.Inst,
                this.formData.nome,
                this.formData.email,
                this.formData.telefone,
                this.formData.domain,
                this.formData.logo,
                this.formData.logo,
                this.formData.cor,
                this.formData.nome,
                this.formData.tags,
                'instituição',
                this.formData.cep,
                this.formData.rua,
                this.formData.numero,
                this.formData.complemento,
                this.formData.bairro,
                this.formData.cidade,
                this.formData.estado

            )

            this.error_info = request.message
            if (request.next) {
                window.location.href = `#/minhas-instituicoes`
            }

        },
    },
    template: `
    <div> 
      <BreadCrumb text="Home" text2="Editar Instituição" />
      <div class="relative pt-2 pb-32 bg-[#fff]">
          <div class="px-4 md:px-6 mx-auto w-full">
             <div>
             <p v-show="error_info">{{error_info}}</p>
                <div class="flex flex-wrap">

                <CardGeral text="Editar Dados da Instituição" size="tres" value="">
                
                <form action="javascript:void(0)" method="POST" class="js-form grid grid-cols-4 gap-4" v-html="inputs" @submit="atualizar"></form>                           
                </CardGeral>
                
                <CardGeral text="Editar Endereço da Instituição" size="tres">
                <form action="javascript:void(0)" method="POST" class="js-form grid grid-cols-4 gap-4" v-html="inputsEndereco" @submit="atualizar"></form>
                </CardGeral>

                <CardGeral text="Dados Bancários" size="tres">
                <form action="javascript:void(0)" method="POST" class="js-form grid grid-cols-4 gap-4" v-html="inputsAnotacoes" @submit="add_note"></form>
                <br>
                <p>Caso queira alterar dados bancários, entrar em contato com o suporte.</p>
                </CardGeral>
                
                
    </div>`,
}