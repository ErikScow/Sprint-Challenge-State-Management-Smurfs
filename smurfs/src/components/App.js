import React, { Component } from "react";
import "./App.css";
import { connect } from 'react-redux'

import SmurfList from './SmurfList'
import AddSmurfForm from "./AddSmurfForm";

const App = props => {

  return (
    <div className="App">
      <h1>Smurf Village</h1>
      <AddSmurfForm />
      <SmurfList />
    </div>
  );

}

const mapStateToProps = state => {
  return {
    isFetching: state.isFetching,
    error: state.error,
  }
}

export default connect(mapStateToProps, {})(App)
