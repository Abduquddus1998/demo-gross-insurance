import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { createBrowserHistory } from "history";
import { routerMiddleware } from "connected-react-router";
import { rootReducer } from "reducers";

export const history = createBrowserHistory();

const middleware = [...getDefaultMiddleware(), routerMiddleware(history)];

const store = configureStore({
  reducer: rootReducer(history),
  middleware: middleware,
  devTools: process.env.NODE_ENV !== "production",
});

export default store;
