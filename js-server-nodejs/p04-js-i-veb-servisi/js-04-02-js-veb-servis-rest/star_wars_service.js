const url = require('url');
const fs = require('fs');

exports.preuzimanje = function (req, res) {
    const reqUrl = url.parse(req.url, true);
    let ime = '';
    if (reqUrl.query.ime) {
        ime = reqUrl.query.ime;
    }
    let response = {};
    fs.readFile( __dirname +"/" + "star-wars.json",
        (err, data) => {
            if (err) {
                res.statusCode = 500;
                res.setHeader('Content-Type', 'text/plain');
                res.end('Invalid Request' + err);
                return;
            }
            response = JSON.parse(data)
                    .filter(x => x.Name.toLowerCase() === ime.toLowerCase());
            if(response.length == 0) {
                res.statusCode = 404;
                res.setHeader('Content-Type', 'text/plain');
                res.end('Character not found');
                return;
            }
            if(response.length > 1) {
                res.statusCode = 500;
                res.setHeader('Content-Type', 'text/plain');
                res.end('Multiple characters found with the same name');
                return;     
            }
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.end(JSON.stringify(response[0]));
        });
};

exports.pretraga = function (req, res) {
    const reqUrl = url.parse(req.url, true);
    let ime = '';
    if (reqUrl.query.ime) {
        ime = reqUrl.query.ime;
        console.log('Searching for character with name: ' + ime);
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
    fs.readFile(__dirname + "/" +"star-wars.json",
        (err, data) => {
            if (err) {
                res.statusCode = 500;
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

exports.dodavanje = function (req, res) {
    body = '';
    req.on('data', function (chunk) {
        body += chunk;
    });
    req.on('end', function () {
        postBody = JSON.parse(body);
        fs.readFile(__dirname + "/" + "star-wars.json",
            (err, data) => {
                if (err) {
                    res.statusCode = 500;
                    res.setHeader('Content-Type', 'text/plain');
                    res.end('Invalid Request' + err);
                    return;
                }
                let characters = JSON.parse(data);
                if (characters.find(x => x.Name.toLowerCase() == postBody.Name.toLowerCase())) {
                    res.statusCode = 409;
                    res.setHeader('Content-Type', 'text/plain');    
                    res.end('Character with the same name already exists');
                    return;
                }
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
                            "text": "Post Request Value is  " + JSON.stringify(postBody),
                            "message": "Character added successfully"
                        };
                        res.statusCode = 201;
                        res.setHeader('Content-Type', 'application/json');
                        res.end(JSON.stringify(response));
                    });
            });
    });
};

exports.brisanje = function (req, res) {
    const reqUrl = url.parse(req.url, true);
    let ime = '';
    if (reqUrl.query.ime) {
        ime = reqUrl.query.ime;
    }
    fs.readFile(__dirname + "/" + "star-wars.json",
        (err, data) => {
            if (err) {
                res.statusCode = 500;
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
                    if (brojIzbrisanih == 0) {
                        res.statusCode = 404;
                        res.setHeader('Content-Type', 'text/plain');
                        res.end('No characters found to delete');
                        return;
                    }
                    res.statusCode = 204;
                    res.setHeader('Content-Type', 'application/json');
                    res.end(JSON.stringify(response));
                });
        });
};

exports.azuriranje = function (req, res) {
    const reqUrl = url.parse(req.url, true);
    let ime = '';
    if (reqUrl.query.ime) {
        ime = reqUrl.query.ime;
    }
    body = '';
    req.on('data', function (chunk) {
        body += chunk;
    });
    req.on('end', function () {
        postBody = JSON.parse(body);
        fs.readFile(__dirname + "/" + "star-wars.json",
            (err, data) => {
                if (err) {
                    res.statusCode = 500;
                    res.setHeader('Content-Type', 'text/plain');
                    res.end('Invalid Request' + err);
                    return;
                }
                let characters = JSON.parse(data);
                let index = characters.findIndex(x => x.Name.toLowerCase() == ime.toLowerCase());
                if (index == -1) {
                    res.statusCode = 404;
                    res.setHeader('Content-Type', 'text/plain');
                    res.end('Character not found');
                    return;
                }
                characters[index] = postBody;
                fs.writeFile("star-wars.json", JSON.stringify(characters, null, 4),
                    (err) => {
                        if (err) {
                            res.statusCode = 500;
                            res.setHeader('Content-Type', 'text/plain');
                            res.end('Error writing to file' + err);
                            return;
                        }
                        var response = {
                            "message": "Character updated successfully",
                            "character": postBody
                        };
                        res.statusCode = 200;
                        res.setHeader('Content-Type', 'application/json');
                        res.end(JSON.stringify(response));
                    });
            });
    });
};

exports.invalid = function (req, res) {
    res.statusCode = 404;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Invalid Request');
};



