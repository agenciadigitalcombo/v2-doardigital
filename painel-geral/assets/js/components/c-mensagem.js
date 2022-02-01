import get_template from './get_template.js'
import adm from "../../../../static/js/api/adm.js"

export default {
    data: function () {
        return {
      
        }
    },
	
	props:{
		msg: String,
		error: String
	},

    template: await get_template('./assets/js/components/c-mensagem')
}