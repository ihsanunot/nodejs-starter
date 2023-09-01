const http = require('http');

const requestListerner = (request,response) => {

    response.setHeader('Content-Type','text/html');
    response.statusCode = 200;

    // ambil nilai dari method request
    const { method } = request;

    if(method === 'GET'){
        response.end('<h1>Hallo HTTP Server!</h1>');
    }

    if(method === 'POST') {
    let body = [];
    
    request.on('data', (chunk) => {
        body.push(chunk);
    });
    
    request.on('end', () => {
        body = Buffer.concat(body).toString();
        const { nama } = JSON.parse(body);
        response.end(`<h1>Hai, ${nama}!</h1>`);
    }
    )};



} 



const server = http.createServer(requestListerner);

const port = 5000;
const host = 'localhost'

server.listen(port,host,()=>{
console.log(`Server berjalan pada http://${host}:${port}`);   
});


/**
 * Panggil dengan cURL
 * 
 * curl -X GET http://localhost:5000
 * curl -X POST http://localhost:5000
 * curl -X POST -H "Content-Type: application/json" http://localhost:5000 -d "{\"nama\": \"Ayana\"}"
 * dibaca nya di CMD/Terminal
 */