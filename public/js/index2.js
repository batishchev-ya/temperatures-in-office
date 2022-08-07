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

console.log(new Date().getUTCHours());
console.log(new Date().getUTCMinutes());
console.log(new Date().getUTCSeconds());
const currentTime = new Date().toUTCString();
// const startTime =
//   currentTime.getHours() +
//   ':' +
//   currentTime.getMinutes() +
//   ':' +
//   currentTime.getSeconds();
const startTime = currentTime;
const labels = dates;

const data = {
  labels: labels,
  datasets: [
    {
      label: 'Temperatures in Office',
      backgroundColor: 'rgb(255, 99, 132)',
      borderColor: 'rgb(255, 99, 132)',
      data: temperature,
    },
  ],
};

const config = {
  type: 'line',
  data: data,
  options: {
    scales: {
      y: {
        min: Math.min.apply(null, temperature) - 1,
        max: Math.max.apply(null, temperature) + 1,
      },
    },
  },
};

const myChart = new Chart(document.getElementById('myChart'), config);

const data2 = {
  labels: labels,
  datasets: [
    {
      label: 'Humidity in Office',
      backgroundColor: 'rgb(255, 99, 50)',
      borderColor: 'rgb(255, 99, 50)',
      data: humidity,
    },
  ],
};

const config2 = {
  type: 'line',
  data: data2,
  options: {
    scales: {
      y: {
        min: Math.min.apply(null, humidity) - 1,
        max: Math.max.apply(null, humidity) + 1,
      },
    },
  },
};

const myChart2 = new Chart(document.getElementById('myChart2'), config2);
