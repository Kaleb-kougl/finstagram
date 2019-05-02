import { combineReducers } from 'redux';
import loginReducer from './login';
import profileReducer from './profile';
import signupReducer from './signup';

export default combineReducers({
    profile: profileReducer,
    user: loginReducer,
    signup: signupReducer,
});