import React from 'react';
import ReactDOM from 'react-dom';





class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      term: ''
    }
    this.search= this.search.bind(this);
  }

  search() {
    console.log('SEARCHING API')
  }

  render() {
  return(
    <div>
    <h1>Enter your ZIP CODE</h1>
    <input
    key = "uniquekey"
    value = {this.state.term}
    placeholder={"Search ZIP Code"}
    onChange = {(event) => newEntry(event.target.value)}
    />
    <button onClick = {this.search}>Search for Constellations</button>
    </div>

    );
  }
  }


export default SearchBar;