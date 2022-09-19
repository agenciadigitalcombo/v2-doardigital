import getTemplate from "./getTemplate.js"

export default {
    props: ['link', 'ico','text', 'page'],
    template : await getTemplate( './../components/LinkMenu' ),
    data: function() {
        return {
            active: false,
        }
    },
    emits: ['setPage'],
    watch: {
        page(current, old) {}
    },
    methods: {
        notificaAlterPage() {
            this.$emit('setPage', {
                link: `#/${this.link}`
            })
        }
    },
}