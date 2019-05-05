import { put, takeLatest, select, call } from 'redux-saga/effects';
import { API, Storage } from 'aws-amplify';
import * as types from '../constants/actionTypes';
// import { successfulAWSPostPhoto } from '../actions/postPhotoActions';

const getPhoto = ({ postPhoto }) => postPhoto.photo;
const getDescription = ({ postPhoto }) => postPhoto.description;

// rename this to post photo key and description
async function postPhoto(photo, description, name) {
    let storedPhoto;
    try {
        const filename = `${Date.now()}-${name}`;
        storedPhoto = await Storage.vault.put(filename, photo, {
            contentType: photo.type,
        });
    } catch (error) {
        console.error(error);
        return { error };
    }
    try {
        const response = await API.post("photos", "/photos", {
            body: {
                "description": description,
                "photo": storedPhoto.key,
            },
            headers: {

            }
        });
        console.log(response);
        return { response };
    } catch (error) {
        console.error(error);
        return { error };
    }
}


function* attemptAWSPostPhoto() {
    console.log('attempting aws post photo in saga');

    const photo = yield select(getPhoto);
    const name = photo['name'];
    const description = yield select(getDescription);

    const { response, error } = yield call(postPhoto, photo, description, name);
    console.log(response, error);

    if (response) {
        yield put({ type: types.SUCCESSFUL_AWS_POST_PHOTO, payload: { isSuccess: true } })
    } else {
        yield put({ type: types.FAILED_AWS_POST_PHOTO, payload: { error } })
    }
}

export default function* postPhotoWatcher() {
    yield takeLatest(types.ATTEMPT_AWS_POST_PHOTO, attemptAWSPostPhoto);
}