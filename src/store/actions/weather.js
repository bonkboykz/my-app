export const fetchWeather = () => {
  return async (dispatch) => {
    dispatch({ type: "FETCH_WEATHER_REQUEST" });
    try {
      const response = await fetch(
        "https://api.open-meteo.com/v1/forecast?latitude=43.23&longitude=76.88&current=temperature_2m,wind_speed_10m&hourly=temperature_2m,relative_humidity_2m,wind_speed_10m"
      );
      const data = await response.json();

      dispatch({ type: "FETCH_WEATHER_SUCCESS", payload: data });
    } catch (error) {
      dispatch({ type: "FETCH_WEATHER_FAILURE", payload: error.message });
    }
  };
};
