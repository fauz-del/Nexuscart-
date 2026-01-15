
// src/context/ThemeContext.tsx
import React, { createContext, useState, useEffect } from 'react';

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(() => {
    const savedMode = localStorage.getItem('dark-mode');

    return savedMode === 'true' || false;
  });

  // CRITICAL: Ensure the class is applied to the root <html> tag
  useEffect(() => {
    const root = window.document.documentElement;
    localStorage.setItem('dark-mode', darkMode.toString());
    
    if (darkMode) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(prev => !prev);
  };

  return (
    <ThemeContext.Provider value={{ darkMode, toggleDarkMode }}>
      {children}
    </ThemeContext.Provider>
  );
};
