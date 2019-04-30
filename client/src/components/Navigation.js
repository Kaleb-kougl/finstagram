import React, { Component } from 'react'
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { connect } from 'react-redux';
import { logout_user } from '../redux/actions';
import './styles/Navigation.css';

class Navigation extends Component {
    render() {
        return (
            <Navbar bg="light" expand="lg" >
                <Navbar.Brand href="/" id="brand" >Finstagram</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                    {
                        this.props.isAuthenticated ?
                            <Nav.Item onClick={this.props.handleLogout} className="logout-btn">
                                Logout
                            </Nav.Item>
                            :
                            <>
                                <Nav.Link href="#">Signup</Nav.Link>
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
});

const mapDispatchToProps = { handleLogout: logout_user };

export default connect(mapStateToProps, mapDispatchToProps)(Navigation);
