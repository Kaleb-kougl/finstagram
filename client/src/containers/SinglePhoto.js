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
        console.log(this.props.photos);
        const viewingPhoto = this.props.photos.filter(photo => photo.photoId === this.props.photoId);
        this.setState({ img: viewingPhoto[0] || null });
    }

    componentDidMount() {
        console.log(this.props.photos);
        this.grabSingularPhoto(this.props.photoId);
    }

    render() {
        return (
            <div>
                <p>Header</p>
                <div>img: {this.props.photoId}</div>
                {this.state.img ? <img src={this.state.img.photo} alt={this.state.img.description} /> : <div>no image found</div>}
                <div>comments</div>
            </div>
        )
    }
}

const mapStateToProps = ({ profile }) => ({
    photos: profile.photos,
});

export default connect(mapStateToProps, null)(SinglePhoto);
