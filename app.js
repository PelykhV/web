const express = require('express');
const hotelRouter = require('./routes/HotelRoute');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');

const PORT = process.env.PORT || 8080;

const app = express();

app.use(bodyParser.json());
app.use(cors());
app.use(express.static(__dirname));
app.use('/api', hotelRouter);

app.listen(PORT, () => {
    console.log(`Сервер працює на порті http://localhost:${PORT}`);
});
