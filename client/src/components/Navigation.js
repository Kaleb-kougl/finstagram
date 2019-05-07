import React, { Component } from 'react'
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { navigate, Link } from '@reach/router';
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
                <Link to="/">
                    <Navbar.Brand id="brand" as="span">Finstagram</Navbar.Brand>
                </Link>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                    {
                        this.props.isAuthenticated ?
                            <Nav.Item onClick={this.handleLogout} className="logout-btn">
                                Logout
                            </Nav.Item>
                            :
                            <>
                                <Link to="/signup">
                                    <Nav.Link as="span">Signup</Nav.Link>
                                </Link>
                                <Link to="/login">
                                    <Nav.Link as="span">Login</Nav.Link>
                                </Link>
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
