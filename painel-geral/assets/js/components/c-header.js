import get_template from '../components/get_template.js'

export default {
    data: function () {
        return {
            titulo: "",
            msg: "",
            mdTrue: true,
        }
    },

    methods: {

        fechaModal(event) {
            let overlay = document.getElementById("jmsMenu");
            let modal = document.getElementById("jmsMenu_modal"); 
            if (!modal.contains(event.target)) {
                modal.style.display = 'none';
                overlay.style.display = 'none'; 
                document.removeEventListener('click', this.fechaModal, false);
                this.mdTrue = true
            } 
        },
 

      
        modalPainel() {
            let overlay = document.getElementById("jmsMenu");
            let modal = document.getElementById("jmsMenu_modal");
            overlay.style.display = 'flex'
            modal.style.display = 'flex'
            setTimeout(() => { document.addEventListener('click', this.fechaModal, false) }, 200);
            this.mdTrue = false
        },
    },

    created() {
        this.titulo = [window.location.href.split('#/')[1]] || window.location.href.split('#/')[1]
      
    },


    filters: {

        este_titulo(status) {
            let apresentar = {
                '': 'Inicio',
                usuarios: 'Usuarios',
                instituicoes: 'Minhas instituições',
                editarInstituicoes: 'Editar Instituição',
                enderecoEditar: 'Editar Endereço',
                bancarioEditar: 'Dados Bancários',
                credenciais: 'Minhas Credenciais',

                instituicoesNova: 'Adicionar Nova Instituição',
                bancoInstituicoes: 'Adicionar Nova Instituição',
                perfil: 'Perfil',
                local: 'Perfil',
                seguranca: 'Perfil',

                
                planos_digital: 'Plano Digital',
                'plano-digital/novo': 'Plano Digital',
                'plano-digital/editar': 'Plano Digital',

            }
            return apresentar[status]
        },

    },

    template: await get_template('./assets/js/components/c-header')
}