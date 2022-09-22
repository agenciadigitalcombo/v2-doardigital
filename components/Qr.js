export default {
    props: ['qr'],
    template: `
        <div ref="print_qr"> </div>
        <span @click="baixar" class="mt-8 inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
            Fazer Download
        </span>
    `,
    data: function () {
        return {
            active: false,
        }
    },
    methods: {
        baixar() {
            var tela = this.$refs.print_qr.querySelector('canvas')
            var link = document.createElement('a')
            link.download = 'qr-code.png'
            link.href = tela.toDataURL();
            link.click();
        },
    },
    mounted() {
        var qrcode = new QRCode(this.$refs.print_qr, {
            text: this.qr,
            width: 230,
            height: 230,
            height: 230,
            colorDark: "#000000",
            colorLight: "#ffffff",
            correctLevel: QRCode.CorrectLevel.L
        });
    }
}