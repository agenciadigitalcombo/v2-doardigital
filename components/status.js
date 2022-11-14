export default function ( status ) {
    let styleBase = "py-1 px-3 rounded-full text-xs"
    let translate = {
        PENDING: "Pendente",
        RECEIVED: "Pago",
        CONFIRMED: "Pago",
        OVERDUE: "Vencida",
        REFUNDED: "Estornada",
        REFUND_REQUESTED: "Estornado",
        CHARGEBACK_REQUESTED: "Estornado",  
        DONE: "Realizado",      
        INACTIVE: "Inativo",      
        ACTIVE: "Ativo",      
    }
    let colors = {
        PENDING: "yellow",
        RECEIVED: "green",
        CONFIRMED: "green",
        OVERDUE: "red",
        INACTIVE: "red",
        REFUNDED: "red",
        REFUND_REQUESTED: "purple",
        CHARGEBACK_REQUESTED: "purple", 
        DONE: "green",   
        ACTIVE: "green",   
    }
    let styleColor = `bg-${colors[status] || 'blue'}-200 text-${colors[status] || 'blue'}-600`
    return `<span class="${styleBase} ${styleColor}">${translate[status] || status}</span>`
}

