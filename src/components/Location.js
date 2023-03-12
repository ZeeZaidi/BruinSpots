import React from 'react';
import './Location.css';
import TextBox from './TextBox.js';
import powell from './powell.jpg';
import { Box, Typography } from '@mui/material';
import Rating from '@mui/material/Rating';
import NavBar from './Navbar';
import { BrowserRouter as Router, Routes as Switch, Route } from 'react-router-dom';
import logo from './logo.png';// just for example
import ReviewList from './ReviewList';
import mapImage from './map.png'//map image of Powell we can easily change this later if we want
import Map from './Map.js';



const bruinSpotName = "Powell Library";//study sopt
const image = powell;//image used in page
const rating = 4.5; // rating out of 5 stars

const reviews = [
  {
    id: 1,
    avatar: logo,
    userName: 'Monkey D luffy',
    starRating: 5,
    reviewBody: 'I have never studied before in my life but I love Powell library!',
    date: '2-24-2023' 
  },
  {
    id: 2,
    avatar: logo,
    userName: 'Jdrizzy',
    starRating: 3.5,
    reviewBody: 'I am nerd',
    date: '2-12-1998' 
  },
  {
    id: 3,
    avatar: logo,
    userName: 'Bradley Cooper',
    starRating: 2,
    reviewBody: 'I acted in the hangover movie',
    date: '2-23-2023' 
  },
  {
    id: 4,
    avatar: logo,
    userName: 'Curious George',
    starRating: 4,
    reviewBody: 'Oooh oooh Ahhh ahHH',
    date: '2-12-2012' 
  },
  {
    id: 5,
    avatar: logo,
    userName: 'Percy Jackson',
    starRating: 0,
    reviewBody: 'there no pool here :{',
    date: '2-24-2023' 
  },
  {
    id: 6,
    avatar: logo,
    userName: 'Eric Cartman',
    starRating: 3,
    reviewBody: '*Something racist probably*',
    date: '2-12-2020' 
  },
  {
    id: 7,
    avatar: logo,
    userName: 'Woodrow Wilson',
    starRating: 4.5,
    reviewBody: 'I love *insert some thing racist*',
    date: '9-24-1913' 
  },
  {
    id: 8,
    avatar: logo,
    userName: 'Creativity',
    starRating: 5,
    reviewBody: 'I am ded',
    date: '2-12-1998' 
  },
  // Add more review objects as needed
];



function Location() {
  return (
    <>  

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
                  <div className="reviews-list">
                    <h1> Reviews: </h1>
                    <TextBox placeholderText="Have any comments about this Bruin Spot? Just write them here" />
                    <ReviewList reviews={reviews} />
                  </div>
                  <div className='map-container'>
                    <Map mapImage={mapImage}></Map>
                  </div>
        </div>
    </>
  );
}

export default Location;
