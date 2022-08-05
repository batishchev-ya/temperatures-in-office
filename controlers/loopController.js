const Temperature = require('../models/temperaturesModel');
const axios = require('axios');

let timeOutTime = 1000;

const calculateAverage = (arrayData, variable) => {
  let sum = 0;
  const arrayLength = arrayData.length;
  for (i = 0; i < arrayLength; i++) {
    sum += arrayData[i][variable];
  }
  const average = (sum / arrayLength).toFixed(2);
  return average;
};

// Consult with Anrdey about returning values

const getSensorDataRaw = async () => {
  try {
    const sensorDataRaw = (await axios('http://192.168.1.177:81/')).data;
    return sensorDataRaw;
  } catch (err) {
    // console.error(err);
    return null;
  }
};

const getSensorData = async () => {
  const sensorDataRaw = await getSensorDataRaw();
  if (!sensorDataRaw) {
    return null;
  }
  const temperatureAverage = calculateAverage(sensorDataRaw.sensors.sht31, 't');
  const humidityAverage = calculateAverage(sensorDataRaw.sensors.sht31, 'h');
  sensorData = {
    version: sensorDataRaw.version,
    temperature: temperatureAverage,
    humidity: humidityAverage,
  };
  return sensorData;
};

const createTemperatureBySensor = async () => {
  const sensorData = await getSensorData();
  if (!sensorData) {
    return null;
  }
  const data = await Temperature.create(sensorData);

  // console.log('data added to the DB');
  return data;
};

const loop = async () => {
  data = await createTemperatureBySensor();
  if (!data) {
    timeOutTime = timeOutTime < 300000 ? timeOutTime + 60000 : 300000;
  } else {
    timeOutTime = 60000;
  }
  setTimeout(loop, timeOutTime);
};

exports.startLoop = () => {
  loop();
};
