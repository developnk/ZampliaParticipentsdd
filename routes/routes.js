const express = require('express')
const controller = require('../controller/controller')

const Router = express.Router();

// Router.get('/',controller.controller)
Router.post('/login',controller.controller)


module.exports = Router;