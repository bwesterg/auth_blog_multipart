import React, { Component } from 'react';
import './App.css';
import BicycleContainer from './components/BicycleContainer';
import BicycleForm from './components/BicycleForm';

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
  
  addBicycle = (newBicycle) => {
    this.setState({
      bicycles: [...this.state.bicycles, newBicycle]
    })
  }

  render(){
    return (
      <div className="App">
        <h1>Bicycle App</h1>
        <BicycleForm addBicycle={this.addBicycle} />
        <BicycleContainer bicycles={this.state.bicycles} />
    </div>
    );
  }
}

export default App;
