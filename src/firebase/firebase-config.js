import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAkPEmG8Ld6aOxbkfJsc32dRwW8mIdsDB4",
  authDomain: "food-marketplace-89e2f.firebaseapp.com",
  databaseURL:
    "https://food-marketplace-89e2f-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "food-marketplace-89e2f",
  storageBucket: "food-marketplace-89e2f.appspot.com",
  messagingSenderId: "668966550726",
  appId: "1:668966550726:web:55e3fa38484e55e78eabc7",
};

// Initialize Firebase
const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
