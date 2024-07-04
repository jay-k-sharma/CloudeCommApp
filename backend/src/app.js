const express = require('express');
const mongoose = require('mongoose');
const auctionRoutes = require('./routes/auctionRoutes');

const app = express();

app.use(express.json());

mongoose.connect('mongodb://localhost:27017/auction', { useNewUrlParser: true, useUnifiedTopology: true });

app.use('/api', auctionRoutes);

module.exports = app;

