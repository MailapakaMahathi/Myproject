// server.js — Node.js + Express backend for Grok API proxy
const express = require('express');
const cors = require('cors');
const fetch = require('node-fetch');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const API_KEY = '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';

// AI Insight endpoint
app.post('/api/generate-insight', async (req, res) => {
    const { prompt } = req.body;

    try {
        const response = await fetch('https://api.grok.com/v1/completions', {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${API_KEY}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                prompt: prompt,
                model: 'grok-1', // Adjust this if using a specific model
                max_tokens: 500
            })
        });

        const data = await response.json();
        res.json({ result: data.choices?.[0]?.text || 'No result' });
    } catch (error) {
        console.error('Grok API error:', error);
        res.status(500).json({ error: 'Failed to fetch insight from Grok API' });
    }
});

app.listen(PORT, () => {
    console.log(`🚀 Server running on http://localhost:${PORT}`);
});
