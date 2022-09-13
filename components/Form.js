const inputCss = "rounded border border-gray-300 block w-full py-2 px-4 text-gray-700 focus:outline-blue-700 "
const btnCss = "rounded w-full p-2 bg-blue-500 hover:bg-blue-600 text-white uppercase font-black"
const labCss = "text-gray-700"

globalThis.Dados = {}

export const Dados = globalThis.Dados 

export class Form {

    constructor(inputs) {
        this.inputs = inputs
    }

    render() {
        return this.inputs.map(i => i.render()).join('')
    }

}

export class Input {
    constructor(name, label, type = 'text', col = 4, require = false, value = '') {
        this.col = col > 0 && col < 5 ? col : 4
        this.name = name
        this.label = label
        this.value = value
        this.type = ["email", "number", "text", "url", "date"].includes(type) ? type : 'text'
        this.require = !!require
    }
    render() {
        
        return `
        <div class="col-span-${this.col}">
            <label class="${labCss}">${this.label}</label>
            <input type="${this.type}" value="${globalThis.Dados[this.name] || ''}" class="${inputCss}" name="${this.name}" ${this.require && 'required'} oninput="globalThis.Dados[this.name]=this.value" >
        </div>    
        `
    }
}

export class Button {
    constructor(text) {
        this.text = text
    }
    render() {
        return `
        <div class="col-span-4">
            <Button type="submit" class="${btnCss}" > ${this.text} </Button>
        </div>    
        `
    }
}