import React, { Component } from 'react';
import { Navigation, ProfileHeader } from './components';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navigation />
        <ProfileHeader />
      </div>
    );
  }
}

export default App;
