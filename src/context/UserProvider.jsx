import { createContext, useState, useContext } from "react";
import AuthService from "../service/AuthService";
import Swal from "sweetalert2";
const userContext = createContext();
const registerContext = createContext();
const loginContext = createContext();
const getSessionActiveContext = createContext();

export const useUserContext = () => useContext(userContext);
export const useRegisterContext = () => useContext(registerContext);
export const useLoginContext = () => useContext(loginContext);
export const useGetSessionActiveContext = () => useContext(getSessionActiveContext);

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const registerUser = async (userR) => {
    const statusRegister = await AuthService.register(userR);
    console.log(statusRegister);

    if (userR && userR.hasOwnProperty("firstName")) {
      userR.password = "";
      console.log("userR",userR);
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
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Verifica tus credenciales',
        footer: '<a href="/signup">¿No tienes cuenta? Registrate</a>'
        
      })
    }
  };

  const getUserContext = async () => {
    if (localStorage.getItem("email") === null) return;
    const statusSessionActive = await AuthService.getSessionActive();
    //console.log("statusSessionActive",statusSessionActive);
    //console.log("active user",statusSessionActive.user);
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
