const http = require("http");

const hostName = "localhost";
const Port = 3000;

const server = http.createServer((req, res) => {
    console.log(req.headers);
    res.statusCode = 200;
    res.setHeader('Content-type', 'text/html');
    res.end('<h1>Hello World</h1>');
});

server.listen(Port, hostName, () => {
    console.log(`Server is started at hostName: ${hostName} and port: ${Port}`);
})