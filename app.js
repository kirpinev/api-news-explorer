require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const { port, dataBaseUrl, dataBaseOptions } = require('./utils');
const routers = require('./routes');

const app = express();

mongoose.connect(dataBaseUrl, dataBaseOptions);

app.use(routers);

app.listen(port, () => console.log(`Слушаем порт ${port}`));
