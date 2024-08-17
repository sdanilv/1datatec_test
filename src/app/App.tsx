import React from "react";
import { Provider } from "react-redux";
import { store } from "./store";
import { AppRouter } from "./router";
import "./styles/globals.scss";

export const App = () => (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);
