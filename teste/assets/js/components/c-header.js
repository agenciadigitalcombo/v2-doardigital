import get_template from '../components/get_template.js'

export default {
    data: function () {
        return {
            title: "header"
        }
    },
    template: await get_template('./assets/js/components/c-header')
}