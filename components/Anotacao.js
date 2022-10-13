import getTemplate from "./getTemplate.js"

export default {
    props: ['autor','text','data','variation','tax','icon','dashboard','size'],
    template : await getTemplate( './../components/anotacao' ),
    data: function() {
        return {
            icons:{
                home: "fas fa-arrow-up",
                bar: "far fa-chart-bar",
                heart: "fa-solid fa-heart-circle-check"
            },
            sizes:{
                2: "w-full lg:w-6/12 xl:w-6/12 px-4",
                3: "w-full lg:w-4/12 xl:w-4/12 px-4",
                4: "w-full lg:w-3/12 xl:w-3/12 px-4",
                6: "w-full lg:w-2/12 xl:w-2/12 px-4",

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