const express = require('express');
const router = require('./routes/router');
const serverless = require('serverless-http');
// const errorHandler = require('./middleware/ErrorHandlingMiddleware');

// const PORT = process.env.PORT || 5000;

const app = express();

//app.use(favicon(options.favicon));//Загружаем нашу иконку
//app.use(express.bodyParser()); // стандартный модуль, для парсинга JSON в запросах

router.get('/test', (req, res) => {
    res.send('App is running...');
});

app.use('/.netlify/functions/api', router);

// app.use(errorHandler);


module.exports.handler = serverless(app);

// app.listen(PORT, () => console.log(`Express server listening on port ${PORT}}`));