//grafico de piza
const ctxPizza = document.getElementById('graficoPizza').getContext('2');
const graficoPizza = new Chart(ctxPizza, (
    type:'pie',
    data: {
        labels: []
    }
))