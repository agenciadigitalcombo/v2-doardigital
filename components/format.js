export default function() { }

export function data( data ) {
    return data.split('-').reverse().join('/')
}