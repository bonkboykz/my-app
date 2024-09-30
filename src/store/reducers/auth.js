const initialState = {
  auth: {
    isLoggedIn: false,
    user: null,
  },
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOGIN":
      return {
        ...state,
        auth: {
          ...state.auth,
          isLoggedIn: true,
          user: action.payload,
        },
      };

    case "LOGOUT":
      return {
        ...state,
        auth: {
          ...state.auth,
          isLoggedIn: false,
          user: null,
        },
      };
    default:
      return state;
  }
};
