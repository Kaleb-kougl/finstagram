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

    componentWillMount() {
        if (!this.props.photos) {
            this.props.attemptLoadProfile();
            this.setState({ thumbnailView: this.props.thumbnailView });
        } else {
            this.setState({ isLoading: false });
        }
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.props.photos && !prevProps.photos) {
            this.setState({ isLoading: false });
        }
    }

    render() {
        const Images = this.state.isLoading ? <p>loading!</p> : this.props.thumbnailView ? this.props.photos.map((image, i) =>
            <Link to={`/photo/${image.photoId}`} key={i} className="thumbnail-links">
                <img
                    src={image.photo}
                    alt={image.description}
                    className={`thumbnail space${i % 3}`}
                />
            </Link>
        ) : this.props.photos.map((image, i) =>
            <Link to={`/photo/${image.photoId}`} key={i} className="imagefeed-links">
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
    return {
        thumbnailView: profile.thumbnailView,
        photos: profile.photos,
    }
}

const mapDispatchToProps = { attemptLoadProfile };

export default connect(mapStateToProps, mapDispatchToProps)(ProfileImageList);