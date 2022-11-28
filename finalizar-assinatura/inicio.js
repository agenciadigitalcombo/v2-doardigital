import apiAdmin from "../components/apiAdmin.js"
import ApiInstitution from "../components/apiInstitution.js"
import myInstitution from "../components/myInstitution.js"
import Jwt from "../components/jwt.js"






export default {
   data: function () {
      return {
         email: 'supera@digitalcombo.com.br',
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
         let defaultInst = allInst.payload[0].institution_fk

         let myInst = new myInstitution()
         let selectInst = myInst.get()

         if(!selectInst) {
            myInst.save(defaultInst)
         }

          let level = 'sub'
          if (requestInfo.payload.adm.length == 0) {
              level = 'adm'
          }
          if (requestInfo.payload.sass == '1') {
              level = 'super'
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
         this.redirect(level)
      }
   },

   template: `
    <div>
    <div style="background-color: #0f2936" class="">
        <div class="flex justify-center h-screen">
          <div class="flex items-center w-full max-w-md px-6 mx-auto lg:w-3/6">
                <div class="flex-1">
                    <div class="text-center">
                        <div class="flex flex-wrap justify-center"><img src="https://painel.doardigital.com.br/api/upload/logomarca-bethania.png" class="object-center"/>
      </div>
                        
                        <p class="mt-3 text-gray-500 dark:text-gray-300">Sign in to access your account</p>
                    </div>

                    <div class="mt-8">
                        <form>
                            <div>
                                <label for="email" class="block mb-2 text-sm text-gray-600 dark:text-gray-200">Email Address</label>
                                <input type="email" name="email" id="email" placeholder="example@example.com" class="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                            </div>

                            <div class="mt-6">
                                <div class="flex justify-between mb-2">
                                    <label for="password" class="text-sm text-gray-600 dark:text-gray-200">Password</label>
                                    <a href="#" class="text-sm text-gray-400 focus:text-blue-500 hover:text-blue-500 hover:underline">Forgot password?</a>
                                </div>

                                <input type="password" name="password" id="password" placeholder="Your Password" class="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                            </div>

                            <div class="mt-6">
                                <button
                                    class="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-blue-500 rounded-md hover:bg-blue-400 focus:outline-none focus:bg-blue-400 focus:ring focus:ring-blue-300 focus:ring-opacity-50">
                                    Sign in
                                </button>
                            </div>

                        </form>

                        <p class="mt-6 text-sm text-center text-gray-400">Don&#x27;t have an account yet? <a href="#" class="text-blue-500 focus:outline-none focus:underline hover:underline">Sign up</a>.</p>
                    </div>
                </div>
            </div>
          
          
            <div class="hidden bg-cover lg:block lg:w-3/5" style="background-image: url(https://doardigital.com.br/wp-content/uploads/2022/11/1616586757e-book_acolhimento_que_gera_e_transforma_vidas_-_comunidade_bethania-01.jpg)">
                <div class="flex items-center h-full px-20 bg-gray-900 bg-opacity-0">
                    <div>
                        <h2 class="text-4xl font-bold text-white"></h2>
                        
                        <p class="max-w-xl mt-3 text-gray-300"></p>
                    </div>
                </div>
            </div>
            
            
        </div>
    </div>
    </div>`,
}
