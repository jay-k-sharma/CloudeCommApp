const express = require('express');
const auctionController = require('../controllers/auctionController');

const router = express.Router();

router.get('/auctions', auctionController.getAuctions);
router.get('/auctions/:id', auctionController.getAuction);
router.post('/auctions', auctionController.createAuction);

module.exports = router;

