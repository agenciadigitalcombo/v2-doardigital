import menus from '../domain/lista-menu.js'
import adm from "../../../../../static/js/api/adm.js"

export default {
    template: ` 
	<div>

	<!--begin::aside-->
    <div id="kt_aside" class="aside" data-kt-drawer="true" data-kt-drawer-name="aside" data-kt-drawer-activate="{default: true, lg: false}" data-kt-drawer-overlay="true" data-kt-drawer-width="{default:'200px', '300px': '250px'}" data-kt-drawer-direction="start" data-kt-drawer-toggle="#kt_aside_mobile_toggle">
  
        <div class="aside-toolbar flex-column-auto" id="kt_aside_toolbar">
            <div class="aside-user d-flex align-items-sm-center justify-content-center py-5">
              <div class="symbol symbol-50px">
                <img v-bind:src="gravatar" >             
                </div>
               <div class="aside-user-info flex-row-fluid flex-wrap ms-5">
                  <div class="d-flex">
                        <div class="flex-grow-1 me-2">
                            <a class="text-white text-hover-primary fs-6 fw-bold">{{nome}} </a>
                            <span class="text-gray-600 fw-bold d-block fs-8 mb-1">Admin</span>
                        </div>
                    
                    </div>
                </div>
           </div>
          </div>

       <div class="aside-menu flex-column-fluid">
           <div class="hover-scroll-overlay-y px-2 my-5 my-lg-5" id="kt_aside_menu_wrapper" data-kt-scroll="true" data-kt-scroll-height="auto" data-kt-scroll-dependencies="{default: '#kt_aside_toolbar, #kt_aside_footer', lg: '#kt_header, #kt_aside_toolbar, #kt_aside_footer'}" data-kt-scroll-wrappers="#kt_aside_menu" data-kt-scroll-offset="5px">
               <div class="menu menu-column menu-title-gray-800 menu-state-title-primary menu-state-icon-primary menu-state-bullet-primary menu-arrow-gray-500" id="#kt_aside_menu" data-kt-menu="true">
               <div class="menu-item" v-for="m in lista">


                    <a class="menu-link" :href="m.link">
                        <span class="menu-icon">
                           <span class="svg-icon svg-icon-2">
                            <img class="filter-green" class="menu" :src="'../painel/assets/icon/'+m.icon">
                            </span>
                            <!--end::Svg Icon-->
                        </span>
                        <span class="menu-title">{{m.nome}} </span>
                    </a>
                </div>
                <div class="menu-item" >
                    <a class="menu-link"  type="button" @click="logout"  >
                        <span class="menu-icon">
                           <span class="svg-icon svg-icon-2">
                           <img class="filter-green" class="menu" src="../painel/assets/icon/logout.svg">
                            </span>
                            <!--end::Svg Icon-->
                        </span>
                        <span class="menu-title"> Sair </span>
                    </a>
                </div>
             </div>
            </div>
        </div>
   </div>
    <!--end::aside-->
	</div>
    `,


    data: function () {
        return {
            gravatar: '',
            superAdm: '',
            menus,
            lista: [],
            nome: null,
            permisao: ['inicio', 'sass', 'planos', 'divisao', 'modulos', 'configuracao', 'doacoes', 'doadores'],
        }
    },

    methods: {
		async listar() {
            let res = await adm.ListarPerfil( localStorage.getItem('token') )
			return res
        },
	
        async logout() {
            localStorage.removeItem('token')
            localStorage.removeItem('instituicao_nome')
            localStorage.removeItem('instituicao_id')
            
            window.location.href = "#/";
        },
        
	},
 
    async mounted() {
     
     //   this.lista = this.menus.filter(itens => recursos.includes(itens.id)) || this.menus.filter(itens => this.superAdm.includes(itens.permisao2)) 
        

        let dados = (await this.listar()).dados
               this.nome = dados.nome.split(' ')[0]
               this.gravatar = dados.gravatar
               this.superAdm = dados.super_adm

              
               
        this.lista = menus

        let recursos = this.permisao
      //let adm = this.superAdm
        let adm = '1'
        
        if (adm == '1') {
            this.lista = this.menus
        }else if (adm == '0') {
            this.lista = this.menus.filter(itens => this.superAdm.includes(itens.permisao2)) 
        }else{
            this.lista = this.menus.filter(itens => recursos.includes(itens.id)) 
        }
       
        let jms = document.createElement('script'); 
        jms.setAttribute('src', "../../painel/assets/js/vendor/scripts.bundle.js");
        document.head.appendChild(jms);
    }
}