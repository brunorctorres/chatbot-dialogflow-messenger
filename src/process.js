const response = require('./response');
const intent   = require('../config/intents');
const template = require('../config/templates');

module.exports = (request) => {

    const action  = request.action;
    const message = request.message;
    const userId  = request.userId;

    switch(action) {

        case intent.BEM_VINDO:
            response(message, template.textWithButtonsMessage(userId));
            break;

        case intent.VERIFICA_PRODUTO:
            response(message, template.textMessage(userId, 'Que legal isso!'));
            break;
    }
}