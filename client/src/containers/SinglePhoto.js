import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, Form } from 'react-bootstrap';
import { Link } from '@reach/router';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faCommentAlt } from '@fortawesome/free-solid-svg-icons';
import { attemptAWSLoadPhotoComments, clearPhotoDetails } from '../actions';
import './styles/SinglePhoto.css';

library.add(faArrowLeft, faCommentAlt);

class SinglePhoto extends Component {
    constructor(props) {
        super(props);
        this.state = {
            comments: null,
            likes: 0,
            description: null,
            img: null,
            commentFormVisible: false,
            newComment: '',
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

    componentWillUnmount() {
        this.props.clearPhotoDetails();
    }

    handleClick = () => {
        this.setState({ commentFormVisible: true });
    }

    handleChange = event => {
        this.setState({
            [event.target.id]: event.target.value
        });
    }

    validateComment = () => {
        return this.state.newComment.length > 0 && this.state.newComment.length < 120;
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

    renderCommentForm = () => {
        return (
            <Form className="comment-form">
                <Form.Group controlId="newComment">
                    <Form.Label>Write your comment here!</Form.Label>
                    <Form.Control
                        as="textarea"
                        rows="3"
                        value={this.state.newComment}
                        onChange={this.handleChange}
                        isInvalid={this.state.newComment.length > 120}
                    />
                    <Form.Control.Feedback type="invalid">
                        Please limit your comment size to less than 120 characters.
                    </Form.Control.Feedback>
                </Form.Group>
                <Button
                    disabled={!this.validateComment()}
                    variant="light"
                    type="submit"
                >
                    Submit!
                </Button>
            </Form>
        );
    }

    render() {
        return (
            <div className="singlePhotoContainer">
                <Link to="../../" className="back-btn">
                    <Button variant="outline-danger">
                        <FontAwesomeIcon icon="arrow-left" className="backArrow" />
                    </Button>
                </Link>
                {this.state.img ? <img src={this.state.img.photo} alt={this.state.img.description} className="singlePhoto" /> : <p>No image found.</p>}
                <article className="photo-details">
                    {this.state.img ? <p className="description">{this.state.img.description}</p> : <p className="description">Loading...</p>}
                    <Button variant="light" onClick={this.handleClick} className="comment-btn">
                        <FontAwesomeIcon icon="comment-alt" className="comment-icon" />
                    </Button>
                </article>
                <article className="comments-container">
                    {this.state.comments !== null ? this.renderComments() : <div>Loading comments...</div>}
                    {this.state.commentFormVisible && this.renderCommentForm()}
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
