import { Router } from 'express';
import PizzaController from '../controllers/pizzaController';

export default class PizzaRouter {

    /**
     * @constructor
     * @param {PizzaRepository} repository 
     * @param {PizzaValidator} validator 
     */
    constructor(repository, validator) {
        this._path = '/pizzas'
        this._router = new Router();
        this._pizzaController = new PizzaController(repository, validator);
        this.init();
    }

    /**
     * Initialize API routes
     */
    init() {
        this._router.post(this._path, this._pizzaController.post.bind(this._pizzaController));
        this._router.get(this._path, this._pizzaController.get.bind(this._pizzaController));
        this._router.get(`${this._path}/:pizzaId`, this._pizzaController.getById.bind(this._pizzaController));
        this._router.put(`${this._path}/:pizzaId`, this._pizzaController.put.bind(this._pizzaController));
    }

    /**
     * get express router
     * @returns {Router}
     */
    get() {
        return this._router;
    }
}