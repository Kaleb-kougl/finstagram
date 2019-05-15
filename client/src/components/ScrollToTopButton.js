import React, { Component } from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronCircleUp } from '@fortawesome/free-solid-svg-icons';
import './styles/ScrollToTopButton.css';

library.add(faChevronCircleUp);

class ScrollToTopButton extends Component {
    constructor(props) {
        super(props)
        this.state = {
            windowHeight: null,
            isVisible: false,
        }
    }

    componentDidMount() {
        this.setState({ windowHeight: window.innerHeight });
        window.addEventListener('scroll', this.handleScroll);
        console.log('window height is: ', window.innerHeight);
    }

    handleScroll = (event) => {
        console.log(window.scrollY);
        if (window.scrollY > this.state.windowHeight) {
            this.setState({ isVisible: true });
        } else {
            this.setState({ isVisible: false });
        }
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }

    render() {
        let classes;
        this.state.isVisible ? classes = "visible" : classes = "invisible";
        return (
            <div onClick={
                () => window.scrollTo({
                    top: 0,
                    left: 0,
                    behavior: 'smooth'
                })}
                className={classes}
            >
                <FontAwesomeIcon icon="chevron-circle-up" className="UpArrow" />
            </div>
        )
    }
}

export default ScrollToTopButton;