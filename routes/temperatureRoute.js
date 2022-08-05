const express = require('express');
const temperatureControler = require('../controlers/temperatureControler');

const router = express.Router();

router.route('/').get(temperatureControler.getAllTemperatures);
//   .post(temperatureControler.createTemperatureManualy);

// router
//   .route('/create-temperature-by-sensor')
//   .get(temperatureControler.createTemperatureSensor);

// router.route('/get-raw-data').get(temperatureControler.getTemperaturesRaw);

// router
//   .route('/:id')
//   .get(temperatureControler.getTemperature)
//   .delete(temperatureControler.deleteTemperature)
//   .patch(temperatureControler.updateTemperature);
module.exports = router;
