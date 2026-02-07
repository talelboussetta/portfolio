import { meta, shopify, starbucks, tesla } from "../assets/images";
import {
    contact,
    css,
    git,
    github,
    html,
    javascript,
    linkedin,
    react,
    tailwindcss,
    typescript,
    pandas,
    scikit,
    matplotlib,
    plotly,
} from "../assets/icons";

export const skills = [
        {
            imageUrl: css,
            name: "CSS",
            type: "Frontend",
        },
        
        {
            imageUrl: git,
            name: "Git",
            type: "Version Control",
        },
        {
            imageUrl: github,
            name: "GitHub",
            type: "Version Control",
        },
        {
            imageUrl: html,
            name: "HTML",
            type: "Frontend",
        },
        {
            imageUrl: javascript,
            name: "JavaScript",
            type: "Frontend",
        },
        {
            imageUrl: react,
            name: "React",
            type: "Frontend",
        },
        {
            imageUrl: tailwindcss,
            name: "Tailwind CSS",
            type: "Frontend",
        },
        {
            imageUrl: typescript,
            name: "TypeScript",
            type: "Frontend",
        },  
        {
            imageUrl: pandas,
            name: "Pandas",
            type: "Data Science",
        },
        {   
            imageUrl: scikit,
            name: "Scikit-learn",
            type: "Machine Learning",
        },
        {
            imageUrl: matplotlib,
            name: "Matplotlib",
            type: "Data Visualization",
        },
        { 
            imageUrl:plotly,
            name: "plotly",
            type: "Data Visualization",
        },
];

export const Certifications = [
  {
    title: "DataCamp Data Scientist Associate",
    description:
      "Earned the official certification by completing end-to-end machine learning and data analysis projects, including business problem-solving, model evaluation, and actionable recommendations.",
    date: "April 2025",
    badge: "📜 Certification",
  },
  {
    title: "AquaVolt — Renewable Energy Hackathon",
    description:
      "Developed an AI-monitored wastewater reuse system using a Stirling engine and phytoremediation to generate electricity and treat industrial wastewater.",
    date: "April 2025",
    badge: "🏆 Winner",
  },
  {
    title: "LLMOps & LangChain Basics",
    description:
      "Explored Hugging Face and LangChain, and integrated LLaMA 3 into personal chatbot experiments for the FocusGuard dashboard as part of my self-learning in LLMOps.",
    date: "June–July 2025",
    badge: "🧪 Self-Learning",
  },
  {
    title: "Datacamp Data Scientist Professional Certification",
    description:
      "Completed a comprehensive data science curriculum covering Python, SQL, machine learning, and data visualization, with hands-on projects and real-world datasets. Including a must do project on predicting high traffic recipes for a restaurant focusing on accuracy and business plans and KPI's.",
    date: "July 2025-July 2027",
    badge: "📜 Certification",
    }
];


export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/talelboussetta',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/talel-boussetta/',
    }
];

export const projects = [
    {
    title: "⚡ AquaVolt – Smart Wastewater Reuse System",
    description:
      "Hackathon-winning system that reuses hot wastewater to generate electricity via Stirling engine, then purifies it using AI-monitored phytoremediation(the github link takes u to the organizations repository where i've put what I did as part of the team).",
        theme: 'btn-back-green',
        link: "https://github.com/La3b-Sghar/AquaVolt",
      },
   {
        title: "📊 DataCamp Certification Projects",
        description:
        "Official DataCamp Data Scientist Associate certification projects, including loyalty program analysis and high-traffic recipe prediction using ML models.",
        theme: 'btn-back-yellow',
        link: "https://github.com/talelboussetta/Certifications-",
  },
    {
        
        theme: 'btn-back-blue',
        name: 'Supermarket Loyalty Spending Prediction',
        description: 'This project was completed as part of a practice exam for the DataCamp Data Science Associate certification. The goal was to analyze a loyalty program dataset for a fictional international supermarket and build a model to predict customer spending.',
        link: 'https://github.com/talelboussetta/supermarket-loyalty-prediction',
    },
    {
       
        theme: 'btn-back-pink',
        name: ' Recipe Site Traffic Classification',
        description: 'This project aims to analyze and predict the traffic level of recipes on a website, helping identify which recipes are likely to generate high traffic (go viral) based on their nutritional and categorical features. It demonstrates a complete data science workflow from data cleaning to model evaluation with a focus on business-relevant metrics.',
        link: 'https://github.com/talelboussetta/HighTraffic-Recipe-Classificator'
    },
  {
    title: "🌐 This Portfolio Website",
    description:
      "Fully responsive personal portfolio website built with React, Tailwind, and Framer Motion. Showcases my work in AI, ML, and robotics.",
    link: "https://github.com/talelboussetta/portfolio",
    theme: 'btn-back-purple',
  },
  {
    name: "FocusGuard — AI Focus Platform",
    description:
      "Full-stack focus platform with FastAPI + PostgreSQL backend (JWT auth, sessions, stats, garden gamification), AI insights (blink/focus analysis, RAG coaching), and a React dashboard. Tech: FastAPI, SQLAlchemy, asyncpg, JWT, Qdrant + HF/LLM, MediaPipe/ONNX in-browser.",
    link: "https://github.com/talelboussetta/FocusGuard-ML",
    theme: "btn-back-green",
  },
  {
    title:"Computer vision embedded system for autonomous robots",
    description:"Computer Vision system for the ENSI Eurobot 2025 competition. The system successfully implements vision-based solutions for all three competition tasks: Task 1: Color Detection - Identify red and blue objects with size filteringTask 2: Number Recognition - Detect digits 3, 5, 6, 9 using fine-tuned YOLO Task 3: Object Detection - Identify green cubes and triangles with verification",
    link:"https://github.com/INSATEURO2026/Computer_vision",
    theme: 'btn-back-red',
  },
  {
    title:"🏆 AI Camera Challenge - First Place Winner",
    description:"Led vision system development for a real-time customer insights platform at Global AI Congress Africa hackathon. Built comprehensive AI pipeline featuring YOLOv8 person detection with smart ROI filtering, custom CNN emotion recognition (FER13 dataset), MediaPipe body language analysis, and HuggingFace age/gender estimation. All models integrated into dockerized system with live dashboard tracking customer satisfaction, engagement duration, and interaction quality metrics.",
    link:"https://lnkd.in/eWzXRFsK",
    theme: 'btn-back-orange',
  }
];
