import axios from 'axios';
import { put, takeLatest, takeEvery } from 'redux-saga/effects';

// worker Saga: will be fired on "FETCH_USER" actions
function* setEdit(action) {
    console.log(action.payload);
try {

    yield axios.put('/api/edit', action.payload); // , config

    yield put({ type: 'SET_USER', payload: action.payload });
} catch (error) {
    console.log('User get request failed', error);
    }
}

function* editUserSaga() {
    yield takeEvery('EDIT_USER', setEdit);
}

export default editUserSaga;