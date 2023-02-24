import React from 'react';
import './Location.css';
import TextBox from './TextBox.js';
import IconButton from '@mui/material/IconButton';
import powell from './powell.jpg';
import logo from './logo.png';
import { Box, Typography } from '@mui/material';
import Rating from '@mui/material/Rating';

const bruinSpotName = "Powell Library";//study sopt
const image = powell;//image used in page
const rating = 4.5; // rating out of 5 stars
function Location() {
  return (
    <>
        <div className="top-bar">
            <div className="logo">
                <IconButton aria-label="logo" onClick={handleClickHome}><img src={logo} alt="Website Logo" /></IconButton>
            </div>
            <nav className="menu">
              <ul>
                <li><button className="button-login" onClick={handleClickLogin}>Login</button></li>
                <li><button className="button-signup" onClick={handleClickSignUp}>Signup</button></li>
              </ul>
            </nav>
        </div>
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
                    <TextBox className="" placeholderText="Have any comments about this Bruin Spot? Just write them here" />
        </div>
    </>
  );
}

export default Location;

function handleClickHome({e}){
 return;
}
function handleClickLogin({e}){
  return;
}
function handleClickSignUp({e}){
  return;
}