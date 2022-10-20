import getTemplate from "./getTemplate.js"

export default {
    props: ['open'],
    template : await getTemplate( './../components/Loader' ),
    data: function() {
        return {
            icons:{
                home: "fas fa-arrow-up",
            },
            sizes:{
                2: "w-full lg:w-6/12 xl:w-6/12 px-4",

            },
            variations:{
               blue: "text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 shadow-lg rounded-full bg-blue-500",
            }
        }
    },
    mounted() {
    }
}