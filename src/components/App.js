import React, { Component } from 'react';
import '../styles/App.css';
import About from './About';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h1>Caleb Frost Sanderson</h1>
        </div>
        <p className="App-intro">This is a <code>create-react-app</code> generated project that may turn into my portfolio website.</p>
        <About/>
      </div>
    );
  }
}

export default App;
