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
    fetch(BASEURL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newBicycle)
    })
  }

  deleteBicycle = (id) => {
    let filtered = this.state.bicycles.filter(bicycle => bicycle.id !== id)
    this.setState({
      bicycles: filtered
    })
  }

  render(){
    return (
      <div className="App">
        <h1>Bicycle App</h1>
        <BicycleForm addBicycle={this.addBicycle} />
        <BicycleContainer deleteBicycle={this.deleteBicycle} bicycles={this.state.bicycles} />
    </div>
    );
  }
}

export default App;
