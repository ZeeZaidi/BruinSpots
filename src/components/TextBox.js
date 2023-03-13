import React from 'react';
import './TextBox.css'
import SendIcon from '@mui/icons-material/Send';
import IconButton from '@mui/material/IconButton';
import RatingSystem from './Stars';
import { upload } from '@testing-library/user-event/dist/upload';
import { uploadComment } from '../Upload'



const TextBox = ({ placeholderText }) => {
  return (
    <>
    <div className="text-box-container">
        <div className="text-box-submission">
            <RatingSystem className="text-box-stars"><text>Rate this Bruin Spot here!</text></RatingSystem>
            <textarea type="text" className="text-box" id="my-text-area" placeholder={placeholderText}>
            </textarea>
            <IconButton className='submit-button' onClick={handleClickSend}><SendIcon></SendIcon></IconButton>
        </div>
    </div>
    </>
  );
};
function handleClickSend({e})
{
  const textArea = document.getElementById('my-text-area');
  const userText = textArea.value;
  const url = window.location.href;
  const locID = url.substring(url.lastIndexOf('/') + 1);
  console.log(url);
  console.log(locID);
  uploadComment(userText, 5, "Gd0AOQIGE1VLpOI793CK94pDRRz1" , locID);
  return;
}
export default TextBox;
