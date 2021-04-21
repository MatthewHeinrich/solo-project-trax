const feedbackReducer = (state = [], action) => {
    switch (action.type) {
    case 'GET_FEEDBACK':
        return action.payload;
    default:
        return state;
    }
};

  // user will be on the redux state at:
  // state.user
export default feedbackReducer;