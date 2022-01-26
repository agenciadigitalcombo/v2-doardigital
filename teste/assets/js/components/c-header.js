import get_template from '../components/get_template.js'

export default {
    data: function () {
        return {
            title: "hearde"
        }
    },
    template: await get_template('./assets/js/components/c-header')
}