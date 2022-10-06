export default class tmp {
    constructor() {
        this.name = 'temp_json'
    }
    save(payload) {
        let persistent = this.info()
        localStorage.setItem(this.name, JSON.stringify({...persistent,...payload}))
    }
    info() {
        return JSON.parse(localStorage.getItem(this.name) || '{}')
    }
    clear() {
        localStorage.removeItem(this.name)
    }
}

