export default function () { }

export function cpf(valor) {
    return (valor+'').replace(/(\d{3})(\d{3})(\d{3})(\d{2})/g,"\$1.\$2.\$3\-\$4");
}

export function cnpj(valor) {
    return (valor+'').replace(/(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/g,"\$1.\$2.\$3\/\$4\-\$5");
}

export function tel(valor) {
    return (valor+'').replace(/(\d{2})(\d{4,5})(\d{4})/g,"\(\$1\) \$2-\$3")
}

export function cep(valor) {
    return (valor+'').replace(/(\d{5})(\d{3})/g,"\$1-\$2")
}