const qs      = require('querystring');
const request = require('request');
const iconv   = require('iconv-lite');

function send(path, dados, callback) {

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
            callback(iconv.decode(Buffer.from(body), 'ISO-8859-1')); // Returns UTF-8
        else
            callback(err);
    });
}

module.exports = {

    getPosts: (callback) => {

        let dados = {}

        send('posts', dados, res => callback(res));
    }
}
