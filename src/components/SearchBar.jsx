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
  }


  newEntry(event) {
    this.setState({
      date: event
    });
  }

  search() {
    console.log(`SEARCHING ${this.state.date}`)
    this.props.onSearch(this.state.date);
  }

  render() {
  return(
    <div>
    <input
    type = "date"
    min ="1995-12-31"
    key = "uniquekey"
    value = {this.state.term}
    placeholder={"Search DATE Year-Month-Date"}
    onChange = {(event) => this.newEntry(event.target.value)}
    />
    <button onClick = {this.search}>Get PIC of the DAY</button>
    </div>

    );
  }
  }


export default SearchBar;