export default function($div, data) {
    var options = {
        series: data,
        chart: {
            width: 380,
            type: 'pie',
        },
        colors: ['#11b200', '#ff9901'],
        labels: ['Pago', 'Aberto'],
        responsive: [{
            breakpoint: 480,
            options: {
                chart: {
                    width: 200
                },
                legend: {
                    position: 'bottom'
                }
            }
        }],
        title: {
        },
    };
    var chart = new ApexCharts($div, options);
    chart.render();

}
