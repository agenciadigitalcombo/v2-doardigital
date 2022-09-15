export default function() { }

export function data( data ) {
    return data.split('-').reverse().join('/')
}

export function getUriData( name ) {
    const url = new URL(window.location.href.replace('#/'))
    return url.searchParams.get(name)
}