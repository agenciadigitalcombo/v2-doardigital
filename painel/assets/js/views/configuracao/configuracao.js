import get_template from '../../componentes/get_template.js'
import adm from "../../../../../static/js/api/adm.js"

export default {




    data: function () {
        return {
            token: null,
			nome: null, 
			email: null,
			telefone: null,
			domain: null, 
			razao_social: null,
			submitStatus: null, 
            titulo: null, 
			tags: null,
            cor: null,
            descricao: null,

			cep: null,
			logradouro: null,
			numero: null,
			complemento: null,
			bairro: null,
			cidade: null,
			estado: null,

            openUpload: null,
            msg: null,
            error: null,
            file: "",
            imagemVer: null,

        }
    },

    methods: {
        async sendFile() {
            let file = new FormData();
            for (let files of this.$refs.file) {
                file.append(`file`, files);
            }
            this.error = null

            let res = await adm.uploadImg(
                this.file
            )
            if (!res.next) {
                this.error = res.message
                return null
            }
            this.msg = res.message,
                setTimeout(() => this.msg = "", 3000);
        },
 

        updatePreview(e) {
            console.log(e)

            var file, files = e.target.files
            if (files.length === 0) {
                console.log('vazio')
            }
            file = new FileReader();
            file.onload = (e) => {
                this.imagemVer = e.target.result
            }
            file.readAsDataURL(files[0])
        },



        async carregarImg() {
            let file = new FormData();

            file.append('file', this.$refs.file.files[0]);

            this.error = null

            let res = await adm.uploadImg(
                file
            )
            if (!res.next) {
                this.error = res.message
                return null
            }

            globalThis._foto = res.nome_image
            this.msg = res.message,
                setTimeout(() => this.msg = "", 3000);
        },



        async AddConfiguracao() {
            this.error = null

            let res = await adm.alterarInstituicao(
                this.token,
                this.institution_fk,
                this.nome,
                this.email,
                this.telefone,
                this.domain,
                this.logo,
                this.icon,
                this.cor,
                this.titulo,
                this.tags,
                this.descricao,
                this.cep,
                this.logradouro,
                this.numero,
                this.complemento,
                this.bairro,
                this.cidade,
                this.estado,

            )
            if (!res.next) {

                this.error = res.message
                this.jms = "erro"
                return null
            }
            this.submitStatus = 'PENDING'
            setTimeout(() => {
                this.submitStatus = 'OK'
                this.msg = res.message
                this.jms = "sucesso"
            }, 500)
        },

        async lisConfiguracao() {
            let res = await adm.listConf(
                this.token,
                this.domain,
            )
            return res
        },
    },


    async mounted() {


        this.token = localStorage.getItem('token')
        this.domain = localStorage.getItem('instituicao_subdomaim')

        let config = (await this.lisConfiguracao()).payload

        this.institution_fk = config.institution_fk,
            this.nome = config.nome,
            this.email = config.email,
            this.telefone = config.telefone,

            this.logo = "https://doardigital.com.br/api/upload/" + config.logo,
            this.icon = config.icon,
            this.titulo = config.titulo,
            this.tags = config.tags,
            this.descricao = config.descricao,
            this.cor = config.cor,

            this.domain = config.domain,

            this.cep = config.endereco.cep,
            this.logradouro = config.endereco.logadouro,
            this.numero = config.endereco.numero,
            this.complemento = config.endereco.complemento,
            this.bairro = config.endereco.bairro,
            this.cidade = config.endereco.cidade,
            this.estado = config.endereco.estado,

            this.imagemVer = this.logo || "../painel/assets/icons/blank.png"

    },

    template: await get_template('./assets/js/views/configuracao/configuracao')
}