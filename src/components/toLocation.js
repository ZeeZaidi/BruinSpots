import React from 'react';
import './toLocation.css';
import {Link} from 'react-router-dom';
import Rating from '@mui/material/Rating';
import {database} from '../firebase';
import { collection, getDocs } from "firebase/firestore";
import { useState, useEffect } from 'react';

/* ============== Calculate Powell rating =============== */
async function getPowellStars() {
    // Get a reference to the database
    const commentsCollection = collection(database, 'locations/powell/comments');
    const commentsDoc = await getDocs(commentsCollection);
    const commentsData = commentsDoc.docs.map((d) => {
      const doc = d.data();
      return {
        starRating: doc.rating,
      };
    });
  
    // Extract starRatings array from commentsData
    const starRatings = commentsData.map((comment) => comment.starRating);
    const sum = starRatings.reduce((total, num) => total + num, 0);
    const average = sum/starRatings.length;
    return average;
   }
  /* =============================================== */

  /* ============== Calculate YRL rating =============== */
async function getYRLStars() {
    // Get a reference to the database
    const commentsCollection = collection(database, 'locations/yrl/comments');
    const commentsDoc = await getDocs(commentsCollection);
    const commentsData = commentsDoc.docs.map((d) => {
      const doc = d.data();
      return {
        starRating: doc.rating,
      };
    });
  
    // Extract starRatings array from commentsData
    const starRatings = commentsData.map((comment) => comment.starRating);
    const sum = starRatings.reduce((total, num) => total + num, 0);
    const average = sum/starRatings.length;
    return average;
   }
  /* =============================================== */

    /* ============== Calculate Boelter rating =============== */
async function getBoelterStars() {
    // Get a reference to the database
    const commentsCollection = collection(database, 'locations/boelter/comments');
    const commentsDoc = await getDocs(commentsCollection);
    const commentsData = commentsDoc.docs.map((d) => {
      const doc = d.data();
      return {
        starRating: doc.rating,
      };
    });
  
    // Extract starRatings array from commentsData
    const starRatings = commentsData.map((comment) => comment.starRating);
    const sum = starRatings.reduce((total, num) => total + num, 0);
    const average = sum/starRatings.length;
    return average;
   }
  /* =============================================== */

    /* ============== Calculate TheStudy rating =============== */
async function getStudyStars() {
    // Get a reference to the database
    const commentsCollection = collection(database, 'locations/thestudy/comments');
    const commentsDoc = await getDocs(commentsCollection);
    const commentsData = commentsDoc.docs.map((d) => {
      const doc = d.data();
      return {
        starRating: doc.rating,
      };
    });
  
    // Extract starRatings array from commentsData
    const starRatings = commentsData.map((comment) => comment.starRating);
    const sum = starRatings.reduce((total, num) => total + num, 0);
    const average = sum/starRatings.length;
    return average;
   }
  /* =============================================== */
      /* ============== Calculate Ackerman rating =============== */
async function getAckermanStars() {
    // Get a reference to the database
    const commentsCollection = collection(database, 'locations/ackerman/comments');
    const commentsDoc = await getDocs(commentsCollection);
    const commentsData = commentsDoc.docs.map((d) => {
      const doc = d.data();
      return {
        starRating: doc.rating,
      };
    });
  
    // Extract starRatings array from commentsData
    const starRatings = commentsData.map((comment) => comment.starRating);
    const sum = starRatings.reduce((total, num) => total + num, 0);
    const average = sum/starRatings.length;
    return average;
   }
  /* =============================================== */




