// Gráfico de Barra1
const ctxBarra1 = document.getElementById('graficoBarra1').getContext('2d');
const graficoBarra1 = new Chart(ctxBarra1, {
    type: 'pie',
    data: {
        labels: ['medicina', 'Medicina Veterinária', 'Médico Infectologista', 'Técnico de segurança', 'Programador', 'pedreiro', 'Farmacêutico bioquímico', 'engenharia mecânica', 'Ed Fisica', 'agronomia' ],
        datasets: [{
            label: 'Resposta dos Alunos',
            data: [1, 2, 1, 1, 2, 1, 1, 3, 1, 1],
            backgroundColor: [
                '#F05454', '#46298f', '#2cb5b8', '#311c91', '#b827b8', '#27b844', '#a39f4e', '#91b5db', '#ff4093', '#c6ff40'
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
                text: 'Qual profissão você quer seguir na sua carreira?'
            }
        }
    }
});

// Gráfico de Barra2
const ctxBarra2 = document.getElementById('graficoBarra2').getContext('2d');
const graficoBarra2 = new Chart(ctxBarra2, {
    type: 'bar',
    data: {
        labels: ['Sim', 'Não', 'teu pai'],
        datasets: [{        
            label: 'Resposta dos Alunos',
            data: [16, 5, 69],
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
                position: 'top'
            },
            title: {
                display: true,
                text: 'Precisa de ensino superior para essa profissão?'
            }
        }
    }
});

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
