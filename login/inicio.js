import apiAdmin from "../components/apiAdmin.js"
import ApiInstitution from "../components/apiInstitution.js"
import myInstitution from "../components/myInstitution.js"
import Jwt from "../components/jwt.js"

export default {
   data: function () {
      return {
         email: 'super@digitalcombo.com.br',
         pass: '123456789',
         onerror: null,
         statusBtn: true
      }
   },
   methods: {
      redirect(level) {
         let lb = {
            sub: 'painel-sub',
            adm: 'painel-new',
            super: 'painel-super',
         }
         window.location.href = `//${window.location.host}/${lb[level]}`
      },
      async login() {
         this.onerror = null
         this.statusBtn = false
         let api = new apiAdmin()
         let jwt = new Jwt()
         let request = await api.login(this.email, this.pass)
         this.statusBtn = true
         if (!request.next) {
            this.onerror = request.message
            return null
         }
         jwt.save(request.payload.token)
         let code = jwt.get().code
         let requestInfo = await api.info(code)

         let apiInst = new ApiInstitution()
         let allInst = await apiInst.list(code)
         let defaultInst = allInst.payload?.[0]?.institution_fk

         let myInst = new myInstitution()
         let selectInst = myInst.get()

         if (!selectInst) {
            if (defaultInst) {
               myInst.save(defaultInst)
            }
         }

         let level = 'sub'
         if (requestInfo.payload.adm.length == 0) {
            level = 'adm'
         }
         if (requestInfo.payload.sass == '1') {
            level = 'super'
         }

         let etapa = requestInfo?.payload?.etapa || 0
         if (etapa == 0) {
            window.location.href = "/finalizar-assinatura/#/"
            alert('pego')
            return 0
         }
         this.redirect(level)
      }
   },
   async mounted() {
      let api = new apiAdmin()
      let jwt = new Jwt()
      let code = jwt.get()?.code
      let requestInfo = await api.info(code)

      let level = 'sub'
      if (requestInfo?.payload?.adm?.length == 0) {
         level = 'adm'
      }
      if (requestInfo?.payload?.sass == '1') {
         level = 'super'
      }
      if (jwt.logged()) {
         let etapa = requestInfo?.payload?.etapa || 0
         if (etapa == 0) {
            window.location.href = "/finalizar-assinatura/#/"
            return 0
         }
         this.redirect(level)
      }
   },

   template: `
    <div>
    <!DOCTYPE html>
   <html lang="pt-br">

   <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Login Painel - Doar Digital</title>
      <link rel="shortcut icon" href="../assets/logo/ico.png" type="image/x-icon">
      <script src="https://cdn.tailwindcss.com"></script>
      <script src="https://unpkg.com/vue@3"></script>
      <script src="https://unpkg.com/vue-router@4"></script>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.2/css/all.min.css"
         integrity="sha512-1sCRPdkRXhBV2PBLUdRb4tMg1w2YPf37qatUFeS7zlBy7jJI8Lf4VHwWfZZfpXtYSLy85pkm9GaYVYMfw5BC1A=="
         crossorigin="anonymous" referrerpolicy="no-referrer" />
      <script src="./index.js" type="module" defer async></script>
      <link rel="shortcut icon" href="../public/logo/ico.pnga" type="image/x-icon">

      <!-- 
         https://fontawesome.com/search?s=solid%2Cbrands 
         https://tailwindcss.com/docs/installation
         https://vuejs.org    
      -->

   </head>

   <body>
      <div id="app">
         <form class="min-h-screen bg-gray-100 flex flex-col justify-center sm:py-12" action="javascript:void(0)"
               method="POST" @submit="login">
               <div class="p-10 xs:p-0 mx-auto md:w-full md:max-w-md">
                  <img src="../public/logo/logo.svg" style="max-width: 200px; display: block; margin: 0 auto; margin-bottom: 40px;" alt="doar digital">

                  <div class="bg-white shadow w-full rounded-lg divide-y divide-gray-200">
                     <div class="px-5 py-7">
                           <label class="font-semibold text-sm text-gray-600 pb-1 block">E-mail</label>
                           <input type="text" class="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full"
                              v-model="email" />
                           <label class="font-semibold text-sm text-gray-600 pb-1 block">Senha</label>
                           <input type="password" class="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full"
                              v-model="pass" />
                           <div v-show="onerror" @click="onerror=null">
                              <div class="flex bg-yellow-100 rounded-lg p-4 mb-4 text-sm text-yellow-700" role="alert">
                                 <svg class="w-5 h-5 inline mr-3" fill="currentColor" viewBox="0 0 20 20"
                                       xmlns="http://www.w3.org/2000/svg">
                                       <path fill-rule="evenodd"
                                          d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                                          clip-rule="evenodd"></path>
                                 </svg>
                                 <div>
                                       <span class="font-medium">Error!</span> {{onerror}}
                                 </div>
                              </div>
                           </div>
                           <button type="submit" :disabled="!statusBtn"
                              class="transition duration-200 bg-blue-500 hover:bg-blue-600 focus:bg-blue-700 focus:shadow-sm focus:ring-4 focus:ring-blue-500 focus:ring-opacity-50 text-white w-full py-2.5 rounded-lg text-sm shadow-sm hover:shadow-md font-semibold text-center inline-block">
                              <span class="inline-block mr-2">
                                 <div v-if="statusBtn">
                                       Login
                                 </div>
                                 <div v-else>
                                       Carregando
                                 </div>
                              </span>
                              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                 stroke="currentColor" class="w-4 h-4 inline-block">
                                 <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                       d="M17 8l4 4m0 0l-4 4m4-4H3" />
                              </svg>
                           </button>
                     </div>
                     <div class="py-5">
                           <div class="grid grid-cols-2 gap-1">
                              <div class="text-center sm:text-left whitespace-nowrap">
                                 <span onclick="location.href='#recuperar'"
                                       class="transition duration-200 mx-5 px-5 py-4 cursor-pointer font-normal text-sm rounded-lg text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-200 focus:ring-2 focus:ring-gray-400 focus:ring-opacity-50 ring-inset">
                                       <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                          stroke="currentColor" class="w-4 h-4 inline-block align-text-top">
                                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                             d="M8 11V7a4 4 0 118 0m-4 8v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2z" />
                                       </svg>
                                       <span class="inline-block ml-1">Esqueceu a senha?</span>
                                 </span>
                              </div>
                              <div class="text-center sm:text-right  whitespace-nowrap">
                                 <span onclick="window.open('https://google.com','_blank')"
                                       class="transition duration-200 mx-5 px-5 py-4 cursor-pointer font-normal text-sm rounded-lg text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-200 focus:ring-2 focus:ring-gray-400 focus:ring-opacity-50 ring-inset">
                                       <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                          stroke="currentColor" class="w-4 h-4 inline-block align-text-bottom	">
                                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                             d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                                       </svg>
                                       <span class="inline-block ml-1">Suporte</span>
                                 </span>
                              </div>
                           </div>
                     </div>
                  </div>
                  <div class="py-5">
                     <div class="grid grid-cols-2 gap-1">
                           <div class="text-center sm:text-left whitespace-nowrap">
                              <span onclick="window.open('https://doardigital.com.br','_blank')"
                                 class="transition duration-200 mx-5 px-5 py-4 cursor-pointer font-normal text-sm rounded-lg text-gray-500 hover:bg-gray-200 focus:outline-none focus:bg-gray-300 focus:ring-2 focus:ring-gray-400 focus:ring-opacity-50 ring-inset">
                                 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                       stroke="currentColor" class="w-4 h-4 inline-block align-text-top">
                                       <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                          d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                                 </svg>
                                 <span class="inline-block ml-1">Voltar para o Site</span>
                              </span>
                           </div>
                     </div>
                  </div>
               </div>
         </form>
      </div>
   </body>

   </html>
    </div>`,
}
