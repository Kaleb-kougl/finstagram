import React, { Component } from 'react';
import { ButtonToolbar, ToggleButtonGroup, ToggleButton } from 'react-bootstrap';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTh, faImage } from '@fortawesome/free-solid-svg-icons';

library.add(faTh, faImage);

class ProfileViewSelector extends Component {
    onClick = (type) => {
        console.log(type)
    }
    render() {
        return (
            <ButtonToolbar className="profile-view-container">
                <ToggleButtonGroup
                    type="radio"
                    name="view-options"
                    defaultValue={`thumbnail`}
                    style={{ width: `100%` }}
                >
                    <ToggleButton
                        value={`thumbnail`}
                        onClick={this.onClick(`thumbnail`)}
                        className="thumbnail-view-btn btn"
                        variant="light"
                    >
                        <FontAwesomeIcon icon="th" />
                    </ToggleButton>
                    <ToggleButton
                        value={`portrait`}
                        onClick={this.onClick(`portrait`)}
                        className="thumbnail-view-btn btn"
                        variant="light"
                    >
                        <FontAwesomeIcon icon="image" />
                    </ToggleButton>
                </ToggleButtonGroup>
            </ButtonToolbar>
        )
    }
}

export default ProfileViewSelector;
