const url = require('url');

const fs = require('fs');

exports.pretragaRequest = function (req, res) {
    const reqUrl = url.parse(req.url, true);
    let ime = '';
    if (reqUrl.query.ime) {
        ime = reqUrl.query.ime;
    }

    let pol = ''
    if (reqUrl.query.pol) {
        pol = reqUrl.query.pol;
    }

    let response = {};
    fs.readFile("star-wars.json",
        (err, data) => {
            if (err) {
                res.statusCode = 404;
                res.setHeader('Content-Type', 'text/plain');
                res.end('Invalid Request' + err);
                return;
            }
            response = JSON.parse(data);
            if (ime != 'svi' && ime != '')
                response = response.filter(x => x.Name.indexOf(ime) >= 0);
            if (pol != '')
                response = response.filter(x => x.Gender[0] == pol[0]);
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.end(JSON.stringify(response));
        });
};

exports.testRequest = function (req, res) {
    body = '';

    req.on('data', function (chunk) {
        body += chunk;
    });

    req.on('end', function () {

        postBody = JSON.parse(body);

        var response = {
            "text": "Post Request Value is  " + postBody.value
        };

        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify(response));
    });
};

exports.invalidRequest = function (req, res) {
    res.statusCode = 404;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Invalid Request');
};