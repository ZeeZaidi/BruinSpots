import React from "react";
import { useEffect } from 'react';
import { useState } from 'react';


function Map({ mapImage }) {
    const [isFixed, setIsFixed] = useState(false);
  
    useEffect(() => {
      const handleScroll = () => {
        const offset = window.scrollY;
        setIsFixed(offset > 400 && offset < 1000);
      };
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }, []);
  
    const mapStyle = {
      position: isFixed ? 'fixed' : 'relative',
      top: isFixed ? '80px' : 'auto',
      left: isFixed ? '10px' : 'auto',
    };
  
    return (
      <div className="map-container" style={mapStyle}>
        <img src={mapImage} alt="Map" className="map-image" />
      </div>
    );
  }
  

export default Map;

//////////////////////////////////////////////////////////////
//Note* the container of the map is covering the buttons in 
//the review list. Preventing people from clicking it.///////
//possible soluntions are to shrink the container or keep 
//the map stationary
/////////////////////////////////////////////////////////////