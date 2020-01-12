var express = require('express');
var route = express.Router();


var controller = require('../../../controllers/customer/homePage/homePage_controller');

route.get('/',controller.Open);


module.exports = route;