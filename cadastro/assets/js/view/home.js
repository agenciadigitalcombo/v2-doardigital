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
            
            await this.SendWhatsapp()
            window.location.href = "../finalizar-assinatura/#/";


        }
        },
         

        async SendWhatsapp() {
            let form = {
                phone: this.telefone.replace(/\D/gi, ''),
                message: 'Seja Bem vindo ao Doar Digital =D',
                isGroup: false
            }
            let chave = '$2b$10$jufCiqquUtsHiXWBR1GNHOXgzq.A0eHvzv8kP8hM9f3zMqZKm1MWS'
            let session = 'digitalcombo'
            let base = 'https://zap.digitalcombo.com.br/api/'+session+'/send-message'
            let options = {
                headers: new Headers({
                    'Authorization': 'Bearer '+ + chave, 
                    'Content-Type': 'application/json'
                }), 

                // headers: {
                //     'Content-Type': 'application/json',
                //     Authentication: 'Bearer ' + chave, 
                //     Accept: 'application/json',
                //     credentials: 'include'
                // },
                method: 'POST',
                mode: 'no-cors',
                cache: 'default',
                body: JSON.stringify(form)
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