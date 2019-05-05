import { VIEW_THUMBNAIL, VIEW_PORTRAIT } from '../constants/actionTypes';

const initialState = {
    thumbnailView: true,
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
        default:
            return state;
    }
}