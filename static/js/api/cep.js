'use strict';





function pesquisarCep() {
    alert("ola llll")

    let cep = document.querySelector('#cep').value;

    if (cep.length !== 8) {
        alert("Cep Invalido");
        return;
    }
    const options = {
        method: 'GET',
        mode: 'cors',
        cache: 'default',
    }

    fetch(`https://viacep.com.br/ws/${cep}/json/`, options)
        .then(response => {
            response.json().then(data => showData(data))
        })
        .catch(e => console.log("deu erro" + e.menssage))
}

function showData(resultado) {
// let resultado = document.querySelector('#resultado');
for(const campo in resultado){
    if (document.querySelector("#"+campo)) {
        document.querySelector("#"+campo).value = resultado[campo]
    console.log(campo)
    }
}

}

