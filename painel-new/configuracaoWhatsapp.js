import Card  from "../components/Card.js"
import Botao  from "../components/Botao.js"
import BreadCrumb from "../components/BreadCrumb.js"
import CardCarteira from "../components/CardCarteira.js"
import Card2 from "../components/Card2.js"
import CardGeral from "../components/CardGeral.js"
import Loader from "../components/Loader.js"
import Bread from "../components/Bread.js"
import ApiAwsWhats from "../components/apiAwsWhats.js"

export default {
    data: function() {
        return {
            isLoad: 'true',
            inputs: "",
            message: null,
            resAws: null,
            formData: {},
            src: null,
            status: null,
            carregando: false,
            color: {
                Pending: "bg-[#05f]",
                Success: "bg-[#080]",
                Failed: "bg-[#c00]",
            },
            isColor: 'bg-[#CCC]'
        }
    },
    components: {
        Botao,
        Card,
        Card2,
        BreadCrumb,
        Bread,
        CardCarteira,
        CardGeral,
        Loader
    },
    methods: { 
        async UpdateStatus() {
            let api = new ApiAwsWhats()
            let res = await api.status()
            this.src = res.payload?.qrcode
            this.status = res.payload?.status
            if(  res.payload?.status != 'QRCODE'  ) {
                this.src = null
            }
            if(res.payload?.status == 'CONNECTED') {
                // window.location.reload()
            }
        },
        async connect() { 
            this.carregando = true           
            let api = new ApiAwsWhats()
            let res = await api.connect()
            if( res.payload?.message == 'Token is not present. Check your header and try again' ) {
                await api.create()
                res = await api.connect()
                
            }
            if( res.payload?.qrcode?.length > 7 ) {
                this.src = res.payload.qrcode
            }else {
                setTimeout(() => {
                    this.connect()
                }, 750);
            }
            this.carregando = false
        },
        async close() {            
            let api = new ApiAwsWhats()
            let res = await api.close()
        }
    },
    async mounted() {
        this.isLoad = 'true'
        this.UpdateStatus()
        setInterval(() => {
            this.UpdateStatus()            
        }, 20000);     
        
        this.isLoad = 'false'
    },
    template: `
    <div>
    <Loader :open="isLoad" />
        
    <Bread :steps="[
        ['Home','#/dashboard'],
        ['Módulos','#/modulos'],
        ['WhatsApp','#/configuracao-whatsapp'],
    ]" 
    />

    <div class="relative pt-2 pb-32 bg-[#fff]">
          <div class="px-4 md:px-6 mx-auto w-full">
             <div>
                <div class="flex flex-wrap">
                
                <CardGeral text="Configuração WhatsApp" size="cinco">
                        <div v-if="src">               
                            <img :src="src" class="w-[300px] mx-auto">
                        </div>
                        <div class="flex justify-center">
                        <div :class="carregando && 'cursor-progress'">
                            <Botao :class="src && 'cursor-not-allowed'" :text="carregando ? 'Conectando...' : 'Conectar'" @click="connect" /></Botao>
                        </div>
                        <Botao class="hidden" text="Encerrar" @click="close" variation="red" /></Botao>
                        </div>
                    </CardGeral>

                </div>
             </div>
          </div>
       </div>
    
    </div>`,
}