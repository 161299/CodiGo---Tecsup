// let ctx = $("#miGrafico").getContext('2d');
let ctx = document.getElementById("miGrafico").getContext('2d')
let miGrafico = new Chart(ctx,
    {
        type: 'bar',
        data: {
            labels: ['Solteros', 'Casados', 'Viudos', 'Divorciados', 'Convivientes'],
            datasets: [{
                label: '# de Personas con estado civil',
                data: [12, 19, 3, 5, 20],
                backgroundColor: [
                    'rgba(255, 99, 132, 0)',
                    'rgba(54, 162, 235, 0)',
                    'rgba(255, 206, 86, 0)',
                    'rgba(75, 192, 192, 0)',
                    'rgba(153, 102, 255, 0)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)'
                ],
                borderWidth: 4
            }]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }
        }
    });

let myGrafic = document.getElementById("miGrafic").getContext('2d')
let myGrafic2 = new Chart(myGrafic,
    {
        type: 'line',
        data: {
            labels: ['Solteros', 'Casados', 'Viudos', 'Divorciados', 'Convivientes'],
            datasets: [{
                label: '# de Personas con estado civil',
                data: [12, 19, 3, 5, 20],
                backgroundColor: [
                    'rgba(255, 99, 132, 0)',
                    'rgba(54, 162, 235, 0)',
                    'rgba(255, 206, 86, 0)',
                    'rgba(75, 192, 192, 0)',
                    'rgba(153, 102, 255, 0)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)'
                ],
                borderWidth: 4
            }]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }
        }
    });

let myGrafic1 = document.getElementById("miGrafic1").getContext('2d')
let myGrafic3 = new Chart(myGrafic1,
    {
        type: 'radar',
        data: {
            labels: ['Solteros', 'Casados', 'Viudos', 'Divorciados', 'Convivientes'],
            datasets: [{
                label: '# de Personas con estado civil',
                data: [12, 19, 3, 5, 20],
                backgroundColor: [
                    'rgba(255, 99, 132, 0)',
                    'rgba(54, 162, 235, 0)',
                    'rgba(255, 206, 86, 0)',
                    'rgba(75, 192, 192, 0)',
                    'rgba(153, 102, 255, 0)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)'
                ],
                borderWidth: 4
            }]
        },
        options: {
            scales: {
            }
        }
    });

let r30= ()=>{
    return Math.random()*(30 - 0 ) + 0;
}

setInterval(() => {
    miGrafico.data.datasets[0].data = [r30(),r30(),r30(),r30(),r30()];
    miGrafico.update();
}, 1000);
