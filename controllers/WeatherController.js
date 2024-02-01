const writeFileDataFromWifi = require('../utils/fileHandler').writeFileDataFromWifi;

class WeatherController {
    async getDataWifi(req, res) {
        try {
            const { data } = req.body;

            if (!writeFileDataFromWifi(data)) {
                return;
            }
        }
        catch(e) {
            console.log(`Error is ${e}`);
        }
    }
}

module.exports = new WeatherController();