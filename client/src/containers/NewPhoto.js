import React, { Component } from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import config from "../config";
import "./styles/NewPhoto.css";

class NewPhoto extends Component {
    constructor(props) {
        super(props);

        this.state = {
            photo: null,
            isLoading: null,
            description: "",
            tempUrl: null,
            validPhoto: false,
            validDescription: false,
        };
    }

    /**
     * Returns a boolean if photo and description is valid
     */
    validateForm() {
        return this.state.photo != null && this.state.description.length < 121;
    }

    validateDescriptionLength(description) {
        return description.length < 121;
    }

    /**
     * returns a boolean if the photo is a valid size
     */
    validatePhoto = (photo) => {
        return photo.size < config.MAX_ATTACHMENT_SIZE;
    };

    /**
     * Returns the local url
     */
    getLocalUrl = event => {
        return URL.createObjectURL(event.target.files[0]);
    }

    handleFormChange = event => {
        const valid = this.validateDescriptionLength(event.target.value);
        this.setState({
            [event.target.id]: event.target.value,
            validDescription: valid
        })
    }

    handlePhotoChange = event => {
        if (event.target.files.length !== 0) {
            const validPhoto = this.validatePhoto(event.target.files[0]);
            const tempUrl = this.getLocalUrl(event);
            this.setState({
                photo: event.target.files[0],
                validPhoto: validPhoto,
                tempUrl: tempUrl
            });
        }
    }

    handleSubmit = async event => {
        event.preventDefault();

        if (this.state.photo && this.state.photo.size > config.MAX_ATTACHMENT_SIZE) {
            alert(`Please pick a photo smaller than ${config.MAX_ATTACHMENT_SIZE / 1000000} MB.`);
            return;
        }

        this.setState({ isLoading: true });
    }

    render() {
        const currentPhoto = <img
            src={this.state.tempUrl}
            alt="Preview of what will be uploaded."
            className="preview-img"
        />;

        return (
            <>
                {this.state.photo && currentPhoto}
                <div className="NewPhoto" >
                    <Form onSubmit={this.handleSubmit}>
                        <Form.Group controlId="photo">
                            <Form.Label>Photo</Form.Label>
                            <Form.Control
                                onChange={this.handlePhotoChange}
                                type="file"
                                accept="image/png, image/jpeg, image/gif"
                                isInvalid={this.state.photo && !this.state.validPhoto}
                            />
                            <Form.Control.Feedback type="invalid">
                                Please pick a photo smaller than {config.MAX_ATTACHMENT_SIZE / 1000000} MB.
                            </Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group controlId="description">
                            <Form.Label className="description-label">Description</Form.Label>
                            <Form.Control
                                onChange={this.handleFormChange}
                                value={this.state.description}
                                as="textarea"
                                isInvalid={this.state.description && !this.state.validDescription}
                                placeholder="Write a description of your image here"
                            />
                            <Form.Control.Feedback type="invalid">
                                Please keep your description less than 120 characters.
                            </Form.Control.Feedback>
                        </Form.Group>
                        <Button
                            disabled={!this.validateForm()}
                            type="submit"
                            className="btn btn-primary"
                        >
                            Submit
                    </Button>
                    </Form>
                </div>
            </>
        );
    }
}

export default NewPhoto;
