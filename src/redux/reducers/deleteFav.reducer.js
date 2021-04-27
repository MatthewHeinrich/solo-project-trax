const deleteFavReducer = (state = [], action) => {
    switch (action.type) {
    case 'REMOVE_FAV':
        return action.payload;
    default:
        return state;
    }
};

  // user will be on the redux state at:
  // state.user
export default deleteFavReducer;