// context/FormContext.jsx
import React, { createContext, useContext, useState } from 'react';

const FormContext = createContext();

export const FormProvider = ({ children }) => {
  const initialData = {
    name: "Irfan Ahmed",
    position: "Java Developer",
    email: "jafriirfan37@gmail.com",
    phone: "+91 8424097584",
    linkedin: "https://www.linkedin.com/in/irfan37/",
    github: "https://github.com/IrfanAhmed8",
    portfolio: "https://codolio.com/profile/Irfan66",
    summary: "Detail-oriented Java Developer with a strong foundation in DSA and hands-on experience in Spring Boot, Microservices, and Full-Stack Development.",
    education: [
      {
        institution: "Don Bosco Institute of Technology, University of Mumbai",
        degree: "Bachelor of Engineering in Computer Science",
        duration: "Aug 2022 – May 2026 (Expected)",
        cgpa: "8.56 (up to 4th semester)",
      },
    ],
    skills: [
      "Java", "Python", "C++", "JavaScript", "Spring Boot", 
      "React.js", "MongoDB", "MySQL", "Docker", "Git",
    ],
    projects: [
      {
        project_title: "NEWS-Mail",
        description: "Automated news summarization system using Flask and Hugging Face Transformers.",
        technologies_used: ["Python", "Flask", "Hugging Face", "JavaScript"],
      },
    ],
    certifications: [
      "Google GenAI Study Jam 2024 — Completed Generative AI Fundamentals",
    ],
    achievements: [
      "Solved 220+ DSA problems across LeetCode, GFG, Codeforces, and CodeChef",
      "Built a Unity game for TEKNACK Game Development Competition (2024)",
    ],
  };

  const [formData, setFormData] = useState(initialData);
  
  return (
    <FormContext.Provider value={{ formData, setFormData }}>
      {children}
    </FormContext.Provider>
  );
};

export const useForm = () => {
  const context = useContext(FormContext);
  if (!context) {
    throw new Error('useForm must be used within a FormProvider');
  }
  return context;
};