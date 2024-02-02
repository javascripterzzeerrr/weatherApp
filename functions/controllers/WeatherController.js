const writeFileDataFromWifi = require('../utils/fileHandler').writeFileDataFromWifi;
const readFileFromWiFi = require('../utils/fileHandler').readFileFromWiFi;

class WeatherController {
    async getDataWifiPost(req, res) {
        try {
            const { data } = req.body;

            if (!writeFileDataFromWifi(data)) {
                res.statusCode = 400;
                res.send({ error: 'Data error' });
            }
            
            readFileData = readFileFromWiFi();

            return res.send({ status: 'OK', data: "try data => " + readFileData });
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