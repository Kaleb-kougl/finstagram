import React, { Component } from 'react';
import { connect } from 'react-redux';

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
        console.log(this.props.photos);
        this.grabSingularPhoto(this.props.photoId);
    }

    render() {
        return (
            <div>
                {this.state.img ? <img src={this.state.img.photo} alt={this.state.img.description} /> : <div>no image found</div>}
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
