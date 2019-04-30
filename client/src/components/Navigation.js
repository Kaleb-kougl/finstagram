import React, { Component } from 'react'
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { connect } from 'react-redux';
import './styles/Navigation.css';

class Navigation extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: null,
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

export default connect(mapStateToProps, null)(Navigation);
