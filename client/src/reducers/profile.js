import {
    VIEW_THUMBNAIL,
    VIEW_PORTRAIT,
    LOAD_PROFILE_ATTEMPT,
    LOAD_PROFILE_SUCCESS,
    LOAD_PROFILE_FAILED
} from '../constants/actionTypes';

const initialState = {
    thumbnailView: true,
    photos: null,
    error: null,
};

export default function (state = initialState, action) {
    console.log(`profileReducer`, state, action);
    switch (action.type) {
        case VIEW_THUMBNAIL:
            return {
                ...state,
                thumbnailView: true,
            }
        case VIEW_PORTRAIT:
            return {
                ...state,
                thumbnailView: false,
            }
        case LOAD_PROFILE_ATTEMPT:
            return {
                ...state,
            }
        case LOAD_PROFILE_SUCCESS:
            return {
                ...state,
                photos: action.payload.photos,
            }
        case LOAD_PROFILE_FAILED:
            return {
                ...state,
                error: action.payload.error,
            }
        default:
            return state;
    }
}