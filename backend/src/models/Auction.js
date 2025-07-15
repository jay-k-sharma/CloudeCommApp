const mongoose = require('mongoose');

const auctionSchema = new mongoose.Schema({
  title: String,
  description: String,
  startTime: Date,
  endTime: Date,
  currentBid: Number,
  bidHistory: [
    {
      user: String,
      amount: Number,
      time: Date
    }
  ]
});

const Auction = mongoose.model('Auction', auctionSchema);

module.exports = Auction;
