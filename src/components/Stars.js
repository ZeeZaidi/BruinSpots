import React, { useState } from 'react';
import Rating from '@mui/material/Rating';
import Box from '@mui/material/Box';

const RatingSystem = () => {
  const [value, setValue] = useState(0);

  return (
    <Box 
     sx={{ 
      display: 'flex',
      justifyContent: 'flex-start',
      '& > *': { m: 1 } 
    }}>
      <Rating
        name="simple-controlled"
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      />
    </Box>
  );
}

export default RatingSystem;
