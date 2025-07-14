const express = require('express');
const axios = require('axios');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;

// Route: POST /ask
app.post('/ask', async (req, res) => {
  const { userInput } = req.body;

  try {
    const response = await axios.post(
        'https://api-inference.huggingface.co/models/google/flan-t5-large'
,
      {
        inputs: `You are Talel's personal AI assistant. Answer clearly:\nUser: ${userInput}\nAssistant:`,
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.HF_API_KEY}`,
        },
      }
    );

    const reply = response.data?.[0]?.generated_text?.split('Assistant:')[1]?.trim() || 'Sorry, I did not understand that.';
    res.json({ reply });
  } catch (err) {
    console.error(err.response?.data || err.message);
    res.status(500).json({ error: 'Failed to fetch response from LLaMA 3' });
  }
});

app.listen(PORT, () => console.log(`🤖 Server running on http://localhost:${PORT}`));
