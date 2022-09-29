
export default {
    template: `
	<div>
    <div class="message"> 
    <div class="message-container"> 
    <p> {{msg}} </p>
    </div>
	</div>

    <div class="erro"> 
    <div class="erro-container"> 
    <p> {{error}} </p>
    </div>
	</div>
    </div>
    `,


    data: function () {
		return {

        }
    },
   props:{
       msg: String,
       error: String
   }
}  

