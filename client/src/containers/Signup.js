import React, { Component } from "react";
import Form from 'react-bootstrap/Form';
import Button from "react-bootstrap/Button";
import { connect } from 'react-redux';
import { navigate } from "@reach/router";
import {
    attemptAWSSignup,
    attemptAWSConfirmSignup,
    attemptAWSLogin
} from '../redux/actions';
import "./styles/Signup.css";

class Signup extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isLoading: false,
            email: "",
            password: "",
            confirmPassword: "",
            confirmationCode: "",
            newUser: null,
            isError: false,
        };
    }

    validateForm() {
        return (
            this.state.email.length > 0 &&
            this.state.password.length > 0 &&
            this.state.password === this.state.confirmPassword
        );
    }

    validateConfirmationForm() {
        return this.state.confirmationCode.length > 0;
    }

    handleChange = event => {
        this.setState({
            [event.target.id]: event.target.value
        });
    }

    handleSubmit = async event => {
        event.preventDefault();

        this.setState({ isLoading: true });

        this.props.attemptAWSSignup(this.state.email, this.state.password);

        this.setState({ isLoading: false });
    }

    handleConfirmationSubmit = async event => {
        event.preventDefault();

        this.setState({ isLoading: true });

        this.props.attemptAWSConfirmSignup(this.state.email, this.state.confirmationCode);
        this.props.attemptAWSLogin(this.state.email, this.state.password);
        navigate('/');
    }

    componentDidUpdate(prevProps, prevState) {
        console.log('component updated', this.props);
        if (!this.state.isError && this.props.error && this.props.error.code === "UsernameExistsException") {
            alert(this.props.error.message);
            alert('caught ya');
            this.setState({ newUser: true, isError: true });
        }
        else if (!prevProps.error && this.props.error) {
            this.setState({ isError: true });
            alert(this.props.error.message);
        } else if (!prevProps.newUser && this.props.newUser && prevProps.newUser !== this.props.newUser) {
            alert('Check your email for confirmation code!');
            this.setState({ newUser: this.props.newUser });
        }
    }

    renderConfirmationForm() {
        return (
            <Form onSubmit={this.handleConfirmationSubmit}>
                <Form.Group controlId="confirmationCode">
                    <Form.Label>Confirmation Code</Form.Label>
                    <Form.Control
                        autoFocus
                        type="tel"
                        value={this.state.confirmationCode}
                        onChange={this.handleChange}
                    />
                    <Form.Text className="text-muted">
                        Please check your email for the code.
                    </Form.Text>
                </Form.Group>
                <Button
                    block
                    disable={!this.validateConfirmationForm()}
                    type="submit"
                    variant="light"
                >
                    Verify
                </Button>
            </Form>
        );
    }

    renderForm() {
        return (
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
                        placeholder="Password"
                    />
                </Form.Group>
                <Form.Group controlId="confirmPassword">
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control
                        value={this.state.confirmPassword}
                        onChange={this.handleChange}
                        type="password"
                        placeholder="One more time..."
                    />
                </Form.Group>
                <Button
                    block
                    disable={!this.validateForm()}
                    type="submit"
                    variant="light"
                >
                    Signup
                </Button>
            </Form>
        );
    }

    render() {
        return (
            <div className="Signup">
                {this.state.newUser === null
                    ? this.renderForm()
                    : this.renderConfirmationForm()}
            </div>
        );
    }
}

const mapStateToProps = ({ signup }) => ({
    error: signup.error,
    isLoading: signup.isLoading,
    newUser: signup.newUser,
});

const mapDispatchToProps = { attemptAWSSignup, attemptAWSConfirmSignup, attemptAWSLogin };

export default connect(mapStateToProps, mapDispatchToProps)(Signup);
