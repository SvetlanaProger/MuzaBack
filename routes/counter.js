const express = require('express');
const router = express.Router();
const Counter = require('../models/Counter');

router.get('/', async (req, res) => {
    try {
        const counters = await Counter.find();
        res.json(counters);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Увеличить счетчик посещений для страницы
router.post('/', async (req, res) => {
    const { page } = req.body;
    try {
        let counter = await Counter.findOne({ page });
        if (!counter) {
            counter = new Counter({ page, count: 1 });
        } else {
            counter.count++;
        }
        await counter.save();
        res.status(200).json(counter);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

module.exports = router;
