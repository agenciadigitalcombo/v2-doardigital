import getTemplate from "./getTemplate.js"

export default {
    props: ['link', 'ico','text'],
    template : await getTemplate( './../components/LinkMenu' ),
    data: function() {
        return {
            active: false,
            page: ""
        }
    },
    mounted() {
        this.page = window.location.hash
    }
}