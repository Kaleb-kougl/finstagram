import { put, takeLatest, select, call } from 'redux-saga/effects';
import { API } from 'aws-amplify';
import * as types from '../constants/actionTypes';

const getPhotoId = ({ photoDetails }) => photoDetails.photoId;
const getComment = ({ postComment }) => postComment.newComment;

async function postComment(photoId, comment) {
    try {
        const response = await API.post("photos", `/comments/${photoId}`, {
            body: {
                "commentText": comment
            },
            headers: {},
        });
        console.log(response);
        return { response };
    } catch (error) {
        console.error(error);
        return { error };
    }
}


function* attemptAWSPostComment() {
    console.log('attempting aws post comment in saga');

    const photoId = yield select(getPhotoId);
    const comment = yield select(getComment);

    const { response, error } = yield call(postComment, photoId, comment);
    console.log(response, error);

    if (response) {
        yield put({ type: types.POST_COMMENT_SUCCESSFUL, payload: { isSuccess: true } });
    } else {
        yield put({ type: types.POST_COMMENT_FAILED, payload: { error } });
    }
}

export default function* postCommentWatcher() {
    yield takeLatest(types.POST_COMMENT_ATTEMPT, attemptAWSPostComment);
}