import getTemplate from "./getTemplate.js"

export default {
    props: ['link','text','value','variation','tax','icon','dashboard','size'],
    template : await getTemplate( './../components/Card2' ),
    data: function() {
        return {
            icons:{
                home: "fas fa-arrow-up",
                bar: "far fa-chart-bar",
                heart: "fa-solid fa-heart-circle-check"
            },
            sizes:{
                dois: "w-full lg:w-6/12 xl:w-6/12 px-4",
                tres: "bg-gradient-to-b from-green-200 to-green-100 border-b-4 border-green-600 rounded-lg shadow-xl p-5 w-full lg:w-2/12 xl:w-11/12 px-4",
                quatro: "w-full lg:w-3/12 xl:w-3/12 px-4",
                seis: "w-full lg:w-2/12 xl:w-2/12 px-4",

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