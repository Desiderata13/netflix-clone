
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"; 

const firebaseConfig = {
  apiKey: "AIzaSyDIMNO4ZsNSyAG9IYIuVrQrT5k5yHpJY9A",
  authDomain: "project-netflix-5f2bf.firebaseapp.com",
  projectId: "project-netflix-5f2bf",
  storageBucket: "project-netflix-5f2bf.appspot.com",
  messagingSenderId: "885003976909",
  appId: "1:885003976909:web:83f11393d813efaf382984",
  measurementId: "G-JJFWK3R9JE"
};

const app = initializeApp(firebaseConfig);

export const firebaseAuth = getAuth(app);