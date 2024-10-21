// Gráfico de Pizza 1
const ctxPizza1 = document.getElementById('graficoPizza1').getContext('2d');
const graficoPizza1 = new Chart(ctxPizza1, {
    type: 'pie',
    data: {
        labels: ['Sim', 'Não'],
        datasets: [{
            label: 'Resposta dos Alunos',
            data: [15, 6],
            backgroundColor: [
                '#F05454', '#46298f', '#DDDDDD', '#222831'
            ],
            borderColor: '#DDDDDD',
            borderWidth: 1
        }]
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                position: 'bottom'
            },
            title: {
                display: true,
                text: 'Você já trabalha em um emprego que envolve a sua profissão?'
            }
        }
    }
});

// Gráfico de Pizza 2
const ctxPizza2 = document.getElementById('graficoPizza2').getContext('2d');
const graficoPizza2 = new Chart(ctxPizza2, {
    type: 'pie',
    data: {
        labels: ['Sim', 'Não'],
        datasets: [{
            label: 'Resposta dos Alunos',
            data: [19, 2],
            backgroundColor: [
                '#F05454', '#46298f', '#DDDDDD', '#222831'
            ],
            borderColor: '#DDDDDD',
            borderWidth: 1
        }]
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                position: 'bottom'
            },
            title: {
                display: true,
                text: 'Você já pensou em como pode chegar nessa profissão que deseja?'
            }
        }
    }
});

// Gráfico de Pizza 3
const ctxPizza3 = document.getElementById('graficoPizza3').getContext('2d');
const graficoPizza3 = new Chart(ctxPizza3, {
    type: 'pie',
    data: {
        labels: ['Sim', 'Não'],
        datasets: [{
            label: 'Resposta dos Alunos',
            data: [16, 5],
            backgroundColor: [
                '#F05454', '#46298f', '#DDDDDD', '#222831'
            ],
            borderColor: '#DDDDDD',
            borderWidth: 1
        }]
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                position: 'bottom'
            },
            title: {
                display: true,
                text: 'Precisa de ensino superior para essa profissão?'
            }
        }
    }
});