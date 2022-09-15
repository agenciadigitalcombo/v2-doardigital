export default class {
    constructor() {
        this.name = 'institution'
    }
    save(fk) {
        localStorage.setItem( this.name, fk )
    }
    get() {
        return localStorage.getItem( this.name )
    }
}