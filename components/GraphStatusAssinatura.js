export default function($div, data) {
    var options = {
        series: data,
        chart: {
            width: 380,
            type: 'pie',
        },
        colors: ['#6aa84f', '#f1c232'],
        labels: ['Ativo', 'Inativo'],
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
            text: 'Status da Assinturas',

        },
    };
    var chart = new ApexCharts($div, options);
    chart.render();
}