import getTemplate from "./getTemplate.js"

export default {
    props: ['name','variation','icon','recorrente','gravatar','faturas','assinaturas','anotacoes','editar','enviarMensagem','criarFatura'],
    template : await getTemplate( './../components/HeaderDoador' ),
    data: function() {
        return {
            dashboard: false,
            icons:{
            },
            variations:{
            }
        }
    },
    mounted() {
    }
}