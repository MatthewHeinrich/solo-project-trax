import axios from 'axios';
import { put, takeLatest, takeEvery } from 'redux-saga/effects';

// worker Saga: will be fired on "FETCH_USER" actions
function* fetchRating() {
try {
  
    const response = yield axios.get('/api/rating'); // , config

    yield put({ type: 'GET_RATING', payload: response.data });
} catch (error) {
    console.log('User get request failed', error);
    }
}

function* ratingSaga() {
    yield takeEvery('FETCH_RATING', fetchRating);
}

export default ratingSaga;