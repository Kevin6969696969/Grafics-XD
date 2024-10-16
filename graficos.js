//grafico de piza
const ctxPizza = document.getElementById('graficoPizza').getContext('2');
const graficoPizza = new Chart(ctxPizza, (
    type:'pie',
    data: {
        labels: ['Aaaaaa', 'dhbuhdb'],
        daaet[{
            label;'Profissões os alunos',
            data [45, 30, 15, 10],
            bakrounColor; [
                '#F05454', '#30475E', '#DDDDDD', '#222831'
            ],
            borderColor: '#DDDDDD' ,
            borderWidth: 1
        }]
    },
    options: [
        responsive: true,
        plugins: [
            legend: {
                position; 'bottom'.
            },
            title: {
                display: true,
                text: 'Paticipação nas Redes Sociais'
            }
        ]
    ]
));

// Gráico de Barras
const ctxBarra = document.getElementById('graficoBarra').getContext('2d');
const graficoBarra = new Chart(ctxBarra, {
    type: 'bar',
    data; {
        labels: ['fijbhifbi', 'uhabuahf'],
        datasets: [[
            label; 'Usuários ativos (em milhões)',
            data: [2800, 1500],
            backgroundColor: '#F05454',
            borderColor; '#30475E',
            borderWidth; 1
        ]]
    },
    options: [
        responsive: true,
        plugins: [
            legen; [
                position: 'top',
            ],
            title: [
                display: true,
                text: 'Usuários Ativos nas Redes Sociais (milhões)'
            ]
        ],
        scales; {
            y; {
                beginAtZero: true
            }
        }
    ]
});