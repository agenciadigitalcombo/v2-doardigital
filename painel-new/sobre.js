import MenuAside from "../components/MenuAside.js"

export default {
    data: function() {
        return {
            itemsMenu: [
                { text: "Home", ico: "", link: "" },
                { text: "Contato", ico: "", link: "" },
                { text: "Sobre", ico: "", link: "" },
            ]
        }
    },
    template: "<div> sobre - <MenuAside :lista='itemsMenu' /></div>",
    components: {
        MenuAside
    }    
}