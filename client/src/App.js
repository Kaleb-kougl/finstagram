import React, { Component } from 'react';
import { Navigation, ProfileHeader, ProfileImageList } from './components';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navigation />
        <ProfileHeader />
        <ProfileImageList />
      </div>
    );
  }
}

export default App;
