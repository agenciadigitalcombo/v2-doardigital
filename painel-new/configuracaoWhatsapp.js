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
    async mounted() {
        this.isLoad = 'true'       
        let api = new ApiAwsWhats()
        let res = await api.status()
        if( res.payload?.qrcode?.length > 7 && res.payload?.status == 'QRCODE'  ) {
            this.src = res.payload.qrcode
            this.status = res.payload.status
        }
        this.isLoad = 'false'
    },
    methods: { 
        async connect() {            
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
        }
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
                            <h2 class="block text-center mb-2">{{status}}</h2>                
                            <img :src="src" class="w-[300px] mx-auto">
                        </div>
                        <Botao text="Conectar" @click="connect" /></Botao>
                    </CardGeral>

                </div>
             </div>
          </div>
       </div>
    
    </div>`,
}