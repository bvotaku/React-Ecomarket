import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDqFw6b4-83Z_N_ulvSbWxnfcud4u23T8U",
  authDomain: "eco-market-10b84.firebaseapp.com",
  projectId: "eco-market-10b84",
  storageBucket: "eco-market-10b84.firebasestorage.app",
  messagingSenderId: "595455211632",
  appId: "1:595455211632:web:4d86f5eb42da0f56281cb5"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);