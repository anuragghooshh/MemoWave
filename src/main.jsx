import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import App from "./components/App.jsx";
import todo from "./reducers/todo.jsx";
import "./index.css";
import "papercss/dist/paper.min.css";

const store = configureStore({
  reducer: {
    todo,
  },
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);