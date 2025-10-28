import React, { createContext, useState, useEffect } from "react";

export const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [userName, setUserName] = useState(localStorage.getItem("userName") || "");

  useEffect(() => {
    if (userName) localStorage.setItem("userName", userName);
    else localStorage.removeItem("userName");
  }, [userName]);

  return (
    <AuthContext.Provider value={{ userName, setUserName }}>
      {children}
    </AuthContext.Provider>
  );
}
