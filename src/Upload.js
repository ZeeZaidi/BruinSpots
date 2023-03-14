import React from "react";
import { database } from "./firebase";
import {addDoc , getDoc, updateDoc , arrayUnion, doc , collection } from "firebase/firestore";
import { auth } from "./firebase.js";
import { getAuth } from "firebase/auth";

export const uploadComment = async (message, time, stars, userID, locID) => {
    try {
        await addDoc(collection(database, "locations/"+locID+"/comments"), {
            comment: message,
            time: time,
            locationID: locID,
            userID: userID,
            rating: stars
        });
        await addDoc(collection(database, "users/"+userID+"/comments"), {
            comment: message,
            time: time,
            locationID: locID,
            userID: userID,
            rating: stars
        });
    }
    catch(err) {
        alert(err.message);
    }
}

export const uploadEditProfile = async (name , bio , profilePic) => {
    try {
        const user = auth.currentUser;
        await updateDoc(doc(database, "users", user.uid), {
            name: name,
            bio: bio,
            profilePic: profilePic
        });
    }
    catch (err) {
        console.error(err);
        alert(err.message);
    }
}

export const getData = async(collection, id, attribute) => {
    try {
        const docRef = doc(database, collection, id);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
        console.log("Document data:", docSnap.data());
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