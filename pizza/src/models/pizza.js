import mongoose from 'mongoose';

const pizzaSchema = new mongoose.Schema({
    name: {
        type: String,
        unique: true,
    }
});

const Pizza = mongoose.model('Pizza', pizzaSchema);

export default Pizza;