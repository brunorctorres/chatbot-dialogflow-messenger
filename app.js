const express    = require('express');
const app        = express();
const bodyParser = require('body-parser');

const webhook = require('./src/webhook');
const PORT    = process.env.APP_PORT;

app
  .use(bodyParser.json())
  .use(bodyParser.urlencoded({extended: true}))
  
app.post('/webhook', webhook);

app.listen(PORT, () => console.log(`Chatbot is running on port: ${PORT}`));