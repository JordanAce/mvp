import React from 'react';
import FavoriteListEntry from './FavoriteListEntry.jsx'

const FavoriteList = function(props) {
  return(
    <div>
      <h2>FAVORITES</h2>
      <div>{props.favoriteList.map((favorite) =>
        <FavoriteListEntry key = {favorite.date} favorite = {favorite}/>
      )}</div>
    </div>
  )
}

export default FavoriteList;