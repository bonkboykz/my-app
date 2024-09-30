import { createStore } from "redux";
import rootReducers from "./reducers";
import { loadState, saveState } from "./localStorage";

const persistedState = loadState();

console.log("persistatedStae", persistedState);

export const store = createStore(
  rootReducers,
  persistedState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

store.subscribe(() => {
  saveState(store.getState());
});
