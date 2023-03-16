import Navbar from './Navbar';
import React from 'react';
import { useEffect, useState } from "react";
import { getAuth, onAuthStateChanged } from 'firebase/auth'
import { collection, getDocs } from 'firebase/firestore'
import { database, auth} from '../firebase'
import { doc, getDoc } from "firebase/firestore";



// async function getData() {
//     const auth = await getAuth();
//     const currentUser = auth.currentUser;
//     const userCollection = collection(database, "users");
//     const userDoc = await getDocs(userCollection);
//     const userID = currentUser.uid;
//     const userData = userDoc.userID;
//     return userData.data();
// }


 const getData = async() => {
    const auth = await getAuth();
    const currentUser = auth.currentUser;
    try {
        const docRef = doc(database, "users", currentUser.uid);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
        return docSnap.data();
        } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
        }
    }
    catch (err) {
        console.error(err);
        alert(err.message);
    }
}

const Profile = () => {
    const [name, setName] = useState(null);
    
    useEffect(() => {
        const unsub = auth.onAuthStateChanged(async (authObj) => {
          unsub();
          if (authObj) {
            const userData = await getData();
            const name = userData.name;
            console.log(name);
            // logged in, use authObj
          } else {
            // not logged in
          }
        });
      }, []);
    
    // const auth = getAuth();
    // const currentUser = auth.currentUser;
    // const [userData, setUserData] = useState(null);
    // useEffect(() => {
    //     if (currentUser){
    //     async function fetchData() {
    //         const userdocument = await getData();
    //         setUserData(userdocument);
    //     }
    //     fetchData();
    //     console.log(userData);
    // }
    // }, []);

}

export default Profile;