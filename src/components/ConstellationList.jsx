import React from 'react';

const ConstellationList = function(currentConstellationImage) {
  return(
    <div>
      <h2>Stardate: {currentConstellationImage.date}</h2><br></br>
      <img src = {currentConstellationImage.img}/>
      <p>{currentConstellationImage.explanation}</p>
    </div>
  )
}

export default ConstellationList;