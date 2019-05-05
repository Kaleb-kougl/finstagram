import { combineReducers } from 'redux';
import loginReducer from './login';
import profileReducer from './profile';
import signupReducer from './signup';
import postPhotoReducer from './postPhoto';

export default combineReducers({
    profile: profileReducer,
    user: loginReducer,
    signup: signupReducer,
    postPhoto: postPhotoReducer,
});