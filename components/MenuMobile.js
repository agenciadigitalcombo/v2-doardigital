import getTemplate from "./getTemplate.js"
export default {
    template: await getTemplate('./../components/MenuMobile'),
    emits: ['check'],
    methods: {
        clickMenu() {
            this.$emit('check')
        }
    }
}