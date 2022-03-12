import get_template from '../components/get_template.js'

export default {
    data: function () {
        return {
            titulo: "",
            msg: "",
        }
    },

    created() {
        this.titulo = [window.location.href.split('#/')[1]] || window.location.href.split('#/')[1]
      
    },


    filters: {

        este_titulo(status) {
            let apresentar = {
                usuarios: 'Usuarios',
                instituicoes: 'Minhas instituições',
                editarInstituicoes: 'Editar Instituição',
                enderecoEditar: 'Editar Endereço',
                bancarioEditar: 'Dados Bancários',
                credenciais: 'Minhas Credenciais',

                instituicoesNova: 'Adicionar Nova Instituição',
                bancoInstituicoes: 'Adicionar Nova Instituição'

            }
            return apresentar[status]
        },

    },

    template: await get_template('./assets/js/components/c-header')
}