// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "@firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyBBqwbE87w79-DXEES58Ye2SjZ_RVgRsbE",
  authDomain: "chatasd-1d6ef.firebaseapp.com",
  projectId: "chatasd-1d6ef",
  storageBucket: "chatasd-1d6ef.appspot.com",
  messagingSenderId: "447667006784",
  appId: "1:447667006784:web:45a71c142b2df12fcb9ea5",
  measurementId: "G-6SCDSHLT73"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();