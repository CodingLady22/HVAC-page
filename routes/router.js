const express = require('express');
const router = express.Router();
const controller = require('../controllers/controller.js')

router.post('/schedule_service', controller.scheduleService)

router.post('/request_quote', controller.quoteService)

module.exports = router;