import getTemplate from '../components/getTemplate.js'

const html = await getTemplate( './obrigado' )

export default {
    data: function () {
        return { }
    },
    components: {},
    async mounted() {},
    methods: {},
    template: html,
}