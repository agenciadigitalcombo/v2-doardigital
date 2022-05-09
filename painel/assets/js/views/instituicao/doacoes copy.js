import get_template from '../../componentes/get_template.js'
import adm from "../../../../../static/js/api/adm.js"

export default {


    data: function () {
        return {

            items: [
                { message: 'Foo1' },
                { message: 'Foo2' },
                { message: 'Foo3' },
                { message: 'Foo4' },
                { message: 'Foo5' },
                { message: 'Foo6' },
                { message: 'Foo7' },
                { message: 'Foo8' },
                { message: 'Foo9' },
                { message: 'Foo10' },
                { message: 'Foo11' },
                { message: 'Foo12' },
                { message: 'Foo13' },
                { message: 'Foo15' },
                { message: 'Foo14' },
                { message: 'Foo16' },
                { message: 'Bar' }
            ]
        }
    },



    methods: {

        modal() {
            this.mostraresconder =
            {
                'show': true
            }
        },

        unfocused() {
            alert('good bye')
        },

        fechaModel() {
            this.mostraresconder =
            {
                'show': !true
            }
        },



    },
    async mounted() {
        const data = Array.from({ length: 100 })
            .map((_, i) => `Iem ${(i + 1)}`)


        //======================================================


        let perPage = 5
        const state = {
            page: 1,
            perPage,
            totalPage: Math.ceil(data.length / perPage),
            maxVisibleButtons: 5
        }



        const html = {
            get(element) {
                return document.querySelector(element)
            }
        }
        // console.log(state.totalPage)

        const controls = {
            next() {
                state.page++

                const lastPage = state.page > state.totalPage
                if (lastPage) {
                    state.page--
                }
            },
            prev() {
                state.page--
                if (state.page < 1) {
                    state.page++
                }
            },
            goTo(page) {
                if (page < 1) {
                    page = 1
                }

                state.page = +page

                if (page > state.totalPage) {
                    state.page = state.totalPage
                }
            },

            createListeners() {
                html.get('.first').addEventListener('click', () => {
                    controls.goTo(1)
                    update()
                })

                html.get('.last').addEventListener('click', () => {
                    controls.goTo(state.totalPage)
                    update()
                })

                html.get('.next').addEventListener('click', () => {
                    controls.next()
                    update()
                })

                html.get('.prev').addEventListener('click', () => {
                    controls.prev()
                    update()
                })

            }

        }
        //  console.log(state.page)
        //    controls.next()
        //   console.log(state.page)
        //   controls.goTo(22)
        //   console.log(state.page)

        const list = {
            create(item) {
                console.log(item)
                const div = document.createElement('div')
                div.classList.add('item')
                div.innerHTML = item

                html.get('.list').appendChild(div)
            },

            update() {
                html.get('.list').innerHTML = ""

                let page = state.page - 1
                let start = page * state.perPage
                let end = start + state.perPage

                const paginatedItems = data.slice(start, end)
                paginatedItems.forEach(list.create)
            },
        }


        const buttons = {
            create(number) {
                const button = document.createElement('div')

                button.innerHTML = number;


                if (state.page == number) {
                    button.classList.add('active')
                }

                button.addEventListener('click', (event) => {
                    const page = event.target.innerText

                    controls.goTo(page)
                    update()
                })

                html.get('.numbers').appendChild(button);

            },

            update() {
                html.get('.numbers').innerHTML = ""
                const { maxLeft, maxRight } = buttons.calculateMaxVisible()

                console.log(maxLeft, maxRight)

                for (let page = maxLeft; page <= maxRight; page++) {
                    buttons.create(page)

                }

            },

            calculateMaxVisible() {
                const { maxVisibleButtons } = state

                let maxLeft = (state.page - Math.floor(maxVisibleButtons / 2))
                let maxRight = (state.page + Math.floor(maxVisibleButtons / 2))

                if (maxLeft < 1) {
                    maxLeft = 1
                    maxRight = maxVisibleButtons
                }

                if (maxRight > state.totalPage) {
                    maxLeft = state.totalPage - (maxVisibleButtons - 1)
                    maxRight = state.totalPage
                    if (maxLeft < 1) {
                        maxLeft = 1
                    }
                }

                return { maxLeft, maxRight }
            },
        }


        function update() {
            list.update()
            buttons.update()
        }

        function init() {
            update()
            controls.createListeners()
        }

        init()

    },




    template: await get_template('./assets/js/views/instituicao/doacoes')
}