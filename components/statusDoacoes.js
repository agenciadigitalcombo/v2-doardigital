export default function ($div, data) {
    var options = {
        series: [data.pago, data.aberto, data.vencido],
        chart: {
            width: 420,
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
    $div.innerHTML = ''
    var chart = new ApexCharts($div, options);
    chart.render();

}
