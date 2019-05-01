import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { navigate } from "@reach/router";
import { connect } from 'react-redux';
import { attemptAWSLogin } from '../redux/actions';
import "./Login.css";

class Login extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: "",
            password: "",
            isError: false,
        };

    }

    validateForm() {
        return this.state.email.length > 0 && this.state.password.length > 0;
    }

    handleChange = event => {
        this.setState({
            [event.target.id]: event.target.value
        });
    }

    handleSubmit = async event => {
        event.preventDefault();

        this.props.attemptAWSLogin(this.state.email, this.state.password);
    }

    componentDidUpdate(prevProps, prevState) {
        if (!prevProps.error && this.props.error) {
            this.setState({ isError: true });
            alert(this.props.error.message);
        } else if (!prevProps.isAuthenticated && this.props.isAuthenticated) {
            alert('successfull logged in!');
            navigate('/');
        }
    }


    render() {
        return (
            <div className="Login">
                <Form onSubmit={this.handleSubmit}>
                    <Form.Group controlId="email">
                        <Form.Label>Email</Form.Label>
                        <Form.Control
                            autoFocus
                            type="email"
                            value={this.state.email}
                            onChange={this.handleChange}
                            placeholder="Enter email"
                        />
                    </Form.Group>
                    <Form.Group controlId="password">
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                            value={this.state.password}
                            onChange={this.handleChange}
                            type="password"
                            className="signup-btn"
                        />
                    </Form.Group>
                    <Button
                        block
                        disabled={!this.validateForm()}
                        type="submit"
                        variant="light"
                        className="login-btn"
                        placeholder="Password"
                    >
                        Login
                    </Button>
                </Form>
            </div>
        );
    }
}

const mapStateToProps = ({ user }) => ({
    error: user.error,
    isAuthenticated: user.isAuthenticated,
});

const mapDispatchToProps = { attemptAWSLogin };

export default connect(mapStateToProps, mapDispatchToProps)(Login);
