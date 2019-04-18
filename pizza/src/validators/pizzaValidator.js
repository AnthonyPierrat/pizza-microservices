import joi from 'joi';

const pizzaSchema = joi.object().keys({
    name: joi.string().lowercase().regex(new RegExp("^[a-z ]+$")).max(20).required(),
    price: joi.number().required(),
})

export default class PizzaValidator {

    /**
     * validate object
     * @param {Pizza} body 
     */
    validate(body) {
        return joi.validate(body, pizzaSchema);
    }
}