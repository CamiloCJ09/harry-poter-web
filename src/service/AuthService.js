import { addDoc, collection, getDocs, query, where } from "@firebase/firestore";
import firebase from "../firebase/firebase";
import { v4 as uuidv4 } from "uuid";
import bcrypt from "bcryptjs-react";
import CryptoJS from "crypto-js";

const SALT_ROUNDS = 10;

const hashedPassword = async (password) => {
  return await bcrypt.hash(password, SALT_ROUNDS);
};

const generateToken = (userId, email) => {
  const secretKey = "HARRYPOTTER";
  const encryptedData = CryptoJS.AES.encrypt(userId, secretKey).toString();
  localStorage.setItem("token", encryptedData);
  localStorage.setItem("email", email);
  localStorage.setItem("userId", userId);
};

const register = async (dataUser) => {
  const ref = collection(firebase.db, "users");
  try {
    const hashedPwd = await hashedPassword(dataUser.password);
    const id = uuidv4();
    dataUser.id = id;
    dataUser.password = hashedPwd;
    await addDoc(ref, dataUser);
    generateToken(dataUser.id, dataUser.email);
    return {
      success: true,
      message: "User created successfully",
    };
  } catch (error) {
    return {
      success: false,
      message: error.message,
    };
  }
};

const login = async (email, password) => {
  let user = {};
  const ref = collection(firebase.db, "users");
  const userQuery = query(ref, where("email", "==", email));
  const querySnapshot = await getDocs(userQuery);

  if (querySnapshot.empty) {
    return {
      success: false,
      message: "User not found",
    };
  }

  let pwdValid = true;

  querySnapshot.forEach((doc) => {
    user = doc.data();
    const isPasswordValid = bcrypt.compareSync(password, user.password);
    if (!isPasswordValid) {
      pwdValid = false;
    }
  });
  if (!pwdValid) {
    return {
      success: false,
      message: "Password is incorrect",
    };
  }
  generateToken(user.id, user.email);
  return {
    user: user,
    success: true,
    message: "Login success",
  };
};

const getSessionActive = async () => {
  if (localStorage.getItem("email")) {
    let user = {};
    const email = localStorage.getItem("email");
    const ref = collection(firebase.db, "users");
    const userQuery = query(ref, where("email", "==", email));
    const querySnapshot = await getDocs(userQuery);

    querySnapshot.forEach((doc) => {
      user = doc.data();
    });
    return {
      user: user,
      success: true,
      message: "Login success",
    };
  }
};

const decodeToken = () => {
  const id = localStorage.getItem("userId");
  const secretKey = "HARRYPOTTER";
  const decryptedData = CryptoJS.AES.decrypt(
    encryptedToken,
    secretKey
  ).toString(CryptoJS.enc.Utf8);
  if (decryptedData === id) {
    return true;
  } else {
    return false;
  }
};

const AuthService = {
  register,
  login,
  getSessionActive,
  decodeToken,
};

export default AuthService;
