import React, { Component } from "react";
import "./App.css";
import { connect } from 'react-redux'

import SmurfList from './SmurfList'

const App = props => {

  return (
    <div className="App">
      <h1>Smurf Village</h1>
      <SmurfList />
    </div>
  );

}

const mapStateToProps = state => {
  return {

  }
}

export default connect(mapStateToProps, {})(App)
