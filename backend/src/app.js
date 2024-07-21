/**
 * @fileoverview Main server file for the auction application.
 * This file sets up the Express server and connects to MongoDB.
 */

const express = require('express'); // Import the express module for creating the server
const mongoose = require('mongoose'); // Import the mongoose module for MongoDB interaction
const auctionRoutes = require('./routes/auctionRoutes'); // Import the auction routes

const app = express(); // Create an instance of express

/**
 * Middleware to parse JSON bodies.
 */
app.use(express.json());

/**
 * Connect to the MongoDB database named 'auction' on localhost.
 * @constant {string} mongoURI - The MongoDB connection string.
 */
const mongoURI = 'mongodb://localhost:27017/auction';
mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });

/**
 * Use the auction routes for any routes starting with '/api'.
 * @module routes/auctionRoutes
 */
app.use('/api', auctionRoutes);

/**
 * Export the Express app instance.
 * @module app
 */
module.exports = app;
