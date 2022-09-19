export default function () { }

export function data(data) {
    return data.split('-').reverse().join('/')
}

export function getUriData(name) {
    console.log(window.location.href.replace('#/'))
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