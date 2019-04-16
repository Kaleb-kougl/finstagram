import {
    ATTEMPT_FB_LOGIN,
    LOGOUT,
    SUCCESSFUL_FB_LOGIN
} from '../constants/actionTypes';

const initialState = {
    user: null,
    disabledPopup: false,
    loading: false,
};

export default function (state = initialState, action) {
    switch (action.type) {
        case ATTEMPT_FB_LOGIN:
            console.log(action);
            return {
                ...state,
                user: action.payload,
                loading: true,
            }
        case SUCCESSFUL_FB_LOGIN:
            // b/c no clue how this user info is going to get returned
            console.log(action);
            return {
                ...state,
                user: action.payload
            }
        case LOGOUT:
            return {
                ...state,
                user: null,
            }
        default:
            return state;
    }
}
