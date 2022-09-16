window.onload = function() {
  let chart = 'angryChart';
      document.querySelectorAll('canvas')
      .forEach(c => {
        c.style.display = (c.id === chart) ? 'inherit' : 'none';
      })
};

let select = document.querySelector('#chartType');

select.addEventListener('change', showHide);

function showHide() {
  // concat Chart for the canvas ID
  let chart = this.options[select.selectedIndex].value + 'Chart';
    document.querySelectorAll('canvas')
    .forEach(c => {
      c.style.display = (c.id === chart) ? 'inherit' : 'none';
    })
}

var ctx = document.getElementById("angryChart");
var BarChart = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ["Missing a Promotion", "Relationship Difficulties", "Bad Traffic", "Traumatic Events"],
    datasets: [{
      label: "Angry Data",
      data: [10000, 12000, 5000, 2000],
      backgroundColor: [
        'rgba(255,99,132,0.5)',
        'rgba(155,130,32,0.5)',
        'rgba(105,9,132,0.5)',
        'rgba(15,130,202,0.5)',
        'rgba(15,250,252,0.5)',
        'rgba(205,100,32,0.5)',
        'rgba(0,205,0,0.5)',
        'rgba(55,15,52,0.5)',
        'rgba(255,0,0,0.5)',
        'rgba(25,59,52,0.5)',
        'rgba(0,100,55,0.5)',
        'rgba(200,111,199,0.5)',
      ],
      borderColor: [
        'rgba(255,99,132,1)',
        'rgba(155,130,32,1)',
        'rgba(105,9,132,1)',
        'rgba(15,130,202,1)',
        'rgba(15,250,252,1)',
        'rgba(205,100,32,0.5)',
        'rgba(0,205,0,1)',
        'rgba(55,15,52,1)',
        'rgba(255,0,0,1)',
        'rgba(25,59,52,1)',
        'rgba(0,100,55,1)',
        'rgba(200,111,199,1)',
      ],
      borderWidth: "1",
      pointHoverBackgroundColor: "#fff",
      hoverBorderColor: "#fff",
    }]
  },
  options: {
    title: {
      display: true,
      text: "Angry",
      fontSize: 20,
      fontColor: "rgba(10,0,20,0.9)"
    },
    legend: {
      display: false,
      position: 'right',
      labels: {
        fontColor: '#000'
      }
    },
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: true,
          callback: function(value, index, values) {
            return value
          }
        }
      }]
    }
  },
});

var ctx = document.getElementById("depressionChart");
var BarChart = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ["May 2017", "June 2017", "July 2017", "Aug 2017", "Sep 2017", "Oct 2017", "Nov 2017", "Dec 2017", "Jan 2018", "Feb 2018", "Mar 2018", "Apr 2018", "May 2018"],
    datasets: [{
      label: "Depression Data",
      data: [30, 46.4, 1.8, 5.0, 29.4, 114.8, 197.0, 170.6, 249.4, 105.8, 111.8, 134.8, 1.4],
      backgroundColor: [
        'rgba(255,99,132,0.5)',
        'rgba(155,130,32,0.5)',
        'rgba(105,9,132,0.5)',
        'rgba(15,130,202,0.5)',
        'rgba(15,250,252,0.5)',
        'rgba(205,100,32,0.5)',
        'rgba(0,205,0,0.5)',
        'rgba(55,15,52,0.5)',
        'rgba(255,0,0,0.5)',
        'rgba(25,59,52,0.5)',
        'rgba(0,100,55,0.5)',
        'rgba(200,111,199,0.5)',
      ],
      borderColor: [
        'rgba(255,99,132,1)',
        'rgba(155,130,32,1)',
        'rgba(105,9,132,1)',
        'rgba(15,130,202,1)',
        'rgba(15,250,252,1)',
        'rgba(205,100,32,0.5)',
        'rgba(0,205,0,1)',
        'rgba(55,15,52,1)',
        'rgba(255,0,0,1)',
        'rgba(25,59,52,1)',
        'rgba(0,100,55,1)',
        'rgba(200,111,199,1)',
      ],
      borderWidth: "1",
      pointHoverBackgroundColor: "#fff",
      hoverBorderColor: "#fff",
    }]
  },
  options: {
    title: {
      display: true,
      text: "Depression",
      fontSize: 20,
      fontColor: "rgba(10,0,20,0.9)"
    },
    legend: {
      display: false,
      position: 'right',
      labels: {
        fontColor: '#000'
      }
    },
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: true,
          callback: function(value, index, values) {
            return value + " mm"
          }
        }
      }]
    }
  },
});

