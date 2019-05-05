import React, { Component } from 'react'
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { navigate } from '@reach/router';
import { connect } from 'react-redux';
import { attemptAWSLogout } from '../actions';
import './styles/Navigation.css';

class Navigation extends Component {

    handleLogout = () => {
        this.props.attemptAWSLogout();
        navigate('/login');
    }

    componentDidUpdate(prevProps, prevState) {
        if (!prevProps.error && this.props.error && this.props.isAuthenticated) {
            alert(this.props.error.message);
        }
    }

    render() {
        return (
            <Navbar bg="light" expand="lg" >
                <Navbar.Brand href="/" id="brand" >Finstagram</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                    {
                        this.props.isAuthenticated ?
                            <Nav.Item onClick={this.handleLogout} className="logout-btn">
                                Logout
                            </Nav.Item>
                            :
                            <>
                                <Nav.Link href="/signup">Signup</Nav.Link>
                                <Nav.Link href="/login">Login</Nav.Link>
                            </>
                    }
                </Navbar.Collapse>
            </Navbar>
        )
    }
}

const mapStateToProps = ({ user }) => ({
    isAuthenticated: user.isAuthenticated,
    error: user.error,
});

const mapDispatchToProps = { attemptAWSLogout };

export default connect(mapStateToProps, mapDispatchToProps)(Navigation);
