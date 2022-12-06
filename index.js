const http = require("http");
const fs = require('fs');
const path = require('path');

const basePublicPath = path.resolve(__dirname, 'public');

const hostName = "localhost";
const Port = 3000;

const server = http.createServer((req, res) => {
    let fileURL;
    if (req.method == 'GET') {
        
        if (req.url == '/') {
            fileURL = '/index.html';
        } 
        else if (req.url == '/about'){
            fileURL = '/about.html';
        }
    }
    else {

    }
    res.statusCode = 200;
    res.setHeader('Content-type', 'text/html');
    res.end(fs.readFileSync(basePublicPath+fileURL));
});

server.listen(Port, hostName, () => {
    console.log(`Server is started at hostName: ${hostName} and port: ${Port}`);
})