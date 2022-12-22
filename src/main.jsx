import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
// Redux
import store from "./store";
import { Provider } from "react-redux";

// Router
import { HashRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <HashRouter>
        <App />
      </HashRouter>
    </Provider>
  </React.StrictMode>
);
