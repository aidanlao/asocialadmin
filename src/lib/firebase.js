// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAbbr-3V_VCVMX-XLzmrfoUmvjEqbNuhTI",
  authDomain: "asocial-ambrose.firebaseapp.com",
  databaseURL: "https://asocial-ambrose-default-rtdb.firebaseio.com",
  projectId: "asocial-ambrose",
  storageBucket: "asocial-ambrose.appspot.com",
  messagingSenderId: "336821421733",
  appId: "1:336821421733:web:0c30614369b3d9648aaf4c"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);