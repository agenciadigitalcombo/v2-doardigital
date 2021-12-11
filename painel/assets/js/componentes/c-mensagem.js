
export default {
    template: `
	<div>
    <div class="message"> 
    <div class="message-container"> 
    <p> {{msg}} </p>
    </div>
	</div>
    </div>
    `,


    data: function () {
		return {
            gravatar: '../painel/assets/image/gravatar.png'

        }
    },
   props:{
       msg: String
   }
}  

