const { createApp, h } = Vue

const vnode = h(
    'div', // type
    { id: 'foo', class: 'bar' }, // props
    [
        /* children */
    ]
)




// import Inicio from "./inicio.js"

let teste = <div>ok</div>


function Draw($r) {
    let valid = $r?.props?.children || ""
    if( typeof valid == "string") {
        return h(
            $r?.type || "div",
            $r?.props?.children || ""
        )
        return
    }    
    if( !Array.isArray(valid)) {
        return h(
            $r?.type || "div",
            Draw(valid)
        )
        return
    }
    if(Array.isArray(valid)) {        
        let lista =  $r.props.children.map(function($n) { 
            return Draw($n )
        })
        return lista || []
    }
}
const Inicio = {
    render() {
        return Draw(
            <h1 class="bg-[#C00]">
                <h1>teste</h1>
                <div>ok</div>
            </h1>
        )
    }
}
const Sobre = { template: '<div>Sobre</div>' }

const routes = [
    { path: '/', component: Inicio },
    { path: '/sobre', component: Sobre },
]

const router = VueRouter.createRouter({
    history: VueRouter.createWebHashHistory(),
    routes,
})

// createCommentVNode
createApp({
    data() {
        return {}
    }
}).use(router).mount('#app')