import getTemplate from "./getTemplate.js"

export default {
    props: ['link', 'ico','text'],
    template : await getTemplate( './../components/LinkMenu' )
}