# 🌟 Talel Boussetta — Developer Portfolio

Welcome to my personal developer portfolio — a space where I showcase my work, projects, certifications, and my journey as a passionate data science and AI enthusiast. This portfolio is designed not just to reflect my technical expertise but also my creativity, vision, and attention to design.

## 🔍 Overview

This portfolio is built using **React.js** with **Tailwind CSS** and highlights:

- 🧠 My data science, AI, and software projects
- 🧾 Certifications and achievements
- 💬 A built-in chatbot powered by **Meta's LLaMA 3 LLM**
- 🎯 Real-world KPIs and outcomes from project work
- 🎨 Smooth UI/UX with animations and responsiveness

## 🚀 Features

- **Modern UI:** Tailored animations, transitions, and layouts with Tailwind and Framer Motion
- **Responsive Design:** Optimized for all screen sizes (desktop, tablet, mobile)
- **LLaMA 3 Chatbot:** Integrated assistant that can respond to user queries live
- **Session System:** Focus sessions, productivity timers, and real-time feedback (for future enhancements)
- **Dynamic Sections:** Projects, experience, skills, certifications, and more

## 🛠️ Tech Stack

| Tech        | Description                           |
|-------------|---------------------------------------|
| React       | Frontend library                      |
| Tailwind CSS| Styling framework                     |
| Framer Motion| UI animations                        |
| LLaMA 3 API | Integrated via Hugging Face / Local   |
| Vite        | Fast development & build tool         |

## 🧠 Project Vision

> "This portfolio isn’t just a résumé — it's a dynamic space to reflect my growth and my ability to build complete, engaging user-facing tools."

The chatbot integration and productivity tools aim to blend personal branding with practical AI-enhanced features.

## 🔥 Highlighted Projects

- 🤖 RAG + n8n Automation System  
  End-to-end Retrieval-Augmented Generation system integrated with n8n for event-driven workflows. Built ingestion, chunking, embeddings, vector DB retrieval, and context-aware prompting; orchestrated automated actions via n8n (API calls, DB updates, external services). Optimized chunk sizes, embeddings, and retrieval for precision, recall, and token efficiency.  
  Live/Code: see the Projects section in the site.

## 📁 Structure
## 📁 Structure

```bash
.
├── public
├── src
│   ├── assets
│   ├── components
│   ├── pages
│   ├── chatbot # LLaMA 3 integration logic
│   └── App.jsx
├── tailwind.config.js
├── vite.config.js
└── README.md
```

## ▶️ Getting Started

Prerequisites:
- Node.js 18+

Install dependencies and run the dev server:

```bash
cd client
npm ci
npm run dev
```

Build and preview production:

```bash
npm run build
npm run preview
```

## 🧩 Where to Update Projects

- Project cards are defined in: `client/src/constants/index.js` under `projects`.  
  Add, remove, or edit entries there to update the Projects page.

## 📫 Contact

- GitHub: https://github.com/talelboussetta  
- LinkedIn: https://www.linkedin.com/in/talel-boussetta/
