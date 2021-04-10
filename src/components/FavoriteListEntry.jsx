import React from 'react';

const FavoriteListEntry = function(props) {
  return(
    <table>
      <tbody>
        <tr>
          <th>Stardate</th>
          <th>Image</th>
        </tr>
        <tr>
          <td>{props.favorite.date}</td>
          <td><a href = {props.favorite.url}>Click for Image!</a></td>
        </tr>
      </tbody>
    </table>

  )
}

export default FavoriteListEntry;