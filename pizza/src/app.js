import express from 'express';
import Database from './database/database';

const app = express();
const bodyParser = require("body-parser");

const database = new Database(process.env.MONGO_DB_URI);

app.use(bodyParser.json());

app.get('/', function (req, res) {
    res.send('Hello World! 🍺');
});

export default app;