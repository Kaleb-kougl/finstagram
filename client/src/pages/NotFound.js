import React from 'react';

export default function NotFound() {
    return (
        <>
            <p>
                Sorry, nothing here. Please login.
            </p>
            <a href='localhost:5000/auth/facebook'>Login in with Facebook</a>
        </>
    )
}