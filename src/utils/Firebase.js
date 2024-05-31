// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDaq9ds1b7xDmOOOB-PakUR51Dd7wOAb0Y",
  authDomain: "netflix-gpt-e71bd.firebaseapp.com",
  projectId: "netflix-gpt-e71bd",
  storageBucket: "netflix-gpt-e71bd.appspot.com",
  messagingSenderId: "587463951358",
  appId: "1:587463951358:web:0319dbd072f83d342ff6af",
  measurementId: "G-501VMS22H7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();