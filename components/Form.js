const CheckCss = "rounded border border-gray-300 inline-block w-[18px] py-2 px-4 text-gray-700 focus:outline-blue-700 "
const inputCss = "rounded border border-gray-300 block w-full py-2 px-4 text-gray-700 focus:outline-blue-700 "
const colorCss = "rounded border border-gray-300 block w-full h-[41px] text-gray-700 focus:outline-blue-700 "
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
    constructor(name, label, type = 'text', col = 4, require = false, value = '', disable = false) {
        this.col = col > 0 && col < 5 ? col : 4
        this.name = name
        this.label = label
        this.value = value
        this.disable = disable
        this.type = ["email", "number", "text", "url", "date", "color", "password"].includes(type) ? type : 'text'
        this.require = !!require
    }
    render() {
        return `
        <div class=" col-span-4  lg:col-span-${this.col}">
            <label class="${labCss}">${this.label}</label>
            <input type="${this.type}" ${this.disable &&  'disabled'} value="${globalThis.Dados[this.name] || ''}" class="${this.type != 'color' ? inputCss : colorCss}" name="${this.name}" ${this.require && 'required'} oninput="globalThis.Dados[this.name]=this.value" >
        </div>    
        `
    }

}

export class Text {
    constructor(name, label, col = 4, require = false, value = '') {
        this.col = col > 0 && col < 5 ? col : 4
        this.name = name
        this.label = label
        this.value = value
        this.require = !!require
    }
    render() {
        return `
        <div class=" col-span-4  lg:col-span-${this.col}">
            <label class="${labCss}">${this.label}</label>
            <textarea  class="${inputCss} min-h-[150px]" name="${this.name}" ${this.require && 'required'} oninput="globalThis.Dados[this.name]=this.value">${globalThis.Dados[this.name] || ''}</textarea>
        </div>    
        `
    }
}

export class Check {
    constructor(name, label, col = 4, value = false) {
        this.col = col > 0 && col < 5 ? col : 4
        this.name = name
        this.label = label
        this.value = value
    }
    render() {
        return `
        <label class=" col-span-4  lg:col-span-${this.col}">
            <input 
                type="checkbox" 
                value="${globalThis.Dados[this.name] || ''}" 
                name="${this.name}" 
                ${this.value && 'checked'}
                oninput="globalThis.Dados[this.name]=this.checked"
                >
            <span class="${labCss}">${this.label}</span>           
        </label>    
        `
    }
}

export class Option {
    constructor(value, text) {
        this.value = value
        this.text = text
    }
}

export class Select {
    constructor(name, label, col = 4, option = [], require = false, value = '') {
        this.col = col > 0 && col < 5 ? col : 4
        this.name = name
        this.label = label
        this.value = value
        this.require = !!require
        this.renderOption = option.map(o => {
            return `<option value="${o.value}" ${this.value == o.value && "SELECTED"}>${o.text}</option>`
        }).join('')
    }
    render() {
        return `
        <div class=" col-span-4  lg:col-span-${this.col}">
            <label class="${labCss}">${this.label}</label>
            <select ${this.require && 'required'} name="${this.name}" class="${inputCss}" oninput="globalThis.Dados[this.name]=this.value">           
            ${this.renderOption}
            </select>
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