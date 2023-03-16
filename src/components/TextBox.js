

import React, { useState } from 'react';
import './TextBox.css'
import SendIcon from '@mui/icons-material/Send';
import IconButton from '@mui/material/IconButton';
import RatingSystem from './Stars';
import { uploadComment } from '../Upload';
import { auth } from '../firebase.js';



const TextBox = ({ placeholderText }) => {
  const [selectedRating, setSelectedRating] = useState(0);

  const handleRatingChange = (ratingValue) => {
    setSelectedRating(ratingValue);
    console.log('Selected rating value:', ratingValue);
  };

  const handleClickSend = async (e) => {
    const textArea = document.getElementById('my-text-area');
    const userText = textArea.value;
    const url = window.location.href;
    const locID = url.substring(url.lastIndexOf('/') + 1);
    const user = auth.currentUser;
    const currentDate = new Date().toLocaleDateString();

    await uploadComment(userText, currentDate ,selectedRating, user.uid , locID);
    window.location.reload();
    
    return;
  };

  return (
    <>
    <div className="text-box-container">
        <div className="text-box-submission">
            <RatingSystem onRatingChange={handleRatingChange} className="text-box-stars"><text>Rate this Bruin Spot here!</text></RatingSystem>
            <textarea type="text" className="text-box" id="my-text-area" placeholder={placeholderText}>
            </textarea>
            <IconButton className='submit-button' onClick={handleClickSend}><SendIcon></SendIcon></IconButton>
        </div>
    </div>
    </>
  );
};

export default TextBox;

