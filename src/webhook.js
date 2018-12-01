const process = require('./process');

module.exports = (req, res) => {

    const sender = req.body.originalDetectIntentRequest.payload.data;
    
    if (sender) {

        const slimRequest = {
            action  : req.body.queryResult.action,
            userId  : req.body.originalDetectIntentRequest.payload.data.sender.id,
            message : req.body.originalDetectIntentRequest.payload.data.message.text
        }

        process(slimRequest);

        res.status(200).end();
    } else {
        res.status(404).end();
    }
}