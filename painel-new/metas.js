import Card  from "../components/Card.js"
import Botao  from "../components/Botao.js"
import BreadCrumb from "../components/BreadCrumb.js"
import CardCarteira from "../components/CardCarteira.js"
import CardGeral from "../components/CardGeral.js"
import { Form, Input, Button } from "../components/Form.js";

export default {
    data: function () {
       return {
          inputs: "",
          scripts: "",
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
          new Input('janeiro', 'Janeiro', 'text', 1),
          new Input('fevereiro', 'Fevereiro', 'text', 1),
          new Input('marco', 'Março', 'text', 1),
          new Input('abril', 'Abril', 'text', 1),
          new Input('maio', 'Maio', 'text', 1),
          new Input('junho', 'Junho', 'text', 1),
          new Input('julho', 'Julho', 'text', 1),
          new Input('agosto', 'Agosto', 'text', 1),
          new Input('setembro', 'Setembro', 'text', 1),
          new Input('outrubro', 'Outubro', 'text', 1),
          new Input('novembro', 'Novebrm', 'text', 1),
          new Input('dezembro', 'Dezembro', 'text', 1),
          new Button('Atualizar'),
       ]
       globalThis.Dados = this.formData
       const form = new Form(inputs)
       this.inputs = form.render()
    },
    components: {
        Botao,
        Card,
        BreadCrumb,
        CardCarteira,
        CardGeral
    },
    template: `
    <div>
    
    
    <BreadCrumb text="Home" text2="Metas" />
    
    <div class="relative pt-2 pb-32 bg-[#fff]">
          <div class="px-4 md:px-6 mx-auto w-full">
             <div>
                <div class="flex flex-wrap">
                <CardGeral text="Metas" size="sete">   
                    <form class="js-form grid grid-cols-4 gap-4" v-html="inputs" @submit="atualizar"></form> 
                </CardGeral>

                <CardGeral text="Gráfico" size="sete">
                </CardGeral>
                
                
                </div>
             </div>
          </div>
       </div>
    
    </div>`,
}