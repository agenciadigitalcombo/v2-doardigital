import MenuAside from "../components/MenuAside.js"

export default {
    data: function() {
        return {
            itemsMenu: [
                { text: "Home", ico: "fa-solid fa-house-user", link: "" },
                { text: "Contato", ico: "", link: "" },
                { text: "Sobre", ico: "fa-solid fa-house-user", link: "" },
            ]
        }
    },
    template: "<div> home -  <MenuAside :lista='itemsMenu' /></div>",
    components: {
        MenuAside
    }    
}
