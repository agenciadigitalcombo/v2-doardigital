import Inst from '../components/apiInstitution.js'

const domain = window.location.hostname == '127.0.0.1' ? 'teste.hostdoar.tk' : window.location.hostname
const inst = new Inst()
const info = await inst.get(domain)

const orderPrice = (p1, p2) => (+p1.price < +p2.price) ? 1 : (+p1.price > +p2.price) ? -1 : 0

info.payload.planos = (info.payload.planos.sort(orderPrice)).reverse()

info.payload.planos = info.payload.planos.map( p => ({...p, printPrice: (+p.price).toLocaleString('pt-br', {minimumFractionDigits: 2}) }) )

globalThis.logoDefault = e => e.src = "https://hostdoar.tk/api/upload/6384429d56bf91669612189.png"
globalThis.imgDefault = e => e.src = "https://hostdoar.tk/assets/image/doardigital-assinaturadigital.jpg"

export default {
    ...info.payload,
    logo: `//${domain}/api/upload/${info.payload.logo}`,
    bg:  info.payload?.bg ? info.payload?.bg : 'bg.jpg'
}