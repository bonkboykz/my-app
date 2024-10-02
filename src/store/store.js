import { applyMiddleware, compose, createStore } from "redux";
import rootReducers from "./reducers";
import { loadState, saveState } from "./localStorage";
// import { thunk } from "redux-thunk";
import createSagaMiddleware from "@redux-saga/core";
import { watchFetchDataSaga } from "./actions/weatherSaga";

const persistedState = loadState();

const sagaMiddleware = createSagaMiddleware();

export const store = createStore(
  rootReducers,
  persistedState,
  compose(
    // applyMiddleware(thunk),
    applyMiddleware(sagaMiddleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

sagaMiddleware.run(watchFetchDataSaga);

store.subscribe(() => {
  saveState(store.getState());
});
