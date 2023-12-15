const express = require('express');
const router = express.Router();
const hotelController = require('../controller/HotelController')

// Маршрути для готелів
router.post('/hotels', hotelController.createHotel);
router.get('/hotels', hotelController.getHotels);
router.put('/hotels/:id', hotelController.updateHotel);
router.delete('/hotels/:id', hotelController.deleteHotel);

module.exports = router;
