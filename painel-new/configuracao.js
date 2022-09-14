import Card  from "../components/Card.js"
import Botao  from "../components/Botao.js"
import BreadCrumb from "../components/BreadCrumb.js"
import CardCarteira from "../components/CardCarteira.js"

export default {
    data: function() {
        return {
        }
    },
    components: {
        Botao,
        Card,
        BreadCrumb,
        CardCarteira
    },
    template: `
    <div>
    
    
    <BreadCrumb text="Home" text2="Configuração" />
    
    <div class="relative pt-10 pb-32 bg-[#f9fafb]">
          <div class="px-4 md:px-6 mx-auto w-full">
             <div>
                <div class="flex flex-wrap">
                
                
                
                </div>
             </div>
          </div>
       </div>
    
    </div>`,
}