import config from "../config.js"
import Jwt from "./jwt.js"
import mask from "./mask.js"

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
    constructor(name, label, type = 'text', col = 4, require = false, value = '', disable = false, mask = null) {
        this.col = col > 0 && col < 5 ? col : 4
        this.name = name
        this.label = label
        this.value = value
        this.disable = disable
        this.type = ["email", "number", "text", "url", "date", "color", "password"].includes(type) ? type : 'text'
        this.require = !!require
        this.mask = mask
    }
    render() {
        return `
        <div class=" col-span-4  lg:col-span-${this.col}">
            <label class="${labCss}">${this.label}</label>
            <input type="${this.type}" ${this.disable && 'disabled'} value="${globalThis.Dados[this.name] || ''}" class="${this.type != 'color' ? inputCss : colorCss}" name="${this.name}" ${this.require && 'required'} oninput="${this.mask && 'globalThis.'+this.mask+'(this);' }globalThis.Dados[this.name]=this.value" >
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

globalThis.UploadImage = async (name, $file) => {
    let fr = new FormData()
    let jwt = new Jwt()
    fr.append('token', jwt.logged())
    fr.append('file', $file.files[0])
    let request = await fetch(`${config.path_api}/upload-img`, {
        method: 'POST',
        mode: 'cors',
        cache: 'default',
        body: fr,
    })
    let response = await request.json()
    globalThis.Dados[name] = response.payload.nome
    globalThis.Dados[name+'_uri'] = config.path_api +'/upload/'+ response.payload.nome

}

export class Upload {
    constructor(name, col) {
        this.col = col > 0 && col < 5 ? col : 4
        this.name = name
    }

    render() {
        return `
        <div class=" col-span-4  lg:col-span-${this.col}">
            <label class="mx-auto cursor-pointer flex w-full max-w-lg flex-col items-center rounded-xl border-2 border-dashed border-blue-400 bg-white p-6 text-center">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                </svg>
                <h2 class="mt-4 text-xl font-medium text-gray-700 tracking-wide">Enviar Arquivo</h2>
                <p class="mt-2 text-gray-500 tracking-wide">
                    Aceitamos apenas arquivos nas seguintes extensões SVG, PNG, JPG or GIF. 
                </p>
                <input type="file" class="hidden" onchange="globalThis.UploadImage('${this.name}', this)" />
            </label>
        </div>`
    }
}