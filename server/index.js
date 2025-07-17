const express = require('express');
const cors = require('cors');
require('dotenv').config({ path: './.env.api' });
const { InferenceClient } = require('@huggingface/inference');

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;
console.log('HF_TOKEN:', process.env.HF_TOKEN ? '✅ Present' : '❌ Missing');

// Create Hugging Face client instance
const client = new InferenceClient(process.env.HF_TOKEN);

app.post('/ask', async (req, res) => {
  let { userInput } = req.body;

  if (!userInput || typeof userInput !== 'string' || userInput.trim() === '') {
    return res.status(400).json({ reply: "❗ Please enter a valid message." });
  }

  // Clean & trim
  userInput = userInput.trim().slice(0, 300).replace(/[\u0000-\u001F\u007F-\u009F]/g, '');

  try {
    const chatCompletion = await client.chatCompletion({
      provider: "fireworks-ai",
      model: "meta-llama/Llama-3.1-8B-Instruct",
      messages: [
         {role: "system",
        content: `You are a helpful assistant embedded in the personal portfolio website of Talel Boussetta, a data science student at INSAT. Here is some background info about Talel:
    
      - Full name: Talel Boussetta
      - Studies: Data Science & Engineering at INSAT
      - Interests: Machine learning, renewable energy, hackathons, human-AI interaction
      - Skills: Python, React, TailwindCSS, Node.js, Hugging Face, GitHub, Arduino
      - Projects: FocusGuard (real-time attention tracker), SmartHome AI Plug Monitor, Water-to-Energy Hackathon solution, VGG19 PCB classifier
      - Certifications: DataCamp Data Scientist Associate, Data Science Professional, Kaggle Projects
      - Languages: Fluent in Arabic, French, English
      - Contact:talelboussetta6@gmail.com
      - GitHub:https://github.com/talelboussetta
      - LinkedIn: https://www.linkedin.com/in/talel-boussetta/
      
      When users ask questions like “who made this website?” or “what are your skills?”, answer clearly using this info. If they ask general questions, just act as a smart assistant.`,
         },
      
      
        { role: "user", content: userInput }
      ],
      temperature: 0.7,
      max_tokens:200,
      top_p: 0.9,
    });

    const reply = chatCompletion.choices[0].message.content;
    console.log("🧠 Model reply:", reply);
    res.json({ reply });

  } catch (err) {
    console.error("🔥 Hugging Face API error:", err.response?.data || err.message);
    res.status(500).json({ reply: "⚠️ Hugging Face error or model too slow." });
  }
});
app.listen(PORT, () => {
  console.log(`🤖 Server running on http://localhost:${PORT}`);
});
