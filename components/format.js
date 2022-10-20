export default function () { }

export function data(data) {
    return data?.split('-')?.reverse()?.join('/') || ''
}

export function getUriData(name) {
    const url = new URL(window.location.href.replace('#/'))
    return url.searchParams.get(name)
}

export function formataMoeda(value) {
    const formatter = new Intl.NumberFormat("pt-BR",
        {
            style: "currency",
            currency: "BRL",
            minimumFractionDigits: 2,
        });
    return formatter.format(value)

}

export function formatRecorrente(recorrente) {
    var recorrencia = recorrente
    if (recorrencia == true || recorrencia == "ACTIVE" ) {
        return "ATIVA"
    } else if (recorrencia == false || recorrencia == "INACTIVE") {
        return "INATIVO"
    }
}


export function formatTipoPagamento(tipo) {
    var tipo = tipo
    if (tipo == true || tipo == "BOLETO" ) {
        return "BOLETO"
    } else if (tipo == false || tipo == "CREDIT_CARD") {
        return "CRÉDITO"
    } else if (tipo == false || tipo == "PIX") {
        return "PIX"
    }
}



export function copy($element) {
    $element.select()
    document.execCommand('copy')
}

export function taxas(valor, method = 'PIX', percentage_split = 4) {
    const porcentagem = (percent, total) => (percent / 100) * total
    const taxas_fixa = {
        PIX: 0.79,
        BOLETO: 1.99,
        CREDIT_CARD: 0.49
    }
    let taxa_fixa = taxas_fixa[method]
    if (method == "CREDIT_CARD") {
        taxa_fixa = porcentagem(2.99, valor) + taxa_fixa
    }
    let taxa_split = porcentagem(percentage_split, valor)
    return {
        doar: taxa_split,
        fix: taxa_fixa,
        liquid: (valor - taxa_split) - taxa_fixa
    }
}