const http = require('http');
const url = require('url');
const querystring = require('querystring');

const prikaz = require('./prikaz-strane');

const port = 7080;
http.createServer(onRequest).listen(port);
console.log('Server has started');
console.log(`Veb server osluskuje zahteve na portu ${port}...\n`);

function onRequest(request, response) {
    if (request.method == 'GET') {
        let pathName = url.parse(request.url).pathname;
        let queryText = url.parse(request.url).query;
        let queryData = querystring.parse(queryText);
        let tekuceVreme = new Date();
        console.log("---" + tekuceVreme + "---");
        console.log(pathName);
        console.log(queryText);
        prikaz.prikazStrane(response, pathName, queryData);
    }
    else{
        response.writeHead(405, {'Content-Type': 'text/plain'});
        response.end('Metod nije podrzan. Podrzan je samo GET metod');
    }
}