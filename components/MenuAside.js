import Logo from "./Logo.js"
import LinkMenu from "./LinkMenu.js"
import getTemplate from "./getTemplate.js"

export default {
    props: ['lista', 'isOpen'],
    template: await getTemplate( './../components/MenuAside' ),
    components: {
        Logo,
        LinkMenu
    },  
    emits: ['check'],
    methods: {
        clickMenu() {
            this.$emit('check')
        }
    } 
}