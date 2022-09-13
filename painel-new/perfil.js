import { Form, Input, Button } from "../components/Form.js";

export default {
    data: function () {
        return {
            inputs: "",
            name: "Bruno",
            lastName: "",
            email: "",
            data: "",
            cpf: "",
            formData: {
                name: "Bruno"
            }
        }
    },
    mounted() {
        const inputs = [
            new Input('name', 'Nome', 'text', 2),
            new Input('lastName', 'Sobrenome', 'text', 2),
            new Input('email', 'email', 'email', 7, true),
            new Input('data', 'data nascimento', 'date', 2, true),
            new Input('cpf', 'CPF', 'text', 2, true),
            new Button('Enviar'),
        ]
        globalThis.Dados = this.formData
        const form = new Form(inputs)
        this.inputs = form.render()
    },
    template: `
    <div>   
        <div class="mx-auto w-[500px] pt-8"> 
            <span class="block mb-4">
                Olá {{formData.name}} 
            </span>
            <form class="js-form grid grid-cols-4 gap-4" v-html="inputs"></form>    
        </div>
    </div>`,
}