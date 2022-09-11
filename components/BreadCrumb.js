import getTemplate from "./getTemplate.js"

export default {
    props: ['link','text','text2','target','variation'],
    template : await getTemplate( './../components/BreadCrumb' ),
    data: function() {
        return {
            variations:{
            
            }
        }
    },
    mounted() {
    }
}