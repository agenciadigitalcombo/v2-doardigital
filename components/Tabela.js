export default class Tabela {
    constructor(data, cols, pagination = 10, step = 0) {
        this.pages = Math.floor(data.length / pagination)
        this.step = step <= this.pages ? step : this.pages
        this.start = this.step * pagination
        this.rows = data.length
        this.data = data.splice(this.start, pagination)
        this.cols = cols
        this.dataRender = []
        this.render()
    }
    render() {
        this.dataRender = []
        let row = []
        Object.keys(this.cols).forEach(key => {
            if (typeof this.cols[key] !== "function" ) {
                row.push(this.cols[key])
            } else {
                row.push(this.cols[key].name)
            }
        })
        this.dataRender.push(row)
       
        this.data.forEach(tupla => {
            let row = []
            Object.keys(this.cols).forEach(colKey => {
                if (typeof this.cols[colKey] === "function") {
                    row.push(this.cols[colKey](tupla))
                } else {
                    row.push(tupla[colKey])
                }
            })
            this.dataRender.push(row)
        })
        console.log(this.dataRender)
    }
}