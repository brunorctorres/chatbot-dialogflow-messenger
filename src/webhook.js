const process = require('./process');

module.exports = (req, res) => {

    const payload = req.body.originalDetectIntentRequest.payload.data;

    console.log('Request is coming...');

    if (payload) {
        const action = req.body.queryResult.action;
        const userId = req.body.originalDetectIntentRequest.payload.data.sender.id
        process(action, userId);
    }

    res.status(200).end();
}