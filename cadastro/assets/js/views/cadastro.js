import adm from '../../../../static/js/api/adm.js'

export default {
    template: `
    
    <div>
        <div class="inner-box">
        <div class="container">
            <div class="row">
                <div class="col s12 m12 l6">
                    <img src="./assets/logo/logo.svg" alt="Doar Digital" class="logo">
                    <h1 class="branco-text">Faça seu cadastro no Doar Digital</h1>
                    <p class="branco-text">
                        A Doar Digital já nasceu para ser o melhor e maior sistema de Doações Cristãs da América Latina.
                    </p>
                    <p class="branco-text">
                        Com tecnologia avançada e ferramentas super profissionais aliada aos mais fortes sistemas de segurança existentes hoje.
                    </p>
                    <p class="branco-text">
                        Contando com a possibilidade de disparos automatizados de Whatsapp para aumentar a eficiência de todo sistema.
                    </p>
                    <p class="branco-text">
                        Além disso contamos com Treinamentos exclusivos para divulgações em todos os setores sendo eles Facebook, Instagram, Google e lives.
                    </p>
                    <div class="box">
                        <h4 class="branco-text">Começe agora a mudar o rumo de suas doações!</h4>
                        <p class="branco-text">
                            Obtenha o melhor sistema que chegou para ser o maior da America Latina. Vantagens exclusivas
                            que você só terá aqui!
                        </p>
                    </div>
                </div>
                <div class="col s12 m12 l6">
                    <div class="space"></div>
                    <form action="javascript:void(0)" autocomplete="off" name="formulario"
                    @submit="cadastrar" class="form">

                        <input v-model="nome" type="text" name="name" placeholder="Nome" required>
                        <input v-model="email" type="email" name="email" placeholder="Email" required>
                        <input v-model="telefone" oninput="globalThis.maskTel(this)" type="text" name="phone"
                            placeholder="Telefone" required>
                        <input v-model="senha" type="password" name="password" placeholder="Senha" required>
                        <input type="password" name="password_confirm" placeholder="Confirmar senha" required>
                        <label class="cinza-text">
                            <input type="checkbox" required>
                            Eu aceito todos os termos
                        </label> <br>
                        <div hidden>
                            <label class="cinza-text">
                                <input type="checkbox" name="notification_sms">
                                Desejo receber informação via <b>WhatsApp</b>
                            </label> <br>
                            <label class="cinza-text">
                                <input type="checkbox" name="notification_email">
                                Desejo receber informação via <b>email</b>
                            </label> <br>
                        </div>
                        <p class="cinza-text">
                            Ao se cadastar você ira para uma lista de aprovação
                            isso pode demorar 48hs, todos os termos você encontrar
                            <a href="./termos.html" target="_blank"> clicando aqui </a>.
                        </p>
                        <input type="submit" value="ME CADASTRAR AGORA!">
                       	
						<div  class="alert alert-danger" v-if="error!=null">
						
                        <span class="svg-icon svg-icon-2hx svg-icon-danger me-3"><i
                                class="bi bi-droplet-half text-danger"></i></span>
        

                        <div class="d-flex flex-column" >
        
                            <h4 class="mb-1 text-dark">{{error}}</h4>
                    
                        </div>
            
                    </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
        </div>


    `,
    data: function () {
		return {
            nome: null,
            telefone: null,
            email: null,
            senha: null,
            error: null
        }
    },
	methods: {

   async cadastrar() {
			this.error = null

            let res = await adm.cadastrar(
           this.nome,
           this.telefone,
        this.email,
        this.senha,
        this.error
            )
            if (!res.next) {
				console.log(res)
                this.error = res.message
                return null
            }
            localStorage.setItem('token', res.token)
            window.location.href = `painel/dash`
        },
        updateForm(event) {
            this[event.name] = event.value
        }
    },
	mounted() {
        this.nome = localStorage.getItem('nome')
		
    }
   
}