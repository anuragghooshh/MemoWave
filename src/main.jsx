import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import App from "./components/App.jsx";
import rootReducer from './reducers'
import "papercss/dist/paper.min.css";
import {legacy_createStore as createStore} from 'redux'

const store = createStore(rootReducer);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);