const ToLocation = () => {

    const [PowellRating, setRating] = useState(0); // add state for rating value
    useEffect(() => {
        async function fetchData() {
        const averageRating = await getPowellStars(); // await the result of the async function
        setRating(averageRating); // update rating state variable
      }
      fetchData();
    }, []);


    const [YRLRating, setYRL] = useState(0); // add state for rating value
    useEffect(() => {
        async function fetchData() {
        const averageRating = await getYRLStars(); // await the result of the async function
        setYRL(averageRating); // update rating state variable
      }
      fetchData();
    }, []);

    const [BoelterRating, setBoelter] = useState(0); // add state for rating value
    useEffect(() => {
        async function fetchData() {
        const averageRating = await getBoelterStars(); // await the result of the async function
        setBoelter(averageRating); // update rating state variable
      }
      fetchData();
    }, []);

    const [StudyRating, setStudy] = useState(0); // add state for rating value
    useEffect(() => {
        async function fetchData() {
        const averageRating = await getStudyStars(); // await the result of the async function
        setStudy(averageRating); // update rating state variable
      }
      fetchData();
    }, []);

    const [AckermanRating, setAckerman] = useState(0); // add state for rating value
    useEffect(() => {
        async function fetchData() {
        const averageRating = await getAckermanStars(); // await the result of the async function
        setAckerman(averageRating); // update rating state variable
      }
      fetchData();
    }, []);


  return (

<div>
    <Link to="/powell" style={{ textDecoration: 'none' }}> 
        <div className="toLocation-container">

            <div>
                <img src="./Powell_Front.jpg" alt="Powell Library"/>
            </div>


            <div className='header'>

                <h1 className='title'> Powell Library
                <Rating className='rating' name="rating" value={PowellRating} precision={0.5} readOnly />
                    ({Math.round(PowellRating * 10) / 10})
                </h1>


                <description className='text'> 
                        Powell Library is located across from Royce Hall at the southwest end of Dickson Plaza.
                        It is known as UCLA's main library and is famous for being one of the 4 original buildings
                        on campus. It serves as a 24 hour study space, offering computer and printer access.
                </description>

            </div>            

        </div>
    </Link>


    <Link to="/yrl" style={{ textDecoration: 'none' }}> 
        <div className="toLocation-container">

            <div>
                <img src="./yrl.png" alt="Charles E. Young Research Library"/>
            </div>


            <div className='header'>

                <h1 className='title'> Charles E. Young Research Library
                <Rating className='rating' name="rating" value={YRLRating} precision={0.5} readOnly />
                    ({Math.round(10 * YRLRating) / 10})
                </h1>


                <description className='text'> 
                        The Charles E. Young Research Library is located in the northern part of campus, next 
                        to the Sculpture Garden. Renovated in 2011, it has state-of-the-art features and even a
                        cafe. It offers students research help, computer access, printing, and lockers. 
                </description>

            </div>            

        </div>
    </Link>


    <Link to="/boelter" style={{ textDecoration: 'none' }}> 
        <div className="toLocation-container">

            <div>
                <img src="./boelter.jpg" alt="Science and Engineering Library"/>
            </div>


            <div className='header'>

                <h1 className='title'> Science and Engineering Library
                <Rating className='rating' name="rating" value={BoelterRating} precision={0.5} readOnly />
                    ({Math.round(10 *BoelterRating) / 10})
                </h1>


                <description className='text'> 
                        The UCLA Science and Engineering Library has 2 locations, both on the south side of campus.
                        Students can either visit 8270 Boelter Hall or 4697 in the Geology Building. Both locations
                        provide printing services and offer computer access. 
                </description>

            </div>            

        </div>
    </Link>

    <Link to="/thestudy" style={{ textDecoration: 'none' }}> 
        <div className="toLocation-container">

            <div>
                <img src="./thestudy.jpg" alt="The Study"/>
            </div>


            <div className='header'>

                <h1 className='title'> The Study
                <Rating className='rating' name="rating" value={StudyRating} precision={0.5} readOnly />
                    ({Math.round(10 * StudyRating) / 10})
                </h1>


                <description className='text'> 
                        The Study is located near Hedrick Hall on "The Hill", the location of UCLA's dorm buildings. It serves 
                        as a close, convenient study spot for dorm residents, offering quiet spaces with power and high-speed WIFI. 
                        Additionally, it doubles as a restaurant so students can use their meal swipes to purchase food 
                        and refreshments as they work. 
                </description>

            </div>            

        </div>
    </Link>


    <Link to="/ackerman" style={{ textDecoration: 'none' }}> 
        <div className="toLocation-container">

            <div>
                <img src="./ackerman.jpg" alt="Ackerman Union"/>
            </div>


            <div className='header'>

                <h1 className='title'> Ackerman Union
                <Rating className='rating' name="rating" value={AckermanRating} precision={0.5} readOnly />
                    ({Math.round(10 * AckermanRating) / 10})
                </h1>


                <description className='text'> 
                        Ackerman Union is located at the heart of campus along BruinWalk. There are plenty of places to sit and 
                        study throughout this multi-story building. Not to mention, it offers a number of amenities to students which include 
                        restaurants, printing stations, and stores to purchase textbooks and other class materials. 
                </description>

            </div>            

        </div>
    </Link>

</div>
  );
};

export default ToLocation;