import axios from 'axios';
import { put, takeLatest, takeEvery } from 'redux-saga/effects';

// worker Saga: will be fired on "FETCH_USER" actions
function* deleteFavorite(action) {
    console.log(action.payload);
    const id = action.payload
try {   
    yield axios.delete(`http://localhost:3000/#/delete/${id}`)

    // yield axios({
    //     method: 'DELETE',
    //     url:`http://localhost:3000/#/delete/${action.payload}`,
    //     data: action.payload
    // }) // , config

    yield put({ type: 'REMOVE_FAV', payload: action.payload});
} catch (error) {
    console.log('User get request failed', error);
    }
}

function* deleteFavSaga() {
    yield takeEvery('DELETE_FAV', deleteFavorite);
}

export default deleteFavSaga;