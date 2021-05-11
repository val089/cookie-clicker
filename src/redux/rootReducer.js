import { combineReducers } from "redux";
import counterReducer from "./redux";

const rootReducer = combineReducers({
  counter: counterReducer
});

export default rootReducer;
