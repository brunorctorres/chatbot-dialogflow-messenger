const dialogflow = require('dialogflow');
const fetch      = require('node-fetch');

const config = {
    credentials: {
        private_key: JSON.parse(process.env.DIALOGFLOW_PRIVATE_KEY),
        client_email: process.env.DIALOGFLOW_CLIENT_EMAIL
    }
}

const projectId    = 'bot-teste-fb';
const sessionId    = '123456';
const languageCode = 'pt-br';

const sessionClient = new dialogflow.SessionsClient(config);

const sessionPath = sessionClient.sessionPath(projectId, sessionId);

module.exports = (requestMessage, responseObject) => {

    const uri = `https://graph.facebook.com/v2.6/me/messages?access_token=${process.env.FACEBOOK_ACCESS_TOKEN}`;

    const request = {
        session: sessionPath,
        queryInput: {
            text: {
                text: requestMessage,
                languageCode: languageCode,
            }
        }
    }

    sessionClient
        .detectIntent(request)
        .then(() => {
            fetch(uri, responseObject);
            console.info('Success!');
        })
        .catch(err => console.error('ERROR:', err));
}