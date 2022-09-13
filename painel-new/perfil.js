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
    methods: {
        atualizar() {
            
            alert('tafarellll')
        }
    },
    mounted() {
        const inputs = [
            new Input('name', 'Nome', 'text', 2),
            new Input('lastName', 'Sobrenome', 'text', 2),
            new Input('apelido', 'Apelido', 'text', 4),
            new Input('email', 'email', 'email', 7, true),
            new Input('data', 'data nascimento', 'date', 2, true),
            new Input('cpf', 'CPF', 'text', 2, true),
            new Input('CEP', 'CEP', 'text', 3, true),
            new Input('numero', 'Número', 'text', 1, true),
            new Button('Enviar'),
        ]
        globalThis.Dados = this.formData
        const form = new Form(inputs)
        this.inputs = form.render()
    },
    template: `
    <div>   
        <div class="mx-auto w-[90%] lg:w-[500px] pt-8"> 
            <span class="block mb-4">
                Olá {{formData.name}} 
            </span>
            <form class="js-form grid grid-cols-4 gap-4" v-html="inputs" @submit="atualizar"></form>    
        </div>
    </div>`,
}