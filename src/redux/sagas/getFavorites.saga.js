import axios from 'axios';
import { put, takeLatest, takeEvery } from 'redux-saga/effects';

// worker Saga: will be fired on "FETCH_USER" actions
function* fetchFavorites() {
try {
    const response = yield axios.get('/api/favorites'); // , config

    yield put({ type: 'GET_FAVORITES', payload: response.data });
} catch (error) {
    console.log('User get request failed', error);
    }
}

function* getFavorites() {
    yield takeEvery('FETCH_FAVORITES', fetchFavorites);
}

export default getFavorites;
