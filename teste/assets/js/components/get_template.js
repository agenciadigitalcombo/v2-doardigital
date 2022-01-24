async function get_template( path ) {
    return await fetch(`${path}.html`).then(function (response) {
        return response.text()
    }).then(function (html) {
        return html;
    })
}

export default get_template