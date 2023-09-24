import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.VITE_REACT_API_KEY,
  authDomain: process.env.VITE_REACT_AUTH_DOMAIN,
  projectId: process.env.VITE_REACT_PROJECT_ID,
  storageBucket: process.env.VITE_REACT_STORAGE_BUCKET,
  messagingSenderId: process.env.VITE_REACT_MESSAGING_SENDER_ID,
  appId: process.env.VITE_REACT_APP_ID,
  measurementId: process.env.VITE_REACT_MEASUREMENT_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default getFirestore(app);
