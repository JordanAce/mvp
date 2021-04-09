import React from 'react';

const ConstellationList = function(currentConstellationImage) {
  return(
    <div>
      <img src = {currentConstellationImage.img} />
      <h2>{currentConstellationImage.date}</h2>
      <p>{currentConstellationImage.explanation}</p>


    </div>
  )
}

export default ConstellationList;