// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDypdlUAFB4U48fzSLK1PN_4Vru9SDDwiw",
    authDomain: "bruinspots.firebaseapp.com",
    databaseURL: "https://bruinspots-default-rtdb.firebaseio.com",
    projectId: "bruinspots",
    storageBucket: "bruinspots.appspot.com",
    messagingSenderId: "874730587820",
    appId: "1:874730587820:web:d889b2d6e97c765176c109",
    measurementId: "G-712ST7JDYW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const database = getFirestore(app);
