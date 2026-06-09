const http = require('http');
const url = require('url');

module.exports = http.createServer((req, res) => {

    var service = require('./service.js');
    const reqUrl = url.parse(req.url, true);

    if (reqUrl.pathname == '/pretraga' && req.method === 'GET') {
        // GET Endpoint
        console.log('Request Type:' +
            req.method + ' Endpoint: ' +
            reqUrl.pathname);

        service.pretragaRequest(req, res);

    } else if (reqUrl.pathname == '/dodavanje' && req.method === 'POST') {
        // POST Endpoint
        console.log('Request Type:' +
            req.method + ' Endpoint: ' +
            reqUrl.pathname);

        service.dodavanjeRequest(req, res);

    } else if (reqUrl.pathname == '/brisanje' && req.method === 'DELETE') {
        // DELETE Endpoint
        console.log('Request Type:' +
            req.method + ' Endpoint: ' +
            reqUrl.pathname);

        service.izbrisiRequest(req, res);

    } else {
        console.log('Request Type:' +
            req.method + ' Invalid Endpoint: ' +
            reqUrl.pathname);

        service.invalidRequest(req, res);

    }
});