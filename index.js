const express = require('express');
const http = require('http');
const morgan = require('morgan');
const path = require('path');
const bodyParser = require('body-parser');

const dishRouter = require('./routes/dishRouter');
const leaderRouter = require('./routes/leaderRouter');
const promoRouter = require('./routes/promoRouter');

const hostName = 'localhost';
const port = '3000';

const app = express();
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(express.static(path.resolve(__dirname, 'public')));
app.use('/dishes', dishRouter);
app.use('/leaders', leaderRouter);
app.use('/promotions', promoRouter);
app.listen(port, hostName, () => {
    console.log(`Server is started at http//${hostName}:${port}`);
});