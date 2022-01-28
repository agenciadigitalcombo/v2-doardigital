import get_template from '../../components/get_template.js'

export default {
    data: function () {
        return {
            title: "Assinatura",
            tipo: null,
			valor: null,
			email: null,
        }
    },

    // methods: {
		
	// 	descartavel() {
	// 		window.location.href = "/painel/index.html#/perfil-editar";
	// 	}
       

    // },


    template: await get_template('./assets/js/view/assinatura/home')
}