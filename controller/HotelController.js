const db = require('../db');

class HotelController {
    async createHotel(req, res) {
        try {
            const { title, text, price } = req.body;

            if (!title || !text || !price) {
                return res.status(400).json({ error: 'All fields are required.' });
            }

            const [rows, fields] = await db.execute('INSERT INTO reacthotels (title, text, price) VALUES (?, ?, ?)', [title, text, price]);
            res.json(rows);
        } catch (error) {
            console.error("Error creating hotel:", error);
            res.status(500).json({ error: 'Internal Server Error' });
        }
    }

    async getHotels(req, res) {
        const [rows, fields] = await db.execute('SELECT * FROM reacthotels');
        res.json(rows);
    }

    async updateHotel(req, res) {
        const { title, text, price, id } = req.body;
        const [rows, fields] = await db.execute('UPDATE reacthotels SET title = ?, text = ?, price = ? WHERE id = ?', [title, text, price, id]);
        res.json(rows[0]);
    }

    async deleteHotel(req, res) {
        const id = req.params.id;
        const [rows, fields] = await db.execute('DELETE FROM reacthotels WHERE id = ?', [id]);
        res.json(rows[0]);
    }
}

module.exports = new HotelController();
