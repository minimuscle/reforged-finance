import { getApp, getApps, initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBmuuvw8o2JvQBosow2w_HNHc9HYrtU8gQ",
  authDomain: "personalfinance-ba0ef.firebaseapp.com",
  projectId: "personalfinance-ba0ef",
  storageBucket: "personalfinance-ba0ef.appspot.com",
  messagingSenderId: "1078147172793",
  appId: "1:1078147172793:web:49cbec573a7190355ace68",
  measurementId: "G-47JCDF7N5Z"
}

if (!getApps().length) {
    initializeApp(firebaseConfig)
}

export const auth = getAuth(getApp())


export async function signUp(email: string, password: string) {
  return createUserWithEmailAndPassword(auth, email, password)
}