import React, { Component } from 'react';
import { Router } from "@reach/router";
import { Navigation } from './components';
import { Profile, NotFound, Login } from './containers';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Navigation />

        <Router>
          <Profile path="/" />
          <Login path="/login" />
          <NotFound default />
        </Router>
      </div>
    );
  }
}

export default App;
