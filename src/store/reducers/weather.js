const initialState = {
  data: null,
  loading: false,
  error: null,
};

export const weatherReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_WEATHER_REQUEST":
      return {
        ...state,
        loading: true,
      };
    case "FETCH_WEATHER_SUCCESS":
      return {
        data: action.payload,
        loading: false,
        error: null,
      };
    case "FETCH_WEATHER_FAILURE":
      return {
        data: null,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
