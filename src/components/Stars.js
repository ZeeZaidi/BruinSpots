// import React, { useState } from 'react';
// import Rating from '@mui/material/Rating';
// import Box from '@mui/material/Box';

// const RatingSystem = () => {
//   const [value, setValue] = useState(0);

//   const handleRatingChange = (event, newValue) => {
//     const intValue = parseInt(newValue, 10);
//     setValue(intValue);
//     handleSelectedValue(intValue);
//   };

//   const handleSelectedValue = (selectedValue) => {
//     // Do something with the selected value, such as updating state or sending to a server
//     console.log('Selected value:', selectedValue);
//   };

//   return (
//     <Box 
//      sx={{ 
//       display: 'flex',
//       justifyContent: 'flex-start',
//       '& > *': { m: 1 } 
//     }}>
//       <Rating
//         name="simple-controlled"
//         value={value}
//         onChange={handleRatingChange}
//       />
//     </Box>
//   );
// }

// export default RatingSystem;

import React, { useState } from 'react';
import Rating from '@mui/material/Rating';
import Box from '@mui/material/Box';

const RatingSystem = ({ onRatingChange }) => {
  const [value, setValue] = useState(0);

  const handleRatingChange = (event, newValue) => {
    const intValue = parseInt(newValue, 10);
    setValue(intValue);
    onRatingChange(intValue);
  };

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
        onChange={handleRatingChange}
      />
    </Box>
  );
}

export default RatingSystem;
