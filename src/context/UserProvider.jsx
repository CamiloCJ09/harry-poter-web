import React, { createContext, useState, useContext } from "react";
import AuthService from "../service/AuthService";

const userContext = createContext();
const registerContext = createContext();
const loginContext = createContext();
const getSessionActiveContext = createContext();

export const useUserContext = () => useContext(userContext);
export const useRegisterContext = () => useContext(registerContext);
export const useLoginContext = () => useContext(loginContext);
export const useGetSessionActiveContext = () =>
  useContext(getSessionActiveContext);

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const registerUser = async (userR) => {
    const statusRegister = await AuthService.register(userR);
    console.log(statusRegister);

    if (userR && userR.hasOwnProperty("firstName")) {
      userR.password = "";
      console.log(userR);
      setUser(userR);
    } else {
      console.error("userR is not valid");
    }
  };

  const loginUser = async (email, password) => {
    const statusLogin = await AuthService.login(email, password);
    console.log(statusLogin.user);

    if (
      statusLogin.success &&
      statusLogin.user &&
      statusLogin.user.hasOwnProperty("firstName")
    ) {
      setUser(statusLogin.user);
    } else {
      console.error("Login failed");
    }
  };

  const getUserContext = async () => {
    if (localStorage.getItem("email") === null) return;
    const statusSessionActive = await AuthService.getSessionActive();
    setUser(statusSessionActive.user);
    return statusSessionActive.user;
  };

  return (
    <userContext.Provider value={user}>
      <registerContext.Provider value={registerUser}>
        <loginContext.Provider value={loginUser}>
          <getSessionActiveContext.Provider value={getUserContext}>
            {children}
          </getSessionActiveContext.Provider>
        </loginContext.Provider>
      </registerContext.Provider>
    </userContext.Provider>
  );
};
