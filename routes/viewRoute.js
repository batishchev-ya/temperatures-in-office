const express = require('express');
const viewController = require('../controlers/viewController');

const router = express.Router();

router.route('/').get(viewController.getChart);

module.exports = router;
