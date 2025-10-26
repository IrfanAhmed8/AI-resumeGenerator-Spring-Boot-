// context/FormContext.jsx
import React, { createContext, useContext, useState } from 'react';

const FormContext = createContext();

export const FormProvider = ({ children }) => {
    const initialData = {
    name: "",
    position: "",
    email: "",
    phone: "",
    linkedin: "",
    github: "",
    portfolio: "",
    summary: "",
    education: [
      {
        institution: "",
        degree: "",
        duration: "",
        cgpa: "",
      },
    ],
    skills: [],
    projects: [
      {
        project_title: "",
        description: "",
        technologies_used: [],
      },
    ],
    certifications: [],
    achievements: [],
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