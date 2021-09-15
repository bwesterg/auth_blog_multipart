import React, { Component } from 'react';
import './App.css';
import BicycleContainer from './components/BicycleContainer';
// import BicycleItem from './components/BicycleContainer';

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
        <BicycleContainer bicycles={this.state.bicycles} />
    </div>
    );
  }
}

export default App;
