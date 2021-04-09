import React from 'react';

const ConstellationList = function(currentConstellationImage) {
  return(
    <div>
      <img src = {currentConstellationImage.value} />
    </div>
  )
}

export default ConstellationList;