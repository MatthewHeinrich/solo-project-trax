import axios from 'axios';
import { put, takeLatest, takeEvery } from 'redux-saga/effects';

// worker Saga: will be fired on "FETCH_USER" actions
function* setFavorites(action) {
    console.log(action.payload);
try {

    yield axios.post('/api/trails', action.payload); // , config

    yield put({ type: 'SET_FAVORITE', payload: action.payload});
} catch (error) {
    console.log('User get request failed', error);
    }
}

function* favoriteSaga() {
    yield takeEvery('ADD_FAVORITE', setFavorites);
}

export default favoriteSaga;