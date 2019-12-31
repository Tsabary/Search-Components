import React, { useState } from "react";

export const  PrimarySearchTermContext = React.createContext();

export const  PrimarySearchTermProvider = ({ children }) => {
  const [currentSearchTerm, setCurrentSearchTerm] = useState('');
  const [tempSearchTerm, setTempSearchTerm] = useState('');

  return (
    < PrimarySearchTermContext.Provider
      value={{
        currentSearchTerm,
        setCurrentSearchTerm,
        tempSearchTerm,
        setTempSearchTerm
      }}
    >
      {children}
    </ PrimarySearchTermContext.Provider>
  );
};
