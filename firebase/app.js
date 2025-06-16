
import { initializeApp } from "firebase/app";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBghqNNvivco-pcyMdQj_r9xfcEITGbR2E",
  authDomain: "utv-edit-list.firebaseapp.com",
  databaseURL: "https://utv-edit-list-default-rtdb.firebaseio.com",
  projectId: "utv-edit-list",
  storageBucket: "utv-edit-list.firebasestorage.app",
  messagingSenderId: "228703130523",
  appId: "1:228703130523:web:54701fd15afcdec5a3c73e"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);