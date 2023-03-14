import React from 'react';
import './Location.css';
import TextBox from './TextBox.js';
import powell from './powell.jpg';
import { Box, Typography } from '@mui/material';
import Rating from '@mui/material/Rating';

//import { BrowserRouter as Router, Routes as Switch, Route } from 'react-router-dom';
import logo from './logo.png';// just for example
import ReviewList from './ReviewList';
import mapImage from './map.png'//map image of Powell we can easily change this later if we want
import Map from './Map.js';

import {database} from '../firebase';
import { collection, getDocs } from "firebase/firestore";
import { useState, useEffect } from 'react';

/* ============== Calculate rating =============== */
async function getAverageStars() {
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

const bruinSpotName = "Powell Library";//study sopt
const image = powell;//image used in page

function Location() {
  const [reviewsData, setReviewsData] = useState([])

  const [rating, setRating] = useState(0); // add state for rating value
  useEffect(() => {
      async function fetchData() {
      const averageRating = await getAverageStars(); // await the result of the async function
      setRating(averageRating); // update rating state variable
    }
    fetchData();
  }, []);

  useEffect(() => {
    async function updateReviewsData() {
      // Get a reference to the database
      const commentsCollection = collection(database, 'locations/powell/comments');
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

    updateReviewsData()
  }, [])

  return (
          <div className="location">
            <div className="image-container">
              <img aria-label ="study"src={image} alt="of study spot"/>
              <Box
                  className="rating-stars"
                  sx={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    bgcolor: 'rgba(0, 0, 0, 0.5)',
                    padding: '0.5rem',
                    display: 'flex',
                    alignItems: 'center',
                    borderRadius: 5,
                  }}
                >
                  <Typography variant="h5" 
                  sx={{ 
                    color: '#fff',
                    marginRight: '0.5rem',
                    fontSize: 30,
                    fontWeight: 600, }}>
                    {bruinSpotName}
                  </Typography>
                  <Rating name="rating" value={rating} precision={0.5} readOnly />
                </Box>
            </div>
            <div className="container">
              <div className='left-pane'>
                <div className="reviews-list">
                  <h1> Reviews: </h1>
                  <TextBox placeholderText="Have any comments about this Bruin Spot? Just write them here"/>
                  <ReviewList reviews={reviewsData} />
                </div>
              </div>
              <div className='right-pane'>
                  <Map mapImage={mapImage}></Map>
              </div>  
            </div>
        </div>
  );
}

export default Location;
