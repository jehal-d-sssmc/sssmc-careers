// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCX4GaYgLNPzUZskC0_LXUpOELNTyW_DPA",
  authDomain: "sssmediacentre.firebaseapp.com",
  projectId: "sssmediacentre",
  storageBucket: "sssmediacentre.appspot.com",
  messagingSenderId: "161251626874",
  appId: "1:161251626874:web:86544b5c40f1096d6b10c3",
  measurementId: "G-L5C0D37J10"
};

// Initialize Firebase
const firebase = initializeApp(firebaseConfig);

export default firebase;