const trailsReducer = (state = [], action) => {
    switch (action.type) {
    case 'SET_TRAILS':
        return action.payload;
    default:
        return state;
    }
};

  // user will be on the redux state at:
  // state.user
export default trailsReducer;
