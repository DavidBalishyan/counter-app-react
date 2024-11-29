import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./store/counterSlice";
import App from "./App";
import "./index.css";

const store = configureStore({
    reducer: {
        counter: counterReducer,
    },
});

ReactDOM.createRoot(document.getElementById("root")).render(
    <Provider store={store}>
        <App />
    </Provider>
);
