import React from 'react';
import './toLocation.css';
import {Link} from 'react-router-dom';
import Rating from '@mui/material/Rating';

const Location = ({starRating}) => {
  return (

<div>
    <Link to="/powell"> 
        <div className="toLocation-container">

            <div>
                <img src="./Powell_Front.jpg" alt="Powell Library"/>
            </div>


            <div className='header'>

                <h1 className='title'> Powell Library
                <Rating className='rating' name="rating" value={starRating} precision={0.5} readOnly />
                    ({starRating})
                </h1>


                <description className='text'> 
                        Powell Library is located across from Royce Hall at the southwest end of Dickson Plaza.
                        It is known as UCLA's main library and is famous for being one of the 4 original buildings
                        on campus. It serves as a 24 hour study space, offering computer and printer access.
                </description>

            </div>            

        </div>
    </Link>


    <Link to="/yrl"> 
        <div className="toLocation-container">

            <div>
                <img src="./yrl.png" alt="Charles E. Young Research Library"/>
            </div>


            <div className='header'>

                <h1 className='title'> Charles E. Young Research Library
                <Rating className='rating' name="rating" value={starRating} precision={0.5} readOnly />
                    ({starRating})
                </h1>


                <description className='text'> 
                        The Charles E. Young Research Library is located in the northern part of campus, next 
                        to the Sculpture Garden. Renovated in 2011, it has state-of-the-art features and even a
                        cafe. It offers students research help, computer access, printing, and lockers. 
                </description>

            </div>            

        </div>
    </Link>


    <Link to="/boelter"> 
        <div className="toLocation-container">

            <div>
                <img src="./boelter.jpg" alt="Science and Engineering Library"/>
            </div>


            <div className='header'>

                <h1 className='title'> Science and Engineering Library
                <Rating className='rating' name="rating" value={starRating} precision={0.5} readOnly />
                    ({starRating})
                </h1>


                <description className='text'> 
                        The UCLA Science and Engineering Library has 2 locations, both on the south side of campus.
                        Students can either visit 8270 Boelter Hall or 4697 in the Geology Building. Both locations
                        provide printing services and offer computer access. 
                </description>

            </div>            

        </div>
    </Link>

</div>
  );
};

export default Location;