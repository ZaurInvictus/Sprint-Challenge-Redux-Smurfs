import React, { Component } from 'react';
import './App.css';
import Smurfs from './Smurfs'
import PostSmurf from './PostSmurf'

class App extends Component {
  render() {
    return (
      <div className="App">
        <h2>SMURFS! 2.0 W/ Redux</h2>
        <Smurfs />
        <PostSmurf/>
      </div>
    );
  }
}

export default App;
