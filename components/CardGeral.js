import getTemplate from "./getTemplate.js"
import Table from "./Table.js"

export default {
    props: ['link','text','value','variation','tax','icon','dashboard','size'],
    template : await getTemplate( './../components/cardGeral' ), 
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
                full: "w-full p-6",
                2: "w-full lg:w-6/12 xl:w-6/12 px-4",
                3: "w-full lg:w-4/12 xl:w-4/12 px-4",
                4: "w-full lg:w-3/12 xl:w-3/12 px-4",
                5: "w-full p-6 lg:w-1/2 xl:w-1/5 px-4",
                6: "w-full lg:w-2/12 xl:w-2/12 px-4",

            },
            variations:{
               blue: "text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 shadow-lg rounded-full bg-blue-500",



            }
        }
    },
    mounted() {
    }
}