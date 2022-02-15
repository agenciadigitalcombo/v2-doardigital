import get_template from '../../components/get_template.js'

export default {
    data: function () {
		return { 
			plano_id: "1386061",
			plano_id_zap: 0,

			doacao: {
				plan_id: null,
				amount: '400',
				card: "",
				validade: "",
				cvv: "",
				nome_card: "",
				payment_type: 'card',
				cupom: ""
			},

			jms: false,

			plano_whatsapp: [
				{ id: 0, preco: "00,00", text: "Nenhum disparo" },
				{ id: 1, preco: "69,90", text: "1 mil disparos por mês" },
				{ id: 2, preco: "110,00", text: "2 mil disparos por mês" },
				{ id: 5, preco: "190,00", text: "5 mil disparos por mês" }
			],
			planos: [
				{ preco: 29.90, id: "1386061", instancias: 1 },
				{ preco: 56.81, id: "1396159", instancias: 2 },
				{ preco: 80.73, id: "1386052", instancias: 3 },
				{ preco: 152.49, id: "1386056", instancias: 6 },
				{ preco: 220.66, id: "1386057", instancias: 9 },
				{ preco: 279.86, id: "1386058", instancias: 12 },
				{ preco: 336.37, id: "1386059", instancias: 15 },
			],

			lista_whats: {
				11: { preco: 99.80, id: "1430707", instancias: 1 },
				21: { preco: 139.90, id: "1430709", instancias: 1 },
				51: { preco: 219.90, id: "1430711", instancias: 1 },
				12: { preco: 126.71, id: "1430718", instancias: 2 },
				22: { preco: 166.81, id: "1430719", instancias: 2 },
				52: { preco: 246.81, id: "1430720", instancias: 2 },
				13: { preco: 150.63, id: "1430722", instancias: 3 },
				23: { preco: 190.73, id: "1430723", instancias: 3 },
				53: { preco: 270.73, id: "1430724", instancias: 3 },
				16: { preco: 222.39, id: "1430725", instancias: 6 },
				26: { preco: 262.49, id: "1430726", instancias: 6 },
				56: { preco: 342.49, id: "1430727", instancias: 6 },
				19: { preco: 290.56, id: "1430729", instancias: 9 },
				29: { preco: 330.66, id: "1430730", instancias: 9 },
				59: { preco: 410.66, id: "1430731", instancias: 9 },
				112: { preco: 349.76, id: "1430732", instancias: 12 },
				212: { preco: 389.86, id: "1430733", instancias: 12 },
				512: { preco: 469.86, id: "1430734", instancias: 12 },
				115: { preco: 406.27, id: "1430735", instancias: 15 },
				215: { preco: 446.37, id: "1430736", instancias: 15 },
				515: { preco: 526.37, id: "1430737", instancias: 15 },
			},
			trial: {
				status: false,
				plan_id: null
			}
        }
    },
    template: await get_template('./assets/js/view/minha_assinatura/home')
}