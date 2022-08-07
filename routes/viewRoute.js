const express = require('express');
const viewController = require('../controlers/viewController');

const router = express.Router();

router.route('/chart').get(viewController.getChart2);
router.route('/').get(viewController.getChart);

module.exports = router;
