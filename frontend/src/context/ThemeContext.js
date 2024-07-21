import React, { createContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light');
  const [headerColor, setHeaderColor] = useState('#007bff');
  const [sidebarColor, setSidebarColor] = useState('#343a40');

  useEffect(() => {
    document.body.setAttribute('data-theme', theme);
  }, [theme]);

  useEffect(() => {
    document.documentElement.style.setProperty('--header-background-color', headerColor);
    document.documentElement.style.setProperty('--sidebar-background-color', sidebarColor);
  }, [headerColor, sidebarColor]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeContext.Provider value={{ theme, headerColor, sidebarColor, toggleTheme, setHeaderColor, setSidebarColor }}>
      {children}
    </ThemeContext.Provider>
  );
};

export { ThemeProvider, ThemeContext };
