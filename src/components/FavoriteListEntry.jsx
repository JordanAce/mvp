import React from 'react';

const FavoriteListEntry = function(props) {
  return(
    <table>
      <tbody>
        <tr>
          <td>Stardate: {props.favorite.date}</td>
          <td>Title: {props.favorite.title}</td>
          <td>Image: <a href = {props.favorite.url}>Click for Image!</a></td>
        </tr>
      </tbody><br></br><br></br>
    </table>

  )
}

export default FavoriteListEntry;