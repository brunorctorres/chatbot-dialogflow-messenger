const qs      = require('querystring');
const request = require('request');
const iconv   = require('iconv-lite');

function send(path, dados, cb) {

    let data = qs.stringify(dados);
    
    let options = {
        method: 'GET',
        uri: `https://jsonplaceholder.typicode.com/${path}`,
        body: data,
        headers: {'Content-Type': 'application/json'},
        encoding: null
    }

    request(options, (err, res, body) => {
        if (!err && res.statusCode == 200)
            cb(iconv.decode(Buffer.from(body), 'ISO-8859-1')); // Returns UTF-8
        else
            cb(err);
    });
}

module.exports = {

    getPosts: (cb) => {

        let dados = {}

        send('posts', dados, res => cb(res));
    }
}