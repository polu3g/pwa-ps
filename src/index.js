import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import store from "./store/store";
import App from "./App";

// Get the root element
const rootElement = document.getElementById("root");

// Create a root using React 18 API
const root = ReactDOM.createRoot(rootElement);

// Render the App inside the Redux Provider
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
