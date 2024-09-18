const express = require('express');
const cors = require('cors');
const axios = require('axios');
require('dotenv').config();

const app = express();
app.use(cors());

const AIRTABLE_API_KEY = process.env.AIRTABLE_API_KEY;
const AIRTABLE_BASE_ID = process.env.AIRTABLE_BASE_ID;

app.get('/api/emojis', async (req, res) => {
  try {
    const response = await axios.get(`https://api.airtable.com/v0/${AIRTABLE_BASE_ID}/Emojis`, {
      headers: { Authorization: `Bearer ${AIRTABLE_API_KEY}` }
    });
    res.json(response.data);
  } catch (error) {
    console.error('Error fetching emojis:', error);
    res.status(500).json({ error: 'Failed to fetch emojis' });
  }
});

app.get('/api/packs', async (req, res) => {
  try {
    const response = await axios.get(`https://api.airtable.com/v0/${AIRTABLE_BASE_ID}/Packs`, {
      headers: { Authorization: `Bearer ${AIRTABLE_API_KEY}` }
    });
    res.json(response.data);
  } catch (error) {
    console.error('Error fetching packs:', error);
    res.status(500).json({ error: 'Failed to fetch packs' });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));