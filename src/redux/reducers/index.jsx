import { combineReducers } from "redux";
import counterReducer from "./counterReducer";
import postReducer from "./postReducer";

const rootReducer = combineReducers({
  counter: counterReducer,
  posts: postReducer,
});

export default rootReducer;
