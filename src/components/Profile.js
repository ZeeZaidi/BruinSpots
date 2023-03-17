import Navbar from './Navbar';
import React from 'react';
import { useEffect, useState } from "react";
import { getAuth, onAuthStateChanged } from 'firebase/auth'
import { collection, getDocs } from 'firebase/firestore'
import { database, auth} from '../firebase'
import { doc, getDoc } from "firebase/firestore";
import { BrowserRouter as Router, Routes as Switch, Route, useSearchParams } from 'react-router-dom';
import ReviewList from "./ReviewList"
import logo from './logo.png';
import { getStorage, ref, getDownloadURL } from "firebase/storage";
import { app } from '../firebase';
import { useAuthState } from 'react-firebase-hooks/auth';


 const getData = async(userID) => {
    try {
        const docRef = doc(database, "users", userID);
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
    const [username, setUsername] = useState(null);
    const [reviewsData, setReviewsData] = useState([]);
    const [userPhoto, setUserPhoto] = useState(null);
    const [searchParams, setSearchParams] = useSearchParams();
    const [user] = useAuthState(auth);
    const [isLoggedIn, setIsLoggedIn] = useState(false);

//====================GET UID FROM URL==============================
    const userID = searchParams.get("userID");


//====================SET PHOTOURL==============================
    
        useEffect(() => {  
            function GetPhoto (id) {
                        
                const storage = getStorage();
            
                getDownloadURL(ref(storage, id))
                .then((url) => {
                    setUserPhoto(url);

                })
                .catch(() => {
                    setUserPhoto("https://firebasestorage.googleapis.com/v0/b/bruinspots.appspot.com/o/logo.png?alt=media&token=7fa882a1-8fb9-445b-af3f-4b055473ecfc");
                });
            
            }
            GetPhoto(userID);

            }, []);



        if ({userID}?.photoURL){
            setUserPhoto(getData({userID}).photoURL);
        }


//=============================================================


//====================SET REVIEWS==============================

    useEffect(() => {
        async function updateReviewsData() {
          // Get a reference to the database
          
                const commentsCollection = collection(database, 'users/'+ userID + '/comments');
                const commentsDoc = await getDocs(commentsCollection)
                const commentsData = commentsDoc.docs.map((d) => {
                    const doc = d.data();
                    return {
                      avatar: logo,
                      userName: doc.name,
                      starRating: doc.rating,
                      reviewBody: doc.comment,
                      date: doc.time
                    }
                  }
                )
                console.log(commentsData)
    
          setReviewsData(commentsData)
         
        }
    
        updateReviewsData();
      }, [])


//============================================================

//========================SET NAME============================

    useEffect(() => {
      async function getName() {
            const userData = await getData(userID);
            console.log(userData);
            const name = userData.name;
            setUsername(name);
            console.log(username);
      }
      console.log(getName());
      }, []);

//========================SET USERAUTH============================
        useEffect(() => {
            const unsub = auth.onAuthStateChanged(async (authObj) => {
            unsub();
            if (authObj) {
                // is logged in
                setIsLoggedIn(true);
            } else {
                // not logged in
            }
            });
        }, []);

    
//============================================================
      
      return (
        <>
        <div>
            <div>
                <div style={{float:'left', margin:"10px 30px"}}>
                    <img style={{width:"160px", height:"160px", borderRadius:"80px"}} 
                    src={userPhoto}/>
                </div>

                <div style={{float:'left', margin: "20px 10px"}}>
                <div style={{margin:"5px 5px 30px 5px"}}>
                <h1 style={{fontSize:"70px"}}>{username}</h1>
                {isLoggedIn && user.uid==userID && <button style={{fontSize:"20px"}} onClick={() => window.location.href="/Settings"}>Settings</button>}
                </div>
                <h1> Reviews: </h1>
                <ReviewList reviews={reviewsData} />
                </div>
                
            </div>

        </div>
        </>
      );
}

export default Profile;