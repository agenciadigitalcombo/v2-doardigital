import get_template from '../components/get_template.js'

export default {
    data: function () {
        return {
            titulo: "",
            msg: "",
        }
    },
 
created() {
    var lb = {instituicoes:"Minhas instituições"}
    this.titulo = lb[window.location.href.split('#/')[1]] || window.location.href.split('#/')[1]
  console.log(window.location.href.split('#/')[1])
},
    template: await get_template('./assets/js/components/c-header')
}