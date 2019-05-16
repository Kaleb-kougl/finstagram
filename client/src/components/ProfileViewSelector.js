import React from 'react';
import { ButtonToolbar, ToggleButtonGroup, ToggleButton } from 'react-bootstrap';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTh, faImage } from '@fortawesome/free-solid-svg-icons';
import { connect } from 'react-redux';
import { change_to_thumbnail, change_to_portrait } from '../actions';

library.add(faTh, faImage);

function ProfileViewSelector({ change_to_portrait, change_to_thumbnail }, ...props) {
    return (
        <ButtonToolbar className="profile-view-container">
            <ToggleButtonGroup
                type="radio"
                name="view-options"
                style={{ width: `100%` }}
                defaultValue={props.thumbnailView ? `thumbnail` : `portrait`}
            >
                <ToggleButton
                    value={`thumbnail`}
                    onClick={change_to_thumbnail}
                    className="thumbnail-view-btn btn"
                    variant="light"
                >
                    <FontAwesomeIcon icon="th" />
                </ToggleButton>
                <ToggleButton
                    value={`portrait`}
                    onClick={change_to_portrait}
                    className="thumbnail-view-btn btn"
                    variant="light"
                >
                    <FontAwesomeIcon icon="image" />
                </ToggleButton>
            </ToggleButtonGroup>
        </ButtonToolbar>
    )
}

const mapStateToProps = ({ profile }) => {
    return {
        thumbnailView: profile.thumbnailView
    }
}

const mapDispatchToProps = ({ change_to_portrait, change_to_thumbnail });

export default connect(mapStateToProps, mapDispatchToProps)(ProfileViewSelector);
