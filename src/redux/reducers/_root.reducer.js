import { combineReducers } from 'redux';
import errors from './errors.reducer';
import user from './user.reducer';
import trails from './trail.reducer';
import favorites from './favorites.reducer';
import getFavorites from './getFavorites.reducer';
import feedback from './feedback.reducer';
import deleteFav from './deleteFav.reducer';
import getRating from './rating.reducer';
import editUser from './editUser.reducer';

// rootReducer is the primary reducer for our entire project
// It bundles up all of the other reducers so our project can use them.
// This is imported in index.js as rootSaga

// Lets make a bigger object for our store, with the objects from our reducers.
// This is what we get when we use 'state' inside of 'mapStateToProps'
const rootReducer = combineReducers({
  errors, // contains registrationMessage and loginMessage
  user, // will have an id and username if someone is logged in
  trails,
  favorites, 
  getFavorites,
  feedback,
  deleteFav,
  getRating,
  editUser,
});

export default rootReducer;
