const url = require('url');

exports.sampleRequest = function (req, res) {
    const reqUrl = url.parse(req.url, true);
    var name = 'World';
    if (reqUrl.query.name) {
        name = reqUrl.query.name;
    }

    var response = {
        "text": "Hello " + name
    };

    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(response));
};

exports.testRequest = function (req, res) {
    body = '';

    req.on('data', function (chunk) {
        body += chunk;
    });

    req.on('end', function () {

        try {
            postBody = JSON.parse(body);
            var response = {
                "text": "Post Request Value is  " + postBody.value
            };
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.end(JSON.stringify(response));
        } catch (error) {
            var response = {
                "error": `Error description: ${error}`
            };
            res.statusCode = 500;
            res.setHeader('Content-Type', 'application/json');
            res.end(JSON.stringify(response));
        }
    });
};

exports.pomnoziRequest = function (req, res) {
    const reqUrl = url.parse(req.url, true);
    let arg1 = '';
    if (reqUrl.query.arg1) {
        arg1 = reqUrl.query.arg1;
    }
    let arg2 = '';
    if (reqUrl.query.arg2) {
        arg2 = reqUrl.query.arg2;
    }
    let arg3 = '';
    if (reqUrl.query.arg3) {
        arg3 = reqUrl.query.arg3;
    }

    let rezultat = '';
    if (arg1 == '' && arg2 == '' && arg3 == '')
        rezultat = 'No arguments supplied';
    else {
        if (arg1 == '')
            arg1 = 1;
        if (arg2 == '')
            arg2 = 1;
        if (arg3 == '')
            arg3 = 1;
        rezultat = Number(arg1) * Number(arg2) * Number(arg3);
    }
    let response = {
        "result": rezultat
    };
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(response));
};

exports.invalidRequest = function (req, res) {
    res.statusCode = 404;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Invalid Request');
};