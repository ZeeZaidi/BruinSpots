import React from 'react';
import './RequestPage.css';
import RequestTextBox from './RequestTextBox';

//ADD Request Box Beneath Text 

const RequestPage = (e) => {
  return (

    <div>
      <div className='requestPage-background'> </div>

      <div className='requestText'> Know of a study spot we haven't listed? Submit a request and we'll add it! </div>
      <RequestTextBox className='text-box' placeholderText={"Know a spot? Tell us here!"}/>
      
    
    </div>

  );
};

export default RequestPage;