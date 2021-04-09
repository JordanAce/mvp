import React from 'react';
import ReactDOM from 'react-dom';
import BodyParser from 'body-parser';
import Search from './components/SearchBar.jsx'
import ConstellationList from './components/ConstellationList.jsx'
import $ from 'jquery'
import mongoose from 'mongoose'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      constellation: ''
    }
  }
  search(input) {
    let that = this;
    let data = input;
    console.log(`${data} was searched`)
      $.ajax({
      type: 'POST',
      url: ('/constellations'),
      data: data,
      success: function(data) {
        console.log(data)
        that.setState({
          constellation: data
        });
      },
      error: function (error) {
        console.log('ERROR ON POST REQUEST', error)
      }
    })
  }

  componentDidMount() {
    // this.setState({
    //   constellation : data
    // })
  }
  render () {
    return (
      <div>
        <h1>MVP APP REACT</h1>
        <ConstellationList value ={this.state.constellation}/>
        <Search onSearch = {this.search.bind(this)}/>
      </div>
    )  }

}

ReactDOM.render(<App />, document.getElementById("app"))