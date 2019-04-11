import React from 'react';
import {
    ProfileHeader,
    ProfileImageList,
    ProfileViewSelector
} from '../components';

export default function Profile() {
    return (
        <>
            <ProfileHeader />
            <ProfileViewSelector />
            <ProfileImageList />
        </>
    )
}
