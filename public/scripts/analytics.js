var dataObjects = [
    {
      label: "Datasets 1",
      data: [8, 6, 4]
    },
    {
      label: "Datasets 2",
      data: [3, 5, 7]
    },
    {
      label: "Datasets 3",
      data: [11, 8, 12]
    }
  ]
  
  /* data */
  var data = {
    labels: ["Africa", "Asia", "Europe"],
    datasets: [  {
      label:  dataObjects[0].label,
      data: dataObjects[0].data,
      /* global setting */
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)'
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)'
      ],
      borderWidth: 1
    }]
  };
  
  var options = {
    legend: {
      display: true,
      fillStyle: "red",
      
      labels: {
        boxWidth: 0,
        fontSize: 24,
        fontColor: "black",
      }
    },
    scales: {
      xAxes: [{
        stacked: false,
        scaleLabel: {
          display: true,
          labelString: 'Country'
        },
      }],
      yAxes: [{
        stacked: true,
        scaleLabel: {
          display: true,
          labelString: 'Millions'
        },
        ticks: {
          suggestedMin: 0,
          suggestedMax: 10
        }
      }]
    },/*end scales */
    plugins: {
      // datalabels plugin
      /*https://chartjs-plugin-datalabels.netlify.com*/
      datalabels: {
        color: 'black',
        font:{
          size: 25
        }
      }
    }
  };
  
  var chart = new Chart('chart-0', {
    plugins: [ChartDataLabels], /*https://chartjs-plugin-datalabels.netlify.com*/
    type: 'bar',
    data: data,
    options: options
  });
  
  function changeData(index) {
    chart.data.datasets.forEach(function(dataset) {
      dataset.label = dataObjects[index].label;
      dataset.data = dataObjects[index].data;
      //dataset.backgroundColor = dataObjects[index].backgroundColor;
    });
    chart.update();
  }
  
  /* add active class on click */
  // Add active class to the current button (highlight it)
  var header = document.getElementById("myDIV");
  var btns = header.getElementsByClassName("btn");
  for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function() {
      var current = document.getElementsByClassName("active");
      current[0].className = current[0].className.replace(" active", "");
      this.className += " active";
    });
  }