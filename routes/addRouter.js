const Router = require('express');
const router = new Router();
const WeatherController = require('../controllers/WeatherController');

router.post('/weather', WeatherController.getDataWifi);

module.exports = router;