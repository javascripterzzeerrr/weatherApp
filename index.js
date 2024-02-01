require('dotenv').config();
const express = require('express');
const path = require('path'); // модуль для парсинга пути
const router = require('./routes/router');

const PORT = process.env.PORT || 5000;

const app = express();

app.use(express.favicon()); // отдаем стандартную фавиконку, можем здесь же свою задать
app.use(express.logger('dev')); // выводим все запросы со статусами в консоль
app.use(express.bodyParser()); // стандартный модуль, для парсинга JSON в запросах
app.use(express.static(path.join(__dirname, "public"))); // запуск статического файлового сервера, который смотрит на папку public/ (в нашем случае отдает index.html)
app.use('api', router);


app.listen(PORT, () => console.log(`Express server listening on port ${PORT}}`));