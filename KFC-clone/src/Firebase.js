// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAQ7DpOjluRkbMOhzGuqCiqYcNLOi3nBec",
  authDomain: "axiomatic-trouble-8860-38bfe.firebaseapp.com",
  projectId: "axiomatic-trouble-8860-38bfe",
  storageBucket: "axiomatic-trouble-8860-38bfe.appspot.com",
  messagingSenderId: "410106915814",
  appId: "1:410106915814:web:3ed67340ff22ca67a94427",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

export default app;
