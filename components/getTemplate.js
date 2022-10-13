export default async  function (path) {
    let dir = window.location.pathname.replace(/\//gi, '')
    dir = window.location.port == '' ? dir + '/' : ''
    return await fetch(`${dir}${path}.html`).then(function (response) {
        return response.text()
    }).then(function (html) {
        console.log(html)
        return html;
    })
}