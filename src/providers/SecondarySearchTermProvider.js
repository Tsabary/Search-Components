import React, { useState } from "react";

export const SecondarySearchTermContext = React.createContext();

export const SecondarySearchTermProvider = ({ children }) => {
  const [currentSearchTerm, setCurrentSearchTerm] = useState('');
  const [tempSearchTerm, setTempSearchTerm] = useState('');

  return (
    <SecondarySearchTermContext.Provider
      value={{
        currentSearchTerm,
        setCurrentSearchTerm,
        tempSearchTerm,
        setTempSearchTerm
      }}
    >
      {children}
    </SecondarySearchTermContext.Provider>
  );
};
