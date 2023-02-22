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
    
    
    <BreadCrumb text="Home" text2="Configurações" />
    
    <div class="relative pt-2 pb-32 bg-[#fff]">
          <div class="px-4 md:px-6 mx-auto w-full">
             <div>
                <div class="flex flex-wrap">              
                
            
                <CardGeral text="Checkout" size="3" class="text-center content-center">
                <section class="hero container max-w-screen-lg mx-auto">
                    <img class="mx-auto" src="/assets/image/lista-de-desejo.png">
                </section>
                <br>
                <Botao text="Configurar" variation="blue" link="#/configuracao-checkout"/>   
                </CardGeral>

                <CardGeral text="Configuração LandPage" size="3" class="text-center content-center">
                
                <section class="hero container max-w-screen-lg mx-auto">
                    <img class="mx-auto" src="/assets/image/gerenciador-de-temas.png">
                </section>
                <br>
                <!-- link="#/configuracao-landpage" -->
                <Botao text="Configurar" variation="blueNot" />            
                </CardGeral>
               
                        
                </div>
             </div>
          </div>
       </div>
    
    </div>`,
}