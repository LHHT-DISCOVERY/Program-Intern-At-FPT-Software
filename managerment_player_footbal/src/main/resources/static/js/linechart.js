var config = {
    type: 'line',
    data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June'],
        datasets: [{
            label: 'Chỉ số tăng trưởng',
            backgroundColor: '#E087EE',
            borderColor: '#E087EE',
            fill: false,
            data: [
                10,
                20,
                30,
                40,
                20,
                50,
                /*randomScalingFactor(),
                randomScalingFactor(),
                randomScalingFactor(),
                randomScalingFactor(),
                randomScalingFactor(),
                randomScalingFactor(),
                randomScalingFactor()*/
            ],
        }, {
            label: 'Chỉ số sức khỏe',
            backgroundColor:'#1780FF',
            borderColor: window.chartColors.blue,
            fill: false,
            data: [
                50,
                60,
                20,
                30,
                40,
                65,
            ],
        }]
    },
    options: {
        responsive: true,
        title: {
            display: false,
            text: 'Growth Analyst'
        },
        scales: {
            xAxes: [{
                gridLines: {
                    display: false,
                    drawBorder: false
                },
                display: true,
                scaleLabel: {
                    display: true,
                    // labelString: 'Tháng'
                },
                ticks : {
                    fontFamily: "Poppins",
                }

            }],
            yAxes: [{
                gridLines: {
                    display: false,
                    drawBorder: false
                },
                display: true,
                //type: 'logarithmic',
                scaleLabel: {
                    display: true,
                    // labelString: 'Index Returns'
                },
                ticks: {
                    min: 0,
                    max: 100,

                    // forces step size to be 5 units
                    stepSize: 25,
                    fontFamily: "Poppins",
                }
            }]
        },
        legend : {
            display : true,
        },
        plugins: {
            datalabels: {
              display : false,
            }
          }
        
    }
};

window.onload = function () {
    var ctx = document.getElementById('canvas').getContext('2d');
    window.myLine = new Chart(ctx, config);
};

document.getElementById('randomizeData').addEventListener('click', function () {
    config.data.datasets.forEach(function (dataset) {
        dataset.data = dataset.data.map(function () {
            return randomScalingFactor();
        });

    });

    window.myLine.update();
});