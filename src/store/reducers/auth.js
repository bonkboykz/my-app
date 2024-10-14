const initialState = {
  isLoggedIn: false,
  user: null,
  jwt: null,
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOGIN":
      return {
        ...state,
        isLoggedIn: true,
        jwt: action.payload.jwt,
        user: action.payload.user,
      };

    case "LOGOUT":
      return {
        ...state,
        isLoggedIn: false,
        user: null,
        jwt: null,
      };
    default:
      return state;
  }
};
