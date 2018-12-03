const response = require('./response');
const intent   = require('../config/intents');
const template = require('../config/templates');
const text     = require('../config/texts');

module.exports = (action, userId) => {
 
    switch(action) {
        case intent.BEM_VINDO:
            response(template.messageText(userId, text.AGRADECIMENTO));
            break;
        case intent.VERIFICA_PRODUTO:
            response(template.messageTextButton(userId));
            break;
        default:
            response(template.messageText(userId, text.DESCULPAS));
    }
}