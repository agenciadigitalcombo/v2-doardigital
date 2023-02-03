export default function (
    $div,
    data,
    colors = ['#39539E', '#4fa8ff'],
    labels = ['Recorrente', 'Único']
) {
    var options = {
        series: data,
        chart: {
            width: 420,
            type: 'pie',
        },
        colors: colors,
        labels: labels,
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
    $div.innerHTML = ''
    var chart = new ApexCharts($div, options);
    chart.render();

}
