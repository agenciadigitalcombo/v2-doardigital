import getTemplate from "./getTemplate.js"

export default {
    props: ['link','text','value','variation','tax','icon','dashboard','size','cor', 'valuepix', 'valueboleto', 'valuecredito'],
    template : await getTemplate( './../components/CardDash' ),
    data: function() {
        return {
            sizes:{
                2: "w-full lg:w-6/12 xl:w-6/12 px-4 mb-5",
                3: "w-full lg:w-4/12 xl:w-4/12 px-4 mb-5",
                4: "w-full lg:w-3/12 xl:w-3/12 px-4 mb-5",
                6: "w-full lg:w-2/12 xl:w-2/12 px-4 mb-5",
            },
            variations:{
                blue: "flex items-center justify-center flex-shrink-0 h-12 w-12 rounded-xl bg-blue-100 text-blue-500",
                red: "flex items-center justify-center flex-shrink-0 h-12 w-12 rounded-xl bg-blue-100 text-red-500",
                green: "flex items-center justify-center flex-shrink-0 h-12 w-12 rounded-xl bg-blue-100 text-green-500",
                yellow: "flex items-center justify-center flex-shrink-0 h-12 w-12 rounded-xl bg-blue-100 text-yellow-500",
            },
            cores:{
                blue: "rounded-md bg-gradient-to-b from-blue-600 to-blue-200 p-5 pb-44 text-white",
                green: "rounded-md bg-gradient-to-b from-[#16a34a] to-[#50cd89] p-5 pb-44 text-white",           
                yellow: "rounded-md bg-gradient-to-b from-[#ffc700] to-[#ca8a04] p-5 pb-44 text-white", 
                red: "rounded-md bg-gradient-to-b from-[#dc2626] to-[#fed4d4] p-5 pb-44 text-white", 
                purple: "rounded-md bg-[#0006] p-5 pb-44 text-white", 
             }
        }
    },
    mounted() {
    }
}