var ctx = document.getElementById("sadChart");
var BarChart = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ["May 2017", "June 2017", "July 2017", "Aug 2017", "Sep 2017", "Oct 2017", "Nov 2017", "Dec 2017", "Jan 2018", "Feb 2018", "Mar 2018", "Apr 2018", "May 2018"],
    datasets: [{
      label: "Sad Data",
      data: [20, 46.4, 1.8, 5.0, 29.4, 114.8, 197.0, 170.6, 249.4, 105.8, 111.8, 134.8, 1.4],
      backgroundColor: [
        'rgba(255,99,132,0.5)',
        'rgba(155,130,32,0.5)',
        'rgba(105,9,132,0.5)',
        'rgba(15,130,202,0.5)',
        'rgba(15,250,252,0.5)',
        'rgba(205,100,32,0.5)',
        'rgba(0,205,0,0.5)',
        'rgba(55,15,52,0.5)',
        'rgba(255,0,0,0.5)',
        'rgba(25,59,52,0.5)',
        'rgba(0,100,55,0.5)',
        'rgba(200,111,199,0.5)',
      ],
      borderColor: [
        'rgba(255,99,132,1)',
        'rgba(155,130,32,1)',
        'rgba(105,9,132,1)',
        'rgba(15,130,202,1)',
        'rgba(15,250,252,1)',
        'rgba(205,100,32,0.5)',
        'rgba(0,205,0,1)',
        'rgba(55,15,52,1)',
        'rgba(255,0,0,1)',
        'rgba(25,59,52,1)',
        'rgba(0,100,55,1)',
        'rgba(200,111,199,1)',
      ],
      borderWidth: "1",
      pointHoverBackgroundColor: "#fff",
      hoverBorderColor: "#fff",
    }]
  },
  options: {
    title: {
      display: true,
      text: "Sad",
      fontSize: 20,
      fontColor: "rgba(10,0,20,0.9)"
    },
    legend: {
      display: false,
      position: 'right',
      labels: {
        fontColor: '#000'
      }
    },
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: true,
          callback: function(value, index, values) {
            return value + " mm"
          }
        }
      }]
    }
  },
});

var ctx = document.getElementById("anxietyChart");
var BarChart = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ["May 2017", "June 2017", "July 2017", "Aug 2017", "Sep 2017", "Oct 2017", "Nov 2017", "Dec 2017", "Jan 2018", "Feb 2018", "Mar 2018", "Apr 2018", "May 2018"],
    datasets: [{
      label: "Anxiety Data",
      data: [10, 46.4, 1.8, 5.0, 29.4, 114.8, 197.0, 170.6, 249.4, 105.8, 111.8, 134.8, 1.4],
      backgroundColor: [
        'rgba(255,99,132,0.5)',
        'rgba(155,130,32,0.5)',
        'rgba(105,9,132,0.5)',
        'rgba(15,130,202,0.5)',
        'rgba(15,250,252,0.5)',
        'rgba(205,100,32,0.5)',
        'rgba(0,205,0,0.5)',
        'rgba(55,15,52,0.5)',
        'rgba(255,0,0,0.5)',
        'rgba(25,59,52,0.5)',
        'rgba(0,100,55,0.5)',
        'rgba(200,111,199,0.5)',
      ],
      borderColor: [
        'rgba(255,99,132,1)',
        'rgba(155,130,32,1)',
        'rgba(105,9,132,1)',
        'rgba(15,130,202,1)',
        'rgba(15,250,252,1)',
        'rgba(205,100,32,0.5)',
        'rgba(0,205,0,1)',
        'rgba(55,15,52,1)',
        'rgba(255,0,0,1)',
        'rgba(25,59,52,1)',
        'rgba(0,100,55,1)',
        'rgba(200,111,199,1)',
      ],
      borderWidth: "1",
      pointHoverBackgroundColor: "#fff",
      hoverBorderColor: "#fff",
    }]
  },
  options: {
    title: {
      display: true,
      text: "Anxiety",
      fontSize: 20,
      fontColor: "rgba(10,0,20,0.9)"
    },
    legend: {
      display: false,
      position: 'right',
      labels: {
        fontColor: '#000'
      }
    },
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: true,
          callback: function(value, index, values) {
            return value + " mm"
          }
        }
      }]
    }
  },
});
