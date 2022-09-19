import getTemplate from "./getTemplate.js"

export default {
    props: ['link','text','value','variation','tax','icon'],
    template : await getTemplate( './../components/Filtro' ),
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