import React, { Component } from 'react';
import './App.css';

class App extends Component() {
  
  state = {
    bicycles: []
  }

  render(){
    return (
      <div className="App">
      <header className="App-header">
        <h1>Bicycle App</h1>
      </header>
    </div>
    );
  }
}

export default App;
