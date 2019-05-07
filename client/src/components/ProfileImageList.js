import React, { Component } from 'react';
import { connect } from 'react-redux';
import { attemptLoadProfile } from '../actions';
import './styles/ProfileImageList.css';

class ProfileImageList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            images: null,
            thumbnailView: true,
            isLoading: true,
        }
    }

    componentWillReceiveProps() {
        console.log(this.props);
    }

    componentWillMount() {
        this.props.attemptLoadProfile();
        console.log('attempting to load profile');
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.props.photos && !prevProps.photos) {
            this.setState({ isLoading: false });
        }
    }

    render() {
        const Images = this.state.isLoading ? <p>loading!</p> : this.props.thumbnailView ? this.props.photos.map((image, i) =>
            <img
                src={image.photo}
                key={i}
                alt={image.description}
                className={`thumbnail space${i % 3}`}
            />
        ) : this.props.photos.map((image, i) =>
            <img
                src={image.photo}
                key={i}
                alt={image.description}
                className="imagefeed-image"
            />
        );
        return (
            <div className="imagefeed">
                {Images}
            </div>
        )
    }
}

const mapStateToProps = ({ profile }) => {
    console.log(profile);
    return {
        thumbnailView: profile.thumbnailView,
        photos: profile.photos,
    }
}

const mapDispatchToProps = { attemptLoadProfile };

export default connect(mapStateToProps, mapDispatchToProps)(ProfileImageList);