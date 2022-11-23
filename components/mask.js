export default function () { }

export function cpf(valor) {
    return (valor + '')
        .replace(/\D/gi, '')
        .replace(/(\d{3})(\d{3})(\d{3})(\d{2,2})(.*)/g, "\$1.\$2.\$3\-\$4")
        .substring(0, 14)

}

export function cnpj(valor) {
    return (valor + '')
        .replace(/\D/gi, '')
        .replace(/(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/g, "\$1.\$2.\$3\/\$4\-\$5")
        .substring(0, 18)
}

export function tel(valor) {
    return (valor + '')
        .replace(/\D/gi, '')
        .replace(/(\d{2})(\d{4,5})(\d{4})/g, "\(\$1\) \$2-\$3")
        .substring(0, 15);
}

export function cep(valor) {
    return (valor + '')
        .replace(/\D/gi, '')
        .replace(/(\d{5})(\d{3})/gi, "\$1-\$2")
        .substring(0, 9);

}

export function Money(val) {
    val = `${val}`
    val = val?.replace('\.', '')
    val = val?.replace(/\D/gi, '')
    val = val ? val : 0
    val = `${parseInt(val)}` ?? '0'
    switch (val.length) {
        case 0:
            val = '00,00'
            break;
        case 1:
            val = val.replace(/(\d{1})/gi, '00,0$1')
            break;
        case 2:
            val = val.replace(/(\d{2})/gi, '00,$1')
            break;
        case 3:
            val = val.replace(/(\d{1})(\d{2})/gi, '0$1,$2')
            break;
        case 4:
            val = val.replace(/(\d{2})(\d{2})/gi, '$1,$2')
            break;
        case 5:
            val = val.replace(/(\d{3})(\d{2})/gi, '$1,$2')
            break;
        case 6:
            val = val.replace(/(\d{1})(\d{3})(\d{2})/gi, '$1.$2,$3')
            break;
        default:
            val = val.replace(/(\d{1})(\d{3})(\d{2})(.*)/gi, '$1.$2,$3')
            break;
    }
    return val
}