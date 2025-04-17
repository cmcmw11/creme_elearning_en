// /firebase/firebase.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyAumDfnarsn2DoM3s0uGNU2l8sfNpD58a0",
  authDomain: "creme-elearning-en.firebaseapp.com",
  projectId: "creme-elearning-en",
  storageBucket: "creme-elearning-en.firebasestorage.app",
  messagingSenderId: "545141834950",
  appId: "1:545141834950:web:4a6f0e532b9208d5c3c3c7",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
