// src/context/FormContext.js
import React, { createContext, useState, useContext } from "react";

// Create the context
const FormContext = createContext();

// Custom hook for easy usage
export const useFormData = () => useContext(FormContext);

// Provider component
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
    education: [],
    skills: [],
    projects: [],
    certifications: [],
    achievements: [],
  };

  const [formData, setFormData] = useState(initialData);

  const updateFormData = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const updateFullForm = (newData) => {
    setFormData((prev) => ({ ...prev, ...newData }));
  };

  return (
    <FormContext.Provider value={{ formData, updateFormData, updateFullForm }}>
      {children}
    </FormContext.Provider>
  );
};
