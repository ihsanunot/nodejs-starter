const http = require('http');

const requestListerner = (request,response) => {

    response.setHeader('Content-Type','text/html');
    response.statusCode = 200;

    // ambil nilai dari method request
    const { method } = request;

    if(method === 'GET'){
        response.end('<h1>Hallo HTTP Server!</h1>')
    }
    if(method === 'POST'){
        response.end('<h1>Hallo Ayana Post!</h1>')
    }
    if(method === 'PUT'){
        response.end('<h1>Hallo Ayana PUT!</h1>')
    }
    if(method === 'DELETE'){
        response.end('<h1>Hallo Ayana Delete!</h1>')
    }   
};

const server = http.createServer(requestListerner);

const port = 5002;
const host = 'localhost'

server.listen(port,host,()=>{
    console.log(`Server berjalan pada http://${host}:${port}`);
});

/**
 * Panggil dengan cURL
 * 
 * curl -X GET http://localhost:5000
 * curl -X POST http://localhost:5000
 * dibaca nya di CMD/Terminal
 */