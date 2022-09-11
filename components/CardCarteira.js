import getTemplate from "./getTemplate.js"

export default {
    props: ['link','text','value','variation','tax','icon'],
    template : await getTemplate( './../components/CardCarteira' ),
    data: function() {
        return {
            dashboard: false,
            icons:{
                home: "fas fa-arrow-up",
                bar: "far fa-chart-bar"
            },
            variations:{
               blue: "text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 shadow-lg rounded-full bg-blue-500",
               yellow: "text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 shadow-lg rounded-full bg-yellow-500",           
               green: "text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 shadow-lg rounded-full bg-green-500",           
            }
        }
    },
    mounted() {
    }
}