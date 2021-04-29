import axios from 'axios';
import { put, takeLatest, takeEvery } from 'redux-saga/effects';

// worker Saga: will be fired on "FETCH_USER" actions
function* fetchTrails() {
try {
  
    const response = yield axios.get('/api/trails'); // , config

    yield put({ type: 'SET_TRAILS', payload: response.data });
} catch (error) {
    console.log('User get request failed', error);
    }
}

function* userSaga() {
    yield takeEvery('FETCH_TRAILS', fetchTrails);
}

export default userSaga;
