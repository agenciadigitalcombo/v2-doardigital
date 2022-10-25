export default function($div, data) {
    var options = {
        series: data,
        chart: {
            width: 380,
            type: 'pie',
        },
        colors: ['#39539E', '#4fa8ff'],
        labels: ['Recorrente', 'Unico'],
        responsive: [{
            breakpoint: 480,
            options: {
                chart: {
                    width: 200
                },
                legend: {
                    position: 'bottom',

                }
            }
        }],
        title: {
        },
    };
    var chart = new ApexCharts($div, options);
    chart.render();

}
