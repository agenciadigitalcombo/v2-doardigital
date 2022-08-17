import Logo from "./Logo.js"
import LinkMenu from "./LinkMenu.js"
import getTemplate from "./getTemplate.js"

export default {
    props: ['lista'],
    template: await getTemplate( './../components/MenuAside' ),
    components: {
        Logo,
        LinkMenu
    }
}