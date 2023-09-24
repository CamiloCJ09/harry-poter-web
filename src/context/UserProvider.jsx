import React, { createContext, useState, useContext } from "react";
import SignupService from "../service/signupService";

const userContext = createContext();
const registerContext = createContext();

export const useUserContext = () => useContext(userContext);
export const useRegisterContext = () => useContext(registerContext);

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const registerUser = async (user) => {
    SignupService.register(user);
    setUser(user);
  };

  return (
    <userContext.Provider value={user}>
      <registerContext.Provider value={registerUser}>
        {children}
      </registerContext.Provider>
    </userContext.Provider>
  );
};
