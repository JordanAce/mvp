import React from 'react';
import ReactDOM from 'react-dom';


class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: ''
    }
    this.search= this.search.bind(this);
    this.onChange= this.newEntry.bind(this);
    this.setFavorite = this.setFavorite.bind(this);
    this.listFavorites = this.listFavorites.bind(this);
  }


  newEntry(event) {
    this.setState({
      date: event
    });
  }

  search() {
    this.props.onSearch(this.state.date);
  }

  setFavorite() {
    this.props.setFavorite(this.state.date);
  }

  listFavorites() {
    this.props.listFavorites();
  }


  render() {
  return(
    <div className = 'search' style ={{clear: 'both'}}>
      <input
        type = "date"
        min ="1995-12-31"
        key = "uniquekey"
        value = {this.state.term}
        placeholder={"Search DATE Year-Month-Date"}
        onChange = {(event) => this.newEntry(event.target.value)}
    />
      <button onClick = {this.search}>See Past PICS of the DAY</button>
      <button style ={{float:'right'}} onClick = {this.listFavorites}>List my Favorites!</button>
      <button id = "favorite" style ={{float: 'right'}} onClick = {this.setFavorite}>Set as Favorite</button>
    </div>

    );
  }
  }


export default SearchBar;