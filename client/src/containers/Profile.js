import React from 'react';
import {
    ProfileHeader,
    ProfileImageList,
    ProfileViewSelector,
    ScrollToTopButton
} from '../components';

export default function Profile() {
    return (
        <>
            <ProfileHeader />
            <ProfileViewSelector />
            <ProfileImageList />
            <ScrollToTopButton />
        </>
    )
}
