import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";

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
export default getFirestore(app);
