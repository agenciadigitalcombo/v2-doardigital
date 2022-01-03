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

                            <a class="text-white text-hover-primary fs-6 fw-bold">{{nome}}</a>

                            <span class="text-gray-600 fw-bold d-block fs-8 mb-1">Admin</span>
                        </div>
                       <div class="me-n2">
                            <a class="btn btn-icon btn-sm btn-active-color-primary mt-n2" data-kt-menu-trigger="click" data-kt-menu-placement="bottom-start" data-kt-menu-overflow="true">
                               <span class="svg-icon svg-icon-muted svg-icon-1">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                        <path opacity="0.3" d="M22.1 11.5V12.6C22.1 13.2 21.7 13.6 21.2 13.7L19.9 13.9C19.7 14.7 19.4 15.5 18.9 16.2L19.7 17.2999C20 17.6999 20 18.3999 19.6 18.7999L18.8 19.6C18.4 20 17.8 20 17.3 19.7L16.2 18.9C15.5 19.3 14.7 19.7 13.9 19.9L13.7 21.2C13.6 21.7 13.1 22.1 12.6 22.1H11.5C10.9 22.1 10.5 21.7 10.4 21.2L10.2 19.9C9.4 19.7 8.6 19.4 7.9 18.9L6.8 19.7C6.4 20 5.7 20 5.3 19.6L4.5 18.7999C4.1 18.3999 4.1 17.7999 4.4 17.2999L5.2 16.2C4.8 15.5 4.4 14.7 4.2 13.9L2.9 13.7C2.4 13.6 2 13.1 2 12.6V11.5C2 10.9 2.4 10.5 2.9 10.4L4.2 10.2C4.4 9.39995 4.7 8.60002 5.2 7.90002L4.4 6.79993C4.1 6.39993 4.1 5.69993 4.5 5.29993L5.3 4.5C5.7 4.1 6.3 4.10002 6.8 4.40002L7.9 5.19995C8.6 4.79995 9.4 4.39995 10.2 4.19995L10.4 2.90002C10.5 2.40002 11 2 11.5 2H12.6C13.2 2 13.6 2.40002 13.7 2.90002L13.9 4.19995C14.7 4.39995 15.5 4.69995 16.2 5.19995L17.3 4.40002C17.7 4.10002 18.4 4.1 18.8 4.5L19.6 5.29993C20 5.69993 20 6.29993 19.7 6.79993L18.9 7.90002C19.3 8.60002 19.7 9.39995 19.9 10.2L21.2 10.4C21.7 10.5 22.1 11 22.1 11.5ZM12.1 8.59998C10.2 8.59998 8.6 10.2 8.6 12.1C8.6 14 10.2 15.6 12.1 15.6C14 15.6 15.6 14 15.6 12.1C15.6 10.2 14 8.59998 12.1 8.59998Z" fill="black" />
                                        <path d="M17.1 12.1C17.1 14.9 14.9 17.1 12.1 17.1C9.30001 17.1 7.10001 14.9 7.10001 12.1C7.10001 9.29998 9.30001 7.09998 12.1 7.09998C14.9 7.09998 17.1 9.29998 17.1 12.1ZM12.1 10.1C11 10.1 10.1 11 10.1 12.1C10.1 13.2 11 14.1 12.1 14.1C13.2 14.1 14.1 13.2 14.1 12.1C14.1 11 13.2 10.1 12.1 10.1Z" fill="black" />
                                    </svg>
                                </span>
                            </a>
                           </div>
                    </div>
                </div>
           </div>
          </div>
       <div class="aside-menu flex-column-fluid">
           <div class="hover-scroll-overlay-y px-2 my-5 my-lg-5" id="kt_aside_menu_wrapper" data-kt-scroll="true" data-kt-scroll-height="auto" data-kt-scroll-dependencies="{default: '#kt_aside_toolbar, #kt_aside_footer', lg: '#kt_header, #kt_aside_toolbar, #kt_aside_footer'}" data-kt-scroll-wrappers="#kt_aside_menu" data-kt-scroll-offset="5px">
               <div class="menu menu-column menu-title-gray-800 menu-state-title-primary menu-state-icon-primary menu-state-bullet-primary menu-arrow-gray-500" id="#kt_aside_menu" data-kt-menu="true">
               <div class="menu-item" v-for="m in menus">
                    <a class="menu-link"  :href="m.link" >
                        <span class="menu-icon">
                           <span class="svg-icon svg-icon-2">
                            <img class="filter-green" class="menu" :src="'../painel/assets/icon/'+m.icon">
                            </span>
                            <!--end::Svg Icon-->
                        </span>
                        <span class="menu-title">{{m.nome}}</span>
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
            gravatar: '../painel/assets/image/gravatar.png',
            menus: [],
            nome: null
        }
    },

    methods: {
		async listar() {
            let res = await adm.ListarPerfil( localStorage.getItem('token') )
			return res
        },
	
	},

    created() {
  


    },
    async mounted() {
        this.menus = menus
     
        let dados = (await this.listar()).dados
           	this.nome = dados.nome

        let jms = document.createElement('script'); jms.setAttribute('src', "../../painel/assets/js/vendor/scripts.bundle.js");
        document.head.appendChild(jms);
    }
}