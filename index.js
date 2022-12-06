const express = require('express');
const http = require('http');
const morgan = require('morgan');
const path = require('path');
const bodyParser = require('body-parser');

const hostName = 'localhost';
const port = '3000';

const app = express();
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(express.static(path.resolve(__dirname, 'public')));

app.all('/dishes', (req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-type', 'text/plain');
    next();
});

app.get('/dishes', (req, res) => {
    res.end('Will send all dishes to you');
});

app.get('/dishes/:dishId', (req, res) => {
    console.log(req.params.dishId)
    res.end(`We will send you details about dish: ${req.params.dishId}`);
})

app.post('/dishes', (req, res, next) => {
    res.end('Will add the dish: ' + req.body.name + ' with details: ' + req.body.details);
});
   

app.put('/dishes', (req, res) => {
    res.end(`Dish with name: ${req.body.name} and details: ${req.body.details} was added to database`);
});

app.delete('/dishes', (req, res) => { 
    res.end(`Dish with name: ${req.body.name} and details: ${req.body.details} was deleted from database`);
});
app.listen(port, hostName, () => {
    console.log(`Server is started at http//${hostName}:${port}`);
});