import get_template from './get_template.js'
export default {
    template: await get_template('./assets/js/view/card'),


    data: function () {
        return {

        }
    },
    props: ["card_numero", "card_nome", "card_validade", "card_cvv"]
}

