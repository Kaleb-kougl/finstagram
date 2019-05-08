import React from 'react';
import { Button } from 'react-bootstrap';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import './styles/LoaderButton.css';

library.add(faSpinner);

const LoaderButton = ({
    isLoading,
    text,
    loadingText,
    className = "",
    disabled = false,
    ...props
}) =>
    <Button
        className={`LoaderButton ${className}`}
        disabled={disabled || isLoading}
        {...props}
    >
        {isLoading && <FontAwesomeIcon icon="spinner" className="spinning" id="loading-svg" />}
        {!isLoading ? text : loadingText}
    </Button>;

export default LoaderButton;
