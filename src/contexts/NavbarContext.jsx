import React, { createContext, useContext, useState } from 'react';

// Create the context
const NavbarContext = createContext();

// Create a custom hook to use the context
export const useNavbar = () => {
  const context = useContext(NavbarContext);
  if (!context) {
    throw new Error('useNavbar must be used within a NavbarProvider');
  }
  return context;
};

// Create the provider component
export const NavbarProvider = ({ children }) => {
  const [hideNavbar, setHideNavbar] = useState(false);

  const toggleNavbar = () => {
    setHideNavbar(prev => !prev);
  };

  const showNavbar = () => {
    setHideNavbar(false);
  };

  const hideNavbarComponent = () => {
    setHideNavbar(true);
  };

  const value = {
    hideNavbar,
    setHideNavbar,
    toggleNavbar,
    showNavbar,
    hideNavbarComponent
  };

  return (
    <NavbarContext.Provider value={value}>
      {children}
    </NavbarContext.Provider>
  );
};
