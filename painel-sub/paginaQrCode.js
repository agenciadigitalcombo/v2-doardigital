import Card from "../components/Card.js"
import Botao from "../components/Botao.js"
import BreadCrumb from "../components/BreadCrumb.js"
import CardCarteira from "../components/CardCarteira.js"
import CardGeral from "../components/CardGeral.js"
import Qr from "../components/Qr.js"
import Inst from "../components/apiInstitution.js"
import MyInstitution from "../components/myInstitution.js"
import Loader from "../components/Loader.js"

export default {
   data: function () {
      return {
         isLoad: 'true',
         link: null
      }
   },
   components: {
      Botao,
      Card,
      BreadCrumb,
      CardCarteira,
      CardGeral,
      Qr,
      Loader
   },
   async mounted() {
      this.isLoad = 'true'
      let institution = new MyInstitution()
      let inst = new Inst()
      let request = await inst.get(institution.get())
      let url = "https://" + (request.payload.domain ? request.payload.domain : request.payload.subdomain)
      console.log( request.payload.domain )
      console.log( request.payload.subdomain )
      console.log( url )
      this.link = url
      this.isLoad = 'false'

   },
   template: `
    <div>
      <Loader :open="isLoad" /> 
      <BreadCrumb text="Home" text2="QR CODE" />
      <div class="relative pt-2 pb-32 bg-[#fff]">
          <div class="px-4 md:px-6 mx-auto w-full">
             <div>
                <div class="flex flex-wrap ">
                
                <CardGeral text="QR CODE" size="sete">   
         <p>Baixe Agora seu QRCODE personalizado, para divulgar em suas lives, redes sociais e banners.</p>
         <br>
            <div v-if="link">
               <Qr :qr="link" />
            </div>
             <br>
      </CardGeral>
                
                
                </div>
             </div>
          </div>
       </div>
      



    </div>`,
}