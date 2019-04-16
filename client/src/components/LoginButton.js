import React from 'react';
import { connect } from 'react-redux';
import { attemptFbLogin } from '../redux/actions';

const LoginButton = ({ attemptFbLogin }) => (
    <button onClick={attemptFbLogin}>Login with Facebook!</button>
);

const mapDispatchToProps = {
    attemptFbLogin: attemptFbLogin,
}

export default connect(null, mapDispatchToProps)(LoginButton);
