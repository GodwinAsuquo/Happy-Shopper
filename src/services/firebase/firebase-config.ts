import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
import { getStorage } from "@firebase/storage";
import { getAuth } from "firebase/auth";

// const firebaseConfig = {
//   apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
//   authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
//   projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
//   storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
//   messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
//   appId: import.meta.env.VITE_FIREBASE_APP_ID,
//   measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID,
// };

const firebaseConfig = {
  apiKey: "AIzaSyBHcl-Ue0BUQPgNX6AuNnnAK86b6ZtdC98",
  authDomain: "happy-shopper-d60a2.firebaseapp.com",
  projectId: "happy-shopper-d60a2",
  storageBucket: "happy-shopper-d60a2.appspot.com",
  messagingSenderId: "972456477232",
  appId: "1:972456477232:web:8e9f775055c63b0f7ba3f5",
  measurementId: "G-KBSGJHRH5P",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth();
app;
export const storage = getStorage()
