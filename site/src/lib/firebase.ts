// src/lib/firebase.ts
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore, collection, addDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA4uZSHEqPzoribDTpSmFh55HrVyEXrNOs",
  authDomain: "weddingcard-12534.firebaseapp.com",
  projectId: "weddingcard-12534",
  storageBucket: "weddingcard-12534.firebasestorage.app",
  messagingSenderId: "769329346488",
  appId: "1:769329346488:web:238252c2f8b0da7be0414d",
  measurementId: "G-K74M9PPEG5",
};

const app = initializeApp(firebaseConfig);
export const analytics = typeof window !== "undefined" ? getAnalytics(app) : null;
export const db = getFirestore(app);

// Helper functions
export const addGuest = async (data: any) => {
  const col = collection(db, "guests");
  const timeout = new Promise((_, reject) => setTimeout(() => reject(new Error("Timeout connecting to database")), 5000));
  return await Promise.race([addDoc(col, data), timeout]);
};

export const addWish = async (data: any) => {
  const col = collection(db, "wishes");
  const timeout = new Promise((_, reject) => setTimeout(() => reject(new Error("Timeout connecting to database")), 5000));
  return await Promise.race([addDoc(col, data), timeout]);
};
