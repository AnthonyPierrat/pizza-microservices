import { ContainerBuilder } from 'node-dependency-injection'
import PizzaRepository from '../repositories/pizzaRepository';
import PizzaValidator from '../validators/pizzaValidator';

export default class Container {

    /**
     * Build container for DI and register
     * @constructor
     */
    constructor() {
        this._container = new ContainerBuilder();
        this.register();
    }

    /**
     * Register services
     */
    register() {
        this._container
            .register('repository.pizzaRepository', PizzaRepository)
        this._container
            .register('validator.pizzaValidator', PizzaValidator)
    }

    /**
     * Get service
     * @param {String} id service name
     * @returns {Object}
     */
    get(id) {
        return this._container.get(id);
    }
}
