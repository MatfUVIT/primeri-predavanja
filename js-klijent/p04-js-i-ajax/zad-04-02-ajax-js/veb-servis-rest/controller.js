const http = require('http');
const url = require('url');

module.exports = http.createServer((req, res) => {

    // CORS headers
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    // Handle preflight OPTIONS request
    if (req.method === 'OPTIONS') {
        res.statusCode = 204;
        res.end();
        return;
    }
    var service = require('./service.js');
    const reqUrl = url.parse(req.url, true);
    if (reqUrl.pathname == '/star-wars' && req.method === 'GET') {
        // GET Endpoint
        console.log('contoller::Request Type:' +
            req.method + ' Endpoint: ' +
            reqUrl.pathname);
        service.preuzimanje(req, res);
    } else if (reqUrl.pathname == '/star-wars/pretraga' && req.method === 'GET') {
        // GET Endpoint
        console.log('contoller::Request Type:' +
            req.method + ' Endpoint: ' +
            reqUrl.pathname);
        service.pretraga(req, res);
    } else if (reqUrl.pathname == '/star-wars' && req.method === 'POST') {
        // POST Endpoint
        console.log('contoller::Request Type:' +
            req.method + ' Endpoint: ' +
            reqUrl.pathname);
        service.dodavanje(req, res);
    } else if (reqUrl.pathname == '/star-wars' && req.method === 'PUT') {
        // PUT Endpoint
        console.log('contoller::Request Type:' +
            req.method + ' Endpoint: ' +
            reqUrl.pathname);
        service.azuriranje(req, res);
    } else if (reqUrl.pathname == '/star-wars' && req.method === 'DELETE') {
        // DELETE Endpoint
        console.log('contoller::Request Type:' +
            req.method + ' Endpoint: ' +
            reqUrl.pathname);
        service.brisanje(req, res);
    } else {
        console.log('contoller::Request Type:' +
            req.method + ' Invalid Endpoint: ' +
            reqUrl.pathname);
        service.invalid(req, res);
    }
});