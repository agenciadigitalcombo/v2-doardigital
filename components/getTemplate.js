export default async  function (path) {
    let full_url = path
    if(window.location.port == '') {        
        let dir = window.location.pathname.replace(/\//gi, '')
        path = path.replace(/.\/..\//gi, '')
        path = path.replace(`${dir}/`, '')
        full_url = `../${path}`
    }
    return await fetch(`${full_url}.html`).then(function (response) {
        return response.text()
    }).then(function (html) {
        return html;
    })
}