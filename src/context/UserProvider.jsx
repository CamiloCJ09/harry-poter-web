import React, { createContext, useState, useContext } from "react";
const userContext = createContext();

export const useUserContext = () => useContext(userContext);

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  return (
    <userContext.Provider value={{ user }}>{children}</userContext.Provider>
  );
};
