import React, { Component } from 'react';
import { Router } from "@reach/router";
import { Navigation } from './components';
import { Profile, NotFound } from './pages';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Navigation />

        <Router>
          <Profile path="/" />
          <NotFound path="/test" />
        </Router>
      </div>
    );
  }
}

export default App;
