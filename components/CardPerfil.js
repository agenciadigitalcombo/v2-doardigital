import getTemplate from "./getTemplate.js"

export default {
    props: ['link','text','value','variation','tax','icon','dashboard','size','recorrente', 'gravatar'],
    template : await getTemplate( './../components/CardPerfil' ),
    data: function() {
        return {
            icons:{
                home: "fas fa-arrow-up",
                bar: "far fa-chart-bar",
                heart: "fa-solid fa-heart-circle-check"
            },
            sizes:{
                dois: "w-full md:w-1/2 xl:w-1/6 p-6",
                tres: "w-full md:w-1/2 xl:w-2/6 p-6",
                quatro: "w-full md:w-1/2 xl:w-3/6 p-6",
                cinco: "w-full md:w-1/2 xl:w-4/6 p-6",
                seis: "w-full md:w-1/2 xl:w-5/6 p-6",
                sete: "w-full md:w-1/2 xl:w-full p-6",

            },
            variations:{
               blue: "text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 shadow-lg rounded-full bg-blue-500",
               yellow: "text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 shadow-lg rounded-full bg-yellow-500",           
               green: "text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 shadow-lg rounded-full bg-green-500", 
               red: "text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 shadow-lg rounded-full bg-red-500", 
               purple: "text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 shadow-lg rounded-full bg-purple-500", 


            }
        }
    },
    mounted() {
    }
}