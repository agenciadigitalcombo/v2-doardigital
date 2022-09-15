export default class {
    constructor() {
        this.name = 'JWT'
    }
    save( jwt ) {
        localStorage.setItem( this.name, jwt )
    }
    logged() {
        return localStorage.getItem( this.name )
    }
    get() {
        if(this.logged()) {
            let jwt = this.logged()
            let ba64 = jwt.split('.')[0]
            ba64 = atob(ba64)
            let parse = JSON.parse(ba64)
            return { ...parse }
        }
        return {}
    }
    logout() {
        localStorage.removeItem( this.name )
    }    
}