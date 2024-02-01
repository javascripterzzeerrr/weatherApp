require('dotenv').config();
const express = require('express');
const path = require('path'); // модуль для парсинга пути
const router = require('./routes/router');
import serverless from "serverless-http";

const PORT = process.env.PORT || 5000;

const app = express();

//app.use(favicon(options.favicon));//Загружаем нашу иконку
app.use(express.bodyParser()); // стандартный модуль, для парсинга JSON в запросах
app.use('/api', router);

export const handler = serverless(api);


app.listen(PORT, () => console.log(`Express server listening on port ${PORT}}`));