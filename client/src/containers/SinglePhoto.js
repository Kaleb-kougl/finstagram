import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button } from 'react-bootstrap';
import { Link } from '@reach/router';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { attemptAWSLoadPhotoComments, clearPhotoDetails } from '../actions';
import './styles/SinglePhoto.css';

library.add(faArrowLeft);

class SinglePhoto extends Component {
    constructor(props) {
        super(props);
        this.state = {
            comments: null,
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
        this.props.attemptAWSLoadPhotoComments(this.props.photoId);
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.comments === null && this.props.comments !== null) {
            this.setState({ comments: this.props.comments });
        }
    }

    renderComments = () => {
        const comments = this.state.comments.map((comment, i) =>
            <p key={i} className="comment">
                <span className="comment-username">{comment.userId}</span> {comment.commentText}
            </p>
        );
        if (comments.length === 0) {
            return <p className="comment">No comments!</p>;
        }
        return comments;
    }

    componentWillUnmount() {
        this.props.clearPhotoDetails();
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
                <article className="comments-container">
                    {this.state.comments !== null ? this.renderComments() : <div>Loading comments...</div>}
                </article>
            </div>
        )
    }
}

const mapStateToProps = ({ profile, photoDetails }) => ({
    photos: profile.photos,
    comments: photoDetails.comments
});

const mapDispatchToProps = { attemptAWSLoadPhotoComments, clearPhotoDetails };

export default connect(mapStateToProps, mapDispatchToProps)(SinglePhoto);
