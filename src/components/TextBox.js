import React from 'react';
import './TextBox.css'
import SendIcon from '@mui/icons-material/Send';
import IconButton from '@mui/material/IconButton';
import RatingSystem from './Stars';



const TextBox = ({ placeholderText }) => {
  return (
    <>
    <div className="text-box-container">
        <div className="text-box-submission">
            <RatingSystem className="text-box-stars"><text>Rate this Bruin Spot here!</text></RatingSystem>
            <textarea type="text" className="text-box" placeholder={placeholderText}>
            </textarea>
            <IconButton className='submit-button' onClick={handleClickSend}><SendIcon></SendIcon></IconButton>
        </div>
    </div>
    </>
  );
};
function handleClickSend({e})
{

return;
}
export default TextBox;
