import Card from "../components/Card.js"
import Botao from "../components/Botao.js"
import BreadCrumb from "../components/BreadCrumb.js"
import CardCarteira from "../components/CardCarteira.js"
import CardGeral from "../components/CardGeral.js"

export default {
   data: function () {
      return {
      }
   },
   components: {
      Botao,
      Card,
      BreadCrumb,
      CardCarteira,
      CardGeral
   },
   template: `
    <div> 
      <BreadCrumb text="Home" text2="QR CODE" />
      <CardGeral text="QR CODE" size="sete">   
         <p>Baixe Agora seu QRCODE personalizado, para divulgar em suas lives, redes sociais e banners.</p>
         <br>
         <img src="/../assets/image/qrcode.png" alt="QR CODE" width="200" height="300">
             <br>
             <botao text="Fazer Download" />
      </CardGeral>



    </div>`,
}