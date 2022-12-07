import get_template from '../components/get_template.js'
import adm from '../../../../static/js/api/adm.js'
const { required, sameAs, minLength } = window.validators
import {cpf, cnpj } from '../../../../components/mask.js'

export default {
    data: function () {
        return {
            nome: null,
            email: null,
            senha: null,
            repetirsenha: null,
            telefone: null,
            error: null,
            submitStatus: null,
            cpf: null,
        }
    },

    	validations: {
		senha: {
			required,
			minLength: minLength(8)
		},
		repetirsenha: {
			sameAsPassword: sameAs('senha')
		}
	},
    methods: { 
        maskCpf() {
            this.cpf = this.cpf.replace( /\D/gi, '' )            
            if(this.cpf.length == 11) {                
                this.cpf = cpf( this.cpf )
            } else {
                this.cpf = cnpj( this.cpf )
            }
        },
        async cadastrar() {
            this.error = null
			this.$v.$touch() 
			if (this.$v.$invalid) {
				this.submitStatus = 'ERROR'
			} else {
            
            this.error = null
            this.submitStatus = 'CARREGAR'
            let res = await adm.cadastrar(
                this.nome, 
                this.email,
                this.senha,
                this.telefone,
                this.cpf
            )
            if (!res.next) {
                this.submitStatus = 'FALHA'
                this.error = res.message
                return null
            }        
            localStorage.setItem('token', res.payload.token)
            localStorage.setItem('nome', this.nome)
            localStorage.setItem('email', this.email)
            localStorage.setItem('telefone', this.telefone)
 
            window.location.href = "../finalizar-assinatura/#/";

        }
        },
         

        async SendWhatsapp(tel) {
            let format_tel = '55'
            format_tel += this.telefone
            let form = {
                sender: 'primary',
                number: format_tel,
                message: 'Seja Bem vindo ao Doar Digital =D',
               // idc: 'cadastro.doardigital.com.br',
            }
            let base = 'https://whatsapi-doar.herokuapp.com/send-message/'
            let options = {
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
                method: 'POST',
                mode: 'no-cors',
                cache: 'default',
                body: obj_to_url(form)
            }
            try {        
                return await fetch(base, options)
            } catch (error) {
                return async () => '{}' 
            }
        },

        updateForm(event) {
            this[event.name] = event.value
        }
    },

    template: await get_template('./assets/js/view/home')
}