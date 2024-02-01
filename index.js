require('dotenv').config();
const express = require('express');
const router = require('./routes/router');

const PORT = process.env.PORT || 5000;

const app = express();

//app.use(favicon(options.favicon));//Загружаем нашу иконку
app.use(express.bodyParser()); // стандартный модуль, для парсинга JSON в запросах
app.use('/.netlify/functions/api', router);

router.get('/test', (req, res) => {
    res.send('App is running...');
});

app.listen(PORT, () => console.log(`Express server listening on port ${PORT}}`));