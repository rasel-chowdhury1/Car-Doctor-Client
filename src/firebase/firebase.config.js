// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAiqyJSngv546G9kcPsQlbB866OMUTcsv8",
  authDomain: "cars-doctors-3b3d8.firebaseapp.com",
  projectId: "cars-doctors-3b3d8",
  storageBucket: "cars-doctors-3b3d8.appspot.com",
  messagingSenderId: "572458497563",
  appId: "1:572458497563:web:665ee07a9437f573646abe"
};

console.log(process.env.VITE_authDomain)
console.log(process.env.VITE_projectId)
console.log(process.env.VITE_storageBucket)
console.log(process.env.VITE_messagingSenderId)
console.log(process.env.VITE_apiKey)
console.log(process.env.VITE_appId)

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;