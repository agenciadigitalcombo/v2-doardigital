import Card  from "../components/Card.js"
import Botao  from "../components/Botao.js"
import BreadCrumb from "../components/BreadCrumb.js"
import CardCarteira from "../components/CardCarteira.js"
import { Form, Input, Button } from "../components/Form.js";

export default {
    data: function() {
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
        CardCarteira
    },
    template: `
    <div> 
        <BreadCrumb text="Home" text2="Configurações" />


        <div class="relative pt-6 pb-32 bg-[#fff]">
          <div class="px-4 md:px-6 mx-auto w-full">
             <div>
                <div class="flex flex-wrap">
                
                
<div class="mx-auto w-full">
    <div class="flex flex-wrap">
       
       <div class="pb-8 w-full xl:w-8/12 px-2">
          <div class="relative flex flex-col min-w-0 break-words w-full mb-8 shadow-lg rounded-lg bg-white text-blueGray-700">
             <div class="px-6 py-4 border-0">
                <div class="flex flex-wrap items-center">
                   <div class="relative w-full max-w-full flex-grow flex-1">
                      <h3 class="font-bold text-lg text-blueGray-700">Alterar Configurações</h3>
                   </div>
                </div>
             </div>
             <div class="block w-full overflow-x-auto">

             <div class="mx-auto w-[90%] lg:w-[95%] pt-8"> 
             <form class="js-form grid grid-cols-4 gap-4" v-html="inputs" @submit="atualizar"></form>    
         </div>
                <canvas width="20" height="20" style="display: block; box-sizing: border-box; height: 65px;" id="line-chart"></canvas>
             </div>
          </div>
       </div>
    </div>
                
                </div>
             </div>
          </div>
       </div>


       

       
    </div>`,
}