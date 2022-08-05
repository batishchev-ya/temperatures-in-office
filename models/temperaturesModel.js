const mongoose = require('mongoose');

const temperatureSchema = new mongoose.Schema({
  version: {
    type: String,
    required: [true, 'Version must be included'],
  },
  temperature: {
    type: Number,
    required: [true, 'Temperature must be included'],
  },
  humidity: {
    type: Number,
    required: [true, 'Humidity must be included'],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});
// console.log(Date.now());
const Temperature = mongoose.model('Temperature', temperatureSchema);

module.exports = Temperature;
