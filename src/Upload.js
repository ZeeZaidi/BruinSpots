import React from "react";
import { database } from "./firebase";
import {addDoc , getDoc, updateDoc , doc , collection, arrayUnion } from "firebase/firestore";
import { auth } from "./firebase.js";
import { getAuth } from "firebase/auth";

export const uploadComment = async (message, stars, userID, locID) => {
    try {
        const newComment = await addDoc(collection(database, "locations/"+locID+"/comments"), {
            comment: message,
            time: "time",
            locationID: locID,
            userID: userID,
            rating: stars
        });
        await updateDoc(doc(database, "users", userID), {
            comments: arrayUnion(newComment.id)
        })
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

