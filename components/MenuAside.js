import Logo from "./Logo.js"
import LinkMenu from "./LinkMenu.js"
export default {
    props: ['lista'],
    template: "<div> <Logo /> <LinkMenu v-for='item in lista'  :link='item.link' :ico='item.ico' :text='item.text' /> </div>",
    components: {
        Logo,
        LinkMenu
    },
    mounted() {
       
    }
}