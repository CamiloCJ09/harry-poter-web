import React, { createContext, useState, useContext } from "react";
import SignupService from "../service/signupService";

const userContext = createContext();
const registerContext = createContext();

export const useUserContext = () => useContext(userContext);
export const userRegisterContext = () => useContext(registerContext);

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const registerContext = () => {
    SignupService.register(user);
    setUser(user);
  };
  return (
    <userContext.Provider value={{ user }}>
      <userRegisterContext.Provider
        value={{ registerContext }}
      ></userRegisterContext.Provider>
      {children}
    </userContext.Provider>
  );
};
