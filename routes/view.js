const express = require('express')
const router = express.Router()
const viewController = require('../controller/view.controller')

router.get('/fetch',viewController.displaytext)

module.exports = router