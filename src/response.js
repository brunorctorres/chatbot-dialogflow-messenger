const request  = require('request');
const template = require('../config/templates');
const text     = require('../config/texts');

module.exports = (intendedTemplate) => {

    const userId = JSON.parse(intendedTemplate.body).recipient.id;

    const uri = `https://graph.facebook.com/v2.6/me/messages?access_token=${process.env.FACEBOOK_ACCESS_TOKEN}`;

    request(uri, intendedTemplate, (err, res, body) => {

        if (!err && res.statusCode == 200) {
            console.info('Request OK.');
        } else {
            console.error('ERROR:', err);
            request(uri, template.messageText(userId, text.ERRO));
        }
    });
}