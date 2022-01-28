import get_template from '../../components/get_template.js'

export default {
    data: function () {
        return {
            title: "home",
            tipo: null,
			valor: null,
			email: null,
        }
    },
    methods: {
	
		descartavel() {
			this.tipo = window.localStorage.setItem("tipo", this.tipo)
			this.valor = window.localStorage.setItem("valor", this.valor)
			this.email = window.localStorage.setItem("email", this.email)
		}
       

    },
    template: await get_template('./assets/js/view/home/home')
}