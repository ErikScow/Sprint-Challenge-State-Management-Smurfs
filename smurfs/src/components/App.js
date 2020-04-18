import React, { Component } from "react";
import "./App.css";

import SmurfList from './SmurfList'

const App = props => {

  return (
    <div className="App">
      <h1>Smurf Village</h1>
      <SmurfList />
    </div>
  );

}

export default App;
