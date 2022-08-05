const Temperature = require('../models/temperaturesModel');
const axios = require('axios');
const factory = require('./handlerFactory');
const catchAsync = require('../utils/catchAsync');
const AppError = require('../utils/appError');

// let timerId;

// const calculateAverage = (arrayData, variable) => {
//   let sum = 0;
//   const arrayLength = arrayData.length;
//   for (i = 0; i < arrayLength; i++) {
//     sum += arrayData[i][variable];
//   }
//   const average = (sum / arrayLength).toFixed(2);
//   return average;
// };

// // Consult with Anrdey about returning values

// const getSensorDataRaw = async () => {
//   try {
//     const sensorDataRaw = (await axios('http://192.168.1.177:81/')).data;
//     return sensorDataRaw;
//   } catch (err) {
//     console.error(err);
//     return null;
//   }
// };

// const getSensorData = async () => {
//   const sensorDataRaw = await getSensorDataRaw();
//   if (!sensorDataRaw) {
//     return null;
//   }
//   const temperatureAverage = calculateAverage(sensorDataRaw.sensors.sht31, 't');
//   const humidityAverage = calculateAverage(sensorDataRaw.sensors.sht31, 'h');
//   sensorData = {
//     version: sensorDataRaw.version,
//     temperature: temperatureAverage,
//     humidity: humidityAverage,
//   };
//   return sensorData;
// };

// const createTemperatureBySensor = async () => {
//   const sensorData = await getSensorData();
//   if (!sensorData) {
//     return null;
//   }
//   const data = await Temperature.create(sensorData);
//   console.log('data added to the DB');
//   return data;
// };

// exports.getTemperature = factory.getOne(Temperature);
exports.getAllTemperatures = factory.getAll(Temperature);
// exports.deleteTemperature = factory.deleteOne(Temperature);
// exports.createTemperatureManualy = factory.createOne(Temperature);
// exports.updateTemperature = factory.updateOne(Temperature);

// exports.getTemperaturesRaw = async (req, res, next) => {
//   const sensorDataRaw = await getSensorDataRaw();
//   if (!sensorDataRaw) {
//     return next(
//       new AppError('Can not connect to sensor! Please check it.', 500)
//     );
//   }
//   res.status(200).json({
//     status: 'success',
//     sensorDataRaw,
//   });
// };

// exports.createTemperatureSensor = async (req, res, next) => {
//   const data = await createTemperatureBySensor();
//   if (!data) {
//     return next(
//       new AppError('Can not connect to the sensor! Please check it.', 500)
//     );
//   }
//   res.status(200).json({
//     status: 'success',
//     data,
//   });
// };
