import React from "react";


function Map({ mapImage }) {
    return (
      <div className="map-container" >
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