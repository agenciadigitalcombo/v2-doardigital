export default class Temp {
    constructor() {
        this.name = 'tempJson'
    }
    save(payload) {
        let persist = this.info()
        localStorage.setItem( this.name, JSON.stringify({...persist,...payload}))
    }
    info() {
        return JSON.parse( localStorage.getItem(this.name) || '{}' )
    }
    delete() {
        localStorage.removeItem(this.name)
    }
}