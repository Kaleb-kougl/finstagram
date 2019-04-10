import React, { Component } from 'react'

class ProfileViewSelector extends Component {
    onClick = (type) => {
        console.log(type)
    }
    render() {
        return (
            <section>
                <button
                    onClick={this.onClick(`thumbnail`)}
                >
                    Thumbnails
                </button>
                <button
                    onClick={this.onClick(`portrait`)}
                >
                    Portrait
                </button>
            </section>
        )
    }
}

export default ProfileViewSelector;
