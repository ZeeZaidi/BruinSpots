import React from 'react';
import { database } from './firebase';

/*
const usersRef = database.collection('users');

const PowellRating = () => {

    let total = 0;
    let count = 0;

    usersRef.get().then((querySnapshot) => {
  
        querySnapshot.forEach((doc) => {
        const data = doc.data();
        total = total + (data.rating);
        count = count + 1;
      });
    });

    console.log(total/count);
    return total/count;

}

export default PowellRating;

*/