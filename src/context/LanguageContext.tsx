import React, { createContext, useContext, useEffect, useState } from "react";

interface LanguageContextType {
  isEng: boolean;
  toggleLanguage: () => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isEng, setIsEng] = useState(() => {
    return localStorage.getItem("lan") !== "marathi"; // default to English
  });

  useEffect(() => {
    localStorage.setItem("lan", isEng ? "eng" : "marathi");
  }, [isEng]);

  const toggleLanguage = () => setIsEng((prev) => !prev);

  return (
    <LanguageContext.Provider value={{ isEng, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

// Custom hook for easy access
export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) throw new Error("useLanguage must be used within LanguageProvider");
  return context;
};
