export default async function( cep ) {
    let CEP = cep.replace(/\D/gi, '').substr(0, 8)    
    if (CEP.length == 8) {
        let request = await fetch(`https://viacep.com.br/ws/${CEP}/json/`)
        return await request.json()
    }
    return {}
}
