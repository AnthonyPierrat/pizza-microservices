import express from 'express';

const app = express();
const bodyParser = require("body-parser");

app.use(bodyParser.json());

app.get('/', function (req, res) {
    res.send('Hello World! 🍺');
});

export default app;