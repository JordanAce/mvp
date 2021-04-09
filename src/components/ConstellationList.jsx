import React from 'react';

const ConstellationList = function(currentConstellationImage) {
  return(
    <div>
      <h2>{currentConstellationImage.date}</h2>
      <img src = {currentConstellationImage.img}/>
      <p>{currentConstellationImage.explanation}</p>
    </div>
  )
}

export default ConstellationList;