import React from 'react';
import Navbar from './Navbar';
import { BrowserRouter as Router, Routes as Switch, Route } from 'react-router-dom';
import "./Settings.css"
import { useEffect, useState } from "react";
import { upload } from "../firebase.js";  
import { getAuth, onAuthStateChanged } from "firebase/auth";
import defaultProfilePic from "./teddy_bear_studying.png"
import ReviewList from './ReviewList'


import { database } from "../firebase";
import {doc , getDoc , updateDoc} from "firebase/firestore";
import { auth } from "../firebase.js";

export const createReviews = async () => {
    try {
        const user = auth.currentUser;
        if (user){
            const docRef = doc(database, "users" , user.uid);
            const userDoc = await getDoc(docRef)
            if (userDoc.exists()) {
                console.log("DOcumENt DATA: " , userDoc.data());
                
            }
        }
    }
    catch(err) {
        alert(err.message);
    }
}


export default function Settings() {
    //const auth = getAuth();
    const currentUser = auth.currentUser;
    const [photo, setPhoto] = useState(null);
    const [loading, setLoading] = useState(false);
    const [photoURL, setPhotoURL] = useState({defaultProfilePic});

        function handleChange(e) {
            if (e.target.files[0]){
                setPhoto(e.target.files[0])
            }
        }

        function handleClick() {
            upload(photo, currentUser, setLoading);
        }

    useEffect(() => {
        if (currentUser?.photoURL){
            setPhotoURL(currentUser.photoURL);
        }
    }, [currentUser])
    //get user profile info for display
    //    const auth = getAuth();
    //    const user = auth.currentUser;
    //    if (user !==null) {
    //     var username = currentUser.name;
    //     var emailaddress = currentUser.email;
    //    }
    
    return (
        <>  
        <Router>
        <Navbar />
            <Switch>
            <Route path='/' exact />
            </Switch>
        </Router>
            <div>
                <div className="fields">
                    <input type="file" onChange={handleChange} />
                    <button disabled={loading || !photo} onClick={handleClick}>Upload</button>
                    <img src={photoURL} alt="Avatar" className="avatar"/>
                </div>
                <div>
                    <h1>Username:</h1>
                </div>
                <div>
                    <h1>Reviews:</h1>
                    
                </div>
            </div>
        </>
    );
}




// //followed https://www.youtube.com/watch?v=9uYTQJEMj8I

//createReviews();