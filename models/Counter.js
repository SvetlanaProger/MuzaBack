const mongoose = require('mongoose');

const CounterSchema = new mongoose.Schema({
    page: { type: String, required: true },
    count: { type: Number, default: 1 }
});

module.exports = mongoose.model('Counter', CounterSchema);
