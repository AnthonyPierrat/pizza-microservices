import PizzaRepository from '../repositories/pizzaRepository';

export default class PizzaController {

    /**
     * @constructor
     * @param {PizzaRepository} pizzaRepository 
     * @param {PizzaValidator} pizzaValidator
     */
    constructor(pizzaRepository, pizzaValidator) {
        this._pizzaRepository = pizzaRepository;
        this._pizzaValidator = pizzaValidator;
    }

    /**
     * POST /pizzas
     * create pizza
     * @param {*} req express request
     * @param {*} res express response
     * @returns data and status code
     */
    async post(req, res) {

        const { error, value } = this._pizzaValidator.validate(req.body);

        if (error) {
            return res.status(400).send(error.details);
        } else {
            try {
                const pizza = await this._pizzaRepository.create(value);
                return res.status(200).send(pizza);

            } catch (err) {
                return res.status(500).send(err);
            }
        }
    }

    /**
     * GET /pizzas
     * retrieve pizzas
     * @param {*} req express request
     * @param {*} res express response
     * @returns data and status code
     */
    async get(req, res) {
        try {
            const pizzas = await this._pizzaRepository.list();
            return res.status(200).send(pizzas);

        } catch (err) {
            console.log(err);
            return res.status(500).send(err);
        }
    }

    /**
     * GET /pizzas/:id
     * retrieve single pizza
     * @param {*} req express request
     * @param {*} res express response
     * @returns data and status code
     */
    async getById(req, res) {
        try {
            const pizza = await this._pizzaRepository.find(req.params.pizzaId);
            if (pizza !== null) {
                return res.status(200).send(pizza);
            } else {
                return res.sendStatus(404)
            }

        } catch (err) {
            console.log(err);
            return res.status(500).send(err);
        }
    }

    /**
     * PUT /pizzas/:id
     * update pizza
     * @param {*} req express request
     * @param {*} res express response
     * @returns data and status code
     */
    async put(req, res) {

        const { error, value } = this._pizzaValidator.validate(req.body);

        if (error) {
            return res.status(400).send(error.details);
        } else {
            try {
                const pizza = await this._pizzaRepository.update(req.params.pizzaId, value);
                return res.status(200).send(pizza);

            } catch (err) {
                return res.status(500).send(err);
            }
        }
    }
}