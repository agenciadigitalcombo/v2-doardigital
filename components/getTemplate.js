export default async  function (path) {
    return await fetch(`${path}.html`).then(function (response) {
        return response.text()
    }).then(function (html) {
        return html;
    })
}