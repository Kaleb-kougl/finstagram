import React, { Component } from 'react';
import './styles/NotFound.css';

export default class NotFound extends Component {

    openPopup = () => {
        const width = 600, height = 600
        const left = (window.innerWidth / 2) - (width / 2)
        const top = (window.innerHeight / 2) - (height / 2)

        const url = "http://localhost:5000/auth/facebook"

        return window.open(url, '',
            `toolbar=no, location=no, directories=no, status=no, menubar=no, 
          scrollbars=no, resizable=no, copyhistory=no, width=${width}, 
          height=${height}, top=${top}, left=${left}`
        )
    }

    render() {
        return (
            <p className="NotFound">
                Sorry, nothing here. Please login.
            </p>
        );
    }
}