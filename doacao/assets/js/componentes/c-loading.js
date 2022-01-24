
export default {
    template: `
  
	<div class="loading_card">

    <div class="lds-roller">
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
  
    </div> 
    <div class="lds-text"> 
    {{ text }}
  </div>
    </div>
 
    `,


    data: function () {
        return {

        }
    },
    props: {
        text: {
            required: false,
            type: String,
            default: 'Carregando...',
        }
    }
}

