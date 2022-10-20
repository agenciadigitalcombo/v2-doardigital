import getTemplate from "./getTemplate.js"

export default {
    props: ['link','text','value','variation','tax','icon','dashboard','size','cor'],
    template : await getTemplate( './../components/card2' ),
    data: function() {
        return {
            icons:{
                home: "fas fa-arrow-up fa-2x fa-inverse",
                bar: "far fa-chart-bar fa-2x fa-inverse",
                heart: "fa-solid fa-heart-circle-check fa-2x fa-inverse"
            },
            sizes:{
                2: "w-full lg:w-6/12 xl:w-6/12 px-4",
                3: "w-full lg:w-4/12 xl:w-4/12 px-4",
                4: "w-full lg:w-3/12 xl:w-3/12 px-4",
                6: "w-full lg:w-2/12 xl:w-2/12 px-4",

            },
            variations:{
               blue: "rounded-full p-5 bg-blue-600",
               yellow: "rounded-full p-5 bg-yellow-600",           
               green: "rounded-full p-5 bg-green-600", 
               red: "rounded-full p-5 bg-red-600", 
               purple: "rounded-full p-5 bg-purple-600", 
            },
            cores:{
                blue: "bg-gradient-to-b from-blue-200 to-blue-100 border-b-4 border-blue-600 rounded-lg shadow-xl p-5",
                yellow: "bg-gradient-to-b from-yellow-200 to-yellow-100 border-b-4 border-yellow-600 rounded-lg shadow-xl p-5",           
                green: "bg-gradient-to-b from-green-200 to-green-100 border-b-4 border-green-600 rounded-lg shadow-xl p-5", 
                red: "bg-gradient-to-b from-red-200 to-red-100 border-b-4 border-red-600 rounded-lg shadow-xl p-4 my-2", 
                purple: "bg-gradient-to-b from-purple-200 to-purple-100 border-b-4 border-purple-600 rounded-lg shadow-xl p-5", 
             }
        }
    },
    mounted() {
    }
}