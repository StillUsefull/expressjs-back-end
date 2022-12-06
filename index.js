const express = require('express');
const http = require('http');
const morgan = require('morgan');
const path = require('path');


const hostName = 'localhost';
const port = '3000';

const app = express();
app.use(morgan('dev'));

app.use(express.static(path.resolve(__dirname, 'public')));

app.use((req, res, nest) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end('<h1>Hello World</h1>');
});

app.listen(port, hostName, () => {
    console.log(`Server is started at http//${hostName}:${port}`);
});