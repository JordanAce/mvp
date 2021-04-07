import React from 'react';
import ReactDOM from 'react-dom';
import Search from './components/SearchBar.jsx'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      constellation: ''
    }
  }
  componentDidMount() {

    this.setState({
      constellation : 'Capricorn'
    })
  }
  render () {
    return (
      <div>
        <h1>MVP APP REACT</h1>
        <Search value = {this.state.constellation}/>
      </div>
    )  }

}

ReactDOM.render(<App />, document.getElementById("app"))