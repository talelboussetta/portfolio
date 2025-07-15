const express = require('express');
const axios = require('axios');
const cors = require('cors');
require('dotenv').config({ path: './.env.api' });
console.log('HF_TOKEN:', process.env.HF_TOKEN ? '✅ Present' : '❌ Missing');

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;

app.post('/ask', async (req, res) => {
  const { userInput } = req.body;

  try {
    const response = await axios.post(
      'https://router.huggingface.co/featherless-ai/v1/completions',
      {
        model: "meta-llama/Llama-3.1-8B", // use smaller model
        prompt: `User: ${userInput}\nAssistant:`,
        parameters: {
          max_new_tokens: 30,
          temperature: 0.7,
          top_p: 0.9,
        },
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.HF_TOKEN}`,
          'Content-Type': 'application/json',
        },
        timeout: 60000, // 1 minute timeout
      }
    );

    const output = response.data;
    console.log("🧠 Model output:", output);

    const reply =
      output?.[0]?.generated_text?.split('Assistant:')[1]?.trim() ||
      output?.[0]?.generated_text?.trim() ||
      '⚠️ Model returned nothing.';

    res.json({ reply });

  } catch (err) {
    console.error('🔥 Hugging Face API error:', err.response?.data || err.message);
    res.status(500).json({ reply: '⚠️ Hugging Face error or model too slow.' });
  }
});
app.listen(PORT, () => {
  console.log(`🤖 Server running on http://localhost:${PORT}`);
});
