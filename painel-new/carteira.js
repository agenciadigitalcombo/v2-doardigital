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
    
    
    <BreadCrumb text="Home" text2="Carteira" />
    
    <div class="relative pt-10 pb-32 bg-[#f9fafb]">
          <div class="px-4 md:px-6 mx-auto w-full">
             <div>
                <div class="flex flex-wrap">
                <Card text="Saldo Liberado" value="R$ 8.900,55" variation="blue" icon="bar" size="3"/>
                <Card text="Saldo á liberar" value="R$ 5.255,55" variation="yellow" size="3"/>
                <Card text="Total Já Sacado" value="R$ 28.900,55" variation="green" icon="heart" size="3"/>
                
                <CardCarteira />
                
                
                </div>
             </div>
          </div>
       </div>
    
    </div>`,
}