
function getDados() {
    let form = document.formulario
    return {
        nome: form.name.value,
        email: form.email.value,
        telefone: form.phone.value.replace(/\D/gi, ''),
        password: form.password.value,
        password_confirm: form.password_confirm.value,
        ativo: true,
        instituicao_id: 0,
        credencial: 15,
        vendendor_id: null,
        anotacao: btoa(
            JSON.stringify({
                notification: {
                    email: form.notification_email.checked,
                    sms: form.notification_sms.checked
                }
            })
        )
    }
}

function validarPass(data) {
    if (data.password.length < 6) return 'a senha deve ter ao menos 6 digitos'
    if (data.password != data.password_confirm) return 'a senhas deve ser iguais'
    return ''
}

function closeError() {
    document.querySelector('.js-alert').innerHTML = ""
}

function onError(message) {
    document.querySelector('.js-alert').innerHTML = `<p onclick="globalThis.closeError()" class="alert">${message} </p>`
}

async function cadastrar() {
    let $loading =  document.querySelector('.js-loading')
    closeError()
    if (validarPass(getDados()).length > 0) return onError(validarPass(getDados()))
    $loading.removeAttribute('hidden')
    let register = await SuperRegisterAdmin(getDados())
    $loading.setAttribute('hidden','')
    if (register.status) return onError(register.message)
    await SendWhatsapp(getDados().telefone)
    if(window.location.hostname != '127.0.0.1') {
        window.location.href = `http://padrao.doardigital.com.br/painel/#/cadastrado-sucesso/${register.token.access_token}/${register.admin.id}/${register.admin.nome}/1`
    }
    if(window.location.hostname == '127.0.0.1') {
        window.location.href = `http://127.0.0.1:5500/painel/#/cadastrado-sucesso/${register.token.access_token}/${register.admin.id}/${register.admin.nome}/1`
    }

}

function maskTel($el) {
    let mascara = $el.value
    mascara = mascara.replace(/\D/gi, '')
    mascara = mascara.replace(/(\d{2})(.*)/gi, '($1) $2')
    mascara = mascara.replace(/\((\d{2})\)\s(\d{1})(.*)/gi, '($1) $2 $3')
    mascara = mascara.replace(/\((\d{2})\)\s(\d{1})\s(\d{4})(.*)/gi, '($1) $2 $3-$4')
    mascara = mascara.replace(/\((\d{2})\)\s(\d{1})\s(\d{4})-(\d{4})(.*)/gi, '($1) $2 $3-$4')
    $el.value = mascara
}

function cpf(mascara) {
    // 000.000.000-00
    mascara = mascara.replace(/(\d{3})(.*)/gi, '$1.$2')
    mascara = mascara.replace(/(\d{3})\.(\d{3})(.*)/gi, '$1.$2.$3')
    mascara = mascara.replace(/(\d{3})\.(\d{3})\.(\d{3})(.*)/gi, '$1.$2.$3-$4')
    mascara = mascara.replace(/(\d{3})\.(\d{3})\.(\d{3})\-(\d{2})(.*)/gi, '$1.$2.$3-$4')

    return mascara
}
function cnpj(mascara) {
    mascara = mascara.replace(/(\d{2})(.*)/gi, '$1.$2')
    mascara = mascara.replace(/(\d{2})\.(\d{3})(.*)/gi, '$1.$2.$3')
    mascara = mascara.replace(/(\d{2})\.(\d{3})\.(\d{3})(.*)/gi, '$1.$2.$3/$4')
    mascara = mascara.replace(/(\d{2})\.(\d{3})\.(\d{3})\/(\d{4})(.*)/gi, '$1.$2.$3/$4-$5')
    mascara = mascara.replace(/(\d{2})\.(\d{3})\.(\d{3})\/(\d{4})\-(\d{2})(.*)/gi, '$1.$2.$3/$4-$5')

    return mascara
}

function mask_cpf_cnpj($el) {
    let mascara = $el.value
    mascara = mascara.replace(/\D/gi, '')
    if (mascara.length > 11) {
        mascara = cnpj(mascara)
    } else {
        mascara = cpf(mascara)
    }
    $el.value = mascara
}

function obj_to_url(obj) {
    let indices = Object.keys(obj);
    let url = indices.map(i => `${i}=${obj[i]}`).join('&');
    return encodeURI(url);
}

async function SuperRegisterAdmin(dados) {
    let base = '//api.doardigital.com.br/v1/cadastro'
    let options = {
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        method: 'POST',
        mode: 'cors',
        cache: 'default',
        body: obj_to_url(dados)
    }
    try {
        return await (await fetch(base, options)).json()        
    } catch (error) {
        return {
            status: false,
            message: "Error tente novamente mais tarde"
        }
    }
}

async function SendWhatsapp(tel) {
    let format_tel = '55'
    format_tel += valida_telefone(tel)
    let form = {
        sender: 'digitalcombo',
        number: format_tel,
        message: 'Seja Bem vindo ao Doar Digital',
        idc: 'cadastro.doardigital.com.br',
    }
    let base = 'http://94.130.148.247:8000/send-message/'
    let options = {
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        method: 'POST',
        mode: 'no-cors',
        cache: 'default',
        body: obj_to_url(form)
    }
    try {        
        return await fetch(base, options)
    } catch (error) {
        return async () => '{}' 
    }
}

function valida_telefone($telefone) {
    $telefone = $telefone.replace(/\D/, "");
    $ddd = $telefone.substr(0, 2);
    if ($ddd === "11" || $ddd === "12" || $ddd === "13" || $ddd === "14" || $ddd === "15" || $ddd === "16" || $ddd === "17" || $ddd === "18" || $ddd === "19" || $ddd === "21" || $ddd === "22" || $ddd === "24") {
        $telefone = $telefone;
    } else {
        $telefone = $telefone.substr(-8);
        $telefone = $ddd + $telefone;
        $telefone = $telefone;
    }
    return $telefone;
}


globalThis.cadastrar = cadastrar
globalThis.closeError = closeError
globalThis.maskTel = maskTel
globalThis.mask_cpf_cnpj = mask_cpf_cnpj