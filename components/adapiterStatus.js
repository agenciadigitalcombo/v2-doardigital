

export default function (status) {
    let lib = {
        PENDING: 'Aguardando Pagamento',
        RECEIVED: 'Pago',
        CONFIRMED: 'Pago',
        OVERDUE: 'Vencida',
        REFUND_REQUESTED: 'Estorno',
        CHARGEBACK_REQUESTED: 'Estorno',
        CHARGEBACK_DISPUTE: 'Estorno',
        AWAITING_CHARGEBACK_REVERSAL: 'Estorno',
        BOLETO: 'Boleto',
        CREDIT_CARD: 'Cartão de crédito',
        PIX: 'PIX',
    }
    return lib[status] || 'Indefinido'
}