import Table  from "../components/Table.js"
import Botao  from "../components/Botao.js"
import BreadCrumb from "../components/BreadCrumb.js"
import Card  from "../components/Card.js"
import Loader from "../components/Loader.js"
import Card2 from "../components/Card2.js"

export default {
    data: function() {
        return { 
            donations : [
                { name: "Mel", value: 2.50, status: "PAID" },
                { name: "Jhon", value: 15.50, status: "AWAITING" },
                { name: "Kleber", value: 32, status: "RECUSED" },
                { name: "Bruno", value: 2.50, status: "PAID" },
                { name: "Jhon", value: 15.50, status: "AWAITING" },
                { name: "Kleber", value: 32, status: "RECUSED" },
                { name: "Bruno", value: 2.50, status: "PAID" },
                { name: "Jhon", value: 15.50, status: "AWAITING" },
                { name: "Kleber", value: 32, status: "RECUSED" },
                { name: "Bruno", value: 2.50, status: "PAID" },
                { name: "Jhon", value: 15.50, status: "AWAITING" },
            ],
            cols: {
                name: "Nome Doador",
                value: "Valor Doação",
                status: t => `<span class="bg-purple-200 text-purple-600 py-1 px-3 rounded-full text-xs">
                ${t.status}
                </span>`,
                editar: e => `
                <div class="w-4 mr-2 transform hover:text-purple-500 hover:scale-110">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                            </svg>
                                        </div>
                `
            },
        }
    },
    components: {
        Table,
        Botao,
        BreadCrumb,
        Card,
        Loader,
        Card2
    },
    template: `
    <div>

    <br>
    <div class="flex flex-wrap">
        <Card2 :tax="statusEstorno" value="123" text="Total de Doadores" :value="totalQntEstornado" variation="red" cor="red" icon="heart" size="4" />
        <Card2 :tax="statusEstorno" value="123" text="Novos Doadores" :value="totalQntEstornado" variation="red" cor="red" icon="heart" size="4" />
        <Card2 :tax="statusEstorno" value="123" text="Doadores Recorrentes" :value="totalQntEstornado" variation="red" cor="red" icon="heart" size="4" />
        <Card2 :tax="statusEstorno" value="123" text="Doadores Ùnico" :value="totalQntEstornado" variation="red" cor="red" icon="heart" size="4" />
        <Card2 :tax="statusEstorno" value="123" text="Doadores Adimplentes" :value="totalQntEstornado" variation="red" cor="red" icon="heart" size="4" />
        <Card2 :tax="statusEstorno" value="123" text="Doadores Inadimplentes" :value="totalQntEstornado" variation="red" cor="red" icon="heart" size="4" />
        <Card2 :tax="statusEstorno" value="123" text="Doação Média" :value="totalQntEstornado" variation="red" cor="red" icon="heart" size="4" />
        <Card2 :tax="statusEstorno" value="123" text="Doações Previstas" :value="totalQntEstornado" variation="red" cor="red" icon="heart" size="4" />

        <div class="flex flex-row flex-wrap flex-grow mt-2">
            

            

            <div class="w-full md:w-1/2 xl:w-1/3 p-6">
                <!--Graph Card-->
                <div class="bg-white border-transparent rounded-lg shadow-xl">
                    <div class="bg-gradient-to-b from-gray-300 to-gray-100 uppercase text-gray-800 border-b-2 border-gray-300 rounded-tl-lg rounded-tr-lg p-2">
                        <h2 class="font-bold uppercase text-gray-600">Graph</h2>
                    </div>
                    <div class="p-5">
                        <canvas id="chartjs-0" class="chartjs" width="undefined" height="undefined"></canvas>
                        <script>
                            new Chart(document.getElementById("chartjs-0"), {
                                "type": "line",
                            "data": {
                                "labels": ["January", "February", "March", "April", "May", "June", "July"],
                            "datasets": [{
                                "label": "Views",
                            "data": [65, 59, 80, 81, 56, 55, 40],
                            "fill": false,
                            "borderColor": "rgb(75, 192, 192)",
                            "lineTension": 0.1
                                        }]
                                    },
                            "options": { }
                                });
                        </script>
                    </div>
                </div>
                <!--/Graph Card-->
            </div>

            <div class="w-full md:w-1/2 xl:w-1/3 p-6">
                <!--Graph Card-->
                <div class="bg-white border-transparent rounded-lg shadow-xl">
                    <div class="bg-gradient-to-b from-gray-300 to-gray-100 uppercase text-gray-800 border-b-2 border-gray-300 rounded-tl-lg rounded-tr-lg p-2">
                        <h2 class="font-bold uppercase text-gray-600">Graph</h2>
                    </div>
                    <div class="p-5">
                        <canvas id="chartjs-1" class="chartjs" width="undefined" height="undefined"></canvas>
                        <script>
                            new Chart(document.getElementById("chartjs-1"), {
                                "type": "bar",
                            "data": {
                                "labels": ["January", "February", "March", "April", "May", "June", "July"],
                            "datasets": [{
                                "label": "Likes",
                            "data": [65, 59, 80, 81, 56, 55, 40],
                            "fill": false,
                            "backgroundColor": ["rgba(255, 99, 132, 0.2)", "rgba(255, 159, 64, 0.2)", "rgba(255, 205, 86, 0.2)", "rgba(75, 192, 192, 0.2)", "rgba(54, 162, 235, 0.2)", "rgba(153, 102, 255, 0.2)", "rgba(201, 203, 207, 0.2)"],
                            "borderColor": ["rgb(255, 99, 132)", "rgb(255, 159, 64)", "rgb(255, 205, 86)", "rgb(75, 192, 192)", "rgb(54, 162, 235)", "rgb(153, 102, 255)", "rgb(201, 203, 207)"],
                            "borderWidth": 1
                                        }]
                                    },
                            "options": {
                                "scales": {
                                "yAxes": [{
                                "ticks": {
                                "beginAtZero": true
                                                }
                                            }]
                                        }
                                    }
                                });
                        </script>
                    </div>
                </div>
                <!--/Graph Card-->
            </div>

            <div class="w-full md:w-1/2 xl:w-1/3 p-6">
                <!--Graph Card-->
                <div class="bg-white border-transparent rounded-lg shadow-xl">
                    <div class="bg-gradient-to-b from-gray-300 to-gray-100 uppercase text-gray-800 border-b-2 border-gray-300 rounded-tl-lg rounded-tr-lg p-2">
                        <h5 class="font-bold uppercase text-gray-600">Graph</h5>
                    </div>
                    <div class="p-5"><canvas id="chartjs-4" class="chartjs" width="undefined" height="undefined"></canvas>
                        <script>
                            new Chart(document.getElementById("chartjs-4"), {
                                "type": "doughnut",
                            "data": {
                                "labels": ["P1", "P2", "P3"],
                            "datasets": [{
                                "label": "Issues",
                            "data": [300, 50, 100],
                            "backgroundColor": ["rgb(255, 99, 132)", "rgb(54, 162, 235)", "rgb(255, 205, 86)"]
                                        }]
                                    }
                                });
                        </script>
                    </div>
                </div>
                <!--/Graph Card-->
            </div>

            <div class="w-full md:w-1/2 xl:w-1/3 p-6">
                <!--Table Card-->
                <div class="bg-white border-transparent rounded-lg shadow-xl">
                    <div class="bg-gradient-to-b from-gray-300 to-gray-100 uppercase text-gray-800 border-b-2 border-gray-300 rounded-tl-lg rounded-tr-lg p-2">
                        <h2 class="font-bold uppercase text-gray-600">Graph</h2>
                    </div>
                    <div class="p-5">
                        <table class="w-full p-5 text-gray-700">
                            <thead>
                                <tr>
                                    <th class="text-left text-blue-900">Name</th>
                                    <th class="text-left text-blue-900">Side</th>
                                    <th class="text-left text-blue-900">Role</th>
                                </tr>
                            </thead>

                            <tbody>
                                <tr>
                                    <td>Obi Wan Kenobi</td>
                                    <td>Light</td>
                                    <td>Jedi</td>
                                </tr>
                                <tr>
                                    <td>Greedo</td>
                                    <td>South</td>
                                    <td>Scumbag</td>
                                </tr>
                                <tr>
                                    <td>Darth Vader</td>
                                    <td>Dark</td>
                                    <td>Sith</td>
                                </tr>
                            </tbody>
                        </table>

                        <p class="py-2"><a href="#">See More issues...</a></p>

                    </div>
                </div>
                <!--/table Card-->
            </div>

            <div class="w-full md:w-1/2 xl:w-1/3 p-6">
                <!--Advert Card-->
                <div class="bg-white border-transparent rounded-lg shadow-xl">
                    <div class="bg-gradient-to-b from-gray-300 to-gray-100 uppercase text-gray-800 border-b-2 border-gray-300 rounded-tl-lg rounded-tr-lg p-2">
                        <h2 class="font-bold uppercase text-gray-600">Advert</h2>
                    </div>
                    <div class="p-5 text-center">





                    </div>
                </div>
                <!--/Advert Card-->
            </div>


        </div>
    </div>`,
}