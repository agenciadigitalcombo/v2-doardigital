import get_template from './get_template.js'

export default {
    data: function () {
        return {
            title: "footer"
        }
    },
    template: await get_template('./assets/js/components/c-footer')
}