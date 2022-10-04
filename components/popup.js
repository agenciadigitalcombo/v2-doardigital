import getTemplate from "./getTemplate.js"

export default {
    props: ['title', 'description', 'text_close', 'text_submit', 'text_btn', 'color'],
    template: await getTemplate('./../components/popup'),
    emits: ['submit'],
    data: function () {
        return {}
    },
    methods: {
        confirm() {
            this.$emit( 'submit' )
        }
    },
}