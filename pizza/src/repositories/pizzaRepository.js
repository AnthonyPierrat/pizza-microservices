import Pizza from '../models/pizza';

export default class PizzaRepository {

    /**
     * insert pizza to database
     * @param {Pizza} object 
     */
    async create(object) {
        const pizza = new Pizza({
            name: object.name,
            price: object.price,
        });

        try {
            const savedPizza = await pizza.save();
            return savedPizza;

        } catch (err) {
            console.log(err);
            return err;
        }

    }

    /**
     * get pizzas from database
     */
    async list() {
        try {
            const pizzas = await Pizza.find();
            return pizzas;

        } catch (err) {
            console.log(err);
            return err;
        }

    }

    /**
     * get pizza by id from database
     * @param {String} id pizza id 
     */
    async find(id) {
        try {
            const pizza = await Pizza.findById(id);
            return pizza;

        } catch (err) {
            console.log(err);
            return err;
        }

    }

    /**
     * update pizza by id
     * @param {String} id 
     * @param {Pizza} object 
     */
    async update(id, object) {
        try {
            const pizza = await Pizza.findByIdAndUpdate(id, { $set: object }, { new: true });
            return pizza;

        } catch (err) {
            console.log(err);
            return err;
        }
    }
}