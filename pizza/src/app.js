import express from 'express';
import Database from './database/database';
import Container from './container/container';
import PizzaRouter from './routes/pizzaRouter';

const app = express();
const bodyParser = require("body-parser");

const database = new Database(process.env.MONGO_DB_URI);
const container = new Container();

// get repositories
const pizzaRepository = container.get('repository.pizzaRepository');
// get validators
const pizzaValidator = container.get('validator.pizzaValidator');

// init router
const pizzaRouter = new PizzaRouter(pizzaRepository, pizzaValidator);

app.use(bodyParser.json());

// construct api
app.use('/api/v1', pizzaRouter.get());

app.get('/', function (req, res) {
    res.send('Hello World! 🍺');
});

export default app;