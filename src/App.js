import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import StudentsList from "./Components/StudentsList.js";

class App extends Component {
  render() {
    return (
      <div className="App">
        <StudentsList />
      </div>
    );
  }
}

export default App;
