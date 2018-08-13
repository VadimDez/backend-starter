/**
 * Created by Vadym Yatsyuk on 06.08.18
 */
const express = require('express');

const router = express.Router();

const controller = require('../../controllers/test.controller');

router.get('/test', controller.get);

module.exports = router;