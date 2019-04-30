import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { connect } from 'react-redux'
import { Auth } from "aws-amplify";
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
        if (this.props.error) {
            alert(this.props.error.message);
        }
    }


    render() {
        console.log(Auth);
        return (
            <div className="Login">
                <Form onSubmit={this.handleSubmit}>
                    <Form.Group controlId="email">
                        <Form.Control
                            autoFocus
                            type="email"
                            value={this.state.email}
                            onChange={this.handleChange}
                        />
                    </Form.Group>
                    <Form.Group controlId="password">
                        <Form.Control
                            value={this.state.password}
                            onChange={this.handleChange}
                            type="password"
                        />
                    </Form.Group>
                    <Button
                        block
                        disabled={!this.validateForm()}
                        type="submit"
                        variant="light"
                    >
                        Login
                    </Button>
                </Form>
            </div>
        );
    }
}

const mapStateToProps = ({ user }) => ({
    error: user.error
});

const mapDispatchToProps = { attemptAWSLogin };

export default connect(mapStateToProps, mapDispatchToProps)(Login);
