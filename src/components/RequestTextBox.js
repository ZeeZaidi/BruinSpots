import React from 'react';
import './RequestTextBox.css'
import SendIcon from '@mui/icons-material/Send';
import IconButton from '@mui/material/IconButton';
import { uploadRequest } from '../Upload';
import { auth } from '../firebase.js';

const RequestTextBox = ({ placeholderText }) => {
    const handleClickSend = async (e) => {
      const textArea = document.getElementById('my-text-area');
      const userText = textArea.value;
      const user = auth.currentUser;
      const currentDate = new Date().toLocaleDateString();
  
      try {
        await uploadRequest(userText, currentDate, user.uid);
        // Write operation completed successfully
        // Now refresh the page
        window.location.reload();
      } catch (error) {
        console.error(error);
      }
    };
  
    return (
      <>
        <div className="text-box-container">
          <div className="text-box-submission">
            <textarea type="text" className="text-box" id="my-text-area" placeholder={placeholderText}/>
            <IconButton className='submit-button' onClick={handleClickSend}><SendIcon></SendIcon></IconButton>
          </div>
        </div>
      </>
    );
  };
  
  export default RequestTextBox;