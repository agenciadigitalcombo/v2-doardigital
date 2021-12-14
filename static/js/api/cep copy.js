'use strict';

// const options = {
//     headers: {
//         'Content-Type': 'application/x-www-form-urlencoded'
//     },
//     method: 'POST',
//     mode: 'cors',
//     cache: 'default',
//     body: null
// }


function pesquisarCep() {
    alert ("ola llll")

  let  cep = document.querySelector('#cep').value;

  if (cep.length !== 8) {
    alert ("Cep Invalido");
    return
  } 
   let url = `https://viacep.com.br/ws/${cep} /json/`
//    let url = `https://viacep.com.br/ws/ + cep + /json/`

fetch(url).then(function(res) {
    console.log(res)
    
})

 
} 





