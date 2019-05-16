import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button } from 'react-bootstrap';
import { Link } from '@reach/router';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import './styles/SinglePhoto.css';

library.add(faArrowLeft);

class SinglePhoto extends Component {
    constructor(props) {
        super(props);
        this.state = {
            comments: [],
            likes: 0,
            description: null,
            img: null,
        }
    }

    grabSingularPhoto = (id) => {
        let viewingPhoto;
        if (this.props.photos !== null) {
            viewingPhoto = this.props.photos.filter(photo => photo.photoId === this.props.photoId);
            this.setState({ img: viewingPhoto[0] || null });
        } else {
            // dispatch action to get the photo
        }
    }

    componentDidMount() {
        this.grabSingularPhoto(this.props.photoId);
    }

    render() {
        return (
            <div className="singlePhotoContainer">
                <Link to="../../" className="back-btn">
                    <Button variant="outline-danger">
                        <FontAwesomeIcon icon="arrow-left" className="backArrow" />
                    </Button>
                </Link>
                {this.state.img ? <img src={this.state.img.photo} alt={this.state.img.description} className="singlePhoto" /> : <div>no image found</div>}
                {this.state.img ? <p className="description">{this.state.img.description}</p> : <p>Loading...</p>}
                <div>comments</div>
            </div>
        )
    }
}

const mapStateToProps = ({ profile }) => ({
    photos: profile.photos,
});

export default connect(mapStateToProps, null)(SinglePhoto);
