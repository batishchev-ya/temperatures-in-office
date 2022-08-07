const Temperature = require('../models/temperaturesModel');
exports.getChart = (req, res) => {
  res.status(200).render('chart');
};
exports.getChart2 = async (req, res) => {
  res.status(200).render('chart2');
};

// {
//   'createdAt': {
//     '$gte': new Date('Fri, 05 Aug 2022 00:00:00 GMT')
//   }
// }
