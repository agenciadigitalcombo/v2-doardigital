export default function () { }

export function data(data) {
    return data.split('-').reverse().join('/')
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
    if(recorrencia == true){
        return "Ativa"
    } else if(recorrencia == false){
        return "Inativo"
    }
}

export function formatCpf(cpf) {
    var cpfFormat = cpf
    if(cpfFormat.value.length == 3 || cpfFormat.value.length == 7){
        cpfFormat += "."
    } else if(cpfFormat.value.length == 11){
        cpfFormat += "-"
    }
}
