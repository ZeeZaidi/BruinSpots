import React from 'react';
import './Review.css';
import { IconButton } from '@mui/material';
import Rating from '@mui/material/Rating';

const Review = ({key, avatar, userName, starRating, reviewBody, date }) => {
  return (
    //use key to get the reviews from db

    <div className="review-container">
      <div className="profile-picture-container">
      <div className="review-container">
            <div className="profile-picture">
                <IconButton onClick={handleClickProfile}><img src={avatar} alt="pfp" /></IconButton>
            </div>
            <div className="review-info">
                <button onClick={handleClickProfile}>{userName}</button>
                <p style={{display: 'inline-block',padding:10}}>{date}</p>
            </div>
            <Rating style={{padding: 10}}name="rating" value={starRating} precision={0.5} readOnly />
        </div>
        <div className='text-body'>
            <p>{reviewBody}</p>
        </div>
      </div>
    </div>
  );
};

export default Review;

function handleClickProfile({id}) //e is id of profile so we can get page of someones profile?
{
    return;
}