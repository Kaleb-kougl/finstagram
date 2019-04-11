import { THUMBNAIL_VIEW, PORTRAIT_VIEW } from '../constants/actionTypes';

const initialState = {
    thumbnailView: true,
};

export default function (state = initialState, action) {
    console.log(`profileReducer`, state, action);
    switch (action.type) {
        case THUMBNAIL_VIEW:
            return {
                ...state,
                thumbnailView: true,
            }
        case PORTRAIT_VIEW:
            return {
                ...state,
                thumbnailView: false,
            }
        default:
            return state;
    }
}