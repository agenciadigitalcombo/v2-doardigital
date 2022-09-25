import BreadCrumb from "../components/BreadCrumb.js"
import { Form, Input, Button } from "../components/Form.js";
import CardGeral from "../components/CardGeral.js";
import HeaderDoador from "../components/HeaderDoador.js"
import MyInstitution from "../components/myInstitution.js"
import ApiDoadores from "../components/apiDoadores.js"
import { getUriData, data, formataMoeda } from "../components/format.js"

export default {
    data: function () {
        return {
            totalFaturas: 0,
            inputs: "",
            inputsEndereco: "",
            scripts: "",
            formData: {
                name: "Bruno"
            },
            formDataEndereco: {
                name: "Bruno"
            }
        }
    },
    async mounted() {
        const inputs = [
            new Input('siteName', 'Título do Site', 'text', 4),
            new Input('scripts', 'Scripts Javascript (Header)', 'email', 4, true),
            new Button('Salvar Alterações'),
        ]
        const inputsEndereco = [
            new Input('CEP', 'CEP', 'text', 4),
            new Input('Rua', 'Logradouro', 'email', 4, true),
            new Button('Salvar Alterações'),
        ]
        globalThis.Dados = this.formData
        globalThis.DadosEndereco = this.formDataEndereco
        const form = new Form(inputs)
        const formEndereco = new Form(inputsEndereco)
        this.inputs = form.render()
        this.inputsEndereco = formEndereco.render()
        //
        let ID = getUriData('id')
        let doadores = new ApiDoadores()
        let institution = new MyInstitution()
        let request = await doadores.lista(institution.get(ID))
        
        if (request.next) {
            this.info = request.payload
            console.log(request.payload)
        }
    },
    components: {
        BreadCrumb,
        CardGeral,
        HeaderDoador
    },
    template: `
    <div> 
      <BreadCrumb text="Home" text2="Editar Doador" />
      <HeaderDoador />
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
                <form class="js-form grid grid-cols-4 gap-4" v-html="inputs" @submit="atualizar"></form>
                </CardGeral>
                
    </div>`,
}