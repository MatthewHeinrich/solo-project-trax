import axios from 'axios';
import { put, takeLatest, takeEvery } from 'redux-saga/effects';

// worker Saga: will be fired on "FETCH_USER" actions
function* fetchFeedback() {
try {
    const response = yield axios.get('/api/feedback'); // , config

    yield put({ type: 'GET_FEEDBACK', payload: response.data });
} catch (error) {
    console.log('User get request failed', error);
    }
}

function* getFeedback() {
    yield takeEvery('FETCH_FEEDBACK', fetchFeedback);
}

export default getFeedback;
