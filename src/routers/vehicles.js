const express = require('express');
const vehicleRouter = express.Router();
const vehicleController = require('../controllers/vehicles');
const authorize = require('../middlewares/authorize');
const upload = require('../controllers/upload');
// const validate = require('../middlewares/validate')


vehicleRouter.post('/', authorize.checkToken, authorize.checkTenant, upload.uploadHandlerVehicles, vehicleController.postNewVehicle);
vehicleRouter.get('/', vehicleController.getVehicle);
vehicleRouter.delete('/', authorize.checkToken, authorize.checkTenant, vehicleController.delVehicleById);
vehicleRouter.put('/', authorize.checkToken, authorize.checkTenant, upload.uploadHandlerVehicles, vehicleController.updateVehicles);

module.exports = vehicleRouter;