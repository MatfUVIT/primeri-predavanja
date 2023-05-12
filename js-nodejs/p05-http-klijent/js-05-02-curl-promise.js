const curl = adresa => {
    return new Promise((resolve, reject) => {
        const http = require('http');
        const https = require('https');

        let client = http;
        if (adresa.toString().indexOf("https") === 0) {
            client = https;
        }

        client.get(adresa, (resp) => {
            let data = '';

            // A chunk of data has been recieved.
            resp.on('data', (chunk) => {
                data += chunk;
            });

            // The whole response has been received. Print out the result.
            resp.on('end', () => {
                resolve(data);
            });

        }).on("error", (err) => {
            reject(err);
        });
    });
};

(async (url) => {
    console.log(await curl(url));
})('http://www.math.rs/');