const mongoose = require('mongoose');

const CommentSchema = new mongoose.Schema({
    author: String,
    text: String,
    date: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Comment', CommentSchema);
