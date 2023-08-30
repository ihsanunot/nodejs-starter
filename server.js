const http = require('http');

const requestListerner = (request,response) => {
    response.setHeader('Content-Type','text/html');

    response.statusCode = 200;
    response.end('<h1>Hallo HTTP Server!</h1>')
};

const server = http.createServer(requestListerner);

const port = 5002;
const host = 'localhost'

server.listen(port,host,()=>{
    console.log(`Server berjalan pada http://${host}:${port}`);
});