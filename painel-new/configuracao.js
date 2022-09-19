import Card from "../components/Card.js"
import Botao from "../components/Botao.js"
import BreadCrumb from "../components/BreadCrumb.js"
import CardCarteira from "../components/CardCarteira.js"
import { Form, Input, Button } from "../components/Form.js";
import CardGeral from "../components/CardGeral.js";

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
         new Input('siteName', 'Título do Site', 'text', 4),
         new Input('scripts', 'Scripts Javascript (Header)', 'email', 4, true),
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
      <BreadCrumb text="Home" text2="Configurações" />

      <div class="relative pt-2 pb-32 bg-[#fff]">
          <div class="px-4 md:px-6 mx-auto w-full">
             <div>
                <div class="flex flex-wrap">
                
                <CardGeral text="Alterar Configurações" size="quatro">   
        <div class="mx-auto w-[90%] lg:w-[95%] pt-8"> 
             <form class="js-form grid grid-cols-4 gap-4" v-html="inputs" @submit="atualizar"></form>    
         </div>
                <canvas width="20" height="20" style="display: block; box-sizing: border-box; height: 65px;" id="line-chart"></canvas>
             </div>
    </CardGeral>
                
                
                </div>
             </div>
          </div>
       </div>


        


        

       
    </div>`,
}