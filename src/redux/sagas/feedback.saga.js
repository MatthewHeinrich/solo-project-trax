import axios from 'axios';
import { put, takeLatest, takeEvery } from 'redux-saga/effects';

// worker Saga: will be fired on "FETCH_USER" actions
function* sendFeedback(action) {
    console.log(action.payload)
try {
    yield axios.post('/api/feedback', action.payload); // , config

    yield put({ type: 'SET_FEEDBACK', payload: action.payload });
} catch (error) {
    console.log('Error sending feedback', error);
    }
}

function* getFeedback() {
    yield takeEvery('SEND_FEEDBACK', sendFeedback);
}

export default getFeedback;
