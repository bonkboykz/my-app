import { combineReducers } from "redux";
import { authReducer } from "./auth";
import { themeReducer } from "./theme";
import { weatherReducer } from "./weather";

export const rootReducer = combineReducers({
  auth: authReducer,
  theme: themeReducer,
  weather: weatherReducer,
});

export default rootReducer;
