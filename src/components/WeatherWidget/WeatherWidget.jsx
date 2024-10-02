import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchWeather } from "../../store/actions/weather";

const Content = ({ loading, error, data }) => {
  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!data) {
    return;
  }

  return (
    <div>
      <div>Temperature: {data.current.temperature_2m}</div>
      <div>Wind Speed: {data.current.wind_speed_10m}</div>
    </div>
  );
};

export const WeatherWidget = () => {
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector((state) => state.weather);

  const refetchWeather = () => {
    // dispatch(fetchWeather());
    dispatch({ type: "FETCH_WEATHER" });
  };

  useEffect(() => {
    if (data) {
      return;
    }

    refetchWeather();
  }, []);

  return (
    <div>
      <h1>Weather in Almaty</h1>

      <button onClick={refetchWeather}>Refetch</button>

      <Content loading={loading} error={error} data={data} />
    </div>
  );
};
