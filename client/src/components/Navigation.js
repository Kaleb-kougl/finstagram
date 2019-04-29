import React, { Component } from 'react'
import Navbar from 'react-bootstrap/Navbar';
import { Nav, NavDropdown } from 'react-bootstrap';

class Navigation extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: 'Kaleb'
        }
    }
    render() {
        return (
            <Navbar bg="light" expand="lg" >
                <Navbar.Brand href="/" id="brand" >Finstagram</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                    <Nav.Link href="#">Signup</Nav.Link>
                    <Nav.Link href="#">Log out</Nav.Link>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}

export default Navigation;
