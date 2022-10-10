import Card  from "../components/Card.js"
import Botao  from "../components/Botao.js"
import BreadCrumb from "../components/BreadCrumb.js"
import CardCarteira from "../components/CardCarteira.js"
import Card2 from "../components/Card2.js"
import CardGeral from "../components/CardGeral.js"

export default {
    data: function() {
        return {
        }
    },
    components: {
        Botao,
        Card,
        Card2,
        BreadCrumb,
        CardCarteira,
        CardGeral
    },
    template: `
    <div>
    
    
    <BreadCrumb text="Home" text2="Módulos" />
    
    <div class="relative pt-2 pb-32 bg-[#fff]">
          <div class="px-4 md:px-6 mx-auto w-full">
             <div>
                <div class="flex flex-wrap">
                
                <CardGeral text="Domínio Personalizado" size="tres">
                <img src="https://painel.doardigital.com.br/painel/assets/logo/logo-modulos/registro-dominios.png" alt="QR CODE" width="200" height="300">
                <br>
                <botao text="Fazer Download" />              
                </CardGeral>
            
                <CardGeral text="Configuração E-mail" size="tres">   
                </CardGeral>
            
                <CardGeral text="Tag Manager" size="tres">   
                </CardGeral>
            
                <CardGeral text="E-vendas" size="tres">   
                </CardGeral>
            
                <CardGeral text="RD Station" size="tres">   
                </CardGeral>
            
                <CardGeral text="Mailling Boss" size="tres">   
                </CardGeral>
                        
                </div>
             </div>
          </div>
       </div>
    
    </div>`,
}