import getTemplate from "./getTemplate.js"

export default {
    props: ['steps'],
    template : await getTemplate( './../components/Bread' ),
    data: function() {
        return {
            variations:{
            
            }
        }
    },
    mounted() {
    }
}