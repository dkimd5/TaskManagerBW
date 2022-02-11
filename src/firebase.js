import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBGh55hjOX5B12FZfffX2Eq1d3D0dORQ5w",
  authDomain: "taskmanagerbw-15717.firebaseapp.com",
  projectId: "taskmanagerbw-15717",
  storageBucket: "taskmanagerbw-15717.appspot.com",
  messagingSenderId: "433569137127",
  appId: "1:433569137127:web:38b827454ff2e10f393d42",
  measurementId: "G-9K9XPSCXEV",
};

initializeApp(firebaseConfig);
const db = getFirestore();

export { db };
