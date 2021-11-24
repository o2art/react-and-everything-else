// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyD_YIAL1m7z0RYqNg8Rqz4OOVfHHXAx0ew",
//   authDomain: "socialcommunicator-2137.firebaseapp.com",
//   projectId: "socialcommunicator-2137",
//   storageBucket: "socialcommunicator-2137.appspot.com",
//   messagingSenderId: "798131056490",
//   appId: "1:798131056490:web:4fdb50b14494313f003f13",
//   measurementId: "G-6H6EBE4W3S"
// };

const firebaseConfig = {
  apiKey: "AIzaSyCWb9wwV9oUVhmX_qH8w4_WKZOmPdOitOI",
  authDomain: "color-palette-2136742069.firebaseapp.com",
  projectId: "color-palette-2136742069",
  storageBucket: "color-palette-2136742069.appspot.com",
  messagingSenderId: "768786539228",
  appId: "1:768786539228:web:bdb19442cd4467aca70a19"
};

// Initialize Firebase
initializeApp(firebaseConfig);
export default getFirestore();