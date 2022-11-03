import Card  from "../components/Card.js"
import Botao  from "../components/Botao.js"
import BreadCrumb from "../components/BreadCrumb.js"
import CardCarteira from "../components/CardCarteira.js"
import Card2 from "../components/Card2.js"
import CardGeral from "../components/CardGeral.js"
import Loader from "../components/Loader.js"

export default {
    data: function() {
        return {
            isLoad: 'true',
        }
    },
    components: {
        Botao,
        Card,
        Card2,
        BreadCrumb,
        CardCarteira,
        CardGeral,
        Loader
    },
    async mounted() {

    },
    template: `
    <div>
    
    
    <BreadCrumb text="Home" text2="Módulos" />
    
    <div class="relative pt-2 pb-32 bg-[#fff]">
          <div class="px-4 md:px-6 mx-auto w-full">
             <div>
                <div class="flex flex-wrap">
                
                <CardGeral text="Domínio Personalizado" size="dois" class="text-center content-center">
                
                <section class="hero container max-w-screen-lg mx-auto">
                    <img class="mx-auto" src="https://hostdoar.tk/api/upload/6347bb57cfa5a1665645399.png">
                </section>
                <br>
                <Botao text="Configurar" variation="blue" link="#/dominio-personalizado"/>            
                </CardGeral>
            
                <CardGeral text="Configuração E-mail" size="dois" class="text-center content-center">
                <section class="hero container max-w-screen-lg mx-auto">
                    <img class="mx-auto" src="https://hostdoar.tk/api/upload/6347bb630fa7c1665645411.png">
                </section>
                <br>
                <Botao text="Configurar" variation="blue" link="#/configuracao-email"/>   
                </CardGeral>
            
                <CardGeral text="Disparo Whats" size="dois" class="text-center content-center">
                <section class="hero container max-w-screen-lg mx-auto">
                    <img class="mx-auto" src="https://hostdoar.tk/api/upload/634e600666c2e1666080774.png">
                </section>
                <br>
                <Botao text="Configurar" variation="blue" link="#/configuracao-whats"/>  
                </CardGeral>
            
                <CardGeral text="RD Station" size="dois" class="text-center content-center">
                <section class="hero container max-w-screen-lg mx-auto">
                    <img class="mx-auto" src="https://hostdoar.tk/api/upload/6347bb6eeaa721665645422.png">
                </section>
                <br>
                <Botao text="Configurar" variation="bg-blue-600" link="#/rd-station"/>   
                </CardGeral>

                <CardGeral text="Scripts" size="dois" class="text-center content-center">
                <section class="hero container max-w-screen-lg mx-auto">
                    <img class="mx-auto" src="https://hostdoar.tk/api/upload/6347bb6a2aca01665645418.png">
                </section>
                <br>
                <Botao text="Configurar" variation="blue" link="#/scripts"/>   
                </CardGeral>
            
               
                        
                </div>
             </div>
          </div>
       </div>
    
    </div>`,
}