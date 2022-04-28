import get_template from '../../componentes/get_template.js'
import adm from "../../../../../static/js/api/adm.js"

export default {


	data: function () {
		return {
			token: null,
			fk: null,
			id: null, 
			submitStatus: null,
			msg: null,
			dados: []
		}
	},
 
	 
    methods: {
        async listar() {
            let res = await adm.listarSplit(
                 this.token,
				this.fk 
			)
            this.msg = res.message;
            return res
        },


		
        async eliminar(dados) {
            if (confirm('deseja excluir a Divicao de Pagamento ?')) {
                this.error = null
                let res = await adm.deleterSplit(
                    this.token,
                    this.id = dados.id
                )
                if (!res.next) {
                    console.log(res)
                    this.error = res.message
                    return null
                }

                this.msg = res.message,
                    setTimeout(() => this.msg = "", 3000);

			  this.dados = (await this.listar()).payload 

            }
        },

        async editar(id) {
            globalThis._divisao = this.dados.find(user => user.id == id)
            window.location.href = "#/editar-pagamento"
        },

    },

	async mounted() {
		this.token = localStorage.getItem('token')
		let str = this.token.split('.')[0]
		let encodedStr = atob(str);
		var res = JSON.parse(encodedStr);
		this.code = res.code

		this.fk = window.localStorage.getItem('instituicao_id');

		this.dados = (await this.listar()).payload
	},



	template: await get_template('./assets/js/views/split/div-pagamento')
}