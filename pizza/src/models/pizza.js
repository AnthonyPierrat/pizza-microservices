import mongoose from 'mongoose';

const pizzaSchema = new mongoose.Schema({
    name: {
        type: String,
        unique: true,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now(),
    },
    updatedAt: {
        type: Date,
    },
    price: {
        type: Number,
    }
});

pizzaSchema.pre('update', () => {
    this.update({}, { $set: { updatedAt: Date.now() } });
});

const Pizza = mongoose.model('Pizza', pizzaSchema);

export default Pizza;