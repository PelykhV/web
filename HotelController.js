const db = require('./db');

const Hotel = require('./app');

class HotelController {
    async createHotel(req, res) {
        try {
            const { HotelName, VisitorsPerYear, NumberOfRooms } = req.body;

            if (!HotelName || !VisitorsPerYear || !NumberOfRooms) {
                return res.status(400).json({ error: 'All fields are required.' });
            }

            const [rows, fields] = await db.execute(
                'INSERT INTO Hotels (HotelName, VisitorsPerYear, NumberOfRooms) VALUES (?, ?, ?)',
                [HotelName, VisitorsPerYear, NumberOfRooms]
            );

            // Retrieve the newly created hotel from the database
            const [newHotelRows] = await db.execute(
                'SELECT * FROM Hotels WHERE HotelID = ?',
                [rows.insertId]
            );

            const newHotel = {
                hotelName: newHotelRows[0].HotelName,
                visitorCount: newHotelRows[0].VisitorsPerYear,
                roomCount: newHotelRows[0].NumberOfRooms
            };

            res.json(newHotel);
        } catch (error) {
            console.error("Error creating hotel:", error);

            // Log the specific error details
            res.status(500).json({ error: 'Internal Server Error' });
        }
    }

    async getHotels(req, res) {
        const [rows, fields] = await db.execute('SELECT * FROM Hotels');
        res.json(rows);
    }

    async updateHotel(req, res) {
        const { HotelName, VisitorsPerYear, NumberOfRooms, HotelID } = req.body;
        const [rows, fields] = await db.execute('UPDATE Hotels SET HotelName = ?, VisitorsPerYear = ?, NumberOfRooms = ? WHERE HotelID = ?', [HotelName, VisitorsPerYear, NumberOfRooms, HotelID]);
        res.json(rows[0]);
    }

    async deleteHotel(index) {
        if (index >= 0 && index < this.hotels.length) {
            const hotelIdToDelete = this.hotels[index].HotelID; // Assuming each hotel has a property 'HotelID'
            const response = await fetch(`http://localhost:8080/api/hotels/${hotelIdToDelete}`, {
                method: 'DELETE',
            });

            if (response.ok) {
                const deletedHotel = await response.json();
                console.log('Hotel deleted successfully:', deletedHotel);
                this.hotels.splice(index, 1);
                return true;
            } else {
                console.error('Failed to delete hotel from server.');
                return false;
            }
        }
        return false;
    }
    
}

module.exports = new HotelController();
