const Temperature = require('../models/temperaturesModel');
const axios = require('axios');
const factory = require('./handlerFactory');
const catchAsync = require('../utils/catchAsync');
const AppError = require('../utils/appError');

// exports.getTemperature = factory.getOne(Temperature);
exports.getAllTemperatures = factory.getAll(Temperature);
// exports.deleteTemperature = factory.deleteOne(Temperature);
// exports.createTemperatureManualy = factory.createOne(Temperature);
// exports.updateTemperature = factory.updateOne(Temperature);

exports.getDailyTemperatures = async (req, res) => {
  const dailyTemperatures = await Temperature.find({
    createdAt: {
      $gte: new Date(Date.now() - 1000 * 24 * 60 * 60),
    },
  });

  // res.locals.dailyTemperatures = dailyTemperatures;
  res.status(200).json({
    status: 'success',
    dailyTemperatures,
  });
};
