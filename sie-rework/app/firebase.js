// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCXqrlf-K3bIe97k6ACHFSyV6I-Q14e9eM",
  authDomain: "next-auth-username-passw-2745e.firebaseapp.com",
  projectId: "next-auth-username-passw-2745e",
  storageBucket: "next-auth-username-passw-2745e.appspot.com",
  messagingSenderId: "245661532719",
  appId: "1:245661532719:web:6e16569364919dde4cbcda",
  measurementId: "G-E8M2NTF2FS",
};

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const auth = getAuth();

export { app, auth };
