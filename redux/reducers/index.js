import { combineReducers } from "redux";

import StudentReducer from "./StudentReducer";

const allReducers = combineReducers({
  StudentReducer,
});

export default allReducers;
