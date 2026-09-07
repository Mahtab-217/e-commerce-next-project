// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB8zMLcexHaYQ6KqxHY5-sBAGCS1l4lfdA",
  authDomain: "e-commerce-project-75511.firebaseapp.com",
  projectId: "e-commerce-project-75511",
  storageBucket: "e-commerce-project-75511.firebasestorage.app",
  messagingSenderId: "751904858160",
  appId: "1:751904858160:web:7eeff4996990d048fa8df5",
  measurementId: "G-3FJ6RF8CX1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);