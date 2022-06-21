export const initialState = {
  user: null,
  isAuthenticated: false,
};
export const actionTypes = {
  SET_USER: "SET_USER",
  SET_AUTHENTICATED: "SET_AUTHENTICATED",
};

const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case actionTypes.SET_USER:
      return {
        ...state,
        user: action.user,
      };
    case actionTypes.SET_AUTHENTICATED:
      return {
        ...state,
        isAuthenticated: action.isAuthenticated,
      };

    default:
      return state;
  }
};

export default reducer;
