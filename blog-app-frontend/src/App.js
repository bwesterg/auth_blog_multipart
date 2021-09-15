import React, { Component } from 'react';
import './App.css';
const BASEURL = "http://localhost:3000/bicycles";

class App extends Component {
  
  state = {
    bicycles: []
  }

  componentDidMount(){
    this.getBicycles()
  }

  getBicycles = () => {
    fetch(BASEURL)
      .then(response => response.json())
      .then(bicycles => this.setState({bicycles}))
  }

  render(){
    return (
      <div className="App">
        <h1>Bicycle App</h1>
    </div>
    );
  }
}

export default App;
