import get_template from '../componentes/get_template.js'
import adm from '../../../../static/js/api/adm.js'
const { required, minLength, between } = window.validators

export default {

    data: function () {
        return {
            token: null,
            instituicao_fk: null,
            valor: null,
            recorrente: null,
            nome: null,
            email: null,
            nome: null,
            sexo: null,
            cpf: null,
            telefone: null,
            cep: null,
            numero: null,
            estado: null,
            logadouro: null,
            complemento: null,
            bairro: null,
            cidade: null,

            tipo_pagamento: 'CREDIT_CARD',
            card_nome: null,
            card_numero: null,
            card_cvv: null,
            card_validade: null,

            logo: '',
            plano_id: "1386061",
            plano_id_zap: 0,

            planos_id: null,

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
            txto_pix2: "",
            jms: ""
        }
    },





    filters: {
        is_price(valor) {
            valor = valor.replace(',', '.')
			let price = (+valor).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL', minimumFractionDigits: 2 })
			return `${price}`
		},
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
                this.txto_pix2 = ""

                if (this.valor >= 100000) {
                    // this.valor = "100000"
                } else {
                    this.valor = window.localStorage.getItem("price")
                }
            } else {
                this.valor = window.localStorage.getItem("price")
                this.txto_pix = ""
                this.txto_pix2 = ""
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
                        this.instituicao_fk,
                        this.valor,
                        this.recorrente,
                        this.email,
                        this.nome,
                        this.sexo,
                        this.cpf,
                        this.telefone,
                        this.cep,
                        this.numero,
                        this.estado,
                        this.logadouro,
                        this.complemento,
                        this.bairro,
                        this.cidade,

                        this.tipo_pagamento,
                        this.card_nome,
                        this.card_numero,
                        this.card_cvv,
                        this.card_validade,
                        window.localStorage.setItem("type_pagamento", this.tipo_pagamento)

                    )
                    if (!res.next) {
                        this.submitStatus = 'FALHA'
                        this.error = res.message
                        return null
                    }

                    this.submitStatus = 'OK'
                    this.msg = res.message
                    window.localStorage.setItem("codigo", res.payload.code)
                    window.localStorage.setItem("url", res.payload.url)
                    window.localStorage.setItem("type_pagamento", res.payload.tipo_pagamento)
                    window.localStorage.setItem("recorrente", res.payload.recorrente)
                     window.location.href = "#/obrigado"
                }
            }
            catch (e) {
                setTimeout(() => {
                    this.submitStatus = 'FALHA500'
                }, 1500)
            }
        },

        async lisConfiguracao() {
            let res = await adm.listConf(
                this.token,
                this.domain,
            )
            return res
        },


        searchCep() {
            let cep = this.cep
            cep = cep.replace(/\D/gi, '')
            if (cep.length == 8) {
                axios.get(`https://viacep.com.br/ws/${cep}/json/`)
                    .then(response => {
                        this.error = ""
                        this.logadouro = response.data.logradouro,
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

        this.recorrente = window.localStorage.getItem("mensal")
        this.planos_id = window.localStorage.getItem("planos_id")

        if (this.planos_id) {
            this.valor = window.localStorage.getItem("pricejms")
            this.ver = window.localStorage.getItem("pricejms")
        } else {
            this.valor = window.localStorage.getItem("price_digitado")
        }


        
        this.email = window.localStorage.getItem("email")
        this.token = localStorage.getItem('token')
        // this.instituicao_fk = localStorage.getItem('instituicao_fk')



        this.token = localStorage.getItem('token')
        //this.domain = globalThis._instituicao.subdomain || globalThis._instituicao.domain
        // this.domain = "jms21122xxcr"
        this.domain = window.location.host
        // this.this.domain  = window.location.hostname

        let config = (await this.lisConfiguracao()).payload
        this.logo = "https://doardigital.tk/api/upload/" + config.logo
        this.backgroundColor = config.cor
        this.instituicao_fk = config.institution_fk

        console.log("OKAY")


    },


    template: await get_template('./assets/js/view/finalizar')
}