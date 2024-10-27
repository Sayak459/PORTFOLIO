const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();

const Contact = require('./models/Contact');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI)
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.error(err));

// POST route to save contact data
app.post('/api/contact', async (req, res) => {
    const { name, email, query } = req.body;

    const newContact = new Contact({
        name,
        email,
        query
    });

    try {
        await newContact.save();
        res.status(201).json({ message: 'Contact saved successfully' });
    } catch (error) {
        res.status(400).json({ message: 'Error saving contact', error });
    }
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
