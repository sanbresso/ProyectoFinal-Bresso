import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAICdDEPVPap7HOHlNyTVPGF8sXHZXouKE",
  authDomain: "proyecto-react-5df27.firebaseapp.com",
  projectId: "proyecto-react-5df27",
  storageBucket: "proyecto-react-5df27.firebasestorage.app",
  messagingSenderId: "1065708036337",
  appId: "1:1065708036337:web:dbf6f62acc13a8d7c20950"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;
