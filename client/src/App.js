import React, { Component } from 'react';
import { Router } from "@reach/router";
import { Auth } from 'aws-amplify';
import { connect } from 'react-redux';
import { successfulAWSLogin } from './redux/actions';
import { Navigation } from './components';
import {
  Profile,
  NotFound,
  Login,
  Signup,
  NewPhoto,
} from './containers';


class App extends Component {

  async componentDidMount() {
    try {
      await Auth.currentSession();
      this.props.successfulAWSLogin();
    } catch (error) {
      // no current user in session
      console.log(error);
    }
  }

  render() {
    return (
      <div className="App">
        <Navigation />

        <Router>
          <Profile path="/" />
          <Login path="/login" />
          <Signup path="/signup" />
          <NewPhoto path="/newphoto" />
          <NotFound default />
        </Router>
      </div>
    );
  }
}

const mapDispatchToProps = { successfulAWSLogin };

export default connect(null, mapDispatchToProps)(App);
