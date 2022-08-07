// import * as chart from 'https://cdn.jsdelivr.net/npm/chart.js';
// import axios from 'axios';
// import { now } from 'mongoose';
// console.log('{{resultsDay}}');

const getDailyTemperatures = async () => {
  try {
    const res = await axios({
      method: 'GET',
      url: '/api/v1/temperatures/daily-temperatures',
    });
    return res.data.dailyTemperatures;
  } catch (err) {
    console.log(err);
  }
};

const renderChart = (options) => {
  const canvasId = options.canvasId;
  const labels = options.labels;
  const dataSet = options.dataSet;
  const lineColour = options.lineColour;
  const header = options.header;

  const data = {
    labels: labels,
    datasets: [
      {
        label: header,
        backgroundColor: lineColour,
        borderColor: lineColour,
        data: dataSet,
      },
    ],
  };

  const config = {
    type: 'line',
    data: data,
    options: {
      scales: {
        y: {
          min: Math.min.apply(null, dataSet) - 1,
          max: Math.max.apply(null, dataSet) + 1,
        },
      },
    },
  };

  const chart = new Chart(document.getElementById(canvasId), config);
};

const dailyTemperatures = await getDailyTemperatures();
// console.log(dailyTemperatures);
let temperature = [];
let humidity = [];
let dates = [];
for (let i = 0; i < dailyTemperatures.length; i++) {
  temperature.push(dailyTemperatures[i].temperature);
  humidity.push(dailyTemperatures[i].humidity);
  dates.push(dailyTemperatures[i].createdAt);
}

// console.log(new Date().getUTCHours());
// console.log(new Date().getUTCMinutes());
// console.log(new Date().getUTCSeconds());
const currentTime = new Date().toUTCString();
const startTime = currentTime;
const labels = dates;

const optionsTemperatures = {
  canvasId: 'myChart',
  labels: dates,
  dataSet: temperature,
  lineColour: 'rgb(255, 99, 132)',
  header: 'Temperatures in Office',
};
renderChart(optionsTemperatures);

const optionsHumidity = {
  canvasId: 'myChart2',
  labels: dates,
  dataSet: humidity,
  lineColour: 'rgb(255, 99, 50)',
  header: 'Humidity in Office',
};
renderChart(optionsHumidity);
