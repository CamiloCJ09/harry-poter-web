import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCoT5nfKbgA4QBk31VkUhd10jrbcvcDp-Q",
  authDomain: "harry-poter-web.firebaseapp.com",
  projectId: "harry-poter-web",
  storageBucket: "harry-poter-web.appspot.com",
  messagingSenderId: "209536513845",
  appId: "1:209536513845:web:cb9635c4330c897be27e7c",
  measurementId: "G-J060HXZYRM",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);
const db = getFirestore(app);

const fb = {
  storage,
  db,
};

export default fb;

// apiKey: import.meta.env.VITE_REACT_API_KEY,
// authDomain: import.meta.env.VITE_REACT_AUTH_DOMAIN,
// projectId: import.meta.env.VITE_REACT_PROJECT_ID,
// storageBucket: import.meta.env.VITE_REACT_STORAGE_BUCKET,
// messagingSenderId: import.meta.env.VITE_REACT_MESSAGING_SENDER_ID,
// appId: import.meta.env.VITE_REACT_APP_ID,
// measurementId: import.meta.env.VITE_REACT_APP_MEASUREMENT_ID,
// storageBucket: "harry-poter-web.appspot.com",
