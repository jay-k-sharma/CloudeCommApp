const Auction = require('../models/Auction');

exports.getAuctions = async (req, res) => {
  try {
    const auctions = await Auction.find();
    res.json(auctions);
  } catch (err) {
    res.status(500).send(err);
  }
};

exports.getAuction = async (req, res) => {
  try {
    const auction = await Auction.findById(req.params.id);
    res.json(auction);
  } catch (err) {
    res.status(500).send(err);
  }
};

exports.createAuction = async (req, res) => {
  try {
    const auction = new Auction(req.body);
    await auction.save();
    res.status(201).send(auction);
  } catch (err) {
    res.status(500).send(err);
  }
};
