// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "@firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAU8WDcvg1F8xfXsZN0dCL4m25syS0l3Z4",
  authDomain: "auth-test-2137.firebaseapp.com",
  projectId: "auth-test-2137",
  storageBucket: "auth-test-2137.appspot.com",
  messagingSenderId: "559451184838",
  appId: "1:559451184838:web:1f257e3754079fade041c7",
  measurementId: "G-1EZ4YLE8MQ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
const db = getFirestore();

export default app;
export { auth, db };
