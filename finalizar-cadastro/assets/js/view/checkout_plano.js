import get_template from '../components/get_template.js'
import adm from "../../../../../static/js/api/adm.js"
const { required, minLength, maxLength } = window.validators

export default {


    data: function () {
        return {

            token: null,
            instituicao_fk: null,
            valor: "98.90",
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
            mes: "",
            ano: "",
            card_validade: null,

            zap: null,
            inst: null,
            cupon: null,
            validarCupon: null,
            search: null,
            jms: false,
            smsCupon: null,
            showCupon: null,
            invision: true,
            submitStatus: null,
            error: null,
            msg: null,

        }
    },

    filters: {
        form_valor(price) {
            let amount = (price / 100).toLocaleString('pt-br', { minimumFractionDigits: 2 })
            return `R$ ${amount}`
        }
    },


    methods: {


        setaCupon(event) {
            const novoaray = this.dados.filter((valorAtual) => {
                return valorAtual.codigo_cupom.includes(this.cupon)

            })

            try {
                this.invision = true
                this.amount = novoaray[1].amount
                this.plano_token = novoaray[1].token


            } catch (e) {
                if (e instanceof TypeError) {

                }
            }
        },

        verCupoms(event) {
            try {
                const vercupom = this.dados.filter((cuponAtual) => {
                    return cuponAtual.instituicao_max.includes(this.inst) && cuponAtual.quant_disparos.includes(this.zap) && cuponAtual.codigo_cupom.includes(this.cupon)
                })

                if (this.cupon === this.validarCupon) {

                    this.amount = vercupom[0].amount
                    this.plano_token = vercupom[0].token
                    this.validarCupon = vercupom[0].codigo_cupom

                    this.invision = true
                    this.showCupon = "1"
                    this.smsCupon = "Cupom confirmado"

                } else {
                    this.invision = false
                    this.showCupon = "0"
                    this.smsCupon = "Este Cupon não é valido"
                    this.amount = globalThis._amount || "00"
                }
            } catch (e) {
                if (e instanceof TypeError) {

                    this.invision = false
                    this.showCupon = "0"
                    this.smsCupon = "Este Cupon não é valido"
                    this.amount = globalThis._amount || "00"

                } else {
                    this.invision = false
                    this.showCupon = "0"
                    this.smsCupon = "Este Cupon não é valido"
                    this.amount = globalThis._amount || "00"
                }
            }


        },


        async transacao() {
            try {
                this.error = null
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
                    this.card_validade = this.mes + '/' + this.ano

                )
                if (!res.next) {
                    this.submitStatus = 'FALHA'
                    this.error = res.message
                    return null
                }
                this.submitStatus = 'OK'
                window.location.href = "/painel-geral/index.html#/";
            }
            catch (e) {
                setTimeout(() => {
                    this.submitStatus = 'FALHA500'
                }, 1500)
            }
        },

        async listar() {
			let res = await adm.ListarPerfil(
				this.token,
				this.code,
			)
			return res
		},

		async listarEndereco() {
			let res = await adm.listarEndereco(
				this.token,
				this.code,
			)
			return res
		},

        descartavel() {
            window.location.href = "/painel-geral/#/perfil-editar";
        }

    },

    async created() {
        this.token = localStorage.getItem('token')
		let str = this.token.split('.')[0]
		let encodedStr = atob(str);
		var res = JSON.parse(encodedStr);
		this.code = res.code

        let MyAddress = (await this.listarEndereco()).payload
        let AdmLogged = (await this.listar()).payload

        console.log(AdmLogged)

        this.instituicao_fk = 'inst_628ea77b60f3c'
        this.recorrente = '1'
        this.email = AdmLogged.email
        this.nome = AdmLogged.nome
        this.telefone = AdmLogged.telefone
        this.cpf = AdmLogged.cpf

        this.cep = MyAddress.cep
        this.logadouro = MyAddress.logadouro
        this.numero = MyAddress.numero
        this.complemento = MyAddress.complemento
        this.bairro = MyAddress.bairro
        this.cidade = MyAddress.cidade
        this.estado = MyAddress.estado
    },



    template: await get_template('./assets/js/view/checkout_plano')
}