import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog } from '@fortawesome/free-solid-svg-icons';
import { connect } from 'react-redux';
import './styles/ProfileHeader.css';

library.add(faCog);

class ProfileHeader extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: "Kaleb Kougl",
            bio: `Gonna ride 'til I can't no more!`,
            postCount: 0,
            followersCount: 0,
            profileCounts: 0,
        }
    }

    componentDidMount() {
        if (this.props.photos) {
            this.setState({ postCount: this.props.photos.length });
        }
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.props.photos && !prevProps.photos) {
            this.setState({ postCount: this.props.photos.length });
        }
    }

    render() {
        return (
            <section className="profile-header">
                <img
                    src="data:image/jpeg;base64,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"
                    alt="profile"
                    className="profile-picture"
                />
                <p className="profile-name">
                    {this.state.user}
                </p>
                <p id="profile-bio">
                    {this.state.bio}
                </p>
                <p className="profile-counts" id="post-count">
                    {this.state.postCount}<br />Posts
                </p>
                <p className="profile-counts" id="followers-count">
                    {this.state.followersCount}<br />Followers
                </p>
                <p className="profile-counts" id="following-count">
                    {this.state.profileCounts}<br />Following
                </p>
                <Button variant="light" className="edit-profile-btn">Edit Profile</Button>
                <Button variant="light" className="settings-profile-btn">
                    <FontAwesomeIcon icon="cog" className="settings-svg" />
                </Button>

            </section >
        )
    }
}

const mapStateToProps = ({ profile }) => {
    return {
        thumbnailView: profile.thumbnailView,
        photos: profile.photos,
    }
}

export default connect(mapStateToProps, null)(ProfileHeader);