import {
  call,
  put,
  takeEvery,
  takeLatest,
  takeLeading,
} from "redux-saga/effects";

function fetchWeatherFromApi() {
  return fetch(
    "https://api.open-meteo.com/v1/forecast?latitude=43.23&longitude=76.88&current=temperature_2m,wind_speed_10m&hourly=temperature_2m,relative_humidity_2m,wind_speed_10m"
  ).then((res) => res.json());
}

// function slowPromise() {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve();
//     }, 5000);
//   });
// }

function* fetchWeatherSaga() {
  yield put({ type: "FETCH_WEATHER_REQUEST" });
  try {
    const data = yield call(fetchWeatherFromApi);
    // yield call(slowPromise);

    yield put({ type: "FETCH_WEATHER_SUCCESS", payload: data });
  } catch (error) {
    yield put({ type: "FETCH_WEATHER_FAILURE", payload: error.message });
  }
}

export function* watchFetchDataSaga() {
  yield takeLeading("FETCH_WEATHER", fetchWeatherSaga);
}
