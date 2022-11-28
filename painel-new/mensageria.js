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
    
    
    <BreadCrumb text="Home" text2="Mensageria" />
    
    <div class="relative pt-2 pb-32 bg-[#fff]">
          <div class="px-4 md:px-6 mx-auto w-full">
             <div>
                <div class="flex flex-wrap">

                <div class="flex flex-wrap">
                <Card :tax="totalDonations" text="Total de Disparos E-mail" value="500" variation="blue" icon="bar" size="4" />
                <Card :tax="statusRecebido" text="Total de Disparos Whats" value="500" icon="heart" variation="green" size="4" />
                <Card :tax="statusAguardando" text="Disparos Restantes" value="500" variation="yellow" icon="heart" size="4" />
                <br><br><br><br><br>
                <Card :tax="statusOverdue" text="Taxa de Sucesso" value="100%" variation="red" icon="heart" size="4" />
                          
                <CardGeral text="Configuração E-mail" size="4" class="text-center content-center">
                <section class="hero container max-w-screen-lg mx-auto">
                    <img class="mx-auto" src="https://hostdoar.tk/api/upload/6347bb630fa7c1665645411.png">
                </section>
                <br>
                <Botao text="Configurar" variation="blue" link="#/configuracao-email"/>   
                </CardGeral>

                <CardGeral text="Modelo de e-mails" size="4" class="text-center content-center">
                <section class="hero container max-w-screen-lg mx-auto">
                    <img class="mx-auto" src="https://hostdoar.tk/api/upload/6347bb630fa7c1665645411.png">
                </section>
                <br>
                <Botao text="Configurar" variation="blue" link="#/configuracao-email"/>   
                </CardGeral>
            
                <CardGeral text="Disparo Whats" size="4" class="text-center content-center">
                <section class="hero container max-w-screen-lg mx-auto">
                    <img class="mx-auto" src="/assets/image/chat-whatsapp.png">
                </section>
                <br>
                <Botao text="Configurar" variation="blueNot" />  
                </CardGeral>

                <CardGeral text="Modelo de Whats" size="4" class="text-center content-center">
                <section class="hero container max-w-screen-lg mx-auto">
                    <img class="mx-auto" src="/assets/image/chat-whatsapp.png">
                </section>
                <br>
                <Botao text="Configurar" variation="blueNot" />  
                </CardGeral>
            
                <CardGeral text="Quantidade de Disparos este Mês" size="full">

                <div ref="quantidadeDoacoes"></div>
    
                </CardGeral>
    
                <CardGeral text="Total em Disparos" size="quatro">
                <div id="chart" style="max-width: 760px;">
                <div ref="statusDoacoes"></div>
                </div>
                </CardGeral>
                <CardGeral text="Status" size="quatro">
                <div id="chart" style="max-width: 760px;">
                <div ref="tiposDoadores"></div>
                </div>
                </CardGeral>
                

               
            
               
                        
                </div>
             </div>
          </div>
       </div>
    
    </div>`,
}