import get_template from '../../componentes/get_template.js'
import adm from "../../../../../static/js/api/adm.js"

export default {


   
    data: function () {
        return {
          
            lista: [
                { nome: '2joaquim1', email: 'jjms@gm', is_price: '223232', status_pagamento: 'pago', tipo: 'recorrencia',  },
                { nome: '2joaquim2', email: 'jjms@gm', is_price: '223232', status_pagamento: 'pago', tipo: 'recorrencia',  },
                { nome: '2joaquim3', email: 'jjms@gm', is_price: '223232', status_pagamento: 'pago', tipo: 'recorrencia',  },
                { nome: '2joaquim4', email: 'jjms@gm', is_price: '223232', status_pagamento: 'pago', tipo: 'recorrencia',  },
                { nome: '2joaquim5', email: 'jjms@gm', is_price: '223232', status_pagamento: 'pago', tipo: 'recorrencia',  },
                { nome: '2joaquim6', email: 'jjms@gm', is_price: '223232', status_pagamento: 'pago', tipo: 'recorrencia',  },
                 { nome: '2joaquim7', email: 'jjms@gm', is_price: '223232', status_pagamento: 'pago', tipo: 'recorrencia',  },
                 { nome: '2joaquim8', email: 'jjms@gm', is_price: '223232', status_pagamento: 'pago', tipo: 'recorrencia',  },
                 { nome: '2joaquim9', email: 'jjms@gm', is_price: '223232', status_pagamento: 'pago', tipo: 'recorrencia',  },
                 { nome: '2joaquim10', email: 'jjms@gm', is_price: '223232', status_pagamento: 'pago', tipo: 'recorrencia',  },
                 { nome: '2joaquim11', email: 'jjms@gm', is_price: '223232', status_pagamento: 'pago', tipo: 'recorrencia',  },
                 { nome: '2joaquim12', email: 'jjms@gm', is_price: '223232', status_pagamento: 'pago', tipo: 'recorrencia',  },
                 { nome: '2joaquim13', email: 'jjms@gm', is_price: '223232', status_pagamento: 'pago', tipo: 'recorrencia',  },
                 { nome: '2joaquim14', email: 'jjms@gm', is_price: '223232', status_pagamento: 'pago', tipo: 'recorrencia',  },
                 { nome: '2joaquim15', email: 'jjms@gm', is_price: '223232', status_pagamento: 'pago', tipo: 'recorrencia',  },
                 { nome: '2joaquim16', email: 'jjms@gm', is_price: '223232', status_pagamento: 'pago', tipo: 'recorrencia',  },
                  { nome: '2joaquim17', email: 'jjms@gm', is_price: '223232', status_pagamento: 'pago', tipo: 'recorrencia',  },
                  { nome: '2joaquim18', email: 'jjms@gm', is_price: '223232', status_pagamento: 'pago', tipo: 'recorrencia',  },
                  { nome: '2joaquim19', email: 'jjms@gm', is_price: '223232', status_pagamento: 'pago', tipo: 'recorrencia',  },
                  { nome: '2joaquim20', email: 'jjms@gm', is_price: '223232', status_pagamento: 'pago', tipo: 'recorrencia',  },
                  { nome: '2joaquim21', email: 'jjms@gm', is_price: '223232', status_pagamento: 'pago', tipo: 'recorrencia',  },
                { nome: '2joaquim22', email: 'jjms@gm', is_price: '223232', status_pagamento: 'pago', tipo: 'recorrencia',  },
                { nome: '2joaquim23', email: 'jjms@gm', is_price: '223232', status_pagamento: 'pago', tipo: 'recorrencia',  },
                { nome: '2joaquim24', email: 'jjms@gm', is_price: '223232', status_pagamento: 'pago', tipo: 'recorrencia',  },
                { nome: '2joaquim25', email: 'jjms@gm', is_price: '223232', status_pagamento: 'pago', tipo: 'recorrencia',  },
                { nome: '2joaquim26', email: 'jjms@gm', is_price: '223232', status_pagamento: 'pago', tipo: 'recorrencia',  },
                 { nome: '2joaquim27', email: 'jjms@gm', is_price: '223232', status_pagamento: 'pago', tipo: 'recorrencia',  },
                 { nome: '2joaquim28', email: 'jjms@gm', is_price: '223232', status_pagamento: 'pago', tipo: 'recorrencia',  },
                 { nome: '2joaquim29', email: 'jjms@gm', is_price: '223232', status_pagamento: 'pago', tipo: 'recorrencia',  },
                 { nome: '2joaquim30', email: 'jjms@gm', is_price: '223232', status_pagamento: 'pago', tipo: 'recorrencia',  },
                 
                 { nome: '2joaquim31', email: 'jjms@gm', is_price: '223232', status_pagamento: 'pago', tipo: 'recorrencia',  },
                 { nome: '2joaquim32', email: 'jjms@gm', is_price: '223232', status_pagamento: 'pago', tipo: 'recorrencia',  },
                 { nome: '2joaquim33', email: 'jjms@gm', is_price: '223232', status_pagamento: 'pago', tipo: 'recorrencia',  },
                 { nome: '2joaquim34', email: 'jjms@gm', is_price: '223232', status_pagamento: 'pago', tipo: 'recorrencia',  },
                 { nome: '2joaquim35', email: 'jjms@gm', is_price: '223232', status_pagamento: 'pago', tipo: 'recorrencia',  },
                 { nome: '2joaquim36', email: 'jjms@gm', is_price: '223232', status_pagamento: 'pago', tipo: 'recorrencia',  },
                  { nome: '2joaquim37', email: 'jjms@gm', is_price: '223232', status_pagamento: 'pago', tipo: 'recorrencia',  },
                  { nome: '2joaquim38', email: 'jjms@gm', is_price: '223232', status_pagamento: 'pago', tipo: 'recorrencia',  },
                  { nome: '2joaquim39', email: 'jjms@gm', is_price: '223232', status_pagamento: 'pago', tipo: 'recorrencia',  },
                  { nome: '2joaquim40', email: 'jjms@gm', is_price: '223232', status_pagamento: 'pago', tipo: 'recorrencia',  },
                 

                  { nome: '2joaquim1', email: 'jjms@gm', is_price: '223232', status_pagamento: 'pago', tipo: 'recorrencia',  },
                  { nome: '2joaquim2', email: 'jjms@gm', is_price: '223232', status_pagamento: 'pago', tipo: 'recorrencia',  },
                  { nome: '2joaquim3', email: 'jjms@gm', is_price: '223232', status_pagamento: 'pago', tipo: 'recorrencia',  },
                  { nome: '2joaquim4', email: 'jjms@gm', is_price: '223232', status_pagamento: 'pago', tipo: 'recorrencia',  },
                  { nome: '2joaquim5', email: 'jjms@gm', is_price: '223232', status_pagamento: 'pago', tipo: 'recorrencia',  },
                  { nome: '2joaquim6', email: 'jjms@gm', is_price: '223232', status_pagamento: 'pago', tipo: 'recorrencia',  },
                   { nome: '2joaquim7', email: 'jjms@gm', is_price: '223232', status_pagamento: 'pago', tipo: 'recorrencia',  },
                   { nome: '2joaquim8', email: 'jjms@gm', is_price: '223232', status_pagamento: 'pago', tipo: 'recorrencia',  },
                   { nome: '2joaquim9', email: 'jjms@gm', is_price: '223232', status_pagamento: 'pago', tipo: 'recorrencia',  },
                   { nome: '2joaquim10', email: 'jjms@gm', is_price: '223232', status_pagamento: 'pago', tipo: 'recorrencia',  },
                  
              ],


             
              elementoPaginacao: 5, 
            dadosPagina: [],
            maxVisibleButtons: 5,
            paginaAtual: 1,
            botao: null,


            doacao_id: "",
            instituicao_id: "",
            data: "", 
            search: "",
            dataFinal: null,
            total: "",
            pago: "",
            aberto: "",
            vencido: "",
            mostraresconder:
            {
                'show': false
            }

        }
    },
 
   

    methods: {
 
        totalPagina() {
            return Math.ceil(this.lista.length / this.elementoPaginacao)
        },

        create(number) {
            const button = document.createElement('div')

            button.innerHTML = number;


            if (this.paginaAtual == number) {
                button.classList.add('active')
            }

            button.addEventListener('click', (event) => {
                const page = event.target.innerText

                this.getPagina(page)
                this.update()
            })

            

        },

        update() {
          
            const { maxLeft, maxRight } = this.calculateMaxVisible()

            console.log(maxLeft, maxRight)

            for (let page = maxLeft; page <= maxRight; page++) {
                this.create(page) 
            } 
        },

        calculateMaxVisible() {
           

            let maxLeft = (this.paginaAtual - Math.floor(this.elementoPaginacao / 2))
            let maxRight = (this.paginaAtual + Math.floor(this.elementoPaginacao / 2))

            if (maxLeft < 1) {
                maxLeft = 1
                maxRight = this.elementoPaginacao
            }

            if (maxRight > this.totalPagina()) {
                maxLeft = this.totalPagina() - (this.elementoPaginacao - 1)
                maxRight = this.totalPagina()
                if (maxLeft < 1) {
                    maxLeft = 1
                }
            }
            console.log(maxLeft, maxRight)

            for (let page = maxLeft; page <= maxRight; page++) {
               
                
this.botao = page
            
            }
            
         
        },

        getPagina(semPagina) {
           this.paginaAtual = semPagina;
            this.dadosPagina = [];
            let inicio = (semPagina * this.elementoPaginacao) - this.elementoPaginacao;
            let fim = (semPagina * this.elementoPaginacao);
            this.dadosPagina = this.lista.slice(inicio, fim);

            console.log("olaa")
        },

        getProximo() {
            if (this.paginaAtual < this.totalPagina()) {
                this.paginaAtual++
            }
            this.getPagina(this.paginaAtual)
        },

        getAnterior() {
            if (this.paginaAtual > 1) {
                this.paginaAtual--
            }
            this.getPagina(this.paginaAtual)
        },
        estaActivo(semPagina) {
            return semPagina == this.paginaAtual ? "active" : ""
            //        ou
            //  if (semPagina == this.paginaAtual) {
            //     return "active"
            //   } else {
            //    return "" 
            //  }  
        },
 
    },

    async mounted() {  
    //    this.getPagina(1)
 this.update()
    },


    template: await get_template('./assets/js/views/instituicao/doacoes')
}