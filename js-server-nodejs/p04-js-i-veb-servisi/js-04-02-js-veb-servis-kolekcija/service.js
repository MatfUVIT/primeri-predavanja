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
    let dzedaj = ''
    if (reqUrl.query.dzedaj) {
        dzedaj = reqUrl.query.dzedaj;
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
            if (pol != '') {
                pol = pol[0];
                if (pol == 'z')
                    pol = 'f';
                else if (pol == 'n')
                    pol = 'u'
                response = response.filter(x => x.Gender[0] == pol);
            }
            if (dzedaj != '') {
                dzedaj = dzedaj[0].toLowerCase();
                if (dzedaj == 'y' || dzedaj == 'd')
                    dzedaj = 'yes';
                else
                    dzedaj = 'no'
                response = response.filter(x => x.Jedi == dzedaj);
            }
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.end(JSON.stringify(response));
        });
};

exports.dodavanjeRequest = function (req, res) {
    body = '';

    req.on('data', function (chunk) {
        body += chunk;
    });

    req.on('end', function () {
        postBody = JSON.parse(body);
        fs.readFile("star-wars.json",
            (err, data) => {
                if (err) {
                    res.statusCode = 404;
                    res.setHeader('Content-Type', 'text/plain');
                    res.end('Invalid Request' + err);
                    return;
                }
                let characters = JSON.parse(data);
                characters.push(postBody);
                fs.writeFile("star-wars.json", JSON.stringify(characters, null, 4),
                    (err) => {
                        if (err) {
                            res.statusCode = 500;
                            res.setHeader('Content-Type', 'text/plain');
                            res.end('Error writing to file' + err);
                            return;
                        }
                        var response = {
                            "text": "Post Request Value is  " + postBody.value,
                            "message": "Character added successfully"
                        };
                        res.statusCode = 200;
                        res.setHeader('Content-Type', 'application/json');
                        res.end(JSON.stringify(response));
                    });
            });
    });
};

exports.izbrisiRequest = function (req, res) {
    const reqUrl = url.parse(req.url, true);
    let ime = '';
    if (reqUrl.query.ime) {
        ime = reqUrl.query.ime;
    }
    fs.readFile("star-wars.json",
        (err, data) => {
            if (err) {
                res.statusCode = 404;
                res.setHeader('Content-Type', 'text/plain');
                res.end('Invalid Request' + err);
                return;
            }
            let characters = JSON.parse(data);
            let filtered = characters.filter(x => x.Name.indexOf(ime) < 0);
            let brojIzbrisanih = characters.length - filtered.length;
            fs.writeFile("star-wars.json", JSON.stringify(filtered, null, 4),
                (err) => {
                    if (err) {
                        res.statusCode = 500;
                        res.setHeader('Content-Type', 'text/plain');
                        res.end('Error writing to file' + err);
                        return;
                    }
                    var response = {
                        "message": "Deleted " + brojIzbrisanih + " character(s) successfully"
                    };
                    res.statusCode = 200;
                    res.setHeader('Content-Type', 'application/json');
                    res.end(JSON.stringify(response));
                });
        });
};

exports.invalidRequest = function (req, res) {
    res.statusCode = 404;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Invalid Request');
};



