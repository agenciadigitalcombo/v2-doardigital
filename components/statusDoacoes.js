export default function($div, data) {
    var options = {
        series: [60, 20, 20],
        chart: {
            width: 380,
            type: 'pie',
        },
        colors: ['#37be00', '#ffd752', '#fe504f'],
        labels: ['Pago', 'Aberto', 'Vencido'],
        responsive: [{
            breakpoint: 480,
            options: {
                chart: {
                    width: 50
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
