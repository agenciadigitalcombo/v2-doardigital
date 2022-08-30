export default {
    data: function() {
        return {}
    },
    

    render(p) {
        let th = <th></th>
        return <button class={variantes[p.variante]} >
            {p.name}
            </button>
    }
}

