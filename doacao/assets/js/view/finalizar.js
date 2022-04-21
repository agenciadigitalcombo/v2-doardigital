import get_template from '../componentes/get_template.js'
import adm from '../../../../static/js/api/adm.js'
const { required, minLength, between } = window.validators

export default {
   
    data: function () {
        return {
            logo: '',
            plano_id: "1386061",
            plano_id_zap: 0,

            token: null,
            instituicao_id: null,
            mensal: null,
            planos_id: null,
            planos_valor: null,
            email: null,
            nome: "",
            genero: null,
            cpf: "",
            telefone: "",
            cep: "",
            numero: "",
            estado: "",
            endereco: "o",
            bairro: "",
            cidade: "",
            type_pagamento: "CREDIT_CARD",
            cart_numero: "",
            cart_cvv: "",
            cart_validade: "",
            cart_nome: "",
            ver: "",
            valor_digitado: null,
            valor: null,

            backgroundColor: '',
            msg: "",
            error: null,
            subdomaim: null,
            codigo_geral: null,
            submitStatus: null,
            dados: [],
            txto_pix: "",
            txto_pix2: ""
        }
    },





    filters: {
        money: val => {
            val = `${val}`
            val = val?.replace('\.', '')
            val = val?.replace(/\D/gi, '')
            val = val ? val : 0
            val = `${parseInt(val)}` ?? '0'
            switch (val.length) {
                case 0:
                    val = '00,00'
                    break;
                case 1:
                    val = val.replace(/(\d{1})/gi, '00,0$1')
                    break;
                case 2:
                    val = val.replace(/(\d{2})/gi, '00,$1')
                    break;
                case 3:
                    val = val.replace(/(\d{1})(\d{2})/gi, '0$1,$2')
                    break;
                case 4:
                    val = val.replace(/(\d{2})(\d{2})/gi, '$1,$2')
                    break;
                case 5:
                    val = val.replace(/(\d{3})(\d{2})/gi, '$1,$2')
                    break;
                case 6:
                    val = val.replace(/(\d{1})(\d{3})(\d{2})/gi, '$1.$2,$3')
                    break;
                default:
                    val = val.replace(/(\d{1})(\d{3})(\d{2})(.*)/gi, '$1.$2,$3')
                    break;
            }
            return val
        }
    },


    validations: {
        cep: {
            required,
            minLength: minLength(9)
        },
        telefone: {
            required,
            minLength: minLength(15)
        },


    },

    methods: {


        consultar() {
            if (this.type_pagamento == "PIX") {
                this.txto_pix = "Obs : O valor do PIX entre as 20:00h e 6:00h (noturno)"
                this.txto_pix2 = "será máximo de R$ 1.000,00 reais."

                if (this.planos_valor >= 100000) {
                    // this.planos_valor = "100000"
                } else {
                    this.planos_valor = window.localStorage.getItem("amount")
                }
            } else {
                this.planos_valor = window.localStorage.getItem("amount")
                this.txto_pix = ""
                this.txto_pix2 = ""
            }



        },


        async addTransacao() {
            try {
                this.error = null
                this.$v.$touch()
                if (this.$v.$invalid) {
                    this.submitStatus = 'ERROR'
                } else {
                    this.submitStatus = 'CARREGAR'
                    let res = await adm.transacaoPlano(
                        this.instituicao_id,
                        this.mensal,
                        this.planos_valor,
                        this.planos_nome,
                        this.email,
                        this.nome,
                        this.genero,
                        this.cpf,
                        this.telefone,
                        this.cep,
                        this.numero,
                        this.estado,
                        this.endereco,
                        this.bairro,
                        this.cidade,
                        this.type_pagamento,
                        this.cart_numero,
                        this.cart_cvv,
                        this.cart_validade,
                        this.cart_nome,
                        window.localStorage.setItem("type_pagamento", this.type_pagamento)

                    )
                    if (!res.next) {
                        this.error = res.message
                        this.submitStatus = 'FALHA'
                        return null
                    }

                    this.submitStatus = 'OK'
                    this.msg = res.message
                    window.localStorage.setItem("codigo", res.codigo)
                    window.localStorage.setItem("url", res.url)
                     window.localStorage.setItem("ref", res.reference_key)
                    window.location.href = "#/obrigado"
                }
            }
            catch (e) {
                setTimeout(() => {
                    this.submitStatus = 'FALHA500'
                }, 1500)
            }
        },

        
        async transacao() {
            try {
                this.error = null
                this.$v.$touch()
                if (this.$v.$invalid) {
                    this.submitStatus = 'ERROR'
                } else {
                    this.submitStatus = 'CARREGAR'
                    let res = await adm.transacao(
                        this.instituicao_id,
                        this.mensal,
                        this.planos_valor,
                        this.planos_nome,
                        this.email,
                        this.nome,
                        this.genero,
                        this.cpf,
                        this.telefone,
                        this.cep,
                        this.numero,
                        this.estado,
                        this.endereco,
                        this.bairro,
                        this.cidade,
                        this.type_pagamento,  
                        window.localStorage.setItem("type_pagamento", this.type_pagamento)

                    )
                    if (!res.next) {
                        this.error = res.message
                        this.submitStatus = 'FALHA'
                        return null
                    }

                    this.submitStatus = 'OK'
                    this.msg = res.message
                    window.localStorage.setItem("codigo", res.codigo)
                    window.localStorage.setItem("url", res.url)
                     window.localStorage.setItem("ref", res.reference_key)
                    window.location.href = "#/obrigado"
                }
            }
            catch (e) {
                setTimeout(() => {
                    this.submitStatus = 'FALHA500'
                }, 1500)
            }
        },

        async infoSubdomain() { 
             let res = await adm.todoSubdomain(this.subdomaim)
            return res
        },

        searchCep() {
            let cep = this.cep
            cep = cep.replace(/\D/gi, '')
            if (cep.length == 8) {
                axios.get(`https://viacep.com.br/ws/${cep}/json/`)
                    .then(response => {
                        this.error = ""
                        this.endereco = response.data.logradouro,
                            this.bairro = response.data.bairro,
                            this.cidade = response.data.localidade,
                            this.estado = response.data.uf

                        if (response.data.erro) {
                            this.error = "Número do CEP inválido pretendes Preecher manualmente ?? "
                        }
                    }
                    )
                    .catch(error =>
                        error
                    )
            }
        },

        mask_cep() {
            let mascara = this.cep
            mascara = mascara.replace(/\D/gi, '')
            mascara = mascara.replace(/(\d{5})(.*)/gi, '$1-$2')
            mascara = mascara.replace(/(\d{4}\s)(\d{1,3})(.*)/gi, '$1-$2')
            this.cep = mascara
        },

    },

    async mounted() {
        //	this.subdomaim = "34edqwe21"
       //  this.subdomaim = "combopay.com.br"
       this.subdomaim = window.location.hostname

        this.mensal = window.localStorage.getItem("mensal")
        this.planos_id = window.localStorage.getItem("planos_id")

        if (this.planos_id) {
            this.planos_valor = window.localStorage.getItem("amount")
            this.ver = window.localStorage.getItem("amountjms")
        } else {
            this.planos_valor = window.localStorage.getItem("amount_digitado")
        }
       

        this.planos_nome = window.localStorage.getItem("planos_nome")
        this.email = window.localStorage.getItem("email")
        this.token = localStorage.getItem('token')
        // this.instituicao_id = localStorage.getItem('instituicao_id')


        let config = (await this.infoSubdomain()).dados_instituicao
        this.logo = "https://doardigital.com.br/api/upload/"+config.logo
        this.backgroundColor = config.cor
        this.instituicao_id = config.id
    },

 
    template: await get_template('./assets/js/view/finalizar')
}