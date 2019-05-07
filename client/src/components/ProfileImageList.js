import React, { Component } from 'react';
import { connect } from 'react-redux';
import { attemptLoadProfile } from '../actions';
import { Link } from "@reach/router";
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
        if (!this.props.photos) {
            this.props.attemptLoadProfile();
        } else {
            this.setState({ isLoading: false });
        }
        console.log('attempting to load profile');
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.props.photos && !prevProps.photos) {
            this.setState({ isLoading: false });
        }
    }

    render() {
        const Images = this.state.isLoading ? <p>loading!</p> : this.props.thumbnailView ? this.props.photos.map((image, i) =>
            <Link to={`/photo/${image.photoId}`} key={i}>
                <img
                    src={image.photo}
                    alt={image.description}
                    className={`thumbnail space${i % 3}`}
                />
            </Link>
        ) : this.props.photos.map((image, i) =>
            <Link to={`/photo/${image.photoId}`} key={i}>
                <img
                    src={image.photo}
                    alt={image.description}
                    className="imagefeed-image"
                />
            </Link>
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