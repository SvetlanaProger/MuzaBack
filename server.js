const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// MongoDB Connection
const mongoURI = 'mongodb://localhost:27017/db'; // замените на ваш URI

mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log(err));

app.get('/', (req, res) => {
    res.send("It's API for mi website. \n\nUse: \n/review to check reviews and \n/counter for counter of main page's visitings.")
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

// Routes
const commentsRouter = require('./routes/comments');
const counterRouter = require('./routes/counter');

app.use('/review', commentsRouter);
app.use('/counter', counterRouter);

