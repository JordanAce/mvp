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
      img: '',
      date:'',
      explanation: '',
      title: ''
    }
  }
  search(input) {
    //on date input API call for relevent's date's pic of the day
    let that = this;
    let date = input;
    console.log(`${date} was searched`)
      $.ajax({
      type: 'POST',
      url: ('/constellations'),
      data: date,
      success: function(data) {
        console.log(data)
        that.setState({
          img: data.thumbnail_url || data.url,
          date: data.date,
          explanation: data.explanation,
          title: data.title
        });
      },
      error: function (error) {
        console.log('ERROR ON POST REQUEST', error)
      }
    })
  }

  setFavorite(date) {
    //POST Request to Server which saves the DB favorites
    $.ajax({
      type: 'POST',
      url: ('/favorites'),
      data: date,
      success: function() {
        console.log(`${date} was Favorited`);
      },
      error: function (error) {
        console.log('ERROR ON POST REQUEST', error)
      }
    })
  }

  componentDidMount(input) {
    //on load of screen API Call for Pic of the day
    let that = this;
    let data = input;
    console.log(`${data} was Searched`)
      $.ajax({
      type: 'POST',
      url: ('/constellations'),
      data: data,
      success: function(data) {
        console.log(data)
        that.setState({
          img: data.url,
          date: data.date,
          explanation: data.explanation,
          title: data.title
        });
      },
      error: function (error) {
        console.log('ERROR ON POST REQUEST', error)
      }
    })
  }
  render () {
    return (
      <div>
        <h1 className = "title">{this.state.title}</h1><br></br>
        <ConstellationList img ={this.state.img} date = {this.state.date} explanation ={this.state.explanation}/>
        <Search onSearch = {this.search.bind(this)} setFavorite = {this.setFavorite.bind(this)} style = 'align:center'/>
      </div>
    )  }

}

ReactDOM.render(<App />, document.getElementById("app"))