const express = require('express');
const hotelController = require('./HotelController');

const router = express.Router();

// Create a new hotel
router.post('/hotels', async (req, res) => {
    await hotelController.createHotel(req, res);
});

// Get all hotels
router.get('/hotels', async (req, res) => {
    await hotelController.getHotels(req, res);
});

// Update a hotel
router.put('/hotels/:HotelID', async (req, res) => {
    await hotelController.updateHotel(req, res);
});

// Delete a hotel
router.delete('/hotels/:HotelID', async (req, res) => {
    await hotelController.deleteHotel(req, res);
});

module.exports = router;
