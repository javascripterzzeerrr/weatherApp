const writeFileDataFromWifi = require('../utils/fileHandler').writeFileDataFromWifi;

class WeatherController {
    async getDataWifiPost(req, res) {
        try {
            const { data } = req.body;

            if (!writeFileDataFromWifi(data)) {
                res.statusCode = 400;
                res.send({ error: 'Data error' });
            }

            return res.send({ status: 'OK', data: res });
        }
        catch(e) {
            console.log(`Error is ${e}`);
        }
    }

    async getDataWifiGet(req, res) {
        try {
            return res.send({ status: 'OK' });
        }
        catch(e) {
            console.log(`Error is ${e}`);
        }
    }
}

module.exports = new WeatherController();