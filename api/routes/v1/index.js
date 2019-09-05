/**
 * Created by Vadym Yatsyuk on 06.08.18
 */
const express = require('express');

const {
  authorize
} = require("../../middlewares/auth");
const controller = require('../../controllers/main.controller');
const {
  validator
} = require('../../../swagger/swagger');

const router = express.Router();

router.get('/health', controller.health);

router.get('/protected', authorize, controller.protected);

router.post('/objects', validator.validate("post", "/objects"), controller.post);

module.exports = router;