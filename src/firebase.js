// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, updateProfile } from "firebase/auth";
import { getStorage, ref, getDownloadURL, uploadBytes } from "firebase/storage"

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
export const app = initializeApp(firebaseConfig);
export const database = getFirestore(app);
export const auth = getAuth(app); // Connect to user-authentication
export const storage = getStorage(app);



//Storage
export async function upload(file, currentUser, setLoading){
    const fileRef = ref(storage, currentUser.uid);
    setLoading(true);
    const snapshot = await uploadBytes(fileRef, file);

    const photoURL = await getDownloadURL(fileRef);
    updateProfile(currentUser, {photoURL});
    

    setLoading(false);
    alert("Uploaded file!");
//followed https://www.youtube.com/watch?v=9uYTQJEMj8I
}

