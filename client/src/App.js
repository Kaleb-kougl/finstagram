import React, { Component } from 'react';
import { Navigation, ProfileHeader, ProfileImageList, ProfileViewSelector } from './components';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navigation />
        <ProfileHeader />
        <ProfileViewSelector />
        <ProfileImageList />
      </div>
    );
  }
}

export default App;
