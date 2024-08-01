import filter from "./filters";
import todo from "./todo";
import { combineReducers } from "redux";

export default combineReducers({
  todo,
  filter
});
