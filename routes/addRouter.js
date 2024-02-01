const Router = require('express');
const router = new Router();
const WeatherController = require('../controllers/WeatherController');

router.get('/', WeatherController.getDataWifiGet);
router.post('/', WeatherController.getDataWifiPost);

module.exports = router;