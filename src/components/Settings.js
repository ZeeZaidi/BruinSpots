import React from 'react';
import Navbar from './Navbar';
import { BrowserRouter as Router, Routes as Switch, Route } from 'react-router-dom';
import "./Settings.css"
import { useEffect, useState } from "react";
import { upload } from "../firebase.js";  
import { getAuth, onAuthStateChanged } from "firebase/auth";
import defaultProfilePic from "./teddy_bear_studying.png"
import ReviewList from './ReviewList'
import { fontSize } from '@mui/system';
import { uploadEditEmail, uploadEditName } from '../Upload';

const InputBox = () => {
    const [inputName, setInputName] = useState('');
    const [inputEmail, setInputEmail] = useState('');

    const onNameClick = () => {
        uploadEditName(inputName);
        alert('Submitted!')
    }

    const nameChange = e => {
        setInputName(e.target.value);
    }

    const onEmailClick = () => {
        uploadEditEmail(inputEmail);
    }

    const emailChange = e => {
        setInputEmail(e.target.value);
    }
    return (
        <>
        <div>
        <h1 style={{fontSize:"40px", margin:"5px 115px"}}>Update Username</h1>
            <input style={{margin:"5px 115px", borderBottom:"10px solid gray"}}
            onChange={nameChange}
            type="text" 
            value={inputName} 
            />
            <button onClick={onNameClick}>Submit</button>
        </div>
        <div>
        <h1 style={{fontSize:"40px", margin:"5px 115px"}}>Update Email</h1>
            <input style={{margin:"5px 115px", borderBottom:"10px solid gray"}}
            onChange={emailChange}
            type="text"
            value={inputEmail}
            />
            <button onClick={onEmailClick}>Submit</button>
        </div>
        </>
    );
}

export default function Settings() {
    const auth = getAuth();
    const currentUser = auth.currentUser;
    const [photo, setPhoto] = useState(null); //null or false?
    const [loading, setLoading] = useState(false);
    const [photoURL, setPhotoURL] = useState("https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png");

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

    
    return (
        <>  
        <Router>
        <Navbar />
            <Switch>
            <Route path='/' exact />
            </Switch>
        </Router>

        
            <div>
                {/* update profile photo section */}
                <h1 style={{fontSize:"70px", margin:"10px 115px", borderBottom:"10px solid gray"}}>Settings</h1>
                <h1 style={{fontSize:"40px", margin:"5px 115px"}}>Update Profile Photo</h1>
                <div className="fields">
                    <div style={{borderBottom:"10px solid gray", margin:"10px 0px"}}>
                            <input type="file" onChange={handleChange} style={{fontSize:"30px"}} />
                            <button disabled={loading || !photo} onClick={handleClick} style={{fontSize:"30px"}}>Upload</button>
                            <img src={photoURL} alt="Avatar" className="avatar"/>
                    </div>
                </div>

                <div>
                    {/* update username section */}
                    
                </div>

                <InputBox></InputBox>

            </div>
        </>
    );
}




// //followed https://www.youtube.com/watch?v=9uYTQJEMj8I

//createReviews();