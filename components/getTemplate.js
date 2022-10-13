export default async  function (path) {
    let full_url = path
    if(window.location.port == '') {        
        let dir = window.location.pathname.replace(/\//gi, '')
        path = path.replace(/.\/..\//gi, '')
        full_url = `${dir}/${path}`
    }
    console.log(full_url)
    return await fetch(`${full_url}.html`).then(function (response) {
        return response.text()
    }).then(function (html) {
        console.log(html)
        return html;
    })
}