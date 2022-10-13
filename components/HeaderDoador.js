import getTemplate from "./getTemplate.js"

export default {
    props: ['name','variation','icon','recorrente','gravatar','faturas','assinaturas','anotacoes','editar','enviarMensagem','criarFatura', 'ID'],
    template : await getTemplate( './../components/headerdoador' ),
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