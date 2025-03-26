import { createStore, applyMiddleware } from "redux";
import axios from "axios";
import axiosMiddleware from "redux-axios-middleware";
import promiseMiddleware from "redux-promise-middleware";
import todoReducer from "./reducers";

const client = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
  responseType: "json",
});

const store = createStore(todoReducer, applyMiddleware(promiseMiddleware, axiosMiddleware(client)));

export default store;
