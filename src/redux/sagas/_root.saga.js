import { all } from 'redux-saga/effects';
import loginSaga from './login.saga';
import registrationSaga from './registration.saga';
import userSaga from './user.saga';
import trailsSaga from './trails.saga';
import favoriteSaga from './favorites.saga'
import getFavoritesSaga from './getFavorites.saga';
import feedbackSaga from './feedback.saga';
import deleteFavSaga from './deleteFav.saga';
import ratingSaga from './rating.saga';
import userEditSaga from './editUser.saga';

// rootSaga is the primary saga.
// It bundles up all of the other sagas so our project can use them.
// This is imported in index.js as rootSaga

// some sagas trigger other sagas, as an example
// the registration triggers a login
// and login triggers setting the user
export default function* rootSaga() {
  yield all([
    loginSaga(), // login saga is now registered
    registrationSaga(),
    userSaga(),
    trailsSaga(),
    favoriteSaga(),
    getFavoritesSaga(),
    feedbackSaga(),
    deleteFavSaga(),
    ratingSaga(),
    userEditSaga(),
  ]);
}
