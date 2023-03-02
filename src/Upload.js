import React from "react";
import { database } from "./firebase";
import {addDoc, collection } from "firebase/firestore";

const uploadComment = async (message, userID, locID) => {
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

export default uploadComment;