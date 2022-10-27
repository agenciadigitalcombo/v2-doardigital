import Card from "../components/Card.js"
import Botao from "../components/Botao.js"
import BreadCrumb from "../components/BreadCrumb.js"
import CardCarteira from "../components/CardCarteira.js"
import CardGeral from "../components/CardGeral.js"
import { Form, Input, Button } from "../components/Form.js";
import ApiMetas from "../components/apiMetas.js"
import MyInstitution from "../components/myInstitution.js"

export default {
   data: function () {
      return {

         inputs: "",
         formData: {}
      }
   },
   async mounted() {
      
     
      let institution = new MyInstitution()
      let metas = new ApiMetas()
      let request = (await metas.get(institution.get(), 2022)).payload
      
      

      this.formData.janeiro = request.janeiro
      this.formData.fevereiro = request.fevereiro
      this.formData.marco = request.marco
      this.formData.abril = request.abril
      this.formData.maio = request.maio
      this.formData.junho = request.junho
      this.formData.julho = request.julho
      this.formData.agosto = request.agosto
      this.formData.setembro = request.setembro
      this.formData.outubro = request.outubro
      this.formData.novembro = request.novembro
      this.formData.dezembro = request.dezembro
         
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
         new Input('outubro', 'Outubro', 'text', 1),
         new Input('novembro', 'Novembro', 'text', 1),
         new Input('dezembro', 'Dezembro', 'text', 1),
         new Button('Atualizar'),
      ]
      globalThis.Dados = this.formData
      const form = new Form(inputs)
      this.inputs = form.render()
      
      console.log(request)


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
             
                
                </div>
             </div>
          </div>
       </div>
    
    </div>`,
}