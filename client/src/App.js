import React, { Component } from 'react';
import { Navigation } from './components';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navigation />
        <header className="App-header">
          <p>Hello world!</p>
        </header>
      </div>
    );
  }
}

export default App;
