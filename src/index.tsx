import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";

import App from "./App";
import "normalize.css";
import "./index.sass";
import { HashRouter as Router } from "react-router-dom";

import { persistor, store } from "./store";
import { PersistGate } from "redux-persist/integration/react";

const container = document.getElementById("root")!;
const root = createRoot(container);

root.render(
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <Router basename={"/"}>
        <App />
      </Router>
    </PersistGate>
  </Provider>
);
