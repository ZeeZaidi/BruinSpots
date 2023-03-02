import React from "react";
import { database } from "./firebase";
import {addDoc , updateDoc , doc , collection } from "firebase/firestore";
import { auth } from "./firebase.js";
import { getAuth } from "firebase/auth";

export const uploadComment = async (message, userID, locID) => {
    try {
        await addDoc(collection(database, "locations/"+locID+"/comments"), {
            comment: message,
            time: "time",
            locationID: locID,
            userID: userID
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

