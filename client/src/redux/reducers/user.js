import { LOGIN, LOGOUT } from '../constants/actionTypes';

const initialState = {
    user: null,
    disabledPopup: false,
};

export default function (state = initialState, action) {
    switch (action.type) {
        case LOGIN:
            return {
                ...state,
                user: action.payload,
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
