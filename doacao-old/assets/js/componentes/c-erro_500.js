
export default {
    template: `
  
	<div class="loading_card">

    <div class="lds-text"> 

    <div class="text-center"> 
    <img style="width: 50px;" src="../../doacao/assets/icons/erro.png" class="rounded">
    </div>

    <div class="m-5">
  
   <h1>
    {{ text }}
<br>
    {{ text2 }}
    </h1>
    </div> 
   
  <a href="#/" class="btn btn-info btn-hover-rotate-start">Voltar</a>
 
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
            default: 'Houve um erro na transação. ',
        },
        text2: {
            required: false,
            type: String,
            default: 'Por favor, tente novamente mais tarde ou entre em contato com o suporte ...',
        }
    }
